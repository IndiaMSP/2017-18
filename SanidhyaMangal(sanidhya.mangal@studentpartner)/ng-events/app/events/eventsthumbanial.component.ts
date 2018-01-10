import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './events.model';

@Component({
    selector: 'events-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name | uppercase}}</h2>
      <div>Date: {{event.date | date:'shortDate'}}</div>
      <div [ngClass]="getTimeClass()" [ngSwitch]="event?.time">Time: {{event.time}}
        <span *ngSwitchCase="'8:00 am'" >(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'" >(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price:{{event.price | currency:'INR':true}}</div>
      <div *ngIf="event.location">
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
    </div>
  `,
  styles:[`
    .thumbnail{min-height:210px; }
    .pad-left{margin-left:10px;}
    .well div{color:#bbb;},
    .green{color:#003300 !important;}
    .bold{font-weight:bold;}
  `],
})

export class EventThumbnailComponent implements OnInit {
    @Input() event:IEvent
    constructor() { }

    ngOnInit() {
     }

    getTimeClass(){
        const isEarlyStart = this.event && this.event.time==='8:00 am'
        return{green:isEarlyStart, bold:isEarlyStart}
    }
}