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
     * for the database service
     * @param item { string } Name of the item to fetch data - one of {'customer', 'product', 'inventory', 'sell'}
     * @param action { any } action to perform on item- one of {'create', 'update', 'fetch', 'delete'}
     * @param data {any} It may be condition or data to save pr update
     */

    

    async database(item: string, action: string, data?: any) {
        try {
            return await ipcRenderer.invoke('database', [item, action, data])
        } catch ( err ) {
            console.error(err);
        }
    }

    upload(file: string) {
        ipcRenderer.invoke('upload', file)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
} 