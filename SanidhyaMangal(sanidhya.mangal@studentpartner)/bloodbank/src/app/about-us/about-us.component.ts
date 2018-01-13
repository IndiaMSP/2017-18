import { Router } from '@angular/router';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private _contactService:ContactService, private router:Router) { }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get feedBack(){
    return this.contactForm.get('feedBack');
  }
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(30)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]) ,
      feedBack: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  sendFeedback(){
    let feedbackValue = this.contactForm.value;
    this._contactService.submitFeedback(feedbackValue).subscribe(res=>{
      if(res.id != null){
        window.confirm('We have sent your query, Will answer you Asap');
      }
    },(error:Response)=>{
      if(error.status==404){
        window.confirm('Sorry we cant Process right now please try again later')
      }else{
        window.confirm('Cant Process your request right now maybe connection error');
      }
    });
    this.router.navigate(['']);
  }
}
