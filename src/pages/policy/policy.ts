import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClaimPage } from '../claim/claim';
import { ClaimServiceProvider } from '../../providers/claim-service/claim-service';
// import 'rxjs/Rx';
 //import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';

/**
 * Generated class for the PolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 
*/
@IonicPage()
@Component({
  selector: 'page-policy',
  templateUrl: 'policy.html',
})
export class PolicyPage {
  policies: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private claimservice: ClaimServiceProvider) {
    this.getPolicies();
  }
   getPolicies(){
     this.claimservice.getPolicyList().then(data=>{
       this.policies = data;
       console.log(data);
     });
   }  
  goToClaim(policyid:string){
    this.navCtrl.push(ClaimPage,{policyid : policyid});
  }
}
