import { Routes } from '@angular/router';
import { SitesComponent } from './_layout/sites/sites.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';


export const appRoutes: Routes = [

    {
        path: '',
        // redirectTo: '/login',
        // pathMatch: 'full',
        canActivate: [AuthGuard],
        component: SitesComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            // { path: 'results', component: ResultsComponent, pathMatch: 'full' },
        ]

    },

    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },


];