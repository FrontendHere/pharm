import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../models/employee.entity';
import {Organization} from '../../../../models/organization.entity';
import {EmployeeViewFormat} from '@app/shared/models/types';
import {MeetingsService} from '../../../modules/conversations/services/meetings.service';

@Component({
    selector: 'meeting-list',
    templateUrl: './meeting-list.component.html',
    styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent {
    @Input() events: any[];
    @Input() title: string;
}
