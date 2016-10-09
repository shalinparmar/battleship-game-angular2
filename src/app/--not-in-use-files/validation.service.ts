// import { Injectable } from '@angular/core';
//
// @Injectable()
//
// export class ValidationService {
//   static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
//     let config = {
//       'required': 'חובה למלא שדה זה',
//       'invalidCreditCard': 'Is invalid credit card number',
//       'invalidEmailAddress': 'Invalid email address',
//       'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
//       'minlength': ` מינימום ${validatorValue.requiredLength} תווים `,
//       'invalidUniqueName': 'לא ניתן לבחור שני שמות זהים'
//     };
//
//     return config[validatorName];
//   }
//
//   static creditCardValidator(control) {
//     // Visa, MasterCard, American Express, Diners Club, Discover, JCB
//     if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
//       return null;
//     } else {
//       return { 'invalidCreditCard': true };
//     }
//   }
//
//   static emailValidator(control) {
//     // RFC 2822 compliant regex
//     if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
//       return null;
//     } else {
//       return { 'invalidEmailAddress': true };
//     }
//   }
//
//   static passwordValidator(control) {
//     // {6,100}           - Assert password is between 6 and 100 characters
//     // (?=.*[0-9])       - Assert a string has at least one number
//     if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
//       return null;
//     } else {
//       return { 'invalidPassword': true };
//     }
//   }
//
// /*
//   static uniqueNameValidator(control1, control2) {
//     let value1: string = control1.value.trim();
//     let value2: string = control2.value.trim();
//
//     if (value1 != value2) {
//       return null;
//     } else {
//       return { 'invalidUniqueName': true };
//     }
//   }
//
//
//   static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
//     return (group: ControlGroup): {[key: string]: any} => {
//       let password = group.controls[passwordKey];
//       let confirmPassword = group.controls[confirmPasswordKey];
//
//       if (password.value !== confirmPassword.value) {
//         return {
//           mismatchedPasswords: true
//         };
//       }
//     }
//   }
//
//   */
//
//
//
// }
