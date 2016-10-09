import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BoardComponent } from "./board/board.component";
import { DemoPlayerComponent } from "./demo-player/demo-player.component";
import { StartComponent } from "./start/start.component";
import { ChooseLocationsComponent } from "./choose-locations/choose-locations.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  // { path: 'dashboard', component: DashboardComponent },
  { path: 'board', component: BoardComponent },
  { path: 'start', component: StartComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'choose-location/:id', component: ChooseLocationsComponent },
  { path: 'demo-player', component: DemoPlayerComponent },


  { path: '**', component: PageNotFoundComponent }
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

