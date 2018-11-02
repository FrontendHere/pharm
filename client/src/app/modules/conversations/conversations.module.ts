import {CommonModule, registerLocaleData} from '@angular/common';
import {NgModule} from '@angular/core';
import {ConversationsRouting} from '@app/modules/conversations/conversations.routing';
import {SharedModule} from '@app/shared/shared.module';
import {ConversationsCardsPageComponent} from '@app/modules/conversations/pages/conversations-cards-page/conversations-cards-page.component';
import {AccordionModule, DialogModule, ScheduleModule, TooltipModule} from 'primeng/primeng';
import {ConversationsCalendarPageComponent} from '@app/modules/conversations/pages/conversations-calendar-page/conversations-calendar-page.component';
import {CardLayoutComponent} from '@app/modules/conversations/layouts/card/card-layout.component';
import {ConversationsMenuComponent} from '@app/modules/conversations/components/conversations-menu/conversations-menu.component';
import {ConversationsTopControlsComponent} from '@app/modules/conversations/components/conversations-top-controls/conversations-top-controls.component';
import {ConversationsCardComponent} from '@app/modules/conversations/components/conversations-card/conversations-card.component';
import {AchievementOfIndicatorsComponent} from '@app/modules/conversations/components/achievement-of-indicators/achievement-of-indicators.component';
import {ConverstionsSidebarComponent} from '@app/modules/conversations/components/converstions-sidebar/converstions-sidebar.component';
import {ConversaionsCalendarDrugsComponent} from '@app/modules/conversations/pages/conversaions-calendar-drugs/conversaions-calendar-drugs.component';
import {ConversationPanelBlockComponent} from '@app/modules/conversations/components/conversation-panel-block/conversation-panel-block.component';
import {ConversationsCalendarModeListComponent} from '@app/modules/conversations/components/conversations-calendar-mode-list/conversations-calendar-mode-list.component';
import {CardConversationLeftPanelComponent} from '@app/modules/conversations/components/card-conversation-left-panel/card-conversation-left-panel.component';
import {ConversationsActionsComponent} from '@app/modules/conversations/components/conversations-actions/conversations-actions.component';
import {ConverationsCalendarMilestonesPageComponent} from '@app/modules/conversations/components/converations-calendar-milestones-page/converations-calendar-milestones-page.component';
import {NewEventPageComponent} from '@app/modules/conversations/pages/new-event-page/new-event-page.component';
import {DuplexProgressBarComponent} from '@app/modules/conversations/components/duplex-progress-bar/duplex-progress-bar.component';
import {TasksPageComponent} from '@app/modules/conversations/pages/tasks-page/tasks-page.component';
import {ConverstaionsFilterModalComponent} from '@app/modules/conversations/modals/converstaions-filter-modal/converstaions-filter-modal.component';
import {CardTopHeaderComponent} from '@app/modules/conversations/components/card-top-header/card-top-header.component';
import {ProjectsPageComponent} from '@app/modules/conversations/pages/projects-page/projects-page.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ConversationsListPageComponent} from '@app/modules/conversations/pages/conversations-list-page/conversations-list-page.component';
import localeRu from '@angular/common/locales/ru';
import {GroupingComponent} from '@app/modules/conversations/components/grouping/grouping.component';
import {GroupingHeaderDirective} from '@app/modules/conversations/Directives/grouping-header.directive';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';
import {ExtendedCalendarModule} from '@app/shared/components/calendar/calendar.module';
import {UiModule} from '@app/ui-elements/ui.module';
import {MeetingsService} from '@app/modules/conversations/services/meetings.service';
import {HttpClientModule} from '@angular/common/http';
import {CalendarCounterpartiesService} from '@app/modules/conversations/services/calendar.counterparties.service';
import {EditPageComponent} from '@app/modules/conversations/pages/edit/edit.component';
import {MainLayoutComponent} from '@app/modules/conversations/layouts/main/main-layout.component';
import {CardPagesLayoutComponent} from '@app/modules/conversations/layouts/card-pages/card-pages.component';
import {CardEditLayoutComponent} from '@app/modules/conversations/layouts/card-edit/card-edit.component';
import {CardHistoryComponent} from '@app/modules/conversations/components/card-history/card-history.component';
import {CardEditStepsComponent} from '@app/modules/conversations/components/card-edit-steps/card-edit-steps.component';
import {BasicPageComponent} from './pages/edit/basic/basic-page.component';
import {ConversationBuilderService} from '@app/modules/conversations/services/conversation-builder.service';
import {InsertComponentToDirective} from '@app/modules/conversations/Directives/insert-component.directive';
import {ConversationResultPageComponent} from '@app/modules/conversations/pages/conversation-result-page/conversation-result-page.component';
import {CalendarUserMeetingsComponent} from '@app/modules/conversations/pages/calendar-user-meetings/calendar-user-meetings.component';
import {ConversationsCalendarViewComponent} from '@app/modules/conversations/pages/conversations-calendar-view/conversations-calendar-view.component';
import {ConversationsIndicatorsViewComponent} from '@app/modules/conversations/pages/conversations-indicators-view/conversations-indicators-view.component';
import {MilestonesService} from '@app/modules/conversations/services/milestones.service';
import {TableIndicatorsComponent} from './components/table-indicators/table-indicators.component';

import {TasksShortComponent} from './components/tasks-short/tasks-short.component';
import {MeetingsShortComponent} from '@app/modules/conversations/components/meetings-short/meetings-short.component';
import {MilestonesShortComponent} from './components/milestones-short/milestones-short.component';
import {MeetingsListComponent} from '@app/modules/conversations/components/meetings-list/meetings-list.component';
import {ConversationsFilesPageComponent} from '@app/modules/conversations/pages/conversations-files-page/conversations-files-page.component';
import {FilesComponent} from '@app/shared/components/files/files.component';
import {FilesService} from '@app/modules/conversations/services/files.service';
import {CardProjectComponent} from '@app/modules/conversations/components/card-project/card-project.component';

registerLocaleData(localeRu);

@NgModule({
    imports: [
        CommonModule,
        ConversationsRouting,
        PerfectScrollbarModule,
        SharedModule,
        /*material modules*/
        /*primeNG modules*/
        TooltipModule,
        DialogModule,
        AccordionModule,
        ScheduleModule,
        ExtendedCalendarModule,
        UiModule,
        HttpClientModule,
    ],
    declarations: [
        // page
        ConversationsCardsPageComponent,
        ConversationsListPageComponent,
        ConversationResultPageComponent,
        EditPageComponent,
        BasicPageComponent,
        ConversationsFilesPageComponent,

        // layouts
        MainLayoutComponent,
        CardLayoutComponent,
        CardPagesLayoutComponent,
        CardEditLayoutComponent,


        // components
        ConversationsMenuComponent,
        ConversationsTopControlsComponent,
        ConversationsCardComponent,
        AchievementOfIndicatorsComponent,
        ConverstionsSidebarComponent,
        ConversationPanelBlockComponent,
        CardConversationLeftPanelComponent,
        ConversationsActionsComponent,
        NewEventPageComponent,
        DuplexProgressBarComponent,
        CardHistoryComponent,
        CardEditStepsComponent,
        ConverationsCalendarMilestonesPageComponent,
        ConversationsCalendarModeListComponent,
        ConversaionsCalendarDrugsComponent,
        CalendarUserMeetingsComponent,
        ConversationsCalendarViewComponent,
        ConversationsIndicatorsViewComponent,
        ConversationsCalendarPageComponent,
        FilesComponent,
        CardProjectComponent,

        // modals
        ConverstaionsFilterModalComponent,
        CardTopHeaderComponent,
        ProjectsPageComponent,
        TasksPageComponent,
        GroupingComponent,
        GroupingHeaderDirective,
        InsertComponentToDirective,
        TasksShortComponent,
        MeetingsShortComponent,
        MilestonesShortComponent,
        TableIndicatorsComponent,
        MeetingsListComponent,
    ],
    providers: [
        ConversationsService,
        MeetingsService,
        CalendarCounterpartiesService,
        ConversationBuilderService,
        MilestonesService,
        FilesService
    ],
    entryComponents: [
        ConverstaionsFilterModalComponent
    ],
})
export class ConversationsModule {
}
