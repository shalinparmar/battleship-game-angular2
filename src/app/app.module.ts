import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { Ship } from './shared/ship';


import { routing, appRoutingProviders } from './app.routing';
import { PageNotFoundComponent } from "./page-not-found.component";
import { DashboardComponent } from './dashboard/dashboard.component';
//

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    DashboardComponent,
    PlayerComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
