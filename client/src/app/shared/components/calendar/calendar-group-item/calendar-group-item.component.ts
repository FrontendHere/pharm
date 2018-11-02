import {Component, Input} from '@angular/core';
import {DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CalendarCounterpartiesClass} from '@app/modules/conversations/services/calendar.counterparties.service';
import {CalendarEventClass} from '@app/modules/conversations/services/meetings.service';

export interface Week {
    name: string
    count: number;
}

@Component({
    selector: 'calendar-group-item',
    styleUrls: ['calendar-group-item.component.scss'],
    templateUrl: 'calendar-group-item.component.html',
    providers: [
        {
            provide: DateAdapter,
            useFactory: adapterFactory,
        }
    ]
})
export class CalendarGroupItemComponent {
    @Input() item: CalendarCounterpartiesClass;
    get weeks(): { [key: number]: Week; } {
        let weekObj: { [key: number]: Week; } = {};
        [1, 2, 3, 4].forEach((key) => {
            let week = this.item.meetings.filter((meeting: CalendarEventClass) => meeting.week === key);
            weekObj[key] = {
                count: week.length,
                name: week.length === 1 ? week.pop().title : `${week.length} Событий`
            }
        });
        return weekObj
    }
}
