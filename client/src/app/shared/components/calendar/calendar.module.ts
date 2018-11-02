import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'calendar-utils/date-adapters/date-fns';
import {UiModule} from '@app/ui-elements/ui.module';
import {CalendarHeaderComponent} from '@app/shared/components/calendar/calendar-header/calendar-header.component';
import {CalendarComponent} from '@app/shared/components/calendar/calendar-component/calendar.component';
import {CalendarGroupViewComponent} from '@app/shared/components/calendar/calendar-group-view/calendar-group-view.component';
import {CalendarGroupItemComponent} from '@app/shared/components/calendar/calendar-group-item/calendar-group-item.component';
import {MilestonesComponent} from '@app/shared/components/milestones/milestones.component';
import {MeetingListComponent} from '@app/shared/components/meeting-list/meeting-list.component';
import {AccordionModule} from 'primeng/primeng';
import {SharedModule} from '@app/shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        AccordionModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        UiModule,
        SharedModule,
    ],
    declarations: [
        CalendarComponent,
        CalendarHeaderComponent,
        CalendarGroupViewComponent,
        CalendarGroupItemComponent,
        MilestonesComponent,
        MeetingListComponent,
    ],
    exports: [
        CalendarComponent,
        CalendarHeaderComponent,
        MilestonesComponent,
    ]
})
export class ExtendedCalendarModule {}
