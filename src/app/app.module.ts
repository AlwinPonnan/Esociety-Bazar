import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareSocietiesComponent } from './compare-societies/compare-societies.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserfooterComponent } from './user/userfooter/userfooter.component';
import { Userbodysection1Component } from './user/userbodysection1/userbodysection1.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareSocietiesComponent,
    UserHeaderComponent,
    UserfooterComponent,
    Userbodysection1Component,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
