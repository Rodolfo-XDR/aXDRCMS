import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';
import { SettingsComponent } from '../components/user/habbo/settings/settings.component';
import { PreferencesComponent } from '../components/user/habbo/settings/preferences/preferences.component';
import { CustomizationComponent } from '../components/user/habbo/settings/customization/customization.component';


export const SETTINGS_ROUTES : Routes = [
    {path: globalRoutesNames.USER.children.HABBO.children.SETTINGS.children.GENERAL.url, component: SettingsComponent, pathMatch: 'full', data: { title:  globalRoutesNames.USER.children.HABBO.children.SETTINGS.children.GENERAL.title } },
    {path: globalRoutesNames.USER.children.HABBO.children.SETTINGS.children.PREFERENCES.url, component: PreferencesComponent, pathMatch: 'full', data: { title: globalRoutesNames.USER.children.HABBO.children.SETTINGS.children.PREFERENCES.title } },
    {path: globalRoutesNames.USER.children.HABBO.children.SETTINGS.children.CUSTOMIZATION.url, component: CustomizationComponent, pathMatch: 'full', data: { title: globalRoutesNames.USER.children.HABBO.children.SETTINGS.children.CUSTOMIZATION.title } }
];