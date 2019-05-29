import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { MeComponent } from '../components/user/habbo/me/me.component';
import { SETTINGS_ROUTES } from './settings.routes';

export const HABBO_ROUTES : Routes = [
    { path: globalRoutesNames.ME.url, component: MeComponent, data: { title: globalRoutesNames.ME.title } },
    { path: globalRoutesNames.SETTINGS.url, children: SETTINGS_ROUTES, data: { title: globalRoutesNames.SETTINGS.title } }
];