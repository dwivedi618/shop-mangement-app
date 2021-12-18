import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(itemList: any, searchKeyword: string | Array<{}>) {
    if (!itemList) return [];
    if (!searchKeyword) {
      return itemList;
    }
    let filteredList = [];
    if (itemList.length > 0) {
      let searchKeywords =
        typeof searchKeyword == 'string'
          ? searchKeyword.toLowerCase()
          : (searchKeyword as Array<{}>);
      itemList.forEach((item) => {
        if (typeof searchKeyword == 'string') {
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
        }else if(typeof searchKeyword == 'object'){
          console.log("array")
        }
      });
    }
    console.log('filtered Dataa', filteredList);
    return filteredList;
  }
}

//Usage

//<tr *ngFor="let company of companyList | filter: searchKeyword"></tr>
