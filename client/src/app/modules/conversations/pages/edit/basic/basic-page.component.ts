import {Component, OnInit} from '@angular/core';
import {Phase} from "../../../../../../models/phase.entity";
import {FormGroup} from "@angular/forms";
import {ConversationBuilderService} from "@app/modules/conversations/services/conversation-builder.service";
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {SimpleEntity} from "@app/shared/models/simpleEntity";
import {SearchContentService} from "@app/shared/services/search-content.service";
import {
    AutocompleteDictionary,
    AutocompleteInput,
    AutocompleteList
} from "@app/modules/conversations/models/conversation-builder";
import {Phases} from "@app/modules/conversations/models/async-constants";

@Component({
    selector: 'app-basic-page',
    templateUrl: './basic-page.component.html',
    styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent implements OnInit {

    requiredFields: string[] = ['medicine', 'mnn', 'nosology', 'counterparties'];
    phases: Phase[] = Phases;
    searchItems: AutocompleteDictionary[] = [];

    autocompleteInputs: AutocompleteInput[] = [
        {
            label: 'Стадии',
            formControlName: 'phase',
            searchContext: 'phases',
            inputType: 'radio-button',
            style: {
                labelPostitionClass: 'top'
            }
        },
        {
            label: 'Препарат',
            formControlName: 'medicine',
            searchContext: 'medicines',
            placeholder: 'Начните вводить название препарата',
            inputType: 'autocomplete'
        },
        {
            label: 'Фармсубстанция',
            formControlName: 'mnn',
            searchContext: 'mnns',
            placeholder: 'Начните вводить фармсубстаницию',
            inputType: 'autocomplete'
        },
        {
            label: 'Нозология',
            formControlName: 'nosology',
            searchContext: 'nosologies',
            placeholder: 'Начните вводить нозологию',
            inputType: 'autocomplete'
        },
        {
            label: 'Контрагент',
            formControlName: 'counterparties',
            searchContext: 'counterparties',
            placeholder: 'Начните вводить контрагента',
            inputType: 'autocomplete',
            multi: {
                /*component: EmployeeComponent,
                inputField: 'org',*/
                component: '.',
                phrase: 'Добавить контрагента'
            },
            style: {
                labelPostitionClass: 'top'
            }
        },
        {
            label: 'Целевая схема взаимодействия',
            formControlName: 'interaction_schema',
            searchContext: 'interactionSchemes',
            placeholder: 'Выбрать схему',
            inputType: 'autocomplete',
            multi: {
                component: 'div',
                phrase: 'Добавить схему'
            },
            style: {
                labelPostitionClass: 'top'
            }
        },
        {
            label: 'Ожидаемая дата регистрации',
            formControlName: 'expectedRegisterDate',
            inputType: 'date',
            style: {
                narrow: true,
                background: false
            }
        },
        {
            label: 'Конкуренты',
            formControlName: 'competitors',
            searchContext: 'competitors',
            placeholder: 'Начните вводить конкурента',
            inputType: 'autocomplete',
            style: {
                labelPostitionClass: 'top'
            },
            multi: {
                component: '.',
                phrase: 'Добавить конкурента'
            }
        },
        {
            label: 'Описание',
            formControlName: 'description',
            placeholder: 'Введите описание',
            inputType: 'big-text',
            style: {
                labelPostitionClass: 'top'
            }
        },
    ];

    constructor(
        private csb: ConversationBuilderService,
        private searchService: SearchContentService,

        // TODO нужно отследить изменние роута, если это не дочерний, то неободимо очистить форму в builder`е
        // private route: ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.autocompleteInputs.map(item => {
            this.searchItems.push({
                key: item.formControlName,
                observer: this.formGroup.controls[item.formControlName].valueChanges.pipe(
                    debounceTime(500),
                    distinctUntilChanged(),
                    startWith(''),
                    switchMap(v => {
                        this.csb.isValidRequiredFields(this.requiredFields);

                        if (!item.searchContext) return v;

                        return this.searchService.search(item.searchContext, v);
                    }),
                    map( (values: SimpleEntity[]) => {
                        if(!item.multi) return values;
                        if(!this.checkedList.hasOwnProperty(item.formControlName)) return values;
                        else if (this.checkedList[item.formControlName].length > 0) {

                            return values.filter(i => {
                                return this.checkedList[item.formControlName].filter( chi => chi.id === i.id).length === 0;
                            });
                        }
                        return values;
                    }),
                )
            });
        });

    }


    getDictionary(key: string): Observable<SimpleEntity[]> {
        const item: AutocompleteDictionary = this.searchItems.find(i => i.key === key);
        if (!item) return of([]);

        return item.observer;
    }

    getCheckedListBy(formControlName: string): any[] {
        if(!(formControlName in this.checkedList)) return [];
        return this.checkedList[formControlName];
    }

    displayAutoInput(item: SimpleEntity) {
        return item ? item.name : item;
    }

    addItemIntoList(formControlName: string): void {
        const value = this.formGroup.controls[formControlName].value;
        if(!value) return;
        if (!(formControlName in this.checkedList)) {
            Object.assign(this.checkedList, {[formControlName]: [value]});

        } else {
            const exist: boolean = !!this.checkedList[formControlName].find(i => i.id === value.id);
            if(exist) return;
            const newValue: any[] = [...this.checkedList[formControlName], value];
            this.checkedList[formControlName] = newValue;

        }

        this.formGroup.controls[formControlName].reset();
        this.csb.isValidRequiredFields(this.requiredFields);
    }

    deleteFromList(formControlName: string, item: SimpleEntity) {
        this.checkedList[formControlName] = this.checkedList[formControlName]
            .filter(i => item.id !== i.id);
        this.formGroup.controls[formControlName].setValue(" ");
        this.formGroup.controls[formControlName].setValue("");
        this.csb.isValidRequiredFields(this.requiredFields);
    }

    get formGroup(): FormGroup {
        return this.csb.formOfConversation;
    }

    get checkedList(): AutocompleteList {
        return this.csb.checkedList;
    }

}
