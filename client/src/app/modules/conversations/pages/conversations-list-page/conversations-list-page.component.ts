import {Component, Inject, OnInit} from '@angular/core';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';
import {ConversationsGrouping} from '@app/modules/conversations/models/conversations-grouping';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Component({
    selector: 'app-conversations-list-page',
    templateUrl: './conversations-list-page.component.html',
    styleUrls: ['./conversations-list-page.component.scss']
})
export class ConversationsListPageComponent implements OnInit {
    conversationsGrouping: Observable<ConversationsGrouping>;
    readonly displayedColumns: string[] = ['actions', 'drugname', 'mhh', 'nozology', 'contractor', 'user'];
    columnsToDisplay: string[] = [...this.displayedColumns];

    get groups(): Observable<string[]> {
        return this.conversationsGrouping
            .pipe(
                map((c: ConversationsGrouping) => Object.keys(c.dictionaries)));
    }

    constructor(private conversationsService: ConversationsService) {
    }

    ngOnInit() {
        this.conversationsGrouping =
            this.conversationsService.conversations$
                .pipe(tap((c: ConversationsGrouping) => this.hidingColumns(c)));
    }

    highlight(element: any, event: any): void {
        if ((event.target as HTMLElement).innerText === 'star') {
            return;
        }
        this.conversationsService.selectConv(element.id);
    }

    isSelected(id: number): boolean {
        return this.conversationsService.isSelected(id);
    }

    updateFavorites(element: any): void {
        this.conversationsService
            .updateFavorite({conversationsId: 1, status: !element.favorite});
    }

    private hidingColumns(conversationsGrouping: ConversationsGrouping): void {
        switch (conversationsGrouping.groupingType) {
            case 'leader': {
                this.columnsToDisplay = this.displayedColumns.filter(dc => dc !== 'user');
                break;
            }
            case 'counterparties': {
                this.columnsToDisplay = this.displayedColumns.filter(dc => dc !== 'contractor');
                break;
            }
            case 'medicine': {
                this.columnsToDisplay = this.displayedColumns.filter(dc => dc !== 'drugname');
                break;
            }
            case 'none': {
                this.columnsToDisplay = this.displayedColumns;
                break;
            }
        }
    }
}


