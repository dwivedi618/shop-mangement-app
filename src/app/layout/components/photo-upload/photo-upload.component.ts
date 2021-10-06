import { Component, OnInit } from '@angular/core';
import { IPCService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {
  imagePreview: string;

  constructor( 
    private ipcService: IPCService
   ) { }

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
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.getBase64(file);
  }
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.imagePreview = reader.result as string;
      this.ipcService.upload(reader.result as string);

      
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

}
