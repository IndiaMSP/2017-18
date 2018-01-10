import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'form-login',
    templateUrl: 'app/user/login.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding-left:10px;}
    `]
})

export class LoginComponent implements OnInit {
    constructor(private authService:AuthService, private router:Router ) { }

    login(formValues){
        this.authService.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
    ngOnInit() { }
}