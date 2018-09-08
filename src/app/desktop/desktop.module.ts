import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ngx-gallery/core';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopComponent } from './desktop.component';
import { DesktopAboutComponent } from './desktop-about/desktop-about.component';
import { DesktopPortfolioComponent } from './desktop-portfolio/desktop-portfolio.component';
import { DesktopSkillComponent } from './desktop-skill/desktop-skill.component';
import { DesktopOtherComponent } from './desktop-other/desktop-other.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DesktopRoutingModule,
    ReactiveFormsModule,
    GalleryModule.forRoot()
  ],
  declarations: [DesktopComponent, DesktopAboutComponent, DesktopPortfolioComponent, DesktopSkillComponent, DesktopOtherComponent]
})
export class DesktopModule { }
