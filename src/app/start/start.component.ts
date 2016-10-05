import { Component, OnInit } from '@angular/core';
import { GameService } from "../shared/game.service";
import { Player } from "../shared/player";

import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: 'app-start',
  template: `
    <h2>
      בחירת המשתתפים
    </h2>
    
  <form [formGroup]="usersForm" (submit)="registerUsers()">
     <div class="form-group">
        <label for="name1">משתתף 1</label>
 
  
        <input type="text" id="name1" class="form-control"
           formControlName = "name1"            
           placeholder="שם המשתתף הראשון">

       <control-messages [control]="usersForm.controls.name1"></control-messages>

    </div>
  
  <!--second -->
  
    <div class="form-group">
    
    
        <label for="name2">משתתף 2</label>
  
        <input type="text" id="name2" class="form-control"
           formControlName = "name2"
           placeholder="שם המשתתף השני">
          
       <control-messages [control]="usersForm.controls.name2"></control-messages>   
    </div>
      
    <button type="submit" class="btn btn-success" [disabled]="!usersForm.valid">המשך...</button>
  
    </form>
    <hr>
    
  `,
  styles: [`
  h2{
    margin-top: 50px;
  }

input[type=text]{
  max-width:300px;
  /*margin-bottom: 20px;*/
}

 control-messages div {
      color: #E82C0C;
      margin: 1px 0;
    }

`]
})
export class StartComponent implements OnInit {

  usersForm:any;


  player1: Player;
  player2: Player;


  //private validationService: ValidationService

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {

    this.usersForm = this.formBuilder.group({
      // 'name':['', Validators.required],
      'name1':['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'name2':['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  ngOnInit() {
    this.player1 = new Player();
    this.player2 = new Player();


/*

*/

  }



  registerUsers() {
    if (this.usersForm.dirty && this.usersForm.valid) {
      alert(`Name1: ${this.usersForm.value.name1} Name2: ${this.usersForm.value.name2}`);
    }
    // let data = JSON.stringify(usersData);
    debugger;
    // this.http.post(CREATE_USER_ENDPOINT, data)
    //   .subscribe(
    //     data => alert('Your account has been created!'),
    //     error => alert(error.json().message)
    //   );
  }

}
