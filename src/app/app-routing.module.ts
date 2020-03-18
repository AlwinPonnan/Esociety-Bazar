import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { Userbodysection1Component } from './user/userbodysection1/userbodysection1.component';


const routes: Routes = [

  { path: '',component:Userbodysection1Component  },
  { path: 'user/userlogin',component: UserloginComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
