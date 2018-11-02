import { Component, OnInit } from '@angular/core';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';
import {ConversationsGrouping} from '@app/modules/conversations/models/conversations-grouping';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-conversations-cards-page',
  templateUrl: './conversations-cards-page.component.html',
  styleUrls: ['./conversations-cards-page.component.scss']
})
export class ConversationsCardsPageComponent implements OnInit {

    conversationsGrouping: Observable<ConversationsGrouping>;

    constructor(private _conversationsService: ConversationsService) {
    }

    get groups(): Observable<string[]> {
        return this.conversationsGrouping
            .pipe(map((c: ConversationsGrouping) => Object.keys(c.dictionaries)));
    }

    ngOnInit() {
        this.conversationsGrouping =  this._conversationsService.conversations$;
    }

}
