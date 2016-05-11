import {ROUTER_PROVIDERS} from "@angular/router";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {Main} from "./component/Main";


bootstrap(Main).catch(error => console.log(error));