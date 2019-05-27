import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { COMMUNITY_ROUTES } from './community.routes';
import { HABBO_ROUTES } from './habbo.routes';

export const USER_ROUTES : Routes = [
    { path: globalRoutesNames.DEFAULT.url, children: HABBO_ROUTES, data: { title: '{Username}', physicalUrl: globalRoutesNames.ME.url } },
    { path: globalRoutesNames.COMMUNITY.url, children: COMMUNITY_ROUTES, data: { title: 'Comunidad' } }
];