import {Component, Input, OnInit} from '@angular/core';
import {ConversationAccent, Conversation} from "../../../../../models/conversation.entity";
import {Router} from "@angular/router";
import {ConversationsService} from "@app/modules/conversations/services/conversations.service";

@Component({
    selector: 'app-conversations-card',
    templateUrl: './conversations-card.component.html',
    styleUrls: ['./conversations-card.component.scss']
})
export class ConversationsCardComponent implements OnInit {
    @Input() item = {} as Conversation;

    private _selected: number[] = [];

    constructor(
        private router: Router,
        private convService: ConversationsService
    ) {
    }

    ngOnInit() {
        this.convService.selectedConvs$.subscribe(items => this._selected = items);
    }

    accentIs(accent: string): boolean {
        if(!this.item.conversation_type) return false;
        return ConversationAccent[accent.toUpperCase()] === this.item.conversation_type.id;
    }

    parentIs(el: HTMLElement, className: string) {
        return el.parentElement.className.includes(className);
    }

    countTasksOverdue(): number {
        return (this.item.tasks || []).filter(i => i.deadline < new Date()).length;
    }

    isSelected(): boolean {
        return this._selected.includes(this.item.id);
    }

    selectItem(e: HTMLElement) {
        const skipClasses: string[] = ['favorite', 'actions'];

        if (skipClasses.filter( c => this.parentIs(e, c)).length) {
            return;
        }
        this.convService.selectConv(this.item.id);
    }

    updateFavorite(e: HTMLElement) {
        if (!this.parentIs(e, 'favorite')) {
            return;
        }
        this.convService
            .updateFavorite({conversationsId: this.item.id, status: !this.item.favorite});
    }


    handleCreate(el: any, typeAction: string): void {
        switch (typeAction) {
            case "conversation":
                break;
            case "meeting":
                break;
            case "task":
                break;
            case "attachment":
                break;
            case "report":
                break;
            default:
                return;
        }
    }

}
