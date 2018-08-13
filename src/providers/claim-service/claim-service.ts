import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClaimServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClaimServiceProvider {
apiUrl = "http://13.232.237.186:8080";
demoUrl = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(public http: HttpClient) {
    console.log('Hello ClaimServiceProvider Provider');
  }
getPolicyList(){
  return new Promise(resolve=>{
    this.http.get(this.apiUrl + "/policies").subscribe(data=>{
      resolve(data);
    },err=>{console.log(err);})
  })
}
getDetailsByPolicyId(policyid:string){
  return new Promise(resolve=>{
    this.http.get(this.apiUrl + "/policies/" + policyid).subscribe(data=>{
      resolve(data);
    },err=>{console.log(err);})
  })
}
}
