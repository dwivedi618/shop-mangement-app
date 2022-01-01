import { Pcategory } from './pcategory';
import { Psize } from './psize';
import { Brand } from './brand';
import { Pcolor } from './pcolor';
export interface Product{
      readonly id : number;
      name: string;
      price: number;
      discountInPercent : number;
      discountInRuppee : number;
      unit? : string;
      sellBy ?: boolean;
      description?: string;
      productCode ?: string ;
      length : string | number;
      image?: any;  
      colors?: Pcolor[];
      brand?: Brand;
      sizes?: Psize[];
      category?: Pcategory;
      gender? : string;
      primaryColour? : string; 
      colorVariantAvailable ?: Boolean | string;
      season? : string;
      stock?:number;
      subCategory:any;
      createdAt?:string | Date;
      updatedAt?:string | Date;
      
}