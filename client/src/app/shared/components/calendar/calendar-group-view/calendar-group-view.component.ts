import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {
    CalendarCounterpartiesClass,
    CalendarCounterpartiesService
} from '@app/modules/conversations/services/calendar.counterparties.service';
import {Router} from '@angular/router';

@Component({
    selector: 'calendar-group-view',
    styleUrls: ['calendar-group-view.component.scss'],
    templateUrl: 'calendar-group-view.component.html',
    providers: [
        {
            provide: DateAdapter,
            useFactory: adapterFactory,
        }
    ]
})
export class CalendarGroupViewComponent {
    @Input() events: any[];
    @Input() viewDate: Date;
    view: string = 'month';
    @Input()
    locale: string = 'ru';

    @Output()
    viewChange: EventEmitter<string> = new EventEmitter();

    @Output()
    originalViewChange: EventEmitter<string> = new EventEmitter();

    @Output()
    viewDateChange: EventEmitter<Date> = new EventEmitter();

    get groups(): CalendarCounterpartiesClass[] {
        return this.counterpartiesService.counterparties || [];
    }
    constructor(private router: Router, private counterpartiesService: CalendarCounterpartiesService) {}
    public showDrugs(item: CalendarCounterpartiesClass) {
        this.router.navigate(['conversations', 'calendar', 'group', 'drug', item.id])
    }
}
