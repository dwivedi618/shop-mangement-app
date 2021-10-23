import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { IPCService } from 'src/app/services/ipc.service';
import { AlertService } from 'src/app/services/alert.service';
import { Constant } from '../../constant/constant';
import { DialogService } from 'src/app/services/dialog-service';
export interface ProductDetails{
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
  selector: 'app-take-payment',
  templateUrl: './take-payment.component.html',
  styleUrls: ['./take-payment.component.scss']
})
export class TakePaymentComponent implements OnInit {
  productForm : FormGroup
  orderDate = new Date()
  localData: any;
  action: any;
  receivedAmount : number = 0;
  paymentMode : string;
  dateNow = Date.now()
  receiptNumber = `RCN${this.dateNow}`

  

  dueAmount : number;
  isLoading: boolean;
  isSavingOrder : boolean;
  msg: boolean;

  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private dialogService : DialogService,

    private alertService : AlertService,
    private dialogRef : MatDialogRef<TakePaymentComponent>,
    @Inject(MAT_DIALOG_DATA) data : ProductDetails
    ) {
      this.localData = data || null;
      this.action = this.localData?.action || 'new';
      this.receiptNumber =  this.localData?.receiptNumber || `RCN${Date.now()}` ;
      this.paymentMode =  this.localData?.paymentMode || `cash` ;
      this.dueAmount =  this.localData?.finalPayableAmount - this.localData?.receivedAmount ;


      if(this.localData?.id) { this.action = "update" }
      else { this.action = 'create' }
      console.log("billing info",data,this.localData)
     }

  ngOnInit(): void {
    // this.receivedAmount = this.localData?.finalPayableAmount - (this.localData?.discount || 0) -  (this.localData?.received || 0)
  }

  onDone(){
   this.submitPayment();
  }

  submitPayment(){
    if(this.action == 'update') {
      this.alertService.alertActionDialog('Notification','Update not available','Okay').subscribe(data=>{
        this.dialogRef.close(true);
      })
      return
    }
    this.isSavingOrder = true;
    this.alertService.alertActionDialog('Are you sure?',Constant.ORDER_SUBMIT_WARNING_MSG,'Yes , Save')
    .subscribe( data => {
      console.log("confirmation",data);
      let sell = this.localData;
      sell.receivedAmount = this.receivedAmount || null;
      sell.paymentMode = this.paymentMode || null;
      sell.receiptNumber = this.receiptNumber;

      console.log("before save sell",sell)
      this.ipcService.database('sell', this.action, sell)
      .then(ipcData=>{
        console.log("order saved",ipcData);
        this.alertService.alertActionDialog('Saved successfully',Constant.ORDER_SAVED_MSG,'Done').subscribe((altData : Boolean)=>{
          if(altData) { this.dialogRef.close(true)}
        })
        this.isSavingOrder = false;
      })
      .catch(err=>{ this.isSavingOrder = false;})
    })
  }

  async onBillView() {
    let sell = this.localData;
    sell.receivedAmount = this.receivedAmount || null;
    sell.paymentMode = this.paymentMode || null;
    sell.receiptNumber = this.receiptNumber;
    this.dialogService.openBillPreview(sell).subscribe(data => {
      console.log("bill Preview Closed", data);
      // if(data == true) { this.router.navigate(['./dashboard']) }
    })
 
  }



}


 

