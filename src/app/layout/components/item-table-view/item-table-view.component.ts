
import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['select','code','name','description',  'sellingPrice', ];
  
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.sellingPrice + 1}`;
  }
  constructor() { 

  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    // this.item = this.data;
    console.log("data",this.selection.selected)
    
    this.dataSource.data = ELEMENT_DATA

  
  }
}



