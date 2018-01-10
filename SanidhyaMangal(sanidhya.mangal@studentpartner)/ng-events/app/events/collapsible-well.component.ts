import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div class="well pointable" (click)="toggleContent()">
    <ng-content select="[well-title]"></ng-content>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleWellComponent implements OnInit {
    visible:boolean = true
    constructor() { }
    ngOnInit() { }

    toggleContent(){
        this.visible = !this.visible
    }
}