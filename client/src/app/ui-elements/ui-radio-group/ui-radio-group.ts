import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { BaseElement } from '../base.element';

export interface RadioItem {
    title: string;
    selected: boolean;
    perform: Function;
}

@Component({
  selector: 'ui-radio-group',
  templateUrl: './ui-radio-group.html',
  styleUrls: ['./ui-radio-group.scss']
})
export class UiRadioGroup extends BaseElement {
    @Input() items: RadioItem[];
    @ViewChild('RadioButtonFlat') radioButtonFlat: ElementRef;

    selectedTemplate: ElementRef = this.radioButtonFlat;
    checkItem(selected: RadioItem) {
        this.items.forEach((item: RadioItem) => {
            item.selected = false;
        });
        selected.selected = true;
        selected.perform();
    }

    constructor() {
        super();
        this.selectedTemplate = this.radioButtonFlat;
    }
}
