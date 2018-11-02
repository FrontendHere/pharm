import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-conversation-panel-block',
  templateUrl: './conversation-panel-block.component.html',
  styleUrls: ['./conversation-panel-block.component.scss']
})
export class ConversationPanelBlockComponent implements OnInit, OnChanges {
    @Input() items: any[];
    @Input() tpl: TemplateRef<any>;
    @Input() headerText: string;
    @Input() footerText: string;

    readonly ELEMENTS_PER_PAGE = 3;
    limiter: number = 3;
    otherItemsCount: number = 0;
    visibleItems: any[];

    constructor() { }

    ngOnInit() {
        this.calculateOtherCount();
        this.sliceItems();
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.calculateOtherCount();
        this.sliceItems();
    }

    toggle() {
        this.limiter = this.limiter === this.ELEMENTS_PER_PAGE ? this.items.length : this.ELEMENTS_PER_PAGE;
        this.calculateOtherCount();
        this.sliceItems();
    }

    private sliceItems(): void {
        this.visibleItems = this.items.slice(0, this.limiter);
    }
    private calculateOtherCount(): void {
        this.otherItemsCount = this.items.length - this.limiter;
        if (this.otherItemsCount < 0) {
            this.otherItemsCount = 0;
        }
    }
}
