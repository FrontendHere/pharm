import {Component, OnInit} from '@angular/core';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {RadioItem} from '@app/ui-elements/ui-radio-group/ui-radio-group';
import {getAllConversations} from '@app/modules/conversations/models/conversations-grouping';
import {Task} from '../../../../../models/task.entity';
import {Conversation} from '../../../../../models/conversation.entity';
import {MeetingShort} from '@app/modules/conversations/models/meeting-short';
import {MilestoneShort} from '@app/modules/conversations/models/milestone-short';

type currentSideBarView =
    | 'all'
    | 'selected';

@Component({
    selector: 'app-converstions-sidebar',
    templateUrl: './converstions-sidebar.component.html',
    styleUrls: ['./converstions-sidebar.component.scss']
})
export class ConverstionsSidebarComponent implements OnInit {


    readonly _currentView$ = new BehaviorSubject<currentSideBarView>('all');
    readonly views: RadioItem[] = [
        {
            title: 'По всем переговорам',
            selected: true,
            perform: () => {
                this._currentView$.next('all');
            }
        },
        {
            title: 'По выбранным',
            selected: false,
            perform: () => {
                this._currentView$.next('selected');
            }
        }
    ];

    tasks: Task[] = [];
    meetings: MeetingShort[] = [];
    milestones: MilestoneShort[];

    constructor(
        private conversationSerivce: ConversationsService
    ) {
    }

    ngOnInit() {
        this._currentView$.next('all');
        combineLatest(
            this.conversationSerivce.conversations$,
            this.conversationSerivce.selectedConvs$,
            this._currentView$,
            (c, sc, v) =>
                v === 'selected'
                    ? getAllConversations(c).filter(conv => sc.includes(conv.id))
                    : getAllConversations(c)
        ).subscribe((conv: Conversation[]) => {
            this.updateItems(conv);
        });
    }

    private updateItems(conv: Conversation[]): void {
        this.tasks = [];
        this.meetings = [];
        this.milestones = [];
        conv.forEach(e => {
            if (e.tasks) {
                this.tasks.push(...e.tasks);
            }
            if (e.meetings) {
                this.meetings.push(...e.meetings.map(m => ({
                    ...m,
                    conversationName: e.name
                })));
            }
            if (e.milestones) {
                this.milestones.push(...e.milestones.map(m => ({
                    ...m,
                    conversationName: e.name,
                    date: m.dateStart < new Date() ? m.dateStart : m.dateEnd
                })));
            }
        });
    }
}
