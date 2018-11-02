import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiIconComponent } from '@app/ui-elements/ui-icon/ui-icon';
import { UiVerticalMenuComponent } from '@app/ui-elements/ui-menu/ui-vertical-menu/ui-vertical-menu';
import { RouterModule } from '@angular/router';
import {UiButtonComponent} from '@app/ui-elements/ui-button/ui-button';
import {UiRadioGroup} from '@app/ui-elements/ui-radio-group/ui-radio-group';
import {EfficiencyComponent} from '@app/modules/conversations/components/efficiency/efficiency.component';

export const uiElements: any[] = [
    UiIconComponent,
    UiRadioGroup,
    UiButtonComponent,
    UiVerticalMenuComponent,
    EfficiencyComponent,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        ...uiElements,
    ],
    exports: [
        ...uiElements,
    ]})
export class UiModule { }
