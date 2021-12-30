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
import { BrandList } from 'src/app/fakedata/brands';
import { DefinedCategory } from 'src/app/fakedata/categories';
import { DefinedColors } from 'src/app/fakedata/colors';
import { DefinedSizes } from 'src/app/fakedata/sizes';
import { ActivatedPathService } from 'src/app/services/activated-path.service';
import { FilterService } from 'src/app/services/filter.service';

interface  Category extends DefinedCategory {
  searchOn?: string;
  type ?: string,
  keys ?: string|[]|Number,
  caseSensitve ?: Boolean,
} 
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
  filterConfig = Constant.FILTER_CONFIG.product
  ALL_FILTERS = Constant.ALL_FILTERS

  
  brands = BrandList.allbrands
  sizes = DefinedSizes.all
  colors = DefinedColors.all
  categories = DefinedCategory.all
  items = [];
  cart = [];
  filters = new Map();
  filtersList: any[] = [];
  customerCategoryByAlphabet = [];
  searchText : string | [] | Map<string,Set<string>> = '';
  searchPlaceholder='Search Brand'
  // categories: any;
  // brands: any;
  // sizes: any;
  // colors: any;
  previousPath: undefined;
  currentPath: undefined;
  beforeCurrentPath: any;
  productFilter: { filterOn: string; availableFilter: string[]; };
  constructor(
    private dialogService: DialogService,
    public ipcService: IPCService,
    private activatedPathService : ActivatedPathService,
    private filterService : FilterService
  ) {
    this.createAlphabetFilterArray();
  }

  ngOnChanges() {
    this.items = this.data;
  }
  ngOnInit(): void {

    // console.table(this.categories);
    this.getAllDropdown()

    this.activatedPathService.getData().subscribe((activePath:any)=>{
      const [currentPath,beforeCurrentPath] = activePath;
      this.currentPath = currentPath
      this.beforeCurrentPath = beforeCurrentPath
      if(this.currentPath === 'product' || this.beforeCurrentPath === 'product' || this.currentPath === 'neworder'){
        // this.availableFilter ss= 
      }
    })

    // this.categories.forEach((item)=>{
    //   item['searchOn'] = 'category';
    //   item['type'] = SearchType.EXACT;
    //   item['keys'] = item.name;
    //   item['caseSensitve'] = false;
    // })
    // this.brands.forEach((item)=>{
    //   item['searchOn'] = 'brand';
    //   item['type'] = SearchType.EXACT;
    //   item['keys'] = item.name;
    //   item['caseSensitve'] = false;
    // })
    // this.colors.forEach((item)=>{
    //   item['searchOn'] = 'colors';
    //   item['type'] = SearchType.EXACT;
    //   item['keys'] = item.name;
    //   item['caseSensitve'] = false;
    // })
    
  }

  private getAllDropdown(){
    this.ipcService.allConfigDropdown().then(res=>{
      console.log("inside add update product",res);
      let [category,brand,size,color] = res;
      // console.log('category',category.data);
      // console.log('brand',brand.data);
      // console.log('size',size.data);
      // console.log('color',color.data);
      this.categories = category.data
      this.brands = brand.data
      this.sizes = size.data
      this.colors= color.data

      this.categories.forEach((item)=>{
        item['searchOn'] = 'category';
        item['type'] = SearchType.EXACT;
        item['keys'] = item.name;
        item['caseSensitve'] = false;
      })
      this.brands.forEach((item)=>{
        item['searchOn'] = 'brand';
        item['type'] = SearchType.EXACT;
        item['keys'] = item.name;
        item['caseSensitve'] = false;
      })
      this.colors.forEach((item)=>{
        item['searchOn'] = 'colors';
        item['type'] = SearchType.EXACT;
        item['keys'] = item.name;
        item['caseSensitve'] = false;
      })
    })
  }

  createAlphabetFilterArray(){
    const ALPHABET_COUNT = 26
    let alpha = Array.from(Array(ALPHABET_COUNT)).map((e, i) => i + 65);
    // console.log('alpha', alpha);

    let alphaFilter = alpha.forEach((element) => {
      // console.log('object');
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
    this.filters.has(value.searchOn)
    ? (this.filters.get(value.searchOn).has(value.keys) 
      ? this.filters.get(value.searchOn).delete(value.keys) 
      : this.filters.get(value.searchOn).add(value.keys))
    : this.filters.set(value.searchOn,new Set([value.keys]))
    
    let allFilterKeys = [];
    this.filters.forEach(values => allFilterKeys = [...allFilterKeys,...values])
    this.filtersList = allFilterKeys
    console.log(this.filtersList);
    // this.filterService.setData(this.filters);
    

  }
  removeFilter(value: Filter) {
    this.filters.has(value.searchOn) ? this.filters.delete(value) : this.filters;
    this.filtersList = Array.from(this.filters);
  }

  isFilterSelected(value: string) {    
    return this.filtersList.find(item=>item == value) ? true : false
  }

  onApplyFilter() {
    // this.searchText = this.filters
    // this.items = this.items
    this.filterService.setData(this.filters);

    this.onFilter.emit(this.items);
  }
  onResetFilter() {
    this.filters.clear();
    this.filterService.setData(null);
    this.filtersList = [];
  }
  onSearch(searchText){
    this.searchText = searchText
  }

  async isFilterAvailable(selectedFilter:string){
    const filterName = selectedFilter.toLowerCase();
    const res = this.ALL_FILTERS.find(filter => filter.filterName = filterName);
    // const res2 = res.canApplyOn.find(component => component == (this.currentPath || this.beforeCurrentPath));
    // console.log("res1",res);
    // console.log("res2",res2);

    return res ? true : false;
  }

}
