import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TodoModule} from './todo/todo.module';
import {CookieService} from 'ngx-cookie-service';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiesPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
