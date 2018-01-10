import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router } from '@angular/router';
import { EventService } from './events.service';

@Injectable()
export class EventRouteActivaor implements CanActivate{

    constructor( private eventService:EventService, private router:Router ) { }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExsist = !!this.eventService.getEvent(+route.params['id'])

        if(!eventExsist){
            this.router.navigate(['/404'])
        }return eventExsist
    }
}