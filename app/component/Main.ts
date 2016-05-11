import {Component} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {Page1} from "./Page1";
import {Home} from "./Home";
import {Page2} from "./Page2";
import {Header} from "./Header";
import {Footer} from "./Footer";

/**
 * Created by TJ on 5/5/2016.
 */

@RouteConfig([
    {path:"/home", name:"Home", component:Home, useAsDefault:true},
    {path:"/page1", name:"Page1", component:Page1},
    {path:"/page2", name:"Page2", component:Page2},
])
@Component({
    selector:"main-app",
    template:`<header-cmp></header-cmp>
              <router-outlet></router-outlet>
              <footer-cmp></footer-cmp>`,
    directives:[Home,Header,Footer,ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
})
export class Main{
   
}