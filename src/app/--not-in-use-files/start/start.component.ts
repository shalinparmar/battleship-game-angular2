// import { Component, OnInit } from '@angular/core';
// import { GameService } from "../shared/game.service";
// import { Player } from "../shared/player";
//
// import { Users } from "../shared/users.interface";
// import { Router } from "@angular/router";
//
//
// @Component({
//   selector: 'app-start',
//   template: `
//     <h2>
//       בחירת המשתתפים
//     </h2>
//
//   <form #f="ngForm" novalidate (ngSubmit)="registerUsers(f.value, f.valid)">
//
//      <div class="form-group">
//         <label for="name1">משתתף 1</label>
//
//           <input type="text" class="form-control"
//               name="name1" #name1="ngModel"
//               [ngModel]="users.name1"
//               required validateNotEqual="name2"
//               minlength="3"
//               placeholder="שם המשתתף הראשון">
//
//           <div [hidden]="name1.valid || (name1.pristine && !f.submitted || !name1.errors.required)" class="text-danger bg-danger">
//             חובה לבחור שם משתמש.
//           </div>
//           <div [hidden]="name1.valid || (name1.pristine && !f.submitted || !name1.errors.minlength)" class="text-danger bg-danger">
// שם המשתמש לפחות 3 תווים.
//           </div>
//           <div [hidden]="name1.valid || (name1.pristine && !f.submitted)" class="text-danger bg-danger">
//             שם המשתמש שונה משם המשתתף השני.
//           </div>
//     </div>
//
//      <div class="form-group">
//         <label for="name2">משתתף 2</label>
//
//           <input type="text" class="form-control"
//               name="name2" #name2="ngModel"
//               [ngModel]="users.name2"
//               required validateNotEqual="name1"
//               minlength="3"
//               placeholder="שם המשתתף השני">
//
//           <div [hidden]="name2.valid || (name2.pristine && !f.submitted || !name2.errors.required)" class="text-danger bg-danger">
//             חובה לבחור שם משתמש.
//           </div>
//           <div [hidden]="name2.valid || (name2.pristine && !f.submitted || !name2.errors.minlength)" class="text-danger bg-danger">
// שם המשתמש לפחות 3 תווים.
//           </div>
//           <div [hidden]="name2.valid || (name2.pristine && !f.submitted)" class="text-danger bg-danger">
//             שם המשתמש שונה משם המשתתף הראשון.
//           </div>
//     </div>
//
//     <button type="submit" class="btn btn-success" [disabled]="!f.valid">המשך...</button>
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
// .bg-danger{
//   max-width:300px;
// }
//
// input[type=text]{
//   max-width:300px;
// }
//
//  control-messages div {
//       color: #E82C0C;
//       margin: 1px 0;
//     }
//
// .margin-20 {
//     margin-top: 20px;
// }
//
// `]
// })
// export class StartComponent implements OnInit {
//
//   public users: Users;
//
//   constructor(private gameService: GameService,
//               private router: Router) {
//
//   }
//
//   ngOnInit(): void {
//
//     this.users = {
//       name1: '',
//       name2: ''
//     }
//
//   }
//
//
//   registerUsers(model: Users, isValid: boolean): void {
//     this.gameService.registerPlayers(model.name1, model.name2)
//
//     this.router.navigate(['choose-location/1']);
//   }
//
// }
