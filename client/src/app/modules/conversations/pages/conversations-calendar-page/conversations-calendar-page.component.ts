import {Component, HostBinding, Input} from '@angular/core';
import {CalendarEventClass, MeetingsService} from '@app/modules/conversations/services/meetings.service';
import {CalendarCounterpartiesService} from '@app/modules/conversations/services/calendar.counterparties.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonCalendarPageComponent} from '@app/modules/conversations/pages/conversations-calendar-page/common-calendar-page.component';
import {MilestoneEvent, MilestonesService} from '@app/modules/conversations/services/milestones.service';

export interface CalendarHeaderItem {
    title: string;
    type?: string;
    selected: boolean;
    perform: Function;
}

export interface CalendarHeader {
    left?: CalendarHeaderItem[];
    center?: CalendarHeaderItem[];
    right?: CalendarHeaderItem[];
}

@Component({
    selector: 'app-conversations-calendar-page',
    templateUrl: './conversations-calendar-page.component.html',
    styleUrls: ['./conversations-calendar-page.component.scss']
})
export class ConversationsCalendarPageComponent extends CommonCalendarPageComponent {

    public header: CalendarHeader = <CalendarHeader>{
        center: [
            {
                title: 'День',
                type: 'day',
                selected: false,
                perform: async () => {
                    this.view = 'day';
                }
            },
            {
                title: 'Неделя',
                type: 'week',
                selected: true,
                perform: async () => {
                    this.view = 'week';
                }
            },
            {
                title: 'Месяц по дням',
                type: 'month',
                selected: false,
                perform: async () => {
                    this.view = 'month';
                }
            },
            {
                title: 'Месяц по неделям',
                type: ['agent', 'drug'],
                selected: false,
                perform: async () => {
                    this.view = 'agent';
                }
            },
        ],
        right: [
            {
                title: 'Вехи',
                type: ['misc'],
                selected: false,
                perform: async () => {
                    this.view = 'misc';
                }
            },
            {
                title: 'Встречи',
                type: ['day', 'week', 'month', 'agent'],
                selected: true,
                perform: () => {
                    this.view = 'month';
                }
            },
            {
                title: 'Задачи',
                selected: false,
                perform: () => {
                    this.view = 'tasks';
                }
            },
        ]
    }

    /** Working path **/
    get events(): CalendarEventClass[] {
        return this.meetingsService.meetings;
    }
    get milestones(): MilestoneEvent[] {
        return this.milestonesService.milestones;
    }

    @HostBinding('class.loading') get loading(): boolean {
        return this.meetingsService.loading || this.counterpartiesService.loading;
    }

    constructor(private route: ActivatedRoute,
                private router: Router,
                private meetingsService: MeetingsService,
                private milestonesService: MilestonesService,
                private counterpartiesService: CalendarCounterpartiesService) {
        super();
    }

    ngOnInit() {
        this.meetingsService.get();
        this.milestonesService.get();
        this.counterpartiesService.get();
    }
}
