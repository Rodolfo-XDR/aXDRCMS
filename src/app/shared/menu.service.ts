import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { menuItem } from '../models/menuItem';
import { globalRoutesNames } from 'src/global.routes.names';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuTabs : menuItem[] = [];
  public subMenuTabs : menuItem[] = [];


  public currentRoute : ActivatedRoute;
  public currentPage;

  public appSide : string[] = [
    globalRoutesNames.ME.url, 
    globalRoutesNames.SETTINGS.url
  ];
  
  constructor(private router : Router, private activatedRoute : ActivatedRoute)
  {

  }

  generateMenus() : menuItem[] {
    
    this.menuTabs = [];

    console.info("[aXDR Template System] Generating " + this.activatedRoute.firstChild.routeConfig.children.length + " menu tabs...");
    
    this.activatedRoute.children[0].routeConfig.children.forEach((menu) => {
      let item : menuItem = { _title: menu.data.title, _path: '/' + menu.path};
      this.menuTabs.push(item);
    });

    this.currentPage = this.activatedRoute.firstChild.firstChild.routeConfig;
    this.subMenuTabs = this.generatePageSubMenus(this.currentPage);
    this.currentRoute = this.activatedRoute.firstChild.firstChild;

    return this.menuTabs;
  }

  generateSubMenus() : menuItem[] {

    this.currentPage = this.activatedRoute.firstChild.firstChild.routeConfig;

    this.subMenuTabs = this.generatePageSubMenus(this.currentPage);
    this.currentRoute = this.activatedRoute.firstChild.firstChild;

    return this.subMenuTabs;
  }

  generatePageSubMenus(page) : menuItem[] {
    let submenuTabs : menuItem[] = [];

    console.info("[aXDR Template System] Generating " + page.children.length + " submenu tabs for " + page.data.title +  "...");
  
    if(page.children != null || undefined)
    {
      page.children.forEach((child) => {
        let childPath : string = '/' + ((child.data.physicalUrl == null || undefined) ? child.path : child.data.physicalUrl);
        let parentPath : string = '/' + this.activatedRoute.firstChild.firstChild.routeConfig.path;

        let fullPath : string = childPath;

        if(this.activatedRoute.firstChild.firstChild.routeConfig.path != '')
          fullPath = parentPath.concat(childPath);

        let subMenu : menuItem = { _title: child.data.title, _path: fullPath}; 
        submenuTabs.push(subMenu);
      });
    }

    return submenuTabs;
  }
}
