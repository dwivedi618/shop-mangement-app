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
  static BRAND_MISSING = {
    text1: 'Brand not available!',
    text2: 'Add Brand',
    action: '../brand',
  };
  static COLOR_MISSING = {
    text1: 'Color not available!',
    text2: 'Add Color',
    action: '../pcolor',
  };
  static SIZE_MISSING = {
    text1: 'Garment size list not available!',
    text2: 'Add Garment size',
    action: '../pcolor',
  };
  static GARMENT_CATEGORY_MISSING = {
    text1: 'Categories not available!',
    text2: '',
    action: '../pcolor',
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
  static CATEGORY_BY_ALPHABET = {
    keys: 'A',
    searchOn: 'name',
    caseSensitive: false,
    type: SearchType.STARTWITH,
  };

  // filters configuration

  static FILTER_CONFIG = {
    product: {
      filterOn: 'product',
      availableFilter: ['Garments Category', 'Brands', 'Colors', 'Sizes'],
    },
    customer: {
      filterOn: 'product',
      availableFilter: ['Garments Category', 'Brands', 'Colors', 'Sizes'],
    },
  };

  static ALL_FILTERS = [
   
    {
      filterName: 'category',
      canApplyOn: ['product', 'neworder', 'category'],
    },
    {
      filterName: 'brand',
      canApplyOn: ['product', 'neworder', 'brand'],
    },
    {
      filterName: 'size',
      canApplyOn: ['product', 'neworder', 'size'],
    },
    {
      filterName: 'color',
      canApplyOn: ['product', 'neworder', 'color'],
    },
    {
      filterName: 'alphabet',
      canApplyOn: ['product', 'neworder', 'customer','inventory'],
    },
  ];
}
