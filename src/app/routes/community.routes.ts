import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { ArticlesComponent } from '../components/user/community/articles/articles.component';
import { PhotoGalleryComponent } from '../components/user/community/photo-gallery/photo-gallery.component';
import { TopComponent } from '../components/user/community/top/top.component';
import { CommunityComponent } from '../components/user/community/community.component';

export const COMMUNITY_ROUTES : Routes = [
    { path: globalRoutesNames.DEFAULT.url, component: CommunityComponent, data: { title: globalRoutesNames.USER.children.COMMUNITY.title } },
    { path: globalRoutesNames.USER.children.COMMUNITY.children.ARTICLES.url, component: ArticlesComponent, data: { title: globalRoutesNames.USER.children.COMMUNITY.children.ARTICLES.title } },
    //{ path: globalRoutesNames.PHOTO_GALLERY.url, component: PhotoGalleryComponent, data: { title: globalRoutesNames.PHOTO_GALLERY.title } },
    //{ path: globalRoutesNames.TOP.url, component: TopComponent, data: { title: globalRoutesNames.TOP.title } }
];