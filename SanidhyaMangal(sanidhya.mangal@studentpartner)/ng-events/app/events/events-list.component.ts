import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventService } from './events.service';
import { IEvent } from './events.model';

@Component({
    selector: 'events-list',
    template:`
    <div>
        <h1>Upcoming Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <events-thumbnail [event]="event" ></events-thumbnail>
            </div>
        </div>
    </div>

    `
})

export class EventslistComponent implements OnInit {
    events:IEvent[]
    constructor(private eventService: EventService, private route:ActivatedRoute) { }

    ngOnInit() {
         this.events= this.route.snapshot.data['events']
     }
}