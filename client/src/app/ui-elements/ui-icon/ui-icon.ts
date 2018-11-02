import { Component, HostBinding, Input } from '@angular/core';
import { BaseElement } from '@app/ui-elements/base.element';

@Component({
  selector: 'ui-icon',
  templateUrl: './ui-icon.html',
  styleUrls: ['./ui-icon.scss']
})
export class UiIconComponent extends BaseElement {

  @Input() name: string;
  @Input() materialIcon: boolean;
  @HostBinding('class') get iconName() {
    return `g-icons g-icons--${this.name}`;
  }

  constructor() {
    super();
  }

}
