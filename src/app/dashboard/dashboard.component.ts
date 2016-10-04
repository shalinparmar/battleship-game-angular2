import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  template: `
 
 <div class="container">
  <h3>ברוך הבא למשחק הצוללות</h3>

  <button (click)="start()" class="btn btn-primary">התחל משחק</button>
</div>

  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  start() {
    this.router.navigate(['/start']);
  }
}
