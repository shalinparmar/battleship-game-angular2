import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from "./Dashboard/dashboard.component";
import { BoardComponent } from "./board/board.component";
import { PlayerComponent } from "./player/player.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/player',
    pathMatch: 'full'
  },

  // { path: 'dashboard', component: DashboardComponent },
  { path: 'board', component: BoardComponent },
  { path: 'player', component: PlayerComponent},

  { path: 'start', component: PlayerComponent},
  { path: '**', component: PageNotFoundComponent }
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

