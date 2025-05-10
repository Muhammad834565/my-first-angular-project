import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntrepreneeursListComponent } from './entrepreneeurs-list/entrepreneeurs-list.component';
import { InvestorsListComponent } from './investors-list/investors-list.component';
import { InvestorsDetailComponent } from './investors-detail/investors-detail.component';
import { EntrepreneeursDetailComponent } from './entrepreneeurs-detail/entrepreneeurs-detail.component';
import { RoleGuard } from './role.guard'
import { ChatComponent } from './chat/chat.component';
import { SigupComponent } from './sigup/sigup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigupComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'profile', component: ProfileComponent},
  // Routes only for Investors
  {
    path: 'entrepreneurs',
    component: EntrepreneeursListComponent,
    canActivate: [RoleGuard],
    data: { role: 'Investor' }
  },
  {
    path: 'entrepreneurs/:id',
    component: EntrepreneeursDetailComponent,
    canActivate: [RoleGuard],
    data: { role: 'Investor' }
  },

  // Routes only for Entrepreneurs
  {
    path: 'investors',
    component: InvestorsListComponent,
    canActivate: [RoleGuard],
    data: { role: 'Entrepreneur' }
  },
  {
    path: 'investors/:id',
    component: InvestorsDetailComponent,
    canActivate: [RoleGuard],
    data: { role: 'Entrepreneur' }
  },


];

// // 🔄 Conditionally add entrepreneur routes
// if (localStorage.getItem('role') === 'Investor') {
//   routes.push(
//     { path: 'entrepreneurs', component: EntrepreneeursListComponent },
//     { path: 'entrepreneurs/:id', component: EntrepreneeursDetailComponent }
//   );
// }if (localStorage.getItem('role') === 'Entrepreneur'){
//      routes.push(
//       { path: 'investors', component: InvestorsListComponent },
//      { path: 'investors/:id', component: InvestorsDetailComponent },
//   );
// }

export { routes };
