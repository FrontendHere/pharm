import {Component, Input, OnInit} from '@angular/core';
import {Indicator} from '../../../../../models/indicator.entity';

@Component({
  selector: 'app-table-indicators',
  templateUrl: './table-indicators.component.html',
  styleUrls: ['./table-indicators.component.scss']
})
export class TableIndicatorsComponent implements OnInit {

   @Input()
   indicators: Indicator[] = [];

    displayedColumns = ['name'];

  constructor() { }

  ngOnInit() {
  }

}
