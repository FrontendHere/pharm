import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../../models/project.entity';

@Component({
    selector: 'app-card-project',
    templateUrl: './card-project.component.html',
    styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

    @Input()
    project: Project;

    constructor() {
    }

    ngOnInit() {
    }

}
