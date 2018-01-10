import { EventslistComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivaor } from './events/event-route-activator.service';
import { EventsListResolver } from './events/event-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';


import { Routes } from '@angular/router';

export const appRoute:Routes=[
    { path: 'events/new', component: CreateEventComponent,canDeactivate:['deactivateCreateEvent']},
    { path: 'events', component: EventslistComponent, resolve:{events:EventsListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivaor] },
    { path: '', pathMatch: 'full', redirectTo: '/events' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'events/sessions/new', component: CreateSessionComponent },
]