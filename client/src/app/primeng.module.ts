import {NgModule} from '@angular/core';
import {
    AccordionModule,
    DialogModule,
    MultiSelectModule,
    RadioButtonModule,
    ScheduleModule,
    TooltipModule,
    CheckboxModule, OverlayPanelModule
} from 'primeng/primeng';

const modules = [
    MultiSelectModule,
    RadioButtonModule,
    TooltipModule,
    DialogModule,
    AccordionModule,
    ScheduleModule,
    CheckboxModule,
    OverlayPanelModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class PrimeNgModule {

}
