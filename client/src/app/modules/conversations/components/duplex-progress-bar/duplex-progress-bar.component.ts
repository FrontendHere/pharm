import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-duplex-progress-bar',
    templateUrl: './duplex-progress-bar.component.html',
    styleUrls: ['./duplex-progress-bar.component.scss'],
})
export class DuplexProgressBarComponent implements OnInit, OnChanges {
    @Input() set planText(value: string) {
        this._planText = value + '';
    }

    @Input() set planPercent(value: number) {
        if (!isNaN(value) && value >= 0) {
            this._planPercent = value;
        } else {
            this._planPercent = null;
        }
    }

    @Input() set factText(value: string) {
        this._factText = value + '';
    }

    @Input() set factPercent(value: number) {
        if (!isNaN(value) && value >= 0) {
            this._factPercent = value;
        } else {
            this._factPercent = null;
        }
    }

    _factPercent: number;
    _factText: string;

    _planPercent: number;
    _planText: string;

    delta: number;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.calcDelta();
    }

    calcDelta() {
        if (this._factPercent != null && this._planPercent != null) {
            this.delta = this._factPercent - this._planPercent;
        } else {
            this.delta = 0;
        }
    }
}
