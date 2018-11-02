import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '@app/shared/interfaces/menu-item';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input()
    items: MenuItem[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
