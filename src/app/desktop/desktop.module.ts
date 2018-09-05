import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopComponent } from './desktop.component';
import { DesktopAboutComponent } from './desktop-about/desktop-about.component';
import { DesktopPortfolioComponent } from './desktop-portfolio/desktop-portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    DesktopRoutingModule
  ],
  declarations: [DesktopComponent, DesktopAboutComponent, DesktopPortfolioComponent]
})
export class DesktopModule { }
