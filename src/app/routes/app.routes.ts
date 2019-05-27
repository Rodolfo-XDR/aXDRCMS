import { globalRoutesNames } from '../../global.routes.names';
import { Routes } from '@angular/router';

import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';

import { GUEST_ROUTES } from './guest.routes';
import { USER_ROUTES } from './user.routes';

import { Error404Component } from '../components/other/error404/error404.component';
import { UserComponent } from '../components/user/user.component';

export const APP_ROUTES: Routes = [
    {
        path: globalRoutesNames.DEFAULT.url,
        children: GUEST_ROUTES, 
        canActivateChild: [UnauthenticatedGuard]
    },
    {
        path: globalRoutesNames.DEFAULT.url,
        component: UserComponent,
        children: USER_ROUTES,
        canActivateChild: [AuthenticatedGuard]
    },
    {
        path: '**',
        component: Error404Component
    }
]