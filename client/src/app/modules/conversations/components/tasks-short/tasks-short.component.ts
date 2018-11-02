import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'models/task.entity';

@Component({
  selector: 'app-tasks-short',
  templateUrl: './tasks-short.component.html',
  styleUrls: ['./tasks-short.component.scss']
})
export class TasksShortComponent implements OnInit {

  @Input()
  tasks: Task[] = [];
  constructor() { }

  ngOnInit() {
  }

}
