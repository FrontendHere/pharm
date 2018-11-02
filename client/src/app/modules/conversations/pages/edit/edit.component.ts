import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("init edit page")
  }

}
