import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: '', component: AuthenticationComponent,
    children: [
        { path: 'login', component: LoginComponent}
    ]
   },
];

export const AuthenticationRoutes = RouterModule.forChild(routes);
