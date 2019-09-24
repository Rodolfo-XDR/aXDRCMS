import { globalRoutesNames } from '../../global.routes.names';
import { Routes } from '@angular/router';

import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';

import { GUEST_ROUTES } from './guest.routes';
import { USER_ROUTES } from './user.routes';

import { Error404Component } from '../components/other/error404/error404.component';
import { UserComponent } from '../components/user/user.component';
import { GuestComponent } from '../components/guest/guest.component';
import { AcpComponent } from '../components/user/acp/acp.component';
import { ClientComponent } from '../components/user/client/client.component';

export const APP_ROUTES: Routes = [
    { 
        path: globalRoutesNames.GUEST.url, 
        component: GuestComponent, 
        children: GUEST_ROUTES, 
        data: {
            hasMenuContent: true,
            title: globalRoutesNames.GUEST.title
        }
    },
    { 
        path: globalRoutesNames.USER.url, 
        component: UserComponent, 
        children: USER_ROUTES, 
        data: { 
            hasMenuContent: true,
            title: globalRoutesNames.USER.title 
        }, 
        canActivateChild: [AuthenticatedGuard] 
    },
    { 
        path: 'client', 
        component: ClientComponent, 
        data: { 
            title: "Client" 
        }, 
        canActivateChild: [AuthenticatedGuard] 
    },
    { 
        path: 'acp', 
        component: AcpComponent, 
        data: { 
            title: 'Admin Control Panel' 
        }, 
        canActivateChild: [AuthenticatedGuard] 
    }, 
    { 
        path: '**', 
        component: Error404Component 
    }
]