import { Component } from '@angular/core';
import { IonicPage, NavController,DateTime, NavParams } from 'ionic-angular';
//import * as moment from 'moment';
/**
 * Generated- class for the ClaimdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claimdetails',
  templateUrl: 'claimdetails.html',
})
export class ClaimDetailsPage {
  claimData:any;  
  claim = new Claim();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let data=JSON.parse(this.navParams.data);
    this.claim.vehicle = data.vehicle;
    this.claim.lossdate = data.lossdate;
    this.claim.losscause = data.losscause;
    this.claim.sublosscause = data.sublosscause;
    this.claim.numberofpeopleinjured = data.numberofpeopleinjured;
    
    // document.getElementById("leftimg").setAttribute('src', img);
    // document.getElementById("rightimg").setAttribute('src',img);
    // document.getElementById("frontimg").setAttribute('src', img);
    // document.getElementById("backimg").setAttribute('src', img);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimdetailsPage');
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