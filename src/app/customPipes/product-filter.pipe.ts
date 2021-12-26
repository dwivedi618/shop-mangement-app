import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../layout/models/product';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
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
       if (typeof searchKeyword == 'object') {
        console.log('searchKeyword Map', searchKeyword);
        
        itemList.forEach(item => {
          let product = item
          let filterMap = searchKeyword;
          filterMap.forEach((values,key)=>{
            let foundkeyValue : Array<string> = [];
            if(Array.isArray(product[key])){
              let allKeyValue = product[key] as Array<{}>;
              allKeyValue.forEach((element:{})=>foundkeyValue.push(element['name']))
              console.log("isArray",foundkeyValue)
            }else { 
              foundkeyValue.push(product[key].name)
            }
            let itemSearchOn = new Set(foundkeyValue);
            // one filter 'key' has many 'values'
            values.forEach((value:string) => {
              if(itemSearchOn.has(value)){
                filteredList.push(item);
                console.log(`found ${value}`,item)
                return
              }       
            });
          })
        });
      }
    }
    console.log('filtered Dataa', filteredList);
    return filteredList;
  }
}

//Usage

//<tr *ngFor="let company of companyList | filter: searchKeyword"></tr>
