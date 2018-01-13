import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { BanksService } from './../../services/banks.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-banks',
  templateUrl: './register-banks.component.html',
  styleUrls: ['./register-banks.component.css']
})
export class RegisterBanksComponent implements OnInit {
public registerBanksForm:FormGroup;
  constructor(private _bankService:BanksService , private router:Router ) { }
  ngOnInit() {
    this.registerBanksForm = new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      ownerName: new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      type:new FormControl('',Validators.required),
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
    return this.registerBanksForm.get('name');
  }
  get ownerName(){
    return this.registerBanksForm.get('ownerName');
  }
  get type(){
    return this.registerBanksForm.get('type');
  }
  get street(){
    return this.registerBanksForm.get('address.street');
  }
  get city(){
    return this.registerBanksForm.get('address.city');
  }
  get state(){
    return this.registerBanksForm.get('address.state');
  }
  registerBanks(){
    let registerFormValue = this.registerBanksForm.value;
    this._bankService.registerBank(registerFormValue)
    .subscribe((res)=>{
      if(res.id != null ){
        this.router.navigate(['/banks']);
      }
    },(error:Response)=>{
      window.confirm('You are not connected to Internet so can\'t Process your request try again after some time');
      this.router.navigate(['/cantpost']);
    });
  }
}
