import { SearchType } from './../models/filter';
export class Constant {
  static RESET_ORDER_WARNING_MSG = `This will remove all you current selected item.`;
  static ORDER_SUBMIT_WARNING_MSG = `To save this Order`;
  static PAYMENT_SUBMIT_WARNING_MSG = `To save this Payment`;
  static ORDER_SAVED_MSG = `Order Saved Successfully . You can print your receipt any time from 'SELL HISTORY'`;
  static PAYMENT_SAVED_MSG = `Payment Saved Successfully . You can print your receipt any time from 'SELL HISTORY'`;
  static INVALID_PASSWORD_MSG = `Incorrect password`;
  static PRODUCT_MISSING_INS1 = `Prodcut not available!`;
  static PRODUCT_MISSING_INS2 = `Try refreshing or add product`;

  static CUSTOMER_MISSING = {
    text1: 'Customer not available!',
    text2: '',
    action: '../customer',
  };
  
  static PRODUCT_MISSING = {
    text1: 'Product not available!',
    text2: '',
    action: '../product',
  };
  static INVENTORY_MISSING = {
    text1: 'Inventory not available!',
    text2: '',
    action: '../inventory',
  };
  static SALE_MISSING = {
    text1: 'Sale not available!',
    text2: '',
    action: '../sale',
  };
  static CART_MISSING = {
    text1: 'No item in cart',
    text2: 'Go to new Order',
    action: '../neworder',
  };

  // Filter
  static CUSTOMER_CATEGORY = [
    {
        keys: 'New',
        searchOn: 'date',
        caseSensitive: false,
        type: SearchType.SUBSTRING,
      },
  ];
  static CATEGORY_BY_GENDER = [
    {
     
      keys: 'Male',
      searchOn: 'gender',
      caseSensitive: false,
      type: SearchType.EXACT,
    },
    {
      
      keys: 'Female',
      searchOn: 'gender',
      caseSensitive: false,
      type: SearchType.EXACT,
    },
    {
  
      keys: 'Other',
      searchOn: 'gender',
      caseSensitive: false,
      type: SearchType.EXACT,
    },
  ];
  static CATEGORY_BY_ALPHABET = 
    {
      keys: 'A',
      searchOn: 'name',
      caseSensitive: false,
      type: SearchType.STARTWITH,
    }

  
}
