import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';
import { HowToPlayComponent } from '../components/user/discover/how-to-play/how-to-play.component';
import { HelpComponent } from '../components/user/discover/help/help.component';
import { WhatIsComponent } from '../components/user/discover/what-is/what-is.component';

export const DISCOVER_ROUTES : Routes = [
    { path: globalRoutesNames.USER.children.DISCOVER.children.WHATIS.url, component: WhatIsComponent, data: { title: globalRoutesNames.USER.children.DISCOVER.children.WHATIS.title } },
    { path: globalRoutesNames.USER.children.DISCOVER.children.HOWTOPLAY.url, component: HowToPlayComponent, data: { title: globalRoutesNames.USER.children.DISCOVER.children.HOWTOPLAY.title } },
    //{ path: globalRoutesNames.HELP.url, component: HelpComponent, data: { title: globalRoutesNames.HELP.title } }
];