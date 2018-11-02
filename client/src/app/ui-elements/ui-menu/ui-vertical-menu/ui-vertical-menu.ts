import { Component, Input } from '@angular/core';
import { UiMenuComponent } from '@app/ui-elements/ui-menu/ui-menu';
import { MenuItem } from '../../../../utils/interfaces/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-vertical-menu',
  templateUrl: './ui-vertical-menu.html',
  styleUrls: ['./ui-vertical-menu.scss']
})
export class UiVerticalMenuComponent extends UiMenuComponent {

  @Input() items: MenuItem[] = [];

  constructor(private router: Router) {
    super();
  }

  public isActive(item: MenuItem): boolean {
    return (item.link || []).includes(this.router.url);
  }

}
