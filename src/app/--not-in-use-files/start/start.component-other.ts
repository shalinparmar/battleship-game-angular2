// import { Component, OnInit } from '@angular/core';
// import { GameService } from "../shared/game.service";
// import { Player } from "../shared/player";
//
//
//
// @Component({
//   selector: 'app-start',
//   template: `
//     <h2>
//       בחירת המשתתפים
//     </h2>
//
// <form #registrationForm="ngForm" (ngSubmit)="registerUsers(registrationForm.value)">
//
//      <div class="form-group">
//         <label for="name1">משתתף 1</label>
//
//         <input type="text" id="name1" class="form-control"
//            required minlength="2" maxlength="20"
//            name="name1" [(ngModel)]="player1.name"
//            placeholder="שם המשתתף הראשון"
//            #name1="ngModel">
//
//         <div *ngIf="name1.errors && (name1.dirty || name1.touched)" class="alert alert-danger">
//           <div [hidden]="!name1.errors.required">חובה לרשום שם משתתף</div>
//           <div [hidden]="!name1.errors.minlength">שם המשתתף חייב להיות לפחות 3 תווים</div>
//           <div [hidden]="!name1.errors.maxlength">שם המשתתף חייב להיות לפחות מקסימום 20  תווים</div>
//       </div>
//     </div>
//
//   <!--second -->
//
//     <div class="form-group">
//         <label for="name2">משתתף 2</label>
//
//         <input type="text" id="name2" class="form-control"
//            required minlength="2" maxlength="20"
//            name="name2" [(ngModel)]="player2.name"
//            placeholder="שם המשתתף השני"
//            #name2="ngModel">
//
//         <div *ngIf="name2.errors && (name2.dirty || name2.touched)" class="alert alert-danger">
//           <div [hidden]="!name2.errors.required">חובה לרשום שם משתתף</div>
//           <div [hidden]="!name2.errors.minlength">שם המשתתף חייב להיות לפחות 3 תווים</div>
//           <div [hidden]="!name2.errors.maxlength">שם המשתתף חייב להיות לפחות מקסימום 20  תווים</div>
//         </div>
//     </div>
//
//     <button type="submit" class="btn btn-success">המשך...</button>
//
//   <!--default/success-->
//
//     </form>
//     <hr>
//
//   `,
//   styles: [`
//   h2{
//     margin-top: 50px;
//   }
//
// input[type=text]{
//   max-width:300px;
//   margin-bottom: 20px;
// }
//
// /*.separator{
// height:18px;
// }*/
// `]
// })
// export class StartOtherComponent implements OnInit {
//
//   player1: Player;
//   player2: Player;
//
//   constructor(private gameService: GameService) {
//   }
//
//   ngOnInit() {
//     this.player1 = new Player();
//     this.player2 = new Player();
//
//
//     /*
//
//      */
//
//   }
//
//
//   registerUsers(usersData) {
//     let data = JSON.stringify(usersData);
//     debugger;
//     // this.http.post(CREATE_USER_ENDPOINT, data)
//     //   .subscribe(
//     //     data => alert('Your account has been created!'),
//     //     error => alert(error.json().message)
//     //   );
//   }
//
// }
