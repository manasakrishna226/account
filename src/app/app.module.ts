import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AccountformComponent } from './accountform/accountform.component';
import { EmailvalidationDirective } from './emailvalidation.directive';



@NgModule({
  declarations: [
    AppComponent,
    AccountformComponent,
    EmailvalidationDirective

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
