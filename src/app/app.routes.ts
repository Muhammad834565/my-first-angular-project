import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';

export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login1",component:Login1Component},
    {path:"login",component:LoginComponent},
    {path:"userlist",component:UserListComponent},
    {path:"user/:id",component:UserDetailComponent},
    {path:"ceasar_cipher",component:CaesarCipherComponent},
];
