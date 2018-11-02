import {Component, Input, OnInit} from '@angular/core';
import {MeetingShort} from '@app/modules/conversations/models/meeting-short';

@Component({
    selector: 'app-meetings-short',
    templateUrl: './meetings-short.component.html',
    styleUrls: ['./meetings-short.component.scss']
})
export class MeetingsShortComponent implements OnInit {

    @Input()
    meetings: MeetingShort[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
