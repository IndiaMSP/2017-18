import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { DonorsService } from './../../services/donors.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs';

@Component({
  selector: 'register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {

  public registerDonorsForm:FormGroup;
  constructor( private _donorService:DonorsService , private router:Router) { }

  ngOnInit() {
    this.registerDonorsForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      age: new FormControl('',[
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.min(18)
      ]),
      bloodGroup: new FormControl('',[
        Validators.required,
        Validators.pattern('[abo]{1,2}[+-]')
      ]),
      contactNumber: new FormControl('',[
        Validators.required,
        Validators.pattern('[789][0-9]*'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      address:new FormGroup({
        street: new FormControl('',[
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50)
        ]),
        city: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]),
        state: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ])
      })
    });
  }
  get name(){
    return this.registerDonorsForm.get('name');
  }
  get age(){
    return this.registerDonorsForm.get('age');
  }
  get bloodGroup(){
    return this.registerDonorsForm.get('bloodGroup');
  }
  get contactNumber(){
    return this.registerDonorsForm.get('contactNumber');
  }
  get street(){
    return this.registerDonorsForm.get('address.street');
  }
  get city(){
    return this.registerDonorsForm.get('address.city');
  }
  get state(){
    return this.registerDonorsForm.get('address.state');
  }
  registerDonor(){
    let value =  this.registerDonorsForm.value;
    this._donorService.registerDonor(value)
    .subscribe((res)=>{
      console.log(res);
      if(res.id != null ){
        this.router.navigate(['/donors']);
      }
    },(error:Response)=>{
      window.confirm('You are not connected to Internet so can\'t Process your request try again after some time');
      this.router.navigate(['/cantpost']);
    });
  }
}
