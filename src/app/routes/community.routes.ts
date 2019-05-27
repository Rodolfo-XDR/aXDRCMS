import { globalRoutesNames } from 'src/global.routes.names';
import { Routes } from '@angular/router';

import { ArticlesComponent } from '../components/user/community/articles/articles.component';
import { PhotoGalleryComponent } from '../components/user/community/photo-gallery/photo-gallery.component';
import { TopComponent } from '../components/user/community/top/top.component';
import { CommunityComponent } from '../components/user/community/community.component';

export const COMMUNITY_ROUTES : Routes = [
    { path: globalRoutesNames.DEFAULT.url, component: CommunityComponent, data: { title: 'Comunidad' } },
    { path: globalRoutesNames.ARTICLES.url, component: ArticlesComponent, data: { title: 'Noticias' } },
    { path: globalRoutesNames.PHOTO_GALLERY.url, component: PhotoGalleryComponent, data: { title: 'Galería' } },
    { path: globalRoutesNames.TOP.url, component: TopComponent, data: { title: 'Tops' } }
];