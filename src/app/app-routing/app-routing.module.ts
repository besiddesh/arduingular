import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';

import { AppComponent } from '../app.component';
import { HolamundoComponent } from '../holamundo/holamundo.component';
import { MenuComponent } from '../menu/menu.component';

const routes: Routes=[
  {path: 'holamundo', component: HolamundoComponent},
  {path: 'menu',component: AppComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
