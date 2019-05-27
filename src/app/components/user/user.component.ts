import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Route } from '@angular/router';
import { menuItem } from 'src/app/models/menuItem';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, slideOutLeft, slideInLeft } from 'ng-animate';
import { globalRoutesNames } from 'src/global.routes.names';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } } ))
    ]),
    trigger('slideInOut', [
      transition(':enter', useAnimation(slideInLeft, { params: { timing: 0.2 } } )),
      transition(':leave', useAnimation(slideOutLeft, { params: { timing: 0.2 } } ))
    ])
  ]
})
export class UserComponent implements OnInit {
  
  currentRoute : ActivatedRoute;
  currentPage: Route;
  menuTabs : menuItem[] = [];
  currentSubMenus : menuItem[] = [];

  appSide : string[] = [globalRoutesNames.ME.url, globalRoutesNames.SETTINGS.url];

  constructor(private router : Router, private activatedRoute : ActivatedRoute){
    this.generateMenus();
    this.generateSubMenus();
  }

  generateMenus() {
    console.info("[aXDR Template System] Generating " + this.activatedRoute.routeConfig.children.length + " menu tabs...");
    
    this.activatedRoute.routeConfig.children.forEach((menu) => {
      let item : menuItem = { _title: menu.data.title, _path: '/' + menu.path};
      this.menuTabs.push(item);
    });
  }

  generateSubMenus() {
    this.router.events.subscribe(e => {

      if(e instanceof NavigationEnd) {

        this.currentPage = (this.activatedRoute.firstChild.firstChild.routeConfig.path == globalRoutesNames.DEFAULT.url) ? this.activatedRoute.firstChild.routeConfig : this.activatedRoute.firstChild.firstChild.routeConfig;

        if(this.currentRoute == this.activatedRoute.firstChild)
          return;

        console.info("[aXDR Template System] Generating " + this.activatedRoute.firstChild.routeConfig.children.length + " submenu tabs for " + this.activatedRoute.firstChild.routeConfig.data.title +  "...");
        
        this.currentSubMenus = [];

        if(this.activatedRoute.firstChild.routeConfig.children != null || undefined)
        {
          this.activatedRoute.firstChild.routeConfig.children.forEach((child) => {
            
            let childPath : string = '/' + ((child.data.physicalUrl == null || undefined) ? child.path : child.data.physicalUrl);
            let parentPath : string = '/' + this.activatedRoute.firstChild.routeConfig.path;

            let fullPath : string = childPath;

            if(this.activatedRoute.firstChild.routeConfig.path != '')
              fullPath = parentPath.concat(childPath);

            let subMenu : menuItem = { _title: child.data.title, _path: fullPath}; 
            this.currentSubMenus.push(subMenu);
            this.currentRoute = this.activatedRoute.firstChild;
          });
        }

      }
    });
  }

  ngOnInit() {
  }

}
