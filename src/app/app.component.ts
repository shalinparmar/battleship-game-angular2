import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div class="container" dir="rtl">
  <h1>
    {{title}}
  </h1>
  
  
  <nav>
  <!--
    <a class="btn btn-danger" routerLink="/demo-player" routerLinkActive="active">ניסיון</a>
    <a class="btn btn-danger" routerLink="/play-game-demo" routerLinkActive="active">משחק-דמו</a>
  -->  
    <a class="btn btn-primary" routerLink="/dashboard" routerLinkActive="active">מסך ראשי</a>  
    <a class="btn btn-primary" routerLink="/set-players" routerLinkActive="active">תחילת משחק</a>
     
  </nav>
  
  <router-outlet></router-outlet>
</div>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'משחק צוללות';
}
