import { Product } from "./product";


export class Inventory{
        id : 1;
        item : Product;
        quantity : number;
        itemInStock : number;
        pricePerItem : number;
        totalStockPrice : number;
        lastUpdate : Date;
        description: string;
        code : string;
        isAddingStock: boolean;
        length : number;
        
}