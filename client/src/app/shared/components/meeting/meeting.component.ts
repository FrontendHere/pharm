import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from '../../../../models/meeting.entity';

@Component({
    selector: 'app-meeting',
    templateUrl: './meeting.component.html',
    styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

    @Input()
    meeting: Meeting;

    completedAll: boolean;

    constructor() {
    }

    ngOnInit() {
        this.completedAll = this.meeting.tasks.reduce((acc, t) => acc && t.isComplete, true);
    }

}
