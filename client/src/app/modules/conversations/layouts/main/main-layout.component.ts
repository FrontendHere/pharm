import {Component, OnInit} from '@angular/core';
import {IbtnNav} from '../../../../shared/interfaces/btn-nav.interface';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';


@Component({
    selector: 'app-conversations-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
    MenuItems: IbtnNav[] = [
        {
            routerLink: ['cards'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать выбранные переговоры как карточки',
            tooltipPosition: 'top',
            name: 'Карточки'
        },
        {
            routerLink: ['list'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать выбранные переговоры в списке',
            tooltipPosition: 'top',
            name: 'Список'
        },
        {
            routerLink: ['calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать выбранные переговоры в календаре',
            tooltipPosition: 'top',
            name: 'Календарь'
        },
    ];

    constructor(private _conversationsService: ConversationsService) {
    }

    ngOnInit() {
        this._conversationsService.loadByLastFilter();
    }

}
