import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ClaimPage } from '../claim/claim';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base64Image:string;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.BACK,
      saveToPhotoAlbum: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     let cameraImageSelector = document.getElementById('camera-image');
     cameraImageSelector.setAttribute('src', this.base64Image);
    }, (err) => {
     // Handle error
    });
  }
  goToClaim(){
    this.navCtrl.push(ClaimPage);
  }
}
