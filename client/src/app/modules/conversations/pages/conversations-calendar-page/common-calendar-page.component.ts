import {Input} from '@angular/core';
import {CalendarViewType} from '@app/shared/components/calendar/calendar-header/calendar-header.component';
import {CalendarHeader} from '@app/modules/conversations/pages/conversations-calendar-page/conversations-calendar-page.component';

export class CommonCalendarPageComponent {
    header: CalendarHeader;
    locale: string = 'ru';
    private _viewDate: Date = new Date();
    @Input() set viewDate(value: Date) {
        this._viewDate = value;
    }
    get viewDate(): Date {
        return this._viewDate;
    }

    private checkMenuItemType(view: any, value: string) {
        view.selected = view.type instanceof Array
            ? view.type.includes(value)
            : view.type === value;
    }

    private _view: string = 'month';
    private _originalView: string = this._view;
    @Input() set view(value: string) {
        const mappingObject: { [key: string]: CalendarViewType } = {
            'day': CalendarViewType.day,
            week: CalendarViewType.week,
            month: CalendarViewType.month,
            'agent': CalendarViewType.month,
            'nosology': CalendarViewType.month,
            'drug': CalendarViewType.month,
            'schedule': CalendarViewType.month,
            'misc': CalendarViewType.month,
        };
        if (this.header && this.header.center) {
            this.header.center.forEach((view: any) => this.checkMenuItemType(view, value));
        }
        if (this.header && this.header.right) {
            this.header.right.forEach((view: any) => this.checkMenuItemType(view, value));
        }
        this._view = mappingObject[value];
        this.originalView = value;
    };
    get view(): string {
        return this._view;
    };

    set originalView(s: string) {
        this._originalView = s;
    }

    get originalView(): string {
        return this._originalView;
    }
}
