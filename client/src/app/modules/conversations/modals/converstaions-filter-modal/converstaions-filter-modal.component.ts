import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {GroupingFilter} from '@app/modules/conversations/models/GroupingFilter';
import {ConversationsService} from '@app/modules/conversations/services/conversations.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {debounceTime, distinctUntilChanged, startWith, switchMap} from 'rxjs/operators';
import {SearchContentService} from '@app/shared/services/search-content.service';
import {SimpleEntity} from '@app/shared/models/simpleEntity';

@Component({
    selector: 'app-converstaions-filter-modal',
    templateUrl: './converstaions-filter-modal.component.html',
    styleUrls: ['./converstaions-filter-modal.component.scss']
})
export class ConverstaionsFilterModalComponent implements OnInit, OnDestroy {
    groupingFilter: GroupingFilter;

    searchedProjects: Observable<SimpleEntity[]>;
    searchedCounterparties: Observable<SimpleEntity[]>;
    searchedLeaders: Observable<SimpleEntity[]>;
    searchedMNNS: Observable<SimpleEntity[]>;
    searchedAdministrators: Observable<SimpleEntity[]>;
    searchedSubdivisions: Observable<SimpleEntity[]>;
    searchedMedicines: Observable<SimpleEntity[]>;
    searchedPhases: Observable<SimpleEntity[]>;

    projects = new FormControl('');
    counterparties = new FormControl('');
    leaders = new FormControl('');
    mnns = new FormControl('');
    administrators = new FormControl('');
    subdivisions = new FormControl('');
    medicines = new FormControl('');
    phases = new FormControl('');
    favorite = new FormControl('');
    startDate = new FormControl('');
    finishDate = new FormControl('');

    isVisibleAllFilters: boolean = false;
    filterCommandContent: 'Все фильтры' | 'Скрыть' = 'Все фильтры';

    private defaultFilters: GroupingFilter = {
        grouping: 'none',
        favorite: false,
        leaders: [],
        mnns: [],
        phases: [],
        counterparties: [],
        administrators: [],
        medicines: [],
        projects: [],
        subdivisions: [],
        startDate: new Date('1970-01-01 00:00:00'),
        finishDate: new Date('2970-01-01 00:00:00')
    };

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<ConverstaionsFilterModalComponent>,
        private conversationService: ConversationsService,
        private searchContentService: SearchContentService) {

    }

    ngOnInit() {
        this.groupingFilter = {
            ...this.conversationService.filter,
        };

        this.searchedProjects = this.projects.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('projects', v))
        );
        this.searchedCounterparties = this.counterparties.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('counterparties', v))
        );
        this.searchedLeaders = this.leaders.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('employees', v))
        );
        this.searchedMNNS = this.mnns.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('mnns', v))
        );
        this.searchedAdministrators = this.administrators.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('employees', v))
        );
        this.searchedSubdivisions = this.subdivisions.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('subdivisions', v))
        );
        this.searchedMedicines = this.medicines.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('medicines', v))
        );
        this.searchedPhases = this.phases.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            startWith(''),
            switchMap(v => this.searchContentService.search('phases', v))
        );
    }

    ngOnDestroy() {

    }

    cancel() {
        this.dialogRef.close();
        this.conversationService.load(this.defaultFilters);
    }

    apply(): void {
        this.dialogRef.close();
        this.conversationService.load(this.groupingFilter);
    }

    viewAllFilters(): void {
        this.isVisibleAllFilters = !this.isVisibleAllFilters;
        switch (this.isVisibleAllFilters) {
            case true:
                this.filterCommandContent = 'Скрыть';
                this.dialogRef.updateSize('900px', '410px');
                break;
            case false:
                this.filterCommandContent = 'Все фильтры';
                this.dialogRef.updateSize('900px', '320px');
                break;
        }
    }

}