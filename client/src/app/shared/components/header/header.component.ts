import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() public onToggleMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

    public openedMenu: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleMenu() {
        this.openedMenu = !this.openedMenu;
        this.onToggleMenu.emit(this.openedMenu);
    }
}
