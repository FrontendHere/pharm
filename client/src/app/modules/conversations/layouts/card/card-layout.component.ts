import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConversationBuilderService} from "@app/modules/conversations/services/conversation-builder.service";
import {ConversationsService} from "@app/modules/conversations/services/conversations.service";
import {Conversation} from "../../../../../models/conversation.entity";


@Component({
    selector: 'app-conversation-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {

    public isNew: boolean = false;
    constructor(
        private route: ActivatedRoute,
        private csb: ConversationBuilderService,
        private cs: ConversationsService
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(p => {

            if(p.has('id')) {
                this.cs.getConversation(+p.get('id')).subscribe((c: Conversation) => {

                    this.csb.editableConversation = c;
                })
            }
        });

        this.route.data.subscribe(d => {
            if(d.isNew) {
                this.isNew = d.isNew
            }
        });
    }

}
