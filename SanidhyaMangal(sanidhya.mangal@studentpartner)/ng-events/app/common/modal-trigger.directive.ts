import { Directive , Inject , OnInit , ElementRef , Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({ selector: '[modal-trigger]'})
export class ModelTriggerDirective {
    @Input('modal-trigger') modalId:string
    el:HTMLElement
    constructor(private ref:ElementRef , @Inject(JQ_TOKEN) private $:any) { 
        this.el = ref.nativeElement
    }
    ngOnInit(){
        this.el.addEventListener('click', e=>{
             this.$(`#${this.modalId}`).modal({})
        })
    }
}