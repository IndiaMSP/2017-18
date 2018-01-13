import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { DonorsService } from './../services/donors.service';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {

  constructor(private _donorService:DonorsService , private router:Router ) { }
  donors = []
  ngOnInit() {
    this._donorService.getDonors().subscribe(response=>{
      this.donors = response;
    },(error:Response)=>{
      this.router.navigate(['/**']);
      if(error.status==404){
        window.confirm('Sorry we cant Process right now please try again later')
      }else{
        window.confirm('Cant Process your request right now maybe connection error');
      }
    });
  }

}
