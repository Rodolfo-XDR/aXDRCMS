import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { menuItem } from '../models/menuItem';
import { globalRoutesNames } from 'src/global.routes.names';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuTabs : menuItem[] = [];
  public subMenuTabs : menuItem[] = [];

  public currentRoute : ActivatedRoute;
  public currentPageParent : Route;
  public currentPage : Route;
  public currentPagePath : string;

  public pageSubject : Subject<any> = new Subject();

  public appSide : string[] = [
    globalRoutesNames.ME.url, 
    globalRoutesNames.SETTINGS.url
  ];
  
  constructor(private router : Router, private activatedRoute : ActivatedRoute, private authService : AuthService)
  {
    this.authService.verifyUser();

    this.currentPagePath = (this.activatedRoute.firstChild.firstChild.firstChild.routeConfig.path != '') ? this.activatedRoute.firstChild.firstChild.firstChild.routeConfig.path : this.activatedRoute.firstChild.firstChild.routeConfig.path;
    this.currentPage = this.activatedRoute.firstChild.firstChild.firstChild.routeConfig;

    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd)
      {
        if(this.activatedRoute.firstChild.routeConfig.data.title == "Guest" || this.activatedRoute.firstChild.routeConfig.data.title == "Client") return;

        this.authService.verifyUser();

        this.currentPageParent = this.activatedRoute.firstChild.firstChild.routeConfig;
        this.currentPagePath = (this.activatedRoute.firstChild.firstChild.firstChild.routeConfig.path != '') ? this.activatedRoute.firstChild.firstChild.firstChild.routeConfig.path : this.activatedRoute.firstChild.firstChild.routeConfig.path;
        this.currentPage = this.activatedRoute.firstChild.firstChild.firstChild.routeConfig;
        this.pageSubject.next(this.currentPagePath);

        /*console.log("%c[aXDR API] Page Information", "color: red");
        console.log("%cCurrent Page", "font-weight: bold");
        console.log("URL: " + this.currentPagePath);
        console.log(this.currentPage);
        console.log("%cParent Information", "font-weight: bold");
        console.log(this.currentPageParent);*/
        
      }
    });

    //console.log(this.currentPagePath);
  }

  generateMenus(username : string) : menuItem[] {
    
    this.menuTabs = [];

    //console.info("[aXDR Template System] Generating " + this.activatedRoute.firstChild.routeConfig.children.length + " menu tabs...");
    
    this.activatedRoute.children[0].routeConfig.children.forEach((menu) => {
      let menuPath : string = '/' + ((menu.data.physicalUrl == null || undefined) ? menu.path : menu.data.physicalUrl);
      
      let title = menu.data.title == "USERNAME" ? username : menu.data.title ;
      
      let item : menuItem = { _title: title, _path: '/' + menuPath};
      this.menuTabs.push(item);
    });

    this.subMenuTabs = this.generatePageSubMenus(this.currentPageParent);
    this.currentRoute = this.activatedRoute.firstChild.firstChild;

    return this.menuTabs;
  }

  generateSubMenus() : menuItem[] {

    this.subMenuTabs = this.generatePageSubMenus(this.currentPageParent);
    this.currentRoute = this.activatedRoute.firstChild.firstChild;

    return this.subMenuTabs;
  }

  generatePageSubMenus(page) : menuItem[] {
    let submenuTabs : menuItem[] = [];

    //console.info("[aXDR Template System] Generating " + page.children.length + " submenu tabs for " + page.data.title +  "...");
  
    if(page.children != null || undefined)
    {
      page.children.forEach((child) => {
        let childPath : string = '/' + ((child.data.physicalUrl == null || undefined) ? child.path : child.data.physicalUrl);
        let parentPath : string = '/' + this.activatedRoute.firstChild.firstChild.routeConfig.path;

        let fullPath : string = childPath;

        if(parentPath != '')
          fullPath = parentPath.concat(childPath);

        let subMenu : menuItem = { _title: child.data.title, _path: fullPath}; 
        submenuTabs.push(subMenu);
      });
    }

    return submenuTabs;
  }
}