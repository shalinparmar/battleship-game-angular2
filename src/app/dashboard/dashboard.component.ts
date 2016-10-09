import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  template: `
 
 <div class="container">
  <h3>ברוך הבא למשחק הצוללות</h3>

  <button (click)="start()" class="btn btn-primary" id="btnStart">התחל משחק</button>
</div>

  `,
  styles: [`
#btnStart{
  position: relative;
  top: 150px;
}


`]
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  start(): void {
    this.router.navigate(['/start']);
  }
}
