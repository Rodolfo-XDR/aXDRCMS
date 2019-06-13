import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';
import { HowToPlayComponent } from '../components/user/discover/how-to-play/how-to-play.component';
import { HelpComponent } from '../components/user/discover/help/help.component';
import { WhatIsComponent } from '../components/user/discover/what-is/what-is.component';

export const DISCOVER_ROUTES : Routes = [
    { path: globalRoutesNames.WHATIS.url, component: WhatIsComponent, data: { title: globalRoutesNames.WHATIS.title } },
    { path: globalRoutesNames.HOWTOPLAY.url, component: HowToPlayComponent, data: { title: globalRoutesNames.HOWTOPLAY.title } },
    //{ path: globalRoutesNames.HELP.url, component: HelpComponent, data: { title: globalRoutesNames.HELP.title } }
];