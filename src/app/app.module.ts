import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MobileModule } from './mobile/mobile.module';
import { RouterModule, Routes } from '@angular/router'
import { DesktopModule } from './desktop/desktop.module';



const appRoutes: Routes = [
  { path: 'mobile', loadChildren: './mobile/mobile.module#MobileModule' },
  { path: 'desktop', loadChildren: './desktop/desktop.module#DesktopModule' },
  // { path: '',
  //   redirectTo: '/mobile',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MobileModule,
    DesktopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
