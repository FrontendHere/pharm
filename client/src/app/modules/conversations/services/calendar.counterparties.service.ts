import { Injectable } from '@angular/core';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {Exclude, Expose, plainToClass, Transform, Type} from 'class-transformer';
import {Meeting} from '../../../../models/meeting.entity';
import {CalendarEventClass} from '@app/modules/conversations/services/meetings.service';

export class CalendarCounterpartiesClass {
    id: number;
    @Type(() => Date)
    updateDate: Date;
    @Type(() => CalendarEventClass)
    meetings: CalendarEventClass[];
    efficiency: number;
    name: string;
}

export interface CounterpartiesParams {
    limit?: number;
    offset?: number;
    start: Date;
    end: Date;
}

@Injectable()
export class CalendarCounterpartiesService extends BaseService<Meeting, CounterpartiesParams> {
    protected endpoint: string = 'counterparties';
    protected mock: boolean = true;
    get counterparties(): CalendarCounterpartiesClass[] {
        return plainToClass(CalendarCounterpartiesClass, this.data);
    }
}
