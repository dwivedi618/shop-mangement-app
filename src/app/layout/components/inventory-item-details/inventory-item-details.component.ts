import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-item-details',
  templateUrl: './inventory-item-details.component.html',
  styleUrls: ['./inventory-item-details.component.scss']
})
export class InventoryItemDetailsComponent implements OnInit {
  manageStockForm : FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.manageStockForm = this.fb.group({
      quantity : [''],
      pricePerItem : [''],
      date : [''],
      notes : [''],
      isAddingStock : []
    })
  }

  onDone(){
    console.log("Mange Stock Form",this.manageStockForm.value)
  }
}
