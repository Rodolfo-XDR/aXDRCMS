import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { MeComponent } from '../components/user/habbo/me/me.component';
import { SETTINGS_ROUTES } from './settings.routes';

export const HABBO_ROUTES : Routes = [
    { path: globalRoutesNames.USER.children.HABBO.children.HOME.url, component: MeComponent, data: { title: globalRoutesNames.USER.children.HABBO.children.HOME.title } },
    { path: globalRoutesNames.USER.children.HABBO.children.SETTINGS.url, children: SETTINGS_ROUTES, data: { title: globalRoutesNames.USER.children.HABBO.children.SETTINGS.title } }
];