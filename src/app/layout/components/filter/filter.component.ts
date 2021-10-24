import { SearchType } from './../../models/filter';

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service';
import { IPCService } from 'src/app/services/ipc.service';
import { Constant } from '../../constant/constant';
import { Filter } from '../../models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() data;
  @Output() onFilter = new EventEmitter<any>();

  CUSTOMER_MISSING = Constant.CUSTOMER_MISSING;
  filterOption: any;
  value: any;
  isListView = false;
  cutomerCategory = Constant.CUSTOMER_CATEGORY;
  cutomerCategoryByGender = Constant.CATEGORY_BY_GENDER;
  alphaObj = Constant.CATEGORY_BY_ALPHABET;
  // const customerCategoryByAlphabet = alpha.map((x) => String.fromCharCode(x));
  items = [];
  cart = [];
  filters = new Set();
  filtersList: unknown[];
  customerCategoryByAlphabet = [];
  constructor(
    private dialogService: DialogService,
    public ipcService: IPCService
  ) {
    this.createAlphabetFilterArray();
  }

  ngOnChanges() {
    this.items = this.data;
  }
  ngOnInit(): void {
  
  }

  createAlphabetFilterArray(){
    const ALPHABET_COUNT = 26
    let alpha = Array.from(Array(ALPHABET_COUNT)).map((e, i) => i + 65);
    console.log('alpha', alpha);

    let alphaFilter = alpha.forEach((element) => {
      console.log('object');
      let obj: any = this.alphaObj;
      obj.keys = String.fromCharCode(element);
      this.customerCategoryByAlphabet.push({ ...obj });
    });
    // console.table(this.customerCategoryByAlphabet);
  }
  getSearchText(searchText) {
    console.log(searchText);
    this.filterOption = searchText;
    function getText() {
      return this.filterOption;
    }
  }

  onFilterSelection(value: Filter) {
    // const filterObj : Filter = {
    //   searchOn : value.searchOn,
    //   type : value.type || SearchType.SUBSTRING,
    //   keys : value.keys,
    //   caseSensitve : value?.caseSensitve || false,
    // }
    this.filters.has(value)
      ? this.filters.delete(value)
      : this.filters.add(value);
    this.filtersList = Array.from(this.filters);
  }
  removeFilter(value: Filter) {
    this.filters.has(value) ? this.filters.delete(value) : this.filters;
    this.filtersList = Array.from(this.filters);
  }

  isFilterSelected(value: Filter) {
    return this.filters.has(value) ? true : false;
  }

  onApplyFilter() {
    this.onFilter.emit(this.items);
  }
  onResetFilter() {
    this.filters.clear();
    this.filtersList = null;
  }
}
