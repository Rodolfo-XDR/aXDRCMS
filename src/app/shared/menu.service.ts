import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { menuItem } from '../models/menuItem';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private Tabs : menuItem[] = [];
  
  constructor(private router : Router, private activatedRoute : ActivatedRoute, private authService : AuthService)
  {
    this.Tabs = this.generateMenu();
  }

  /**
   * Generate Menu Tabs based on Routes, only if parent Route "isHeader" is set to true. And sorts the tabs based on order id.
   * @return {menuItem[]} All tabs in an array
  */
  private generateMenu() : menuItem[] {
    let menuTabs : menuItem[] = [];
    let i : number = 0;

    this.router.config.forEach(element => {

      if(element.data == undefined || null || element.data.hasMenuContent == undefined || null || element.children == undefined || null) return;
 
      if(!element.data.hasMenuContent) return;
     
      if(element.data.title == 'USER' && !this.authService.isLoggedIn) return;

      let mainPath = '/' + ((element.path != '') ? element.path : element.path);

      element.children.forEach(subElement => {
        if(subElement.data == undefined || null) return;

        if(subElement.data.onlyGuest != undefined || null)
        {
          if(this.authService.isLoggedIn && subElement.data.onlyGuest) return;
        }

        let parentPath = mainPath + '/' + ((subElement.data.directURL != null || undefined) ? (subElement.path + '/' + subElement.data.directURL) : subElement.path);
        
        let trueParentPath = mainPath + '/' + subElement.path;

        let subItems : menuItem[] = [];

        subElement.children.forEach(childElement => {
          
          if(childElement.data == undefined || null) return;

          let childPath = trueParentPath + '/' + ((childElement.data.directURL != null || undefined) ? (childElement.path + '/' + childElement.data.directURL) : childElement.path);

          let subItem : menuItem = { _title: childElement.data.title, _path: childPath}

          subItems.push(subItem);

        })
        
        let item : menuItem = { _id: subElement.data.id, _title: subElement.data.title, _path: parentPath, _children: subItems};

        menuTabs.push(item);
      });
    });

    return menuTabs;
  }

  get getTabs() : menuItem[] {
    return this.Tabs;
  }
}