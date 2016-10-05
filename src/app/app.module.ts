import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';

import { routing, appRoutingProviders } from './app.routing';
import { PageNotFoundComponent } from "./page-not-found.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoPlayerComponent } from './demo-player/demo-player.component';
import { StartComponent } from './start/start.component';
import { GameService } from "./shared/game.service";
import { ValidationService } from './shared/validation.service';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
//import { FormsModule } from "@angular/forms";

//

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DemoPlayerComponent,
    StartComponent,
    ControlMessagesComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    GameService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
