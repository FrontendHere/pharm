import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../models/employee.entity';

@Component({
  selector: 'app-overlay-employee',
  templateUrl: './overlay-employee.component.html',
  styleUrls: ['./overlay-employee.component.scss']
})
export class OverlayEmployeeComponent implements OnInit {

   @Input()
   employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
