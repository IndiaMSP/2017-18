import { Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class ContactService {
  private url = "http://127.0.0.1:8000/api"
  constructor(private _http:Http) { }

  submitFeedback(data){
    data={
      "name":data.name,
      "email":data.email,
      "feedback":data.feedBack
    }
    let _headers = new Headers();
    _headers.append("Content-Type","application/json");
    return this._http.post(this.url+"/feedback",data,{headers:_headers})
      .map((response:Response) => response.json());
  }
}