import {Component, Input, OnInit} from '@angular/core';
import {MilestoneShort} from '@app/modules/conversations/models/milestone-short';

@Component({
  selector: 'app-milestones-short',
  templateUrl: './milestones-short.component.html',
  styleUrls: ['./milestones-short.component.scss']
})
export class MilestonesShortComponent implements OnInit {

  @Input()
  milestones: MilestoneShort[];

    constructor() { }

  ngOnInit() {
  }

}
