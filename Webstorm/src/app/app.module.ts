import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {AuthService} from "./auth/auth.service";
import { HttpModule } from '@angular/http';
import { SelectWorkAreaComponent } from './select-work-area/select-work-area.component';
import { CreateOrderComponent } from './create-order/create-order.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SelectWorkAreaComponent,
    CreateOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
