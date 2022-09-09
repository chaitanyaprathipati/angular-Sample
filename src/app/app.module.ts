import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { RoutingModule } from './app-routing.module';
import { ReturnsComponent } from './returns/returns.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    GlobalHeaderComponent,
    ReturnsComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
