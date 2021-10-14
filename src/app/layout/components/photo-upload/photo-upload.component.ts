import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { rejects } from 'assert';
import { IPCService } from 'src/app/services/ipc.service';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit ,OnChanges{
  imagePreview: string;
  @Input('image')  image
  @Output() onImageChange = new EventEmitter<any>();

  constructor( 
    private ipcService: IPCService,
    private utliltService : UtilityService
   ) { }

  ngOnChanges(){
    this.imagePreview = this.image 
   }
  ngOnInit(): void {
  }

  fileUploadReset() {
    if (this.imagePreview) {
      this.imagePreview = '';
    }
  }
  getProfilePicObject() {
    if (this.imagePreview) {
      return {
        image: this.imagePreview,
        width: 150,
        alignment: 'right'
      };
    }
    return null;
  }
  async onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log("selected file",file);

    // let fileBuffer = Buffer.from(file)
    // this.utliltService.compress(fileBuffer , 150,150)
    this.getBase64(file).then((data : string)=>{
      console.log("after image ---mini uploadeer",data);

      this.onImageChange.emit(data);
    })
  }
  
  getBase64(file) {
    
    return new Promise(resolve=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        resolve(this.imagePreview = reader.result as string);
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
        
      };
    })
  }

}
