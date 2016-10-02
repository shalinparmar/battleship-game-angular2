import { Component } from '@angular/core';
import { BoardComponent} from './board/board.component';
import { PlayerComponent} from './player/player.component';
import { DashboardComponent} from './dashboard/dashboard.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
