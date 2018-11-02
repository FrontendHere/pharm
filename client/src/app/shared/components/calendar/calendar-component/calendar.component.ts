import {Component, HostBinding, Input} from '@angular/core';
import {Observable, Subject} from 'rxjs/index';
import {CalendarDateFormatter} from 'angular-calendar';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import {RuDateFormatter} from '@app/shared/components/calendar/ru-date-formater.provider';
import {ActivatedRoute} from '@angular/router';
import {CalendarEventClass, MeetingsService} from '@app/modules/conversations/services/meetings.service';
import {CalendarCounterpartiesService} from '@app/modules/conversations/services/calendar.counterparties.service';
import {Milestone} from '../../../../../models/milestone.entity';
import {plainToClass} from 'class-transformer';
import {CalendarHeader} from '@app/modules/conversations/pages/conversations-calendar-page/conversations-calendar-page.component';
import {MilestoneEvent} from '@app/modules/conversations/services/milestones.service';

export interface CalendarMonthViewDayExtended extends CalendarMonthViewDay {
    active: boolean;
}

@Component({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: RuDateFormatter
        }
    ]
})
export class CalendarComponent {
    @Input() originalView: string;
    @Input() header: CalendarHeader;
    @Input() milestonesTitle: string = '';
    @Input() milestones: MilestoneEvent[];
    @Input() public viewDate: Date = new Date();
    @Input() public view: string = 'month';
    @Input() locale: string = 'ru';
    _events: CalendarEventClass[] = [];
    @Input() set events(value: CalendarEventClass[]) {
        this._events = value;
    };
    get events(): CalendarEventClass[] {
        return this._events;
    }
    config: any = {
        showBadges: true
    };
    private refresh: Subject<any> = new Subject();
    private selectedDay: {day: CalendarMonthViewDayExtended};

    private minimalEvents: Milestone[] = [
        {
            dateStart: '06.10.2018',
            dateEnd: '07.22.2018',
        },
        {
            dateStart: '07.22.2018',
            dateEnd: '09.01.2018',
        },
        {
            dateStart: '09.01.2018',
            dateEnd: '11.10.2018'
        }
    ].map(event => plainToClass(Milestone, event));

    private maxEvents: Milestone[] = [
        {
            dateStart: '06.10.2018',
            dateEnd: '07.22.2018',
            name: 'Подписание соглашения о намерениях',
            childrenMilestones: []
        },
        {
            dateStart: '07.22.2018',
            dateEnd: '09.01.2018',
            name: 'Юридическое оформление',
            childrenMilestones: []
        },
        {
            dateStart: '09.01.2018',
            dateEnd: '11.10.2018',
            name: 'Включение препарата в списки',
            childrenMilestones: [{
                dateStart: '02.10.2018',
                name: 'Внесение изменений',
            }]
        },
        {
            dateStart: '11.10.2018',
            dateEnd: '12.08.2018',
            name: 'Регистрация препарата',
            childrenMilestones: [],
            shiftable: true
        },
        {
            dateStart: '12.08.2018',
            dateEnd: '12.08.2018',
            childrenMilestones: []
        }
    ].map(event => plainToClass(Milestone, event));

    // constructor(private route: ActivatedRoute, private meetingsService: MeetingsService, private counterpartiesService: CalendarCounterpartiesService) {
    //     if (this.route.params['value']['type']) {
    //         this.view = this.route.params['value']['type'];
    //         if (['agent', 'misc'].includes(this.route.params['value']['type'])) {
    //             this.config.showBadges = false;
    //         }
    //     }
    // }

    private cellActions = {
        highlight: (cell: CalendarMonthViewDayExtended) => {
            if (this.selectedDay && this.selectedDay.day.date.getTime() === cell.date.getTime()) {
                cell.backgroundColor = 'enable highlight';
            } else {
                cell.backgroundColor = null;
            }
        },
        group: (cell: CalendarMonthViewDayExtended) => {
            const groups: any = {};
            cell.events.forEach((event: CalendarEvent<{ type: string }>) => {
                groups[event.meta.type] = groups[event.meta.type] || [];
                groups[event.meta.type].push(event);
            });
            cell['eventGroups'] = Object.entries(groups);
        },
    }

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDayExtended[] }): void {
        body.forEach((cell: CalendarMonthViewDayExtended) => {
            Object.keys(this.cellActions).forEach((key: string) => {
                const action = this.cellActions[key];
                action(cell);
            });
        });
    }

    handleDayClicked(cell: any) {
        this.selectedDay = cell;
        this.refresh.next();
    }

}
