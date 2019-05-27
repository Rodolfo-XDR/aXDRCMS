import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { MeComponent } from '../components/user/habbo/me/me.component';
import { SettingsComponent } from '../components/user/habbo/settings/settings.component';

export const HABBO_ROUTES : Routes = [
    { path: globalRoutesNames.ME.url, component: MeComponent, data: { title: 'Home' } },
    { path: globalRoutesNames.SETTINGS.url, component: SettingsComponent, data: { title: 'Ajustes' } }
];