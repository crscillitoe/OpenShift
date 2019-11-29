import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { WebviewComponent } from './webview/webview.component';
import { EmbeddedAppComponent } from './embedded-app/embedded-app.component';

@NgModule({
  declarations: [HomeComponent, WebviewComponent, EmbeddedAppComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, MaterialModule]
})
export class HomeModule {}
