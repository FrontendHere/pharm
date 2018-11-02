import {ComponentFactoryResolver, Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {GroupingType} from '@app/modules/conversations/models/types';
import {Employee} from '../../../../models/employee.entity';
import {Medicine} from "../../../../models/medicine.entity";
import {EmployeeComponent} from "@app/shared/components/employee/employee.component";
import {Organization} from '../../../../models/organization.entity';

@Directive({
    selector: '[appConversationGroupingHeader]'
})
export class GroupingHeaderDirective implements OnInit {

    @Input()
    groupingType: GroupingType;
    @Input()
    header: string;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef,
                private elementRef: ElementRef,
                private renderer: Renderer2
    ) {
    }

    ngOnInit(): void {
        switch (this.groupingType) {
            case 'leader': {
                const factory = this.componentFactoryResolver.resolveComponentFactory(EmployeeComponent);
                const component = factory.create(this.viewContainerRef.parentInjector);
                const person: Employee = JSON.parse(this.header);
                this.viewContainerRef.insert(component.hostView);
               // this.renderer.addClass((component.hostView as EmbeddedViewRef<any>).rootNodes[0], 'grouping__header');
                (<EmployeeComponent>component.instance).user = person;
                break;
            }
            case 'medicine': {
                const medicine: Medicine = JSON.parse(this.header);
                const element = this.viewContainerRef.element.nativeElement;
                this.renderer.setProperty(element, 'innerText', medicine.name);
                break;
            }
            case 'counterparties': {
                const factory = this.componentFactoryResolver.resolveComponentFactory(EmployeeComponent);
                const counterparty: Organization = JSON.parse(this.header);
                const component = factory.create(this.viewContainerRef.injector);
                this.viewContainerRef.insert(component.hostView);
                // this.renderer.addClass((component.hostView as EmbeddedViewRef<any>).rootNodes[0], 'grouping__header');
                (<EmployeeComponent>component.instance).org = counterparty;
                (<EmployeeComponent>component.instance).direction = 'rtl';
                break;
            }
        }
    }

}
