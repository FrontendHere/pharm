import {Component, Input, OnInit} from '@angular/core';
import {Exclude, Expose, plainToClass, Transform, Type} from 'class-transformer';
import {Milestone} from '../../../../models/milestone.entity';
import {MilestoneEvent} from '@app/modules/conversations/services/milestones.service';

@Component({
    selector: 'milestones',
    templateUrl: './milestones.component.html',
    styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent implements OnInit {
    private currentDate: Date = new Date();
    private readonly MAX_EVENT_LENGTH: number = 7;
    @Input() title: string;
    @Input() showCurrentDate: boolean = true;
    @Input() showLegend: boolean = true;
    @Input() events: MilestoneEvent[];
    @Input() noPlanned: boolean = false;
    get milestones(): MilestoneEvent[] {
        if (!this.events || !this.events.length) {
            return [];
        }
        let milestones = this.events
            .sort((a: MilestoneEvent, b: MilestoneEvent) => a.dateStart.getTime() > b.dateStart.getTime() ? 1 : -1);
        milestones[milestones.length - 1].last = true;
        milestones.forEach((event) => {
            if (event.dateStart.getTime() <= new Date().getTime() && new Date().getTime() <= event.dateEnd.getTime()) {
                event.hasCurrentDate = true;
            }
            if (event.dateStart.getTime() > new Date().getTime() && !this.noPlanned) {
                event.planned = true;
            }
        });
        return milestones;
    }

    constructor() {}

    ngOnInit() {
    }

}
