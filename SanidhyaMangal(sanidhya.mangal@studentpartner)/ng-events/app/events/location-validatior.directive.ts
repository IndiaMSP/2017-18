import { Directive } from '@angular/core';
import { Validator, FormGroup , NG_VALIDATORS } from '@angular/forms';

@Directive(
    { selector: '[validateLocation]' ,
     providers: [{provide:NG_VALIDATORS, useExisting:LocationValidator, multi:true}]}
)
export class LocationValidator implements Validator {

    constructor() { }

    validate(formgroup:FormGroup):{[key:string]:any}{
        let addressControl = formgroup.controls['address'];
        let cityControl = formgroup.controls['city'];
        let countryControl = formgroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formgroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value )||(onlineUrlControl && onlineUrlControl.value)) {
            return null
        } else {
            return {validateLocation : false }
        }
    }
}