import {Component, Input, OnInit} from '@angular/core';
import {IPriority} from '../../interfaces/priority.interface';

@Component({
    selector: 'app-priority-btn',
    templateUrl: './priority-btn.component.html',
    styleUrls: ['./priority-btn.component.scss']
})
export class PriorityBtnComponent implements OnInit {
    @Input() priority: string;
    class: string;
    constructor() {
    }

    ngOnInit() {
        switch (this.priority) {
            case 'Высокий':
                this.class = 'high';
                break;
            case 'Низкий':
                this.class = 'low';
                break;
        }
    }


}
