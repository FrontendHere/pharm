import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import ConversationsPanelMeetings from '../demodata/converstions-panel-meetings';
import {IConversationsPanelMeetings} from '../interfaces/conversations-panel-meetings';

@Injectable({
  providedIn: 'root'
})
export class ConversationPanelMeetingService {
    meetings: IConversationsPanelMeetings[] = ConversationsPanelMeetings;

    constructor() { }

    getAll(): Observable<IConversationsPanelMeetings[]> {
        return of(this.meetings);
    }
}
