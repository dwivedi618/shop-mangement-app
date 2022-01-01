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

        /**
     * @description This function will commincate with main process
     * for the dashboard service
     * @param range [ date ] Name of the item to fetch dashboard data to date range
    
     */

         async dashboard(range) {
            try {
                return await ipcRenderer.invoke('dashboard', [range])
            } catch ( err ) {
                console.error(err);
            }
        }

        
    async allConfigDropdown() {
        try {
            let category = await ipcRenderer.invoke('database', ['category', 'fetch', ''])
            let brand = await ipcRenderer.invoke('database', ['brand', 'fetch', ''])
            let size = await ipcRenderer.invoke('database', ['size', 'fetch', ''])
            let color = await ipcRenderer.invoke('database', ['color', 'fetch', ''])
            return Promise.all([category,brand,size,color])

        } catch ( err ) {
            console.error(err);
        }
    }

    upload(image: string) {
        ipcRenderer.invoke('upload', image)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
} 