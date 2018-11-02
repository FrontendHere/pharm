import {Component, Input} from '@angular/core';

export class ViewDateController {
    private _viewDate: Date = new Date();
    @Input() set viewDate(value: Date) {
        this._viewDate = value;
    }
    get viewDate(): Date {
        return this._viewDate;
    }

    /** Todo move to mixin!!! **/
    private _view: string = 'month';
    @Input() set view(value: string) {
        this._view = value;
    };
    get view(): string {
        return this._view;
    };
}