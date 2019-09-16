import {Directive, Input} from '@angular/core';
import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';


@Directive({
  selector: '[appEmailvalidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailvalidationDirective, multi: true}]
})
export class EmailvalidationDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value !== null) {
      console.log(control);
      const atposition = control.value.indexOf('@');
      const dotposition = control.value.lastIndexOf('.');
      if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= control.value.length) {
        return {['notgood']: true};
      }
      return null;
    }
  }
  constructor() { }

}
