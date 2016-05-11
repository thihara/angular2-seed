"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var Page1_1 = require("./Page1");
var Home_1 = require("./Home");
var Page2_1 = require("./Page2");
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
/**
 * Created by TJ on 5/5/2016.
 */
var Main = (function () {
    function Main() {
    }
    Main = __decorate([
        router_deprecated_1.RouteConfig([
            { path: "/home", name: "Home", component: Home_1.Home, useAsDefault: true },
            { path: "/page1", name: "Page1", component: Page1_1.Page1 },
            { path: "/page2", name: "Page2", component: Page2_1.Page2 },
        ]),
        core_1.Component({
            selector: "main-app",
            template: "<header-cmp></header-cmp>\n              <router-outlet></router-outlet>\n              <footer-cmp></footer-cmp>",
            directives: [Home_1.Home, Header_1.Header, Footer_1.Footer, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], Main);
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=Main.js.map