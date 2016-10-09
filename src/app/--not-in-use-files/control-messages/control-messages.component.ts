// import { Component, Input } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// // import { ValidationService } from '../--not-in-use-files/validation.service';
//
// @Component({
//   selector: 'control-messages',
//   template: `
//     <div *ngIf="errorMessage !== null">{{errorMessage}}</div>
//   `,
//   styles: [`
//
// *{
//   color:red;
// }
//
//     /*control-messages div {*/
//       /*color: #E82C0C;*/
//       /*margin: 1px 0;*/
//     /*}*/
//
// `]
// })
// export class ControlMessagesComponent   {
//
//   // errorMessage: string;
//
//   @Input() control: FormControl;
//
//   constructor() { }
//
//   get errorMessage() {
//     for (let propertyName in this.control.errors) {
//       if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
//         // return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
//       }
//     }
//
//     return null;
//   }
//
// }
