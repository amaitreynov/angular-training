import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule}   from '@angular/router';

import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {LogoComponent} from './logo/logo.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {UserslistComponent} from './userslist/userslist.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserService} from "./user.service";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LogoComponent,
    MenuComponent,
    SidebarComponent,
    UserslistComponent,
    UserDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UserslistComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
