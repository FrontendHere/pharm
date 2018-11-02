import { Injectable } from '@angular/core';
import {BaseService} from '@app/modules/conversations/services/base.service';
import {Exclude, Expose, plainToClass, Transform} from 'class-transformer';
import {CalendarEventClass, MeetingsParams} from '@app/modules/conversations/services/meetings.service';
import {Task} from '../../../../models/task.entity';

@Exclude()
export class TaskEvent extends CalendarEventClass {
    @Expose({ name: 'liable' })
    @Transform((value) => (value ? value : 'task'))
    icon: string;
}

export interface TaskParams extends MeetingsParams {}

@Injectable()
export class TasksService extends BaseService<Task, TaskParams> {
    protected endpoint: string = 'tasks';
    get tasks(): TaskEvent[] {
        return plainToClass(TaskEvent, this.data);
    }
}
