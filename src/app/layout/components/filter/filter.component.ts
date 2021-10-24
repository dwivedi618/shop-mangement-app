
import { Customer } from './../../models/customer';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit ,OnChanges{
  @Input() data;
  @Output() onFilter  = new EventEmitter<any>();

  CUSTOMER_MISSING = Constant.CUSTOMER_MISSING
  filterOption: any
  value: any;
  isListView = false;
  cutomerCategory = Constant.CUSTOMER_CATEGORY
  cutomerCategoryByGender = Constant.CATEGORY_BY_GENDER
  cutomerCategoryByAlphabet = Constant.CATEGORY_BY_ALPHABET
  items = [];
  cart = [];
  filters = new Set();
  filtersList: unknown[];
  constructor(
    private dialogService : DialogService,
    public ipcService: IPCService
  ) { }

  ngOnChanges(){
    this.items = this.data;
  }
  ngOnInit(): void {

  }






  getSearchText(searchText) {
    console.log(searchText)
    this.filterOption = searchText
    function getText() {
      return this.filterOption
    }
  }

  onFilterSelection(value : any){
    this.filters.has(value) ? this.filters.delete(value) : this.filters.add(value);
    this.filtersList = Array.from(this.filters);
  }
  removeFilter(value : any){
    this.filters.has(value) ? this.filters.delete(value) : this.filters
    this.filtersList = Array.from(this.filters);
  }

  isFilterSelected(value : any){
    return this.filters.has(value) ? true : false;
  }

  onApplyFilter(){
    this.onFilter.emit(this.items);
  }
  onResetFilter(){
    this.filters.clear();
    this.filtersList = null;
  }
}
