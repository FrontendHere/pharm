import {
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    Input,
    OnInit,
    Renderer2, Type,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[appInsertComponentTo]'
})
export class InsertComponentToDirective implements OnInit {

    @Input() component:  Type<any> | string;
    @Input() value: any;
    @Input() field: string;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef,
                private elementRef: ElementRef,
                private renderer: Renderer2
    ) {
    }

    ngOnInit(): void {
        if(typeof this.component === 'function') {
            const
                factory = this.componentFactoryResolver.resolveComponentFactory(this.component),
                component = factory.create(this.viewContainerRef.parentInjector);

            this.viewContainerRef.insert(component.hostView);
            (component.instance)[this.field] = this.value;

        } else {
            const element = this.viewContainerRef.element.nativeElement,
                text = typeof this.value === 'string'? this.value : this.value.hasOwnProperty('name') ? this.value.name : '-';
            this.renderer.setProperty(element, 'innerText', text);
        }
    }

}
