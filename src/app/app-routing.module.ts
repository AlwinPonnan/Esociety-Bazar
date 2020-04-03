import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { Userbodysection1Component } from './user/userbodysection1/userbodysection1.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';


const routes: Routes = [

  { path: '',component:Userbodysection1Component  },
  { path: 'user/userlogin',component: UserloginComponent  },
  { path: 'user/userregister',component: UserRegisterComponent  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
