/**
 * Created by yishai on 08/10/2016.
 */

import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateNotEqual][formControlName],[validateNotEqual][formControl],[validateNotEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true }
  ]
})
export class NotEqualValidator implements Validator {
  constructor( @Attribute('validateNotEqual') public validateNotEqual: string) {

  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value

    let v = c.value;

    // control value
    let e = c.root.get(this.validateNotEqual);

    // value not equal
    if (e && v == e.value ) {
      return {
        validateNotEqual: false
      }

    }

    // value not equal and reverse
    if (e && e.errors && v !== e.value ) {
      delete e.errors['validateNotEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value equal and reverse
    if (e && v === e.value  ) {
      e.setErrors({
        validateNotEqual: false
      })
    }

    return null;
  }
}
