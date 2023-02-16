import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllActivityComponent } from './all-activity/all-activity.component';
import { CampComponent } from './camp/camp.component';
import { SemesterComponent } from './semester/semester.component';
import { RecaptchaModule } from 'ng-recaptcha'
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AllActivityComponent,
    CampComponent,
    SemesterComponent,
    ProductComponent,
  ],
  imports: [
    RecaptchaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
