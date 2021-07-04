import { LoginModule } from './pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbButtonsModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiisComponent } from './pages/fiis/fiis/fiis.component';

@NgModule({
  declarations: [
    AppComponent,
    FiisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbButtonsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
