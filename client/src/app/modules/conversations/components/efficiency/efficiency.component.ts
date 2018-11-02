import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-efficiency',
  templateUrl: './efficiency.component.html',
  styleUrls: ['./efficiency.component.scss']
})
export class EfficiencyComponent implements OnInit {
    @Input() count: number;

    constructor() { }

    ngOnInit() {

    }

    getClass(count: number) {
        if (count >= 71) {
            return "efficiency__text--high";
        } else if (count > 50 && count < 71) {
            return "efficiency__text--medium";
        } else {
            return "efficiency__text--low";
        }
    }

}
