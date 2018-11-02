import { Injectable } from '@angular/core';
import {IConversationsPanelMeetings} from '../interfaces/conversations-panel-meetings';
import {Observable, of} from 'rxjs';
import ConversationsPanelEvents from '../demodata/conversations-panel-events';

@Injectable({
  providedIn: 'root'
})
export class ConversationPanelEventsService {
    events: IConversationsPanelMeetings[] = ConversationsPanelEvents;

    constructor() { }

    getAll(): Observable<IConversationsPanelMeetings[]> {
        return of(this.events);
    }
}
