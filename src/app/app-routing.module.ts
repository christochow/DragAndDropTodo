import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CookiesPolicyComponent} from './cookies-policy/cookies-policy.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'cookie', component: CookiesPolicyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
