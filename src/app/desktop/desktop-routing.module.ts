import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: 'desktop', component: DesktopComponent },
  { path: 'desktop',
    redirectTo: '/desktop',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
