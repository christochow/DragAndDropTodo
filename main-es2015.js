(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cookies-policy/cookies-policy.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cookies-policy/cookies-policy.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: start;padding: 5px 15px 15px\">\n<h1>Cookies Policy</h1>\n<p>Last updated: December 18, 2019</p>\n<p>IWantToPass (\"us\", \"we\", or \"our\") uses cookies on the https://christochow.github.io/DragAndDropTodo/ website (the \"Service\"). By using the Service, you consent to the use of cookies.</p>\n<p>Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies. This Cookies Policy  for IWantToPass has been created with the help of <a href=\"https://www.termsfeed.com/cookie-policy-generator/\">Cookies Policy Generator</a>.</p>\n<h2>What are cookies</h2>\n<p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>\n<p>Cookies can be \"persistent\" or \"session\" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>\n<h2>How IWantToPass uses cookies</h2>\n<p>When you use and access the Service, we may place a number of cookies files in your web browser.</p>\n<p>We use cookies to enable storing the data you entered in the browser</p>\n\n<h2>What are your choices regarding cookies</h2>\n\n<p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. As an European citizen, under GDPR, you have certain individual rights. You can learn more about these rights in the <a href=\"https://termsfeed.com/blog/gdpr/#Individual_Rights_Under_the_GDPR\">GDPR Guide</a>.</p>\n\n<p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>\n\n<ul>\n  <li>\n    <p>For the Chrome web browser, please visit this page from Google: <a href=\"https://support.google.com/accounts/answer/32050\">https://support.google.com/accounts/answer/32050</a></p>\n  </li>\n  <li>\n    <p>For the Internet Explorer web browser, please visit this page from Microsoft: <a href=\"http://support.microsoft.com/kb/278835\">http://support.microsoft.com/kb/278835</a></p>\n  </li>\n  <li>\n    <p>For the Firefox web browser, please visit this page from Mozilla: <a href=\"https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored\">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>\n  </li>\n  <li>\n    <p>For the Safari web browser, please visit this page from Apple: <a href=\"https://support.apple.com/kb/PH21411?locale=en_US\">https://support.apple.com/kb/PH21411?locale=en_US</a></p>\n  </li>\n  <li>\n    <p>For any other web browser, please visit your web browser's official web pages.</p>\n  </li>\n</ul>\n\n<h2>Where can you find more information about cookies</h2>\n\n<p>You can learn more about cookies and the following third-party websites:</p>\n\n<ul>\n  <li>\n    <p>AllAboutCookies: <a href=\"http://www.allaboutcookies.org/\">http://www.allaboutcookies.org/</a></p>\n  </li>\n  <li>\n    <p>Network Advertising Initiative: <a href=\"http://www.networkadvertising.org/\">http://www.networkadvertising.org/</a></p>\n  </li>\n</ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-input/todo-input.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-input/todo-input.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row\">\n  <form [formGroup]=\"todoForm\" (ngSubmit)=\"todoService.addTodo(todoForm.value.input);todoForm.get('input').setValue('')\">\n  <div class=\"col-xs-9 form-group\">\n    <input class=\"form-control todo-input\" placeholder=\"Enter new TODO\" type=\"text\" formControlName=\"input\">\n  </div>\n  <button type=\"submit\" [disabled]=\"!todoForm.valid\" class=\"btn btn-success add-todo\">Add</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center;padding-top: 20px;\">\n  <h1>Welcome to the TODO app</h1>\n  <app-todo-input></app-todo-input>\n  <app-todolist></app-todolist>\n  <cookie-law>\n    This website uses cookies to store entered data. By using DragAndDropTodo you agree to our <a routerLink=\"/cookie\" routerLinkActive=\"active\">cookie policy</a>\n  </cookie-law>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todolist/todolist.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todolist/todolist.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div cdkDropList class=\"container todo-list\" (cdkDropListDropped)=\"dropEvent($event)\">\n  <div *ngFor=\"let todo of todoService.getTodo();let i = index\" cdkDrag>\n  <div class=\"todo-box\">\n    <div class=\"todo-detail\">\n    {{i+1}}. {{todo.todo}}\n    </div>\n    <div>\n    <button (click)=\"todoService.removeItem(i)\" class=\"btn btn-success remove-button\">Remove</button>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cookies_policy_cookies_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies-policy/cookies-policy.component */ "./src/app/cookies-policy/cookies-policy.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");





const routes = [
    { path: '', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"] },
    { path: 'cookie', component: _cookies_policy_cookies_policy_component__WEBPACK_IMPORTED_MODULE_3__["CookiesPolicyComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DragAndDropTodo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _todo_todo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.module */ "./src/app/todo/todo.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _cookies_policy_cookies_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookies-policy/cookies-policy.component */ "./src/app/cookies-policy/cookies-policy.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _cookies_policy_cookies_policy_component__WEBPACK_IMPORTED_MODULE_7__["CookiesPolicyComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _todo_todo_module__WEBPACK_IMPORTED_MODULE_5__["TodoModule"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cookies-policy/cookies-policy.component.css":
/*!*************************************************************!*\
  !*** ./src/app/cookies-policy/cookies-policy.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2tpZXMtcG9saWN5L2Nvb2tpZXMtcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cookies-policy/cookies-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cookies-policy/cookies-policy.component.ts ***!
  \************************************************************/
/*! exports provided: CookiesPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesPolicyComponent", function() { return CookiesPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CookiesPolicyComponent = class CookiesPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CookiesPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cookies-policy',
        template: __webpack_require__(/*! raw-loader!./cookies-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/cookies-policy/cookies-policy.component.html"),
        styles: [__webpack_require__(/*! ./cookies-policy.component.css */ "./src/app/cookies-policy/cookies-policy.component.css")]
    })
], CookiesPolicyComponent);



/***/ }),

/***/ "./src/app/models/todo.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(todoVal) {
        this.todoVal = todoVal;
        this.todo = todoVal;
    }
}
Todo.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/todo/todo-input/todo-input.component.css":
/*!**********************************************************!*\
  !*** ./src/app/todo/todo-input/todo-input.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-todo {\n  width: 100px;\n  padding: 10px;\n  font-size: 20px;\n}\n\n.todo-input {\n  margin:0;\n  height: 50px;\n}\n\n.form-group.row {\n  margin-top: 100px;\n  text-align: center;\n  margin-left: 150px;\n}\n\n.col-xs-9.form-group {\n  display: inline-block;\n  margin-left: 30px;\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWlucHV0L3RvZG8taW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1pbnB1dC90b2RvLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXRvZG8ge1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRvZG8taW5wdXQge1xuICBtYXJnaW46MDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZm9ybS1ncm91cC5yb3cge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5jb2wteHMtOS5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/todo/todo-input/todo-input.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-input/todo-input.component.ts ***!
  \*********************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo/todo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let TodoInputComponent = class TodoInputComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            input: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ngOnInit() {
    }
};
TodoInputComponent.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodoInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-input',
        template: __webpack_require__(/*! raw-loader!./todo-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-input/todo-input.component.html"),
        styles: [__webpack_require__(/*! ./todo-input.component.css */ "./src/app/todo/todo-input/todo-input.component.css")]
    })
], TodoInputComponent);



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo/todo.service.ts");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__);





let TodoComponent = class TodoComponent {
    constructor(cookieService, todoService) {
        this.cookieService = cookieService;
        this.todoService = todoService;
        const cookieString = cookieService.get('todoList');
        console.log(cookieString !== '');
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_4__["isNotNullOrUndefined"])(cookieString) && cookieString !== '') {
            this.todoService.setTodo(JSON.parse(cookieString));
        }
    }
    ngOnInit() {
    }
};
TodoComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html"),
        styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/todo/todo.module.ts":
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.ts ***!
  \*************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todolist/todolist.component */ "./src/app/todo/todolist/todolist.component.ts");
/* harmony import */ var _todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-input/todo-input.component */ "./src/app/todo/todo-input/todo-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-cookie-law */ "./node_modules/angular2-cookie-law/fesm2015/angular2-cookie-law.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let TodoModule = class TodoModule {
};
TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"], _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_4__["TodolistComponent"], _todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_5__["TodoInputComponent"]],
        exports: [_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            angular2_cookie_law__WEBPACK_IMPORTED_MODULE_9__["CookieLawModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
        ]
    })
], TodoModule);



/***/ }),

/***/ "./src/app/todo/todo.service.ts":
/*!**************************************!*\
  !*** ./src/app/todo/todo.service.ts ***!
  \**************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/todo.model */ "./src/app/models/todo.model.ts");




let TodoService = class TodoService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.list = [];
    }
    setTodo(val) {
        this.list = val;
    }
    addTodo(item) {
        if (item !== '') {
            this.list.push(new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"](item));
            this.saveList();
        }
    }
    getTodo() {
        return this.list;
    }
    removeItem(index) {
        this.list.splice(index, 1);
        this.saveList();
    }
    updateList(oldIndex, newIndex) {
        this.list.splice(newIndex, 0, this.list.splice(oldIndex, 1)[0]);
    }
    saveList() {
        this.cookieService.set('todoList', JSON.stringify(this.list));
    }
};
TodoService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoService);



/***/ }),

/***/ "./src/app/todo/todolist/todolist.component.css":
/*!******************************************************!*\
  !*** ./src/app/todo/todolist/todolist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-drop-list-dragging .cdk-drag {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n\n.todo-box {\n  margin-top: 0;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  padding-right: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  text-align: left;\n  box-sizing: border-box;\n  cursor: move;\n  background: azure;\n  font-size: 20px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n\n.todo-list {\n  width: 750px;\n  max-width: 100%;\n  min-height: 60px;\n  border-radius: 4px;\n  overflow-wrap: break-word;\n  position: center;\n}\n\n\n.todo-detail {\n  width: 185px;\n  max-width: 200px;\n  margin-left: 10px;\n  word-wrap: break-word;\n}\n\n\n.remove-button {\n  max-height: 35px;\n  margin-left: 430px;\n  position: absolute;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvbGlzdC90b2RvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0VBQXNEO0VBQXRELDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNEO0FBQ3hEOzs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udG9kby1ib3gge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IGF6dXJlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRvZG8tbGlzdCB7XG4gIHdpZHRoOiA3NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50b2RvLWRldGFpbCB7XG4gIHdpZHRoOiAxODVweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnJlbW92ZS1idXR0b24ge1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tbGVmdDogNDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/todo/todolist/todolist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todolist/todolist.component.ts ***!
  \*****************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo/todo.service.ts");



let TodolistComponent = class TodolistComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    dropEvent(event) {
        this.todoService.updateList(event.previousIndex, event.currentIndex);
    }
    ngOnInit() {
    }
};
TodolistComponent.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodolistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todolist',
        template: __webpack_require__(/*! raw-loader!./todolist.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todolist/todolist.component.html"),
        styles: [__webpack_require__(/*! ./todolist.component.css */ "./src/app/todo/todolist/todolist.component.css")]
    })
], TodolistComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/3nine/Desktop/Angular/DragAndDropTodo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map