import {Component, HostBinding, Input} from '@angular/core';
import {CALENDAR_EVENTS} from '@app/mockups/calendarEvents';
import {CalendarEventClass, MeetingsService} from '@app/modules/conversations/services/meetings.service';
import {CalendarCounterpartiesService} from '@app/modules/conversations/services/calendar.counterparties.service';
import {ActivatedRoute} from '@angular/router';
import {CommonCalendarPageComponent} from '@app/modules/conversations/pages/conversations-calendar-page/common-calendar-page.component';
import {CalendarHeader} from '@app/modules/conversations/pages/conversations-calendar-page/conversations-calendar-page.component';
import {MilestoneEvent, MilestonesService} from '@app/modules/conversations/services/milestones.service';
import {Milestone} from '../../../../../models/milestone.entity';

@Component({
    selector: 'app-conversations-calendar-view',
    templateUrl: './conversations-calendar-view.component.html',
    styleUrls: ['./conversations-calendar-view.component.scss']
})
export class ConversationsCalendarViewComponent extends CommonCalendarPageComponent {

    header: CalendarHeader = <CalendarHeader>{
        center: [
            {
                title: 'Расписание',
                type: 'schedule',
                selected: false,
                perform: async () => {
                    this.view = 'schedule';
                }
            },
            {
                title: 'Неделя',
                type: 'week',
                selected: false,
                perform: async () => {
                    this.view = 'week';
                }
            },
            {
                title: 'Месяц по дням',
                type: 'month',
                selected: true,
                perform: async () => {
                    this.view = 'month';
                }
            }
        ]
    }

    /** Working path **/
    get events(): CalendarEventClass[] {
        return this.meetingsService.meetings;
    }
    @HostBinding('class.loading') get loading(): boolean {
        return this.meetingsService.loading
            || this.counterpartiesService.loading;
    }
    constructor(private route: ActivatedRoute,
                private meetingsService: MeetingsService,
                private counterpartiesService: CalendarCounterpartiesService) {
        super();
    }

    ngOnInit() {
        this.meetingsService.get();
        this.counterpartiesService.get();
    }
}
