import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../layout/models/product';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
  transform(
    itemList: any,
    searchKeyword: Map<string, Set<string>>
  ) {
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
              let values = item[key];
              values.forEach(element => {
                any ||= (element.name === searchKey ) ?  true : false;
              });
            } else if(typeof item[key] === 'object'){
              any ||= (item[key].name == searchKey ) ?  true : false;

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


    }

    console.log("filteredList--pipe--",filteredList)
    return filteredList;
  }
}

//Usage

//<tr *ngFor="let company of companyList | filter: searchKeyword"></tr>
