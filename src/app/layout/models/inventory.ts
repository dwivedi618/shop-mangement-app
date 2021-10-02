import { Product } from "electron/main";

export class Inventory{
        id : 1;
        item : Product;
        itemInStock : number;
        pricePerItem : number;
        totalStockPrice : number;
        lastUpdate : Date;
        description: '';
        code : ''
}