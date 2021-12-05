
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';
import { Product } from '../../../models/product';
import { DialogService } from 'src/app/services/dialog-service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BrandList } from 'src/app/fakedata/brands';

export interface productDetails{
  id : number,
  name: string,
  brand: string,
  price:number,
  discountInPercentage : number,
  discountInRuppee :number,
  offerPrice :number,
  grade : string,
  description:string,
  code :string,
  make : string,
  size : string,
}

@Component({
  selector: 'app-add-update-inventory',
  templateUrl: './add-update-inventory.component.html',
  styleUrls: ['./add-update-inventory.component.scss']
})
export class AddUpdateInventoryComponent implements OnInit {
  control = new FormControl();
  searchText = '';
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;
  brands: { id: string; name: string; }[];

 

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  inventoryForm : FormGroup
  localData: any;
  action: any;
  items  = [
     { name : 'product'},
     { name : 'product'},
     { name : 'product'},
     { name : 'product'},
     { name : 'product'},
     { name : 'product'},

  ]
  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private dialogService : DialogService,

    private dialogRef : MatDialogRef<AddUpdateInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product
    ) {
      this.localData = data || null;
      this.action = this.localData?.id ? 'update' : 'add';

      
      console.log("data",data,this.localData)
     }
     
     
     ngOnInit(): void {
    this.brands = BrandList.allbrands;
    this.inventoryForm = this.fb.group({
      id: null,
      item : [''],
      quantity: ['',Validators.required],
      amount: ['',Validators.required],
      date: [''],
      description: [''],
     
    })

    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string)),
    );
    if(this.action == 'update'){
      this.patchInventoryDataInForm()
    }
    // this.fetchProduct();

  }

  patchInventoryDataInForm(){
    this.inventoryForm.patchValue({id : this.localData?.id})
    this.inventoryForm.patchValue({item : this.localData?.item?.id})

    this.inventoryForm.patchValue({quantity : this.localData?.quantity})
    this.inventoryForm.patchValue({amount : this.localData?.amount})
    this.inventoryForm.patchValue({description : this.localData?.description})
    this.inventoryForm.patchValue({date : this.localData?.date})
    console.log("Mange Stock Form",this.inventoryForm.value)

  }

  private fetchProduct() {
    this.ipcService.database('product', 'fetch', '').then((res) => {
      if(res.status){
        this.items = res.data;
        console.log("ftech product", res);
      }
    })
  }
  onSelectProduct(){
    this.dialogService.openSelectionModel({}).subscribe(data=>{})
  }


  onDone(){
    let data  =  this.inventoryForm.value;
    let action  = this.action == 'add' ? 'create' : 'update'
    console.log("before save product",this.inventoryForm.value)
    this.ipcService.database('inventory',action,data).then(
      res=>{
        if(res.status){
          console.log(`after ${action}  inventory`,res);
          this.dialogRef.close(res.data);
        }
      }
    ).catch(err => { console.log(err) });
  }


}

