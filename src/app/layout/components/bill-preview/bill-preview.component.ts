import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
export interface productDetails{
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
  localData: any;
  action: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<BillPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) data : productDetails
    ) {
      this.localData = data || null;
      this.action = this.localData?.action || 'new';
      console.log("data",data,this.localData)
     }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      grade : [''],
      make : [''],
      price : [''],
      unit : [''],
      discountInPercent : [''],
      discountInRuppee : [''],
      description : [''],
      isSellByMeter : [''],
      length : [''],
      file : ['']
    })

    if(this.action == 'update'){
      this.patchProductDataInForm()
    }
  }

  patchProductDataInForm(){
    this.productForm.patchValue({grade : this.localData?.grade})
    this.productForm.patchValue({make : this.localData?.make})
    this.productForm.patchValue({price : this.localData?.price})
    this.productForm.patchValue({unit : this.localData?.unit})
    this.productForm.patchValue({discountInPercent : this.localData?.discountInPercent})
    this.productForm.patchValue({discountInRuppee : this.localData?.discountInRuppee})

    this.productForm.patchValue({length : this.localData?.length})
    this.productForm.patchValue({description : this.localData?.description})
    this.productForm.patchValue({isSellByMeter : this.localData?.isSellByMeter})
    this.productForm.patchValue({file : this.localData?.file})
  }

  onDiscountChanged(price:number,discountValue : number,type : string){
    let discountInRuppee = 0;
    let discountInPercent = 0
    if(type == 'percent'){
      discountInRuppee = Math.round((price * discountValue/100)*100)/100;
      discountInPercent = discountValue;
      
    }else{
      discountInRuppee = discountValue
      discountInPercent = Math.round((discountValue * 100 /price)*100)/100 
    }
    this.productForm.patchValue({discountInPercent : discountInPercent})
    this.productForm.patchValue({discountInRuppee : discountInRuppee})
  }

  onDone(){
    console.log("Mange Stock Form",this.productForm.value)
    this.exportAsPDF()
  }
  exportAsPDF() {
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
		});

	}
  onShare(){
    let filePath = "/home/shivendra/Downloads/invoice22.pdf";
    let phone = "+917827458618"
    let a = document.createElement('a');
    a.href = `https://web.whatsapp.com/send?phone=${phone}&attachment=${filePath}`
    a.click();
    console.log("a",a)
  }
}


 
