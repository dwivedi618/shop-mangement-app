import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-model',
  templateUrl: './selection-model.component.html',
  styleUrls: ['./selection-model.component.scss']
})
export class SelectionModelComponent implements OnInit {
  items = [
    { name : 'product'},
    { name : 'product'},
    { name : 'product'},
    { name : 'product'},
    { name : 'product'},
    { name : 'product'},

 ]
  constructor() { }

  ngOnInit(): void {
  }

}
