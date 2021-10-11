import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { IPCService } from 'src/app/services/ipc.service';
import { AlertService } from 'src/app/services/alert.service';
import { Constant } from '../../constant/constant';
export interface ProductDetails{
  id : number,
  name: string,
  brand: string,
  salePrice:number,
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
  selector: 'app-bill-preview',
  templateUrl: './bill-preview.component.html',
  styleUrls: ['./bill-preview.component.scss']
})
export class BillPreviewComponent implements OnInit {
  productForm : FormGroup
  orderDate = new Date()
  localData: any;
  action: any;
  receivedAmount : number = 0;
  paymentMode : string;
  

  dueAmount : number;
  isLoading: boolean;
  isSavingOrder : boolean;

  constructor(
    private fb: FormBuilder,
    private ipcService : IPCService,
    private alertService : AlertService,
    private dialogRef : MatDialogRef<BillPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) data : ProductDetails
    ) {
      this.localData = data || null;
      this.action = this.localData?.action || 'new';
      console.log("billing info",data,this.localData)
     }

  ngOnInit(): void {
    this.receivedAmount = this.localData?.finalPayableAmount - (this.localData?.discountInRuppee || 0)
  }

  



  onDone(){
   
    this.exportAsPDF()
  }

  onApply(){
    this.isSavingOrder = true;
    this.alertService.alertActionDialog(Constant.ORDER_SUBMIT_WARNING_MSG,'Yes , Save').subscribe(data=>{
      console.log("confirmation",data);
      this.ipcService.database('sale','create',this.localData).then(data=>{
      console.log("order saved",data);
        this.isSavingOrder = false;
      })
      .catch(err=>{ this.isSavingOrder = false;})
    })
  }

  exportAsPDF() {
    this.isLoading = true
		console.log("name->", )

	
		const options = {
			background: 'white',
			scale: 3
		};

		html2canvas(document.querySelector("#receipt"), options).then((canvas) => {

			var img = canvas.toDataURL("image/PNG");
			console.log("img from export Fuction", img);
			var doc = new jsPDF("p", "mm", "a4", true);
			var imgWidth = 210;
			var pageHeight = 295;
			var imgHeight = canvas.height * imgWidth / canvas.width;
			var heightLeft = imgHeight;
			const imgData = canvas.toDataURL('image/png')
			var position = 0;

			doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 15);
			heightLeft -= pageHeight;

			while (heightLeft >= 0) {
				position = heightLeft - imgHeight;
				doc.addPage();
				doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 15);
				heightLeft -= pageHeight;
			}
			return doc;
		}).then((doc) => {
			const fileName = "invoice"
			doc.save(fileName + new Date().getDate() + '.pdf');
      this.isLoading = false

		});

	}
  onShare(){
    let filePath = "/home/shivendra/Downloads/invoice22.pdf";
    let phone = "+917827458618"
    let a = document.createElement('a');
    a.href = `https://web.whatsapp.com/send?phone=${phone}&attachment=${filePath}`
    a.click();
    console.log("a",a);
  }
}


 
