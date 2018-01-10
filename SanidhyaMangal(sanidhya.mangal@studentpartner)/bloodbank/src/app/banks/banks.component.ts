import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { BanksService } from './../services/banks.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  constructor(private _bankService:BanksService , private router: Router) { }
  banks = [];
  ngOnInit() {
    this._bankService.getBanks()
      .subscribe(response =>{
         this.banks = response;
      },(error:Response)=>{
        this.router.navigate(['**'])
        if(error.status==404){
          window.confirm('Sorry This can\'t be Processed right now');
        }else{
          window.confirm('You are not connect to our server so kindly check your Internet');
        }
      });
    
  }

}
