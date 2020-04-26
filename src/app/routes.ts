import { Routes } from '@angular/router';
import { SitesComponent } from './_layout/sites/sites.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

import { ProfileComponent } from './profile/profile.component';
import { ResultComponent } from './result/result.component';
import { AttendanceComponent } from './attendance/attendance.component';


export const appRoutes: Routes = [

    {
        path: '',
        // redirectTo: '/login',
        // pathMatch: 'full',
        canActivate: [AuthGuard],
        component: SitesComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
            { path: 'results', component: ResultComponent },
            { path: 'attendance', component: AttendanceComponent },
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