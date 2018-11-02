import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IbtnNav} from '../../../../shared/interfaces/btn-nav.interface';
import {MatDialog} from '@angular/material';
import {ConverstaionsFilterModalComponent} from '@app/modules/conversations/modals/converstaions-filter-modal/converstaions-filter-modal.component';



@Component({
    selector: 'app-conversations-top-controls',
    templateUrl: './conversations-top-controls.component.html',
    styleUrls: ['./conversations-top-controls.component.scss']
})
export class ConversationsTopControlsComponent implements OnInit {
    @Input() isNeedFilter: boolean = false;
    @Input() isNeedToggle: boolean = false;
    @Input() MenuItem: IbtnNav[];
    @Input() MenuBar: any;

    @Output() onOpenMenuBar: EventEmitter<void> = new EventEmitter();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openDialog() {
        this.dialog.open(ConverstaionsFilterModalComponent, {
            width: '900px',
            height: '320px',
            position: {top: '15%'},

        });

    }

    openMenuBar() {
        this.onOpenMenuBar.emit();
    }

}
