import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from '@app/shared/interfaces/menu-item';

@Component({
    selector: 'app-conversations-menu',
    templateUrl: './conversations-menu.component.html',
    styleUrls: ['./conversations-menu.component.scss']
})
export class ConversationsMenuComponent implements OnInit {

    @Output() public onToggleMenubar: EventEmitter<void> = new EventEmitter();

    views: MenuItem[] = [
        {
            textLeft: 'Избранное',
            textRight: '8',
        },
        {
            textLeft: 'Избранное',
            textRight: '8',
        },
        {
            textLeft: 'Избранное',
            textRight: '8',
        },
        {
            textLeft: 'Избранное',
            textRight: '8',
        },
    ];
    constructor() {
    }

    ngOnInit() {
    }

    toggleMenuBar() {
        this.onToggleMenubar.emit();
    }

}
