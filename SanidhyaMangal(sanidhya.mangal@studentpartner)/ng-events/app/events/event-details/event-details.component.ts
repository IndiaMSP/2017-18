import { Component, OnInit } from '@angular/core';
import { EventService } from '../events.service';
import { IEvent } from '../events.model';

import { ActivatedRoute , Params } from '@angular/router';

@Component({
    templateUrl:'/app/events/event-details/event-details.component.html',
    styles:[`
    .container{margin-left:20px; margin-right:20px;}
    .event-image{height:100px;}
    a{cursor:pointer;}
    .active{background:#171a1d}
    `]
})

export class EventDetailsComponent implements OnInit {
    event:IEvent
    addMode:boolean
    filterBy:string = 'all';
    sortBy:string = 'votes'
    constructor(private eventService: EventService, private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params:Params)=>{
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });
     }
     
    addSession(){
        this.addMode=true
    }

    ExitCreateSession(){
        this.addMode=false
    }
    saveSession(session){
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
        session.id = nextId+1;
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false;
    }
}