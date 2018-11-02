import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

    data: string[] = new Array(50).fill(Math.random(),0, 300).map(i => "item - " +  i  +  Math.random() +  " string");
  constructor() { }

  ngOnInit() {
  }


}
