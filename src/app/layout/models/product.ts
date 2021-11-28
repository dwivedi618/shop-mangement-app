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
      unit : string;
      sellBy : boolean;
      grade : string;
      description: string;
      productCode : any ;
      make : string;
      length : string;
      image : any;  
      color : Pcolor;
      brand: Brand;
      size : Psize;
      category : Pcategory;
      
}