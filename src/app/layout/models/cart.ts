import { Customer } from "./customer";
import { Product } from "./product";

export class Cart {
    id: number;
    item: Product;
    name: string;
    quantity: number;
    price: number;
    discountInPercent: any;
    discountInRuppee: any;
    priceAfterDiscount: number;
    currentCustomer : Customer;
    cartAmount: number;
    finalPayableAmount: number;
}