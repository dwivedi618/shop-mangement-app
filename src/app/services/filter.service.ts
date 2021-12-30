import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterQuery = new Subject(); 
  filteredData = new Subject(); 

  setData = (data)=>{this.filterQuery.next(data)};
  getData = ()=>{return this.filterQuery.asObservable()};
  getFilteredList = ()=>{return this.filteredData.asObservable()};


  applyFilter(itemList:any,searchKeyword:Map<string,Set<string>>){
    console.log("itemList",itemList)
    console.log("searchKeyword",searchKeyword)
    if (!itemList) return [];
    if (!searchKeyword) {
      return itemList;
    }
    let filteredList = [];
    if ( itemList) {
      filteredList = itemList.filter((item) => {
        console.log('--------------item', item);
        
        let include = true;
        searchKeyword.forEach((value, key) => {
          let any = false;
          console.log('value: ', value);
          console.log('key: ', key);

          value.forEach( (searchKey) => {
            if( Array.isArray(item[key] )){
              let values = item[key] as Array<{}>;
              values.forEach(element => {
                any ||= (element['name'] === searchKey ) ?  true : false;
              });
            } else if(typeof item[key] === 'object'){
              any ||= (item[key]['name'] == searchKey ) ?  true : false;

            } else {
              any ||= (item[key] === searchKey ) ?  true : false;
            }
          });
          include &&= any ?  true : false;
          console.log('include value: ', include );
          console.log('any value: ', any );
        }); 
        return include;
      });
      this.filteredData.next(filteredList);
    }

    console.log("filteredList--service--",filteredList)
    // return this.filteredData.asObservable();
  }
  
}