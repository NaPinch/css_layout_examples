import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './frame/side-nav/side-nav.component';
import { HeaderNavComponent } from './frame/header-nav/header-nav.component';
import { HeaderLogoComponent } from './frame/header-logo/header-logo.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderNavComponent,
    HeaderLogoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
