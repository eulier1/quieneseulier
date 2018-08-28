import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SlickModule } from 'ngx-slick';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './porfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
