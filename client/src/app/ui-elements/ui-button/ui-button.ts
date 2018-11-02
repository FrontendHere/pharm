import { Component, HostBinding, Input } from '@angular/core';
import { BaseElement } from '@app/ui-elements/base.element';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.html',
  styleUrls: ['./ui-button.scss']
})
export class UiButtonComponent extends BaseElement {

  @Input() name: string;
  @Input() materialButton: boolean;
  @Input() caption: string;
  @HostBinding('class') get buttonName() {
    return `g-button__item g-button__item--${this.name}`;
  }

  constructor() {
    super();
  }

}
