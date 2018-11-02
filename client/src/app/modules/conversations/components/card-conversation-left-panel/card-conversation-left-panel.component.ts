import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConversationsService} from "@app/modules/conversations/services/conversations.service";
import {Conversation} from "../../../../../models/conversation.entity";

@Component({
    selector: 'app-card-conversation-left-panel',
    templateUrl: './card-conversation-left-panel.component.html',
    styleUrls: ['./card-conversation-left-panel.component.scss']
})
export class CardConversationLeftPanelComponent implements OnInit {

    private _conversation: Conversation;
    constructor(
        private activateRoute: ActivatedRoute,
        private convService: ConversationsService,
    ) {
    }

    get conversation() {
        return this._conversation;
    }

    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const conversationId: number = +paramMap.get("id");
            if (!Number.isFinite(conversationId)) return;

            this.convService.getConversation(conversationId).subscribe(i => this._conversation = i);
        })

    }

}
