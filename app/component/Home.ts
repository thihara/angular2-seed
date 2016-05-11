/**
 * Created by thihara on 5/10/16.
 */
import {Component} from "@angular/core";
import {Footer} from "./Footer";
import {Header} from "./Header";

@Component({
    selector : "home-cmp",
    templateUrl : "view/home.html",
    directives : [Header,Footer]
})
export class Home{
    
}