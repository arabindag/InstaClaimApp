import { Component } from '@angular/core';
import { IonicPage, NavController,DateTime, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { ClaimServiceProvider } from '../../providers/claim-service/claim-service';
import { ClaimDetailsPage } from '../claimdetails/claimdetails';
/**
 * Generated class for the ClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
})
export class ClaimPage {
  policyid: any;
  claimdata: any;
  claimForm: FormGroup;
  claim = new Claim();
  base64Image : any;
  public vehicleOptions: string[] = [
    "2010 Suzuki Baleno",
    "2003 Suzuki Swift"
  ];

  public causeOptions: string[] = [
    "Collision",
    "Third Party Liability",
    "Comprehensive"
  ];

  public subCauseOptions: string[] = [
    "Hitting a car",
    "Hitting a pedestrian",
    "Hitting a lamp post",
    "Falling debris"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private claimservice: ClaimServiceProvider, private formBuilder: FormBuilder, private camera: Camera) {
   this.bindData();
   
    this.claimForm = this.formBuilder.group({
      vehicle: ['', Validators.required],
      lossdate: ['', Validators.required],
      losscause: ['', Validators.required],
      sublosscause: ['', Validators.required],
      numberofpeopleinjured: ['']
    });
  };
  
  submitNext(){
    this.claim.vehicle = this.claimForm.controls['vehicle'].value
    this.claim.lossdate = this.claimForm.controls['lossdate'].value
    this.claim.losscause = this.claimForm.controls['losscause'].value
    this.claim.sublosscause = this.claimForm.controls['sublosscause'].value
    this.claim.numberofpeopleinjured = this.claimForm.controls['numberofpeopleinjured'].value    
     //this.claim.leftimg = document.getElementById("leftimg").getAttribute('src'); 
    // this.claim.rightimg =document.getElementById("rightimg").getAttribute('src'); 
    // this.claim.frontimg =document.getElementById("frontimg").getAttribute('src'); 
    // this.claim.backimg =document.getElementById("backimg").getAttribute('src'); 
    var claimData = JSON.stringify(this.claim);    
    console.log(claimData);
    this.navCtrl.push(ClaimDetailsPage,claimData);
  }

  bindData(){
    this.policyid = this.navParams.get('policyid');
    this.claimdata = {"imagepath":["../../assets/imgs/logo.png","../../assets/imgs/logo.png","../../assets/imgs/logo.png","../../assets/imgs/logo.png"],"_id":"5b6f928d3d5c3b90ee479783","policyid":"P001","claimid":"C001","model":"2010 Suzuki Baleno","lossdate":"2018-08-12T01:51:09.759Z","losscause":"Collision","sublosscause":"Hitting a car","peopleinjured":2};
    this.claimservice.getDetailsByPolicyId("5b6f8ee753a8e609fe43d558").then(data=>{
      console.log("getDetailsByPolicyId");
      console.log( data);
    });
  } 
 
  openCamera(ctrl:string){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.BACK,
      saveToPhotoAlbum: true,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     let cameraImageSelector = document.getElementById(ctrl);
     cameraImageSelector.setAttribute('src', this.base64Image);
    }, (err) => {
     // Handle error
    });
  }
}
export class Claim {
  vehicle: string;
  lossdate: String;
  losscause: String;
  sublosscause: String;
  numberofpeopleinjured: number;
  leftimg: String;
  rightimg: String;
  frontimg: String;
  backimg: String;
}
