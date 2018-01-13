import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, IEvent } from '../events.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles:[`
    em{ float:right; color:#E5CS65; padding-left:10px;}
    .error input{background-color:#E3C3C5;}
    .glyphicon-fire{color:red}
    `]
})

export class CreateSessionComponent implements OnInit {
    @Output() CancelAddSession = new EventEmitter()
    @Output() AddNewSession = new EventEmitter()
    newSessionForm:FormGroup
    name:FormControl
    presenter:FormControl
    duration:FormControl
    level:FormControl
    abstract:FormControl
    constructor(private router:Router ) { }

    ngOnInit() { 
        this.name = new FormControl('',Validators.required),
        this.presenter = new FormControl('',Validators.required),
        this.duration = new FormControl('',Validators.required),
        this.level = new FormControl('',Validators.required),
        this.abstract= new FormControl('',[Validators.required,Validators.minLength(3),this.restrictedWords, Validators.maxLength(400)])
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })
    }
    saveSession(formValue){
        if (this.newSessionForm.valid) {
            let session:ISession={
                id:undefined,
                name:formValue.name,
                presenter:formValue.presenter,
                duration:formValue.duration,
                level:formValue.level,
                abstract:formValue.abstract,
                voters:[]
            }
            this.AddNewSession.emit(session)
        }else{
            this.router.navigate(['/events'])
        }
    }
    private restrictedWords(control:FormControl):{[key:string]: any} 
    {
        return control.value.includes('foo')
        ?{'restrictedWords':'foo'}
        :null    
    }

    cancel(){
        this.CancelAddSession.emit()
    }
}