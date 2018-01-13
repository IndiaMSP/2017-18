import { Component, OnInit , Inject, Input , ViewChild , ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../common/jQuery.service';

@Component({
    selector: 'simple-modal',
    template: `
    <div id="{{elementId}}"  #modalcontainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
    `,
})

export class SimpleModalComponent implements OnInit {
    @Input() title:string
    @Input() elementId:string
    @Input() closeOnBodyClick:boolean = false

    @ViewChild('modalcontainer') containerEl:ElementRef
    constructor( @Inject(JQ_TOKEN) private $:any ) { }

    ngOnInit() { }  
    closeModal(){
      if (this.closeOnBodyClick) { 
        this.$(this.containerEl.nativeElement).modal('hide');
      }
    }
}