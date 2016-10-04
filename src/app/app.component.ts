import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
<h1>
  {{title}}
</h1>


<nav>
  <!--<a routerLink="/dashboard" routerLinkActive="active">מסך ראשי</a>-->
  <a class="btn btn-primary" routerLink="/demo-player" routerLinkActive="active">ניסיון</a>
  
  
  <a class="btn btn-primary" routerLink="/dashboard" routerLinkActive="active">מסך ראשי</a>  
  <a class="btn btn-primary" routerLink="/start" routerLinkActive="active">תחילת משחק</a>
  
   
   
</nav>

<router-outlet></router-outlet>


`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'משחק צוללות';
}
