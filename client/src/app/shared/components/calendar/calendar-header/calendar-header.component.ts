import { Component, Input, Output, EventEmitter } from '@angular/core';
import {DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {ActivatedRoute, Router} from '@angular/router';
import {CalendarHeader} from '@app/modules/conversations/pages/conversations-calendar-page/conversations-calendar-page.component';

export enum CalendarViewType {
    day = 'day',
    week = 'week',
    month = 'month',
}

@Component({
    selector: 'calendar-header',
    styleUrls: ['calendar-header.component.scss'],
    templateUrl: 'calendar-header.component.html',
    providers: [
        {
            provide: DateAdapter,
            useFactory: adapterFactory,
        }
    ]
})
export class CalendarHeaderComponent {

    @Input() header: CalendarHeader;

    @Input() view: string;

    @Input()
    viewDate: Date;

    @Input()
    locale: string = 'ru';

    @Output()
    viewChange: EventEmitter<string> = new EventEmitter();

    @Output()
    originalViewChange: EventEmitter<string> = new EventEmitter();

    @Output()
    viewDateChange: EventEmitter<Date> = new EventEmitter();
}
