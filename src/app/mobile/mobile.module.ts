import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './porfolio/portfolio.component';
import { GalleryModule } from '@ngx-gallery/core';
import { SkillComponent } from './skill/skill.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MobileRoutingModule,
    GalleryModule.forRoot()
  ],
  declarations: [ MobileComponent, AboutComponent, PortfolioComponent, SkillComponent, OtherComponent]
})
export class MobileModule { }
