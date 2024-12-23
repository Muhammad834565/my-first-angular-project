import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { CaesarCipherComponent } from './Cryptography/caesar-cipher/caesar-cipher.component';
import { PolyAlphabeticCipherComponent } from './Cryptography/poly-alphabetic-cipher/poly-alphabetic-cipher.component';
import { VigenereCipherComponent } from './Cryptography/vigenere-cipher/vigenere-cipher.component';
import { AdvanceVigenereCipherComponent } from './Cryptography/advance-vigenere-cipher/advance-vigenere-cipher.component';
import { OneTimePadCipherComponent } from './Cryptography/one-time-pad-cipher/one-time-pad-cipher.component';
import { PlayFairSquareCipherComponent } from './Cryptography/play-fair-square-cipher/play-fair-square-cipher.component';
import { RailFenceCipherComponent } from './Cryptography/rail-fence-cipher/rail-fence-cipher.component';
import { HillCipherComponent } from './Cryptography/hill-cipher/hill-cipher.component';
import { RowColumnCipherComponent } from './Cryptography/row-column-cipher/row-column-cipher.component';
import { HillciphertestComponent } from './Cryptography/hillciphertest/hillciphertest.component';


export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login1",component:Login1Component},
    {path:"login",component:LoginComponent},
    {path:"userlist",component:UserListComponent},
    {path:"user/:id",component:UserDetailComponent},
    {path:"ceasar_cipher",component:CaesarCipherComponent},
    {path:"poly_alphabetic_cipher",component:PolyAlphabeticCipherComponent},
    {path:"vigenere_cipher",component:VigenereCipherComponent},
    {path:"Advance_vigenere_cipher",component:AdvanceVigenereCipherComponent},
    {path:"one_time_pad_cipher",component:OneTimePadCipherComponent},
    {path:"play_fair_square_cipher",component:PlayFairSquareCipherComponent},
    {path:"rail_fence_cipher",component:RailFenceCipherComponent},
    {path:"hill_cipher",component:HillCipherComponent},
    //{path:"hill_cipher",component:HillciphertestComponent},
    {path:"row_column_cipher",component:RowColumnCipherComponent},
    
];
