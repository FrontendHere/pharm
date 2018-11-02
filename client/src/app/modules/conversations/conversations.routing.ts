import {RouterModule, Routes} from '@angular/router';
import {ConversationsCardsPageComponent} from './pages/conversations-cards-page/conversations-cards-page.component';
import {ConversationsListPageComponent} from './pages/conversations-list-page/conversations-list-page.component';
import {ConversationsCalendarPageComponent} from './pages/conversations-calendar-page/conversations-calendar-page.component';
import {NgModule} from '@angular/core';
import {NewEventPageComponent} from './pages/new-event-page/new-event-page.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {TasksPageComponent} from './pages/tasks-page/tasks-page.component';
import {MainLayoutComponent} from '@app/modules/conversations/layouts/main/main-layout.component';
import {CardLayoutComponent} from "@app/modules/conversations/layouts/card/card-layout.component";
import {CardPagesLayoutComponent} from "@app/modules/conversations/layouts/card-pages/card-pages.component";
import {CardEditLayoutComponent} from "@app/modules/conversations/layouts/card-edit/card-edit.component";
import {CalendarComponent} from '@app/shared/components/calendar/calendar-component/calendar.component';
import {BasicPageComponent} from "@app/modules/conversations/pages/edit/basic/basic-page.component";
import {ConversationResultPageComponent} from '@app/modules/conversations/pages/conversation-result-page/conversation-result-page.component';
import {ConversationsCalendarViewComponent} from '@app/modules/conversations/pages/conversations-calendar-view/conversations-calendar-view.component';
import {ConversationsIndicatorsViewComponent} from '@app/modules/conversations/pages/conversations-indicators-view/conversations-indicators-view.component';
import {ConversationsFilesPageComponent} from '@app/modules/conversations/pages/conversations-files-page/conversations-files-page.component';

const Routes: Routes = [
    {
        path: 'card/:id', component: CardLayoutComponent, children: [
            {
                path: '', component: CardPagesLayoutComponent, children: [
                    {path: '', component: ConversationResultPageComponent},
                    { path: 'calendar', component: ConversationsCalendarViewComponent },
                    { path: 'files', component: ConversationsFilesPageComponent },
                    {path: 'projects', component: ProjectsPageComponent},
                    /*{path: 'milestones', component: ConversationCardPageComponent},
                    {path: 'tasks', component: ConversationCardPageComponent},
                    {path: 'employees', component: ConversationCardPageComponent},
                    {path: 'documents', component: ConversationCardPageComponent},*/
                    {path: 'indicators', component: ConversationsIndicatorsViewComponent}
                ]
            },
            {
                path: 'edit', component: CardEditLayoutComponent, children: [
                    {path: '', component: TasksPageComponent},
                    {path: 'tasks', component: TasksPageComponent}
                ]
            },
        ]
    },
    {
        path: 'new', component: CardLayoutComponent, data: { isNew: true }, children: [
            {
                path: '', component: CardEditLayoutComponent, children: [
                    {path: '', component: BasicPageComponent},
                    {path: 'tasks', component: TasksPageComponent}
                ]
            },
        ]
    },
    {
        path: 'conversations', component: MainLayoutComponent,
        children: [
            {path: '', redirectTo: 'cards', pathMatch: 'full'},
            {path: 'cards', component: ConversationsCardsPageComponent},
            {path: 'projects', component: ProjectsPageComponent},
            {path: 'new-event', component: NewEventPageComponent},
            {path: 'list', component: ConversationsListPageComponent},
            {
                path: 'calendar', component: ConversationsCalendarPageComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'type/month',
                        pathMatch: 'full'
                    },
                    {
                        path: 'type/:type',
                        component: CalendarComponent
                    },
                    {
                        path: 'group/:type',
                        component: CalendarComponent,
                    },
                    {
                        path: 'group/:type/:id',
                        component: CalendarComponent,
                    },
                    {
                        path: 'misc',
                        component: CalendarComponent,
                    },
                    // {
                    //     path: 'tasks',
                    //     component: ConversationsCalendarTasksComponent,
                    // },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
})

export class ConversationsRouting {
}
