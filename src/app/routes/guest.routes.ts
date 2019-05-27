import { globalRoutesNames } from 'src/global.routes.names';

import { LoginComponent } from '../components/guest/login/login.component';
import { RegisterComponent } from '../components/guest/register/register.component';

export const GUEST_ROUTES = [
    { path: globalRoutesNames.LOGIN.url, component: LoginComponent },
    { path: globalRoutesNames.REGISTER.url, component: RegisterComponent }
];