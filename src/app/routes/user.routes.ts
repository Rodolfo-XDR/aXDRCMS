import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { COMMUNITY_ROUTES } from './community.routes';
import { HABBO_ROUTES } from './habbo.routes';
import { DISCOVER_ROUTES } from './discover.routes';
import { HotelComponent } from '../components/user/hotel/hotel.component';

export const USER_ROUTES : Routes = [
    { 
        path: globalRoutesNames.USER.children.HABBO.url, 
        children: HABBO_ROUTES, 
        data: { 
            id: globalRoutesNames.USER.children.HABBO.id,
            title: globalRoutesNames.USER.children.HABBO.title, 
            directURL: globalRoutesNames.USER.children.HABBO.directURL
        } 
    },
    {
        path: globalRoutesNames.USER.children.HOTEL.url,
        component: HotelComponent
    },
    { 
        path: globalRoutesNames.USER.children.COMMUNITY.url, 
        children: COMMUNITY_ROUTES, 
        data: { 
            id: globalRoutesNames.USER.children.COMMUNITY.id,
            title: globalRoutesNames.USER.children.COMMUNITY.title
        }
    },
    {
        path: globalRoutesNames.USER.children.DISCOVER.url,
        children: DISCOVER_ROUTES,
        data: {
            id: globalRoutesNames.USER.children.DISCOVER.id,
            title: globalRoutesNames.USER.children.DISCOVER.title,
            directURL: globalRoutesNames.USER.children.DISCOVER.directURL
        }
    }
];