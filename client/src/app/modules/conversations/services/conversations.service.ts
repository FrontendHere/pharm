import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of,} from 'rxjs';
import {UpdateFavoriteConversations} from '@app/modules/conversations/DTO/comands/update-favorite-conversations';
import {GetFilterGroupingConversations} from '@app/modules/conversations/DTO/queries/get-filter-grouping-conversations';
import {ConversationsGrouping, getAllConversations} from '@app/modules/conversations/models/conversations-grouping';
import {GroupingFilter} from '@app/modules/conversations/models/GroupingFilter';
import {tap} from 'rxjs/operators';
import {BaseApiService} from '@app/shared/services/BaseApi';
import conversations from '@app/shared/demodata/conversations';
import moment = require('moment');
import {Conversation} from '../../../../models/conversation.entity';
import conversationsMock from '@app/mockups/conversationsMock';
import {getConversationPropByGrouping, getGroupingConversation, groupingMock} from '@app/mockups/serverMocks';

//Попробоват заюзать концепцию Store
// export interface ConversationsStore {
//     readonly conversationsGrouping: ConversationsGrouping;
//     readonly selectedConversations: number[];
//     readonly groupingFilter: GroupingFilter;
// }


@Injectable()
export class ConversationsService {

    readonly apiUrl = 'conversations';
    private groupingFilter: GroupingFilter = {
        grouping: 'none',
        favorite: false,
        subdivisions: [],
        medicines: [],
        administrators: [],
        mnns: [],
        phases: [],
        leaders: [],
        projects: [],
        counterparties: [],
        startDate: new Date('1970-01-01 00:00:00'),
        finishDate: new Date('2970-01-01 00:00:00')
    };
    private _selectedConvs: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    private _conversations = new BehaviorSubject<ConversationsGrouping>({
        groupingType: 'none',
        dictionaries: {['none']: []}
    });

    get conversations$(): Observable<ConversationsGrouping> {
        return this._conversations;
    }

    get selectedConvs$(): Observable<number[]> {
        return this._selectedConvs;
    }

    get filter(): GroupingFilter {
        return this.groupingFilter;
    }

    constructor(private api: BaseApiService) {
        this.loadByLastFilter();
    }

    selectConv(id: number): void {
        const selecteds = this._selectedConvs.getValue();
        const index = selecteds.indexOf(id);
        if (index >= 0) {
            selecteds.splice(index, 1);
            this._selectedConvs.next(selecteds);
        } else {
            selecteds.push(id);
            this._selectedConvs.next(selecteds);
        }
    }

    getConversation(id: number): Observable<Conversation> {
        const conversation: Conversation = getAllConversations(this._conversations.getValue()).find(i => i.id === id);
        if (conversation) {
            return of(conversation);
        }

        // запрос в API
        return of(conversationsMock.find(c => c.id === id));
    }

    load(groupingFilter: GroupingFilter): void {
        this.api.post(
            this.apiUrl + '/filtered',
            this.mapGroupingFilterToQuery(groupingFilter)
        ).pipe(tap(_ => {
            this.groupingFilter = groupingFilter;
        }))
            .subscribe(
                (conv: Conversation[]) => {
                    if (groupingFilter.grouping === 'none') {
                        const mockdef: ConversationsGrouping = {
                            groupingType: groupingFilter.grouping,
                            dictionaries: {['']: conversationsMock}
                        };
                        this.groupingFilter = groupingFilter;
                        this._conversations.next(mockdef);
                        return;
                    }
                    const prop = getConversationPropByGrouping(groupingFilter.grouping);
                    const mock: ConversationsGrouping = {
                        groupingType: groupingFilter.grouping,
                        dictionaries: groupingMock(
                            getGroupingConversation(
                                groupingFilter.grouping,
                                conversationsMock),
                            conversationsMock,
                            prop)
                    };
                    this._conversations.next(mock);
                },
            );
    }

    loadByLastFilter(): void {
        this.api.post(
            this.apiUrl + '/filtered',
            this.mapGroupingFilterToQuery(this.groupingFilter)
        ).subscribe(
            (conv: Conversation[]) => {
                const convGrouping: ConversationsGrouping = {
                    groupingType: 'none',
                    dictionaries: {['none']: conversationsMock}
                };
                this._conversations.next(convGrouping);
            },
            error => {
                const convGrouping: ConversationsGrouping = {
                    groupingType: 'none',
                    dictionaries: {['none']: conversationsMock}
                };
                this._conversations.next(convGrouping);
            }
        );

    }

    updateFavorite(command: UpdateFavoriteConversations): void {
        // this.api.post(this.apiUrl, command)
        //     .subscribe(_ => {
        //         const conversationsLocal = this._conversations.getValue();
        //         const conversation =
        //             getAllConversations(conversationsLocal)
        //                 .find(c => c.id === command.conversationsId);
        //         if (conversation) {
        //             conversation.favorite = command.status;
        //         }
        //     });

        const conversationsLocal = this._conversations.getValue();
        const conversation =
            getAllConversations(conversationsLocal)
                .find(c => c.id === command.conversationsId);
        if (conversation) {
            conversation.favorite = command.status;
        }
    }

    isSelected(id: number): boolean {
        const selecteds = this._selectedConvs.getValue();
        return selecteds.includes(id);
    }

    private mapGroupingFilterToQuery(groupingFilter: GroupingFilter): GetFilterGroupingConversations {
        return {
            grouping: groupingFilter.grouping || 'none',
            startDate: moment(groupingFilter.startDate).format('YYYY-MM-DD HH:mm:SS'),
            finishDate: moment(groupingFilter.finishDate).format('YYYY-MM-DD HH:mm:SS'),
            favorite: groupingFilter.favorite || false,
            phase: groupingFilter.phases.map(p => p.id) || [],
            mnns: groupingFilter.mnns.map(m => m.id) || [],
            сounterparties: groupingFilter.counterparties.map(l => l.id) || [],
            leader: groupingFilter.leaders.map(l => l.id) || [],
            administrator: groupingFilter.administrators.map(a => a.id) || [],
            medicine: groupingFilter.medicines.map(m => m.id) || [],
            projects: groupingFilter.projects.map(p => p.id) || [],
            subdivisions: groupingFilter.subdivisions.map(s => s.id) || []
        };
    }
}
