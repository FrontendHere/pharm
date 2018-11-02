import {Component, Input, OnInit} from '@angular/core';
import {Indicator} from "../../../../../models/indicator.entity";
import * as moment from 'moment';

@Component({
    selector: 'app-achievement-of-indicators',
    templateUrl: './achievement-of-indicators.component.html',
    styleUrls: ['./achievement-of-indicators.component.scss']
})
export class AchievementOfIndicatorsComponent implements OnInit {

    @Input() public indicators: Indicator[];
    constructor() {
        moment().locale('ru');
    }

    ngOnInit() {
    }

    countAchievements(): number {
        return (this.indicators || []).filter(i => this.isAchievement(i)).length;
    }

    isAchievement(indicator: Indicator) {
        if (
            Number.isFinite(Number.parseFloat(indicator.values.internal)) ||
            Number.isFinite(Number.parseFloat(indicator.values.external))
        ) {
            return (Number.parseFloat(indicator.values.internal) - Number.parseFloat(indicator.values.external)) >= 0;

        } else if (
            typeof indicator.values.internal === 'string' &&
            typeof indicator.values.external === 'string'
        ) {
            return indicator.values.internal.toUpperCase() === indicator.values.external.toUpperCase();
        }
    }

}
