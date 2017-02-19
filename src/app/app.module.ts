import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }