import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ConversationBuilderService} from "@app/modules/conversations/services/conversation-builder.service";

@Component({
    selector: 'app-card-top-header',
    templateUrl: './card-top-header.component.html',
    styleUrls: ['./card-top-header.component.scss']
})
export class CardTopHeaderComponent implements OnInit {

    @Input() public isNew: boolean;
    @Output() public onToggleHistory: EventEmitter<void> = new EventEmitter();

    historyIsOpen: boolean = false;

    headerPhrase: string = 'Резюме переговоров ';

    constructor(
        private cbs: ConversationBuilderService,
        private router: Router
    ) {
    }

    ngOnInit() {
        if(this.isNew) {
            this.headerPhrase = "Карточка переговоров";
        }
    }

    toggleHistory() {
        this.historyIsOpen = !this.historyIsOpen;
        this.onToggleHistory.emit();
    }

    action(type: string) {
        switch (type) {
            case "save":

                this.cbs.save()
                    .subscribe(
                        response => console.log(response),
                        error => console.log(error)
                    );

                break;
            case "cancel":

                //отменить измения

                if (this.isNew) {
                    this.router.navigate(['/conversations', 'cards']);
                    return;
                }
                break;
        }

        console.log(type);
    }

}
