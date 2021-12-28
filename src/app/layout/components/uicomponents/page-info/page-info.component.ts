import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit ,OnChanges{
  showInfo : boolean = true;
  @Input() pageInfo;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.pageInfo = this.pageInfo
  }

}
