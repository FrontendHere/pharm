import {Component, OnInit} from '@angular/core';
import {IbtnNav} from "@app/shared/interfaces/btn-nav.interface";

@Component({
    selector: 'app-conversation-card-pages-layout',
    templateUrl: './card-pages.component.html',
    styleUrls: ['./card-pages.component.scss']
})
export class CardPagesLayoutComponent implements OnInit {

    MenuItems: IbtnNav[] = [
        {
            routerLink: ['./', 'result'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать результат',
            tooltipPosition: 'bottom',
            name: 'Результат'
        },
        {
            routerLink: ['./', 'calendar'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать календарь встреч',
            tooltipPosition: 'bottom',
            name: 'Календарь встреч'
        },
        {
            routerLink: ['./', 'milestones'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать вехи',
            tooltipPosition: 'bottom',
            name: 'Вехи'
        },
        {
            routerLink: ['./', 'projects'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать проекты',
            tooltipPosition: 'bottom',
            name: 'Проекты'
        },
        {
            routerLink: ['./', 'tasks'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать задачи',
            tooltipPosition: 'bottom',
            name: 'Задачи'
        },
        {
            routerLink: ['./', 'participants'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать Участники',
            tooltipPosition: 'bottom',
            name: 'Участники'
        },
        {
            routerLink: ['./', 'documents'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать Документы',
            tooltipPosition: 'bottom',
            name: 'Документы'
        },
        {
            routerLink: ['./', 'indicators'],
            class: 'conversation-top-controls__link--active',
            tooltip: 'Показать Показатели',
            tooltipPosition: 'bottom',
            name: 'Показатели'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
