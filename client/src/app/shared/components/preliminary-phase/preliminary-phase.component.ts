import {Component, Input, OnInit} from '@angular/core';
import {Phase} from "../../../../models/phase.entity";
import {Phases} from "@app/modules/conversations/models/async-constants";

@Component({
    selector: 'app-preliminary-phase',
    templateUrl: './preliminary-phase.component.html',
    styleUrls: ['./preliminary-phase.component.scss']
})
export class PreliminaryPhaseComponent implements OnInit {
    @Input() phase: Phase;
    @Input() needShort: false;

    phases: Phase[] = Phases;


    constructor() {
    }

    ngOnInit() {
        if(!this.phase) return;

        this.phase = this.phases.find(ph => ph.id === this.phase.id);
    }

}
