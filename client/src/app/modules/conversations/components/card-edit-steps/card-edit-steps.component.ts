import {Component, OnInit} from '@angular/core';


interface IEditStep {
    title: string;
    route: string;
}

@Component({
    selector: 'app-card-edit-steps',
    templateUrl: './card-edit-steps.component.html',
    styleUrls: ['./card-edit-steps.component.scss']
})
export class CardEditStepsComponent implements OnInit {

    public steps: IEditStep[] = [
        {title: "Основные сведения", route: './'},
        {title: "Добавить показатель", route: 'indicators'},
        {title: "Добавить встречу", route: 'meetings'},
        {title: "Добавить задачу", route: 'tasks'},
        {title: "Обозначить риски", route: 'risks'},
        {title: "Прикрепить документы", route: 'documents'},
        {title: "Добавить вехи", route: 'milestones'},
        {title: "Добавить проект", route: 'projects'},
        {title: "Указать схемы взаимодействия", route: 'interactions'},
        {title: "Добавить участников", route: 'employees'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
