import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {HeaderComponent} from './components/header/header.component';
import {ShareLayoutComponent} from './layouts/share-layout/share-layout.component';
import {PriorityBtnComponent} from './components/priority-btn/priority-btn.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {PreliminaryPhaseComponent} from '@app/shared/components/preliminary-phase/preliminary-phase.component';
import {LoaderComponent} from '@app/shared/loader/loader.component';
import {MaterialModule} from '@app/material.module';
import {PrimeNgModule} from '@app/primeng.module';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {SearchContentService} from '@app/shared/services/search-content.service';
import {BaseApiService} from '@app/shared/services/BaseApi';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeComponent} from '@app/shared/components/employee/employee.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskComponent } from './components/task/task.component';
import { OverlayEmployeeComponent } from './components/overlay-employee/overlay-employee.component';
import {PipesModule} from '@app/shared/pipes/pipes.module';
import { MeetingComponent } from './components/meeting/meeting.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        MaterialModule.forRoot(),
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNgModule,
        NgxMatSelectSearchModule,
        HttpClientModule
    ],
    exports: [
        ShareLayoutComponent,
        HeaderComponent,
        MainNavComponent,
        EmployeeComponent,
        PreliminaryPhaseComponent,
        PriorityBtnComponent,
        PipesModule,
        NgSelectModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNgModule,
        NgxMatSelectSearchModule,
        MenuComponent,
        TaskComponent,
        HttpClientModule,
        TaskComponent,
        MeetingComponent
    ],
    declarations: [
        // components
        HeaderComponent,
        MainNavComponent,
        EmployeeComponent,
        PreliminaryPhaseComponent,
        PriorityBtnComponent,
        LoaderComponent,
        ShareLayoutComponent,
        TaskComponent,
        OverlayEmployeeComponent,
        MenuComponent,
        MeetingComponent
    ],
    entryComponents: [EmployeeComponent]


})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [SearchContentService, BaseApiService]
        };
    }
}
