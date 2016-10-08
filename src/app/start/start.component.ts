import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/game.service";
import { Player } from "../shared/player";

import { Users } from "../shared/users.interface";

// import { FormBuilder, Validators } from '@angular/forms';
// import { ValidationService } from '../shared/validation.service';
// import { EqualValidator } from './equal-validator.directive';

// directives: [EqualValidator],

@Component({
  selector: 'app-start',
  template: `
    <h2>
      בחירת המשתתפים
    </h2>
    
  <!--<form [formGroup]="usersForm" (submit)="registerUsers()" novalidate>-->
  <form #f="ngForm" novalidate (ngSubmit)="registerUsers(f.value, f.valid)">
    
     <div class="form-group">
        <label for="name1">משתתף 1</label>
 
          <input type="text" class="form-control" 
              name="name1" #name1="ngModel"
              [ngModel]="users.name1"
              required validateNotEqual="name2"
              minlength="3"
              placeholder="שם המשתתף הראשון">

          <small [hidden]="name1.valid || (name1.pristine && !f.submitted || !name1.errors.required)" class="text-danger">
            חובה לבחור שם משתמש.
          </small>
          <small [hidden]="name1.valid || (name1.pristine && !f.submitted || !name1.errors.minlength)" class="text-danger">
שם משתמש לפחות 3 תווים.
          </small>
          <small [hidden]="name1.valid || (name1.pristine && !f.submitted)" class="text-danger">
            שם משתמש שונה משם המשתתף השני.
          </small>
    </div>
    
       <!--<control-messages [control]="usersForm.controls.name1"></control-messages>-->
       
     <div class="form-group">
        <label for="name2">משתתף 2</label>
 
          <input type="text" class="form-control" 
              name="name2" #name2="ngModel"
              [ngModel]="users.name2"
              required validateNotEqual="name1" 
              minlength="3"
              placeholder="שם המשתתף השני">

          <small [hidden]="name2.valid || (name2.pristine && !f.submitted || !name2.errors.required)" class="text-danger">
            חובה לבחור שם משתמש.
          </small>
          <small [hidden]="name2.valid || (name2.pristine && !f.submitted || !name2.errors.minlength)" class="text-danger">
שם משתמש לפחות 3 תווים.
          </small>
          <small [hidden]="name2.valid || (name2.pristine && !f.submitted)" class="text-danger">
            שם משתמש שונה משם המשתתף הראשון.
          </small>
    </div>
    
       
  <!--
  
  
     <div class="form-group">
      <label for="">Name1</label>
      <input type="text" class="form-control" 
             name="name1" [ngModel]="user.name1"
             required validateNotEqual="name2" #name1="ngModel">
      <small [hidden]="name1.valid || (name1.pristine && !f.submitted)" class="text-danger">
        name1 is required
      </small>
    </div>
  &lt;!&ndash;second &ndash;&gt;
  
    <div class="form-group">
    
        <label for="name2">משתתף 2</label>
  
        <input type="text" 
            id="name2" class="form-control"
            formControlName = "name2"
            placeholder="שם המשתתף השני">
  
                             
       <control-messages [control]="usersForm.controls.name2"></control-messages>   
    </div>
      -->
    <button type="submit" class="btn btn-success" [disabled]="!f.valid">המשך...</button>
  
    </form>
    <hr>
    
  `,
  styles: [`
  h2{
    margin-top: 50px;
  }

input[type=text]{
  max-width:300px;
}

 control-messages div {
      color: #E82C0C;
      margin: 1px 0;
    }

.margin-20 {
    margin-top: 20px;
}

`]
})
export class StartComponent implements OnInit {

  public users: Users;


  // usersForm: any;

  player1: Player;
  player2: Player;

  //private validationService: ValidationService

  constructor(              private gameService: GameService) {
  // private formBuilder: FormBuilder,

    // this.usersForm = this.formBuilder.group({
    //   // 'name':['', Validators.required],
    //   'name1': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    //   'name2': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    // });
  }

  // { validator: this.matchingPasswords('name1', 'name2') }

  ngOnInit() {
    this.player1 = new Player();
    this.player2 = new Player();

    this.users = {
      name1: '',
      name2: ''
    }

  }


  /*

   matchPassword(group): any {
   // debugger;
   let controls = group._parent. controls;

   let password = controls.name1;
   let confirm = controls.name2;

   // Don't kick in until user touches both fields
   // if (password.pristine || confirm.pristine) {
   //   return null;
   // }

   // Mark group as touched so we can add invalid class easily
   // group._parent.markAsTouched();
   debugger;
   if (password.value === confirm.value) {
   return null;
   }

   return {
   isValid: false
   };
   }

   matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
   return (group: any): {[key: string]: any} => {
   let password = group.controls[passwordKey];
   let confirmPassword = group.controls[confirmPasswordKey];

   if (password.value !== confirmPassword.value) {
   return {
   mismatchedPasswords: true
   };
   }
   };
   }
   */

  registerUsers(model: Users, isValid: boolean) {
    alert(`Name1: ${model.name1} Name2: ${model.name2}`);
    /*if (this.usersForm.dirty && this.usersForm.valid) {
     alert(`Name1: ${this.usersForm.value.name1} Name2: ${this.usersForm.value.name2}`);
     }
     */
    // let data = JSON.stringify(usersData);
    debugger;
    // this.http.post(CREATE_USER_ENDPOINT, data)
    //   .subscribe(
    //     data => alert('Your account has been created!'),
    //     error => alert(error.json().message)
    //   );
  }

}
