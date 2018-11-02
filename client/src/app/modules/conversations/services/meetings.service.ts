import { Injectable } from '@angular/core';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {Exclude, Expose, plainToClass, Transform, Type} from 'class-transformer';
import {Meeting} from '../../../../models/meeting.entity';

@Exclude()
export class CalendarEventClass {
    id: string;
    @Expose({ name: 'date' })
    @Type(() => Date)
    @Transform((value) => (value ? value : new Date()))
    start: Date;
    @Expose({ name: 'date' })
    @Type(() => Date)
    @Transform((value) => (value ? value : new Date()))
    end: Date;
    @Expose({ name: 'name' })
    title: string;
    @Expose({ name: 'liable' })
    @Transform((value) => (value ? value : 'meet'))
    icon: string;
    allDay: boolean;
    @Expose({ name: 'liable' })
    get meta(): { type: string } {
        return { type: this.icon };
    }
    get week(): number {
        const monthDays = Math.ceil(new Date(this.start.getFullYear(), this.start.getMonth(), 0).getDate()) / 4;
        return Math.ceil(this.start.getDate() / monthDays);
    }
}

export interface MeetingsParams {
    limit?: number;
    offset?: number;
    start: Date;
    end: Date;
}

@Injectable()
export class MeetingsService extends BaseService<Meeting, MeetingsParams> {
    protected endpoint: string = 'meetings';
    // protected mock: boolean = true;
    get meetings(): CalendarEventClass[] {
        return plainToClass(CalendarEventClass, this.data);
    }
}
