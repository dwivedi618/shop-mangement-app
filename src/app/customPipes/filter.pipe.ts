import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../layout/models/product';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(
    itemList: any,
    searchKeyword: string | Array<{}> | Map<string, Set<string>>
  ) {
    console.log("data for filter***",itemList)
    if (!itemList) return [];
    if (!searchKeyword) {
      return itemList;
    }
    let filteredList = [];
    if (itemList.length > 0) {
      let searchKeywords =
        typeof searchKeyword == 'string'
          ? searchKeyword.toLowerCase()
          : (searchKeyword as Map<string, Set<string>>);
      if (typeof searchKeyword == 'string') {
        itemList.forEach((item) => {
          //Object.values(item) => gives the list of all the property values of the 'item' object
          let propValueList = Object.values(item);
          for (let i = 0; i < propValueList.length; i++) {
            if (propValueList[i]) {
              if (
                propValueList[i]
                  .toString()
                  .toLowerCase()
                  .indexOf(searchKeywords as string) > -1
              ) {
                filteredList.push(item);
                break;
              }
            }
          }
        });
      } else if (typeof searchKeyword == 'object') {
        console.log('searchKeyword Map', searchKeyword);
        
        // itemList.forEach(item => {
        //   let product : Product = item
        //   let propValueList = new Set(Object.values(item));
        //   let filterMap = searchKeyword;
        //   filterMap.forEach((values,key)=>{
        //     let foundkeyValue = product[key]   ;
            

        //     console.log("foundkey",foundkeyValue,item);
        //     // console.log("values",values)
        //     values.forEach(value => {
        //       console.log("value",value);
        //       value == foundkeyValue
        //       ? (console.log(`found ${value}`,item), filteredList.push(item))
        //       : console.log("not found ")
        //     });
        //   })
         
        // });
      }
    }
    console.log('filtered Dataa', filteredList);
    return filteredList;
  }
}

//Usage

//<tr *ngFor="let company of companyList | filter: searchKeyword"></tr>
