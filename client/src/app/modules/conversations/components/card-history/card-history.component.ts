import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-card-history',
    templateUrl: './card-history.component.html',
    styleUrls: ['./card-history.component.scss']
})
export class CardHistoryComponent implements OnInit {

    @Output() public onChangeState: EventEmitter<any> = new EventEmitter();

    data: string[] = new Array(100).fill(Math.random(), 0, 300).map(i => "item - " + i + Math.random() + " string");

    constructor() {
    }

    ngOnInit() {
    }

}
