import { Injectable } from '@angular/core';
import { Http , Headers , Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DonorsService {
  private url  = "http://127.0.0.1:8000/api";
  constructor(private _http:Http) { }

  getDonors(){
    let _headers = new Headers();
    _headers.append('Access-Control-Allow-Origin','*');
    return this._http.get(this.url+"/donors")
    .map(res=>res.json());
  }
  registerDonor(formData){
    formData = {
      "name":formData.name,
      "age":formData.age,
      "bloodgroup":formData.bloodGroup,
      "contactnumber":formData.contactNumber,
      "street":formData.address.street,
      "city":formData.address.city,
      "state":formData.address.city
    }
    // let _header = new Headers();
    // _header.append("Content-Type","application/json");
    // return this._http.post(this.url+"/donors",formData)
    // .map(response =>{ response.json()})
    return this._http.post(this.url+"/donors",formData)
    .map((response:Response)=>response.json());
  }
}
