import {SearchContext} from "@app/shared/DTO/query/searchQuery";
import {Type} from "@angular/core";
import {Observable} from "rxjs";
import {SimpleEntity} from "@app/shared/models/simpleEntity";

export interface AutocompleteInput {
    label: string;
    formControlName: string;
    searchContext?: SearchContext;
    placeholder?: string;
    inputType: 'radio-button' | 'autocomplete' | 'date' | 'text' | 'big-text'
    multi?: {
        component: Type<any> | string,
        inputField?: string
        phrase: string
    }
    style?: {
        labelPostitionClass?: 'top' | 'center' | 'bottom';
        narrow?: boolean;
        background?: boolean;
    }

}

export interface AutocompleteDictionary {
    key: string
    observer: Observable<SimpleEntity[]>
}


export interface AutocompleteList {
    [key: string]: any[]
}