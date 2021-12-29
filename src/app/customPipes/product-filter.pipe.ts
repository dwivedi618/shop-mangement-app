import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../layout/models/product';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
  transform(
    itemList: any,
    searchKeyword: Map<string, Set<string>>
  ) {
    console.log("data for filter***",itemList)
    if (!itemList) return [];
    if (!searchKeyword) {
      return itemList;
    }
    let filteredList = [];
    if ( itemList) {
      
        
        // itemList.forEach(item => {
        //   let product = item
        //   let filterMap = searchKeyword;
        //   filterMap.forEach((values,key)=>{
        //     let foundkeyValue : Array<string> = [];
        //     if(Array.isArray(product[key])){
        //       let allKeyValue = product[key] as Array<{}>;
        //       allKeyValue.forEach((element:{})=>foundkeyValue.push(element['name']))
        //       console.log("isArray",foundkeyValue)
        //     }else { 
        //       foundkeyValue.push(product[key].name)
        //     }
        //     let itemSearchOn = new Set(foundkeyValue);
        //     // one filter 'key' has many 'values'
        //     values.forEach((value:string) => {
        //       if(itemSearchOn.has(value)){
        //         filteredList.push(item);
        //         console.log(`found ${value}`,item)
        //         return
        //       }       
        //     });
        //   })
        // });
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

    return filteredList;
  }
}

//Usage

//<tr *ngFor="let company of companyList | filter: searchKeyword"></tr>
