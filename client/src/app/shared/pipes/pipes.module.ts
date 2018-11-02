import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterByPipe} from '@app/shared/pipes/filter-by.pipe';
import {MomentPipe} from '@app/shared/pipes/moment.pipe';
import {NumeralPipe} from '@app/shared/pipes/numeral.pipe';
import {OrderByPipe} from '@app/shared/pipes/order-by.pipe';
import {OverflowDotsPipe} from '@app/shared/pipes/overflow-dots.pipe';
import {AddLineBreakPipe} from '@app/shared/pipes/add-line-break.pipe';
import {PluralPipe} from '@app/shared/pipes/plural.pipe';
import {PhonePipe} from '@app/shared/pipes/phone.pipe';


const pipes = [
    FilterByPipe,
    MomentPipe,
    NumeralPipe,
    OrderByPipe,
    OverflowDotsPipe,
    AddLineBreakPipe,
    PluralPipe,
    PhonePipe
];


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ...pipes
    ],
    declarations: [
        ...pipes
    ]
})
export class PipesModule {
}
