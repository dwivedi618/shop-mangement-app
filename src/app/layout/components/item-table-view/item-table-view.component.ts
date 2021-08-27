
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  description: number;
  sellingPrice: number;
  code: string;
}
// name: 'T-shirt',
//       brand: 'Peter England',
//       sellingPrice: 1199,
//       description: 'Strechable ,cotton febric',
//       code : 'ST2021APR'

const ELEMENT_DATA: PeriodicElement[] = [
  {description: 1, name: 'Hydrogen', sellingPrice: 1.0079, code: 'H'},
  {description: 2, name: 'Helium', sellingPrice: 4.0026, code: 'He'},
  {description: 3, name: 'Lithium', sellingPrice: 6.941, code: 'Li'},
  {description: 4, name: 'Beryllium', sellingPrice: 9.0122, code: 'Be'},
  {description: 5, name: 'Boron', sellingPrice: 10.811, code: 'B'},
  {description: 6, name: 'Carbon', sellingPrice: 12.0107, code: 'C'},
  {description: 7, name: 'Nitrogen', sellingPrice: 14.0067, code: 'N'},
  {description: 8, name: 'Oxygen', sellingPrice: 15.9994, code: 'O'},
  {description: 9, name: 'Fluorine', sellingPrice: 18.9984, code: 'F'},
  {description: 10, name: 'Neon', sellingPrice: 20.1797, code: 'Ne'},
  {description: 3, name: 'Lithium', sellingPrice: 6.941, code: 'Li'},
  {description: 4, name: 'Beryllium', sellingPrice: 9.0122, code: 'Be'},
  {description: 5, name: 'Boron', sellingPrice: 10.811, code: 'B'},
  {description: 6, name: 'Carbon', sellingPrice: 12.0107, code: 'C'},
  {description: 7, name: 'Nitrogen', sellingPrice: 14.0067, code: 'N'},
  {description: 8, name: 'Oxygen', sellingPrice: 15.9994, code: 'O'},
  {description: 9, name: 'Fluorine', sellingPrice: 18.9984, code: 'F'},
  {description: 10, name: 'Neon', sellingPrice: 20.1797, code: 'Ne'},
];
@Component({
  selector: 'app-item-table-view',
  templateUrl: './item-table-view.component.html',
  styleUrls: ['./item-table-view.component.scss']
})
export class ItemTableViewComponent implements OnInit {
  @Input() data;
  item = {};
  displayedColumns: string[] = ['code','name','description',  'sellingPrice', ];
  dataSource = ELEMENT_DATA;
  constructor() { 

  }
  ngOnInit(): void {
    this.item = this.data;
    console.log("data",this.data)
  }
}



