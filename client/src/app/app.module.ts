import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRouting} from './app.routing';


import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/primeng';
import {ConversationsModule} from './modules/conversations/conversations.module';
import {UsersService} from './shared/services/users.service';
import {ConversationPanelTaskService} from './shared/services/conversation-panel-task.service';
import {ConversationPanelMeetingService} from './shared/services/conversation-panel-meeting.service';
import {ConversationPanelEventsService} from './shared/services/conversation-panel-events.service';
import moment = require('moment');

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        // layouts
        // components
        ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DialogModule,
        SharedModule.forRoot(),
        ConversationsModule,
        AppRouting
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        UsersService,
        ConversationPanelTaskService,
        ConversationPanelMeetingService,
        ConversationPanelEventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        moment.locale('ru');
    }
}

