
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "filter" })
export class FilterPipe implements PipeTransform {
  transform(itemList: any, searchKeyword: string,filterMetadata:any) {
    if (!itemList)
      return [];
    if (!searchKeyword){
      filterMetadata.count = itemList.length
      return itemList;
    }
    let filteredList = [];
    if (itemList.length > 0) {
      searchKeyword = searchKeyword.toLowerCase();
      itemList.forEach(item => {
        //Object.values(item) => gives the list of all the property values of the 'item' object
        let propValueList = Object.values(item);
        for(let i=0;i<propValueList.length;i++)
        {
          if (propValueList[i]) {
            if (propValueList[i].toString().toLowerCase().indexOf(searchKeyword) > -1)
            {
              filteredList.push(item);
              break;
            }
          }
        }
      });
    }
    console.log("filtered Dataa",filteredList)
    filterMetadata.count = filteredList.length
    return filteredList;
  }
}

//Usage

//<tr *ngFor="let company of companyList | filter: searchKeyword"></tr>
