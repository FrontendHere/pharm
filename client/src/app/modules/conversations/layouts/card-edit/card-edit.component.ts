import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-conversation-card-edit-layout',
    templateUrl: './card-edit.component.html',
    styleUrls: ['./card-edit.component.scss']
})
export class CardEditLayoutComponent implements OnInit {

    public isNew: boolean = false;

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.subscribe(d => {
            if(d.isNew) {
                this.isNew = d.isNew
            }
        });
    }

}
