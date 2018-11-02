import { Injectable } from '@angular/core';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {Expose, plainToClass, Transform, Type} from 'class-transformer';
import {MeetingsParams} from '@app/modules/conversations/services/meetings.service';
import {Milestone} from '../../../../models/milestone.entity';

export class MilestoneEvent {
    @Transform((value) => value ? value : new Date())
    @Type(() => Date)
    dateStart: Date;
    @Transform((value) => value ? value : new Date())
    @Type(() => Date)
    dateEnd: Date;
    planned: boolean = false;
    name: string;
    last: boolean;
    hasCurrentDate: boolean;
    expired: boolean;
    shiftable: boolean;
    type: string[] = [];
    @Expose({ name: 'childrenMilestones' })
    @Transform((value) => value ? value : [])
    @Type(() => MilestoneEvent)
    childrenMilestones: MilestoneEvent[];
}

export interface TaskParams extends MeetingsParams {}

@Injectable()
export class MilestonesService extends BaseService<Milestone, TaskParams> {
    protected endpoint: string = 'milestones';
    get milestones(): MilestoneEvent[] {
        return plainToClass(MilestoneEvent, this.data);
    }
}
