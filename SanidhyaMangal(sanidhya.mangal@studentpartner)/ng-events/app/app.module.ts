import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './event-app.component';
import { EventslistComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/eventsthumbanial.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/events.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionsListComponent } from './events/sessions-list.component';
import { CollapsibleWellComponent } from './events/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { UpvoteComponent } from './events/event-details/upvote.component';

import { DurationPipe } from './events/duration.pipe';
import { EventRouteActivaor } from './events/event-route-activator.service';
import { EventsListResolver } from './events/event-list-resolver.service';
import { appRoute } from './routes';
import { AuthService } from './user/auth.service';
import { VoterService } from './events/event-details/voters.service';

import { TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModelTriggerDirective } from './common/modal-trigger.directive';
import { LocationValidator } from './events/location-validatior.directive';

declare let toastr:any;
declare let jQuery:Object;
// import { AppRoutingModule } from './App.routing'; //TODO: Create App.routing

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoute)
    
    ],
    declarations: [
        EventsAppComponent,
        EventThumbnailComponent,
        EventslistComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionsListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModelTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],
    providers: [
        EventService,
        {
            provide:TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide:JQ_TOKEN,
            useValue:jQuery
        }, 
        EventRouteActivaor,
        {
            provide:'deactivateCreateEvent',
            useValue:checkDirtyState
        },
        EventsListResolver,
        AuthService,
        VoterService
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty){
        return window.confirm('Event is not saved do you really want to return back??')
    }return true
}