import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from '../../../../../models/meeting.entity';

@Component({
    selector: 'app-meetings-list',
    templateUrl: './meetings-list.component.html',
    styleUrls: ['./meetings-list.component.scss']
})
export class MeetingsListComponent implements OnInit {

    @Input()
    header: string;
    @Input()
    meetings: Meeting[];

    constructor() {
    }

    ngOnInit() {
    }

}
