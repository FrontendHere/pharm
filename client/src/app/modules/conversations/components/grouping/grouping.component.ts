import {Component, Input, OnInit} from '@angular/core';
import {GroupingType} from '@app/modules/conversations/models/types';

@Component({
  selector: 'app-conversation-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit {

  @Input()
  groupingType: GroupingType;
  @Input()
  header: string;

  constructor() { }

  ngOnInit() {
  }

}
