import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
const ipcRenderer = (<any>window).ipcRenderer;

@Injectable({
   providedIn: 'root' 
})

export class IPCService {

    constructor() {
        console.log('this isa renderedrfrft',ipcRenderer)
    }

    /**
     * @description This function will commincate with main process
     * to get the data from database
     * @param item { string } Name of the item to fetch data
     * @param condition { any } Key-value pair for filter
     */
    fetch(item: string, condition?: any) {
        ipcRenderer.invoke('fetch', [item, condition])
        .then(res => {
            console.log(res);
            //do something with the result
        })
        .catch(err => {
            console.log(err);
        });
    }

    insert(item: string, data: any) {
        ipcRenderer.invoke('insert', [item, data])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    update(item: string, data: any, condition: any) {
        ipcRenderer.invoke('update', [item, data, condition])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    delete(item: string, condition: any) {
        ipcRenderer.invoke('delete', [item, condition])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
} 