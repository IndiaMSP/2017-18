import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser:IUser
    constructor() { }
    loginUser(username:String, password:String){
        this.currentUser={
            id:1,
            firstName:'Sanidhya',
            lastName:'Mangal',
            userName:'Sandy1999'
        }
    }

    updateUser(firstName:string, lastName:string){
        this.currentUser.firstName= firstName,
        this.currentUser.lastName =lastName
    }
    isAuthenticated(){
        return !!this.currentUser
    }
}