import { globalRoutesNames } from 'src/global.routes.names';

import { LoginComponent } from '../components/guest/login/login.component';
import { RegisterComponent } from '../components/guest/register/register.component';
import { CommunityComponent } from '../components/user/community/community.component';
import { COMMUNITY_ROUTES } from './community.routes';
import { DISCOVER_ROUTES } from './discover.routes';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UnauthenticatedGuard } from '../guards/unauthenticated.guard';

export const GUEST_ROUTES = [
    { 
        path: globalRoutesNames.GUEST.children.LOGIN.url, 
        component: LoginComponent, 
        data: { 
            title: globalRoutesNames.GUEST.children.LOGIN.title, 
            onlyGuest: globalRoutesNames.GUEST.children.LOGIN.onlyGuest 
        },
        canActivate: [UnauthenticatedGuard] 
    },
    { 
        path: globalRoutesNames.GUEST.children.REGISTER.url, 
        component: RegisterComponent, 
        data: { 
            title: globalRoutesNames.GUEST.children.REGISTER.title, 
            onlyGuest: globalRoutesNames.GUEST.children.REGISTER.onlyGuest 
        },
        canActivate: [UnauthenticatedGuard] 
    }
];