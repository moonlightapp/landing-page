"use strict";
(self["webpackChunkmoonlight"] = self["webpackChunkmoonlight"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 63877:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": function() { return /* binding */ Toast; },
/* harmony export */   "ToastItem": function() { return /* binding */ ToastItem; },
/* harmony export */   "ToastModule": function() { return /* binding */ ToastModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 57952);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 46976);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 97175);










const _c0 = ["container"];
function ToastItem_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastItem_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onCloseIconClick($event); })("keydown.enter", function ToastItem_a_3_Template_a_keydown_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onCloseIconClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-exclamation-triangle": a1, "pi-times-circle": a2, "pi-check": a3 }; };
function ToastItem_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c1, ctx_r2.message.severity == "info", ctx_r2.message.severity == "warn", ctx_r2.message.severity == "error", ctx_r2.message.severity == "success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.detail);
} }
function ToastItem_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0, a1, a2, a3) { return { showTransformParams: a0, hideTransformParams: a1, showTransitionParams: a2, hideTransitionParams: a3 }; };
const _c3 = function (a1) { return { value: "visible", params: a1 }; };
const _c4 = function (a0, a1, a2, a3) { return { "ui-toast-message-info": a0, "ui-toast-message-warn": a1, "ui-toast-message-error": a2, "ui-toast-message-success": a3 }; };
const _c5 = function (a0) { return { $implicit: a0 }; };
function Toast_p_toastItem_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toastItem", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onMessageClose($event); })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onAnimationStart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", msg_r2)("index", i_r3)("template", ctx_r1.template)("@toastAnimation", undefined)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
} }
const _c6 = function (a1, a2, a3, a4, a5, a6, a7) { return { "ui-toast ui-widget": true, "ui-toast-top-right": a1, "ui-toast-top-left": a2, "ui-toast-bottom-right": a3, "ui-toast-bottom-left": a4, "ui-toast-top-center": a5, "ui-toast-bottom-center": a6, "ui-toast-center": a7 }; };
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ToastItem = class ToastItem {
    constructor(zone) {
        this.zone = zone;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngAfterViewInit() {
        this.initTimeout();
    }
    initTimeout() {
        if (!this.message.sticky) {
            this.zone.runOutsideAngular(() => {
                this.timeout = setTimeout(() => {
                    this.onClose.emit({
                        index: this.index,
                        message: this.message
                    });
                }, this.message.life || 3000);
            });
        }
    }
    clearTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
    onMouseEnter() {
        this.clearTimeout();
    }
    onMouseLeave() {
        this.initTimeout();
    }
    onCloseIconClick(event) {
        this.clearTimeout();
        this.onClose.emit({
            index: this.index,
            message: this.message
        });
        event.preventDefault();
    }
    ngOnDestroy() {
        this.clearTimeout();
    }
};
ToastItem.ɵfac = function ToastItem_Factory(t) { return new (t || ToastItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
ToastItem.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastItem, selectors: [["p-toastItem"]], viewQuery: function ToastItem_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { message: "message", index: "index", template: "template", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onClose: "onClose" }, decls: 6, vars: 21, consts: [["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "ui-toast-message", "ui-shadow", 3, "ngClass", "mouseenter", "mouseleave"], ["container", ""], [1, "ui-toast-message-content"], ["tabindex", "0", "class", "ui-toast-close-icon pi pi-times", 3, "click", "keydown.enter", 4, "ngIf"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ui-toast-close-icon", "pi", "pi-times", 3, "click", "keydown.enter"], [1, "ui-toast-icon", "pi", 3, "ngClass"], [1, "ui-toast-message-text-content"], [1, "ui-toast-summary"], [1, "ui-toast-detail"]], template: function ToastItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastItem_a_3_Template, 1, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastItem_ng_container_4_Template, 7, 8, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToastItem_ng_container_5_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@messageState", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c2, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](14, _c4, ctx.message.severity == "info", ctx.message.severity == "warn", ctx.message.severity == "error", ctx.message.severity == "success"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.message.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.closable !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c5, ctx.message));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('messageState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    transform: 'translateY(0)',
                    opacity: 1
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ transform: '{{showTransformParams}}', opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{showTransitionParams}}')
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(('{{hideTransitionParams}}'), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        height: 0,
                        opacity: 0,
                        transform: '{{hideTransformParams}}'
                    }))
                ])
            ])
        ] } });
ToastItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "message", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "index", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "template", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "showTransformOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "hideTransformOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "showTransitionOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], ToastItem.prototype, "hideTransitionOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], ToastItem.prototype, "onClose", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('container')
], ToastItem.prototype, "containerViewChild", void 0);
let Toast = class Toast {
    constructor(messageService, cd) {
        this.messageService = messageService;
        this.cd = cd;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.position = 'top-right';
        this.preventOpenDuplicates = false;
        this.preventDuplicates = false;
        this.showTransformOptions = 'translateY(100%)';
        this.hideTransformOptions = 'translateY(-100%)';
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '250ms ease-in';
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.messageSubscription = this.messageService.messageObserver.subscribe(messages => {
            if (messages) {
                if (messages instanceof Array) {
                    const filteredMessages = messages.filter(m => this.canAdd(m));
                    this.add(filteredMessages);
                }
                else if (this.canAdd(messages)) {
                    this.add([messages]);
                }
                if (this.modal && this.messages && this.messages.length) {
                    this.enableModality();
                }
            }
        });
        this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
            if (key) {
                if (this.key === key) {
                    this.messages = null;
                }
            }
            else {
                this.messages = null;
            }
            if (this.modal) {
                this.disableModality();
            }
        });
    }
    add(messages) {
        this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
        if (this.preventDuplicates) {
            this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
        }
    }
    canAdd(message) {
        let allow = this.key === message.key;
        if (allow && this.preventOpenDuplicates) {
            allow = !this.containsMessage(this.messages, message);
        }
        if (allow && this.preventDuplicates) {
            allow = !this.containsMessage(this.messagesArchieve, message);
        }
        return allow;
    }
    containsMessage(collection, message) {
        if (!collection) {
            return false;
        }
        return collection.find(m => {
            return ((m.summary === message.summary) && (m.detail == message.detail) && (m.severity === message.severity));
        }) != null;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'message':
                    this.template = item.template;
                    break;
                default:
                    this.template = item.template;
                    break;
            }
        });
    }
    onMessageClose(event) {
        this.messages.splice(event.index, 1);
        if (this.messages.length === 0) {
            this.disableModality();
        }
        this.onClose.emit({
            message: event.message
        });
        this.cd.detectChanges();
    }
    enableModality() {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
            this.mask.style.display = 'block';
            let maskStyleClass = 'ui-widget-overlay ui-dialog-mask';
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
            document.body.appendChild(this.mask);
        }
    }
    disableModality() {
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
    }
    onAnimationStart(event) {
        if (event.fromState === 'void' && this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.zindex));
        }
    }
    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
        this.disableModality();
    }
};
Toast.ɵfac = function Toast_Factory(t) { return new (t || Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
Toast.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Toast, selectors: [["p-toast"]], contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, viewQuery: function Toast_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
    } }, inputs: { autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", position: "position", preventOpenDuplicates: "preventOpenDuplicates", preventDuplicates: "preventDuplicates", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", key: "key", style: "style", styleClass: "styleClass", modal: "modal" }, outputs: { onClose: "onClose" }, decls: 3, vars: 13, consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose"]], template: function Toast_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_p_toastItem_2_Template, 1, 8, "p-toastItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](5, _c6, ctx.position === "top-right", ctx.position === "top-left", ctx.position === "bottom-right", ctx.position === "bottom-left", ctx.position === "top-center", ctx.position === "bottom-center", ctx.position === "center"))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ToastItem], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('toastAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter, :leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animateChild)())
                ])
            ])
        ] } });
Toast.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "key", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "autoZIndex", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "baseZIndex", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "style", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "styleClass", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "position", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "modal", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "preventOpenDuplicates", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "preventDuplicates", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "showTransformOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "hideTransformOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "showTransitionOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], Toast.prototype, "hideTransitionOptions", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], Toast.prototype, "onClose", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('container')
], Toast.prototype, "containerViewChild", void 0);
__decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren)(primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate)
], Toast.prototype, "templates", void 0);
let ToastModule = class ToastModule {
};
ToastModule.ɵfac = function ToastModule_Factory(t) { return new (t || ToastModule)(); };
ToastModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToastModule });
ToastModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'p-toastItem',
                template: `
        <div #container [attr.id]="message.id" class="ui-toast-message ui-shadow" [@messageState]="{value: 'visible', params: {showTransformParams: showTransformOptions, hideTransformParams: hideTransformOptions, showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}"
            [ngClass]="{'ui-toast-message-info': message.severity == 'info','ui-toast-message-warn': message.severity == 'warn',
                'ui-toast-message-error': message.severity == 'error','ui-toast-message-success': message.severity == 'success'}"
                (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="ui-toast-message-content">
                <a tabindex="0" class="ui-toast-close-icon pi pi-times" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" *ngIf="message.closable !== false"></a>
                <ng-container *ngIf="!template">
                    <span class="ui-toast-icon pi"
                        [ngClass]="{'pi-info-circle': message.severity == 'info', 'pi-exclamation-triangle': message.severity == 'warn',
                            'pi-times-circle': message.severity == 'error', 'pi-check' :message.severity == 'success'}"></span>
                    <div class="ui-toast-message-text-content">
                        <div class="ui-toast-summary">{{message.summary}}</div>
                        <div class="ui-toast-detail">{{message.detail}}</div>
                    </div>
                </ng-container>
                <ng-container *ngTemplateOutlet="template; context: {$implicit: message}"></ng-container>
            </div>
        </div>
    `,
                animations: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('messageState', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                            transform: 'translateY(0)',
                            opacity: 1
                        })),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ transform: '{{showTransformParams}}', opacity: 0 }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{showTransitionParams}}')
                        ]),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => void', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(('{{hideTransitionParams}}'), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                                height: 0,
                                opacity: 0,
                                transform: '{{hideTransformParams}}'
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], containerViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Toast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'p-toast',
                template: `
        <div #container [ngClass]="{'ui-toast ui-widget': true, 
                'ui-toast-top-right': position === 'top-right',
                'ui-toast-top-left': position === 'top-left',
                'ui-toast-bottom-right': position === 'bottom-right',
                'ui-toast-bottom-left': position === 'bottom-left',
                'ui-toast-top-center': position === 'top-center',
                'ui-toast-bottom-center': position === 'bottom-center',
                'ui-toast-center': position === 'center'}" 
                [ngStyle]="style" [class]="styleClass">
            <p-toastItem *ngFor="let msg of messages; let i=index" [message]="msg" [index]="i" (onClose)="onMessageClose($event)"
                    [template]="template" @toastAnimation (@toastAnimation.start)="onAnimationStart($event)" 
                    [showTransformOptions]="showTransformOptions" [hideTransformOptions]="hideTransformOptions" 
                    [showTransitionOptions]="showTransitionOptions" [hideTransitionOptions]="hideTransitionOptions"></p-toastItem>
        </div>
    `,
                animations: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('toastAnimation', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter, :leave', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animateChild)())
                        ])
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { autoZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], preventOpenDuplicates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], preventDuplicates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], containerViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container']
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
                exports: [Toast, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
                declarations: [Toast, ToastItem]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastModule, { declarations: function () { return [Toast, ToastItem]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [Toast, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 66936:
/*!********************************************!*\
  !*** ./src/app/constants/home.messages.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOME_MESSAGES": function() { return /* binding */ HOME_MESSAGES; }
/* harmony export */ });
const HOME_MESSAGES = [
    {
        title: 'Ela',
        content: 'Hey, what are you up to?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Just exploring Moonlight, this app is insane!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'Moonlight? What’s that?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'It’s where creators bring stories to life and readers become part of them. The most immersive storytelling app ever.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'Sounds cool! But what makes it different?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Interactive content, incredible creator tools, and even stats showing what readers choose in your stories. Oh, and it’s fast—native apps, no lag!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'Wow, can creators make money too?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Absolutely! Creators earn $ML tokens for their content—direct tips, premium purchases, you name it. NFTs? You can even mint parts of your story!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'NFTs for content?! That’s next-level. Feels like creators’ turn, like designers with NFT art last year.',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Exactly! Moonlight is like the future of storytelling—high-tech, creator-first, and powered by AI tools for writing. Our team has already built apps for millions of users!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'AI? Tell me more!',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'There’s a custom LLM behind it. It helps with tone adjustments, story generation, even fixing grammar. And it’s super easy to use.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'What about stats? Can creators see how their content performs?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Oh, 100%. You get deep stats—how people interact with your content, what choices they made, and where they spent the most time. It’s perfect for improving and understanding your audience.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'This feels like such a game-changer. Anything else cool I should know?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Yeah, it’s fast—apps are native and crazy smooth. The team behind Moonlight knows their stuff. They’ve shipped apps for millions before.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'Is Moonlight out now? I need this.',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'It’s in beta, but already has over 1k users! And the public launch is coming soon, so stay tuned!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'This sounds amazing. I’m all in!',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Trust me, you’ll love it. Moonlight is changing the game for creators and readers alike.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'Okay, so tell me more about this $ML token. What’s the plan?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: '$ML has a 1 billion total supply, and it’s all about rewarding creators, engaging the community, and supporting Moonlight’s growth.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'How’s it all distributed? Is it fair?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Totally. 25% for community rewards, 32.5% for liquidity, 7.5% for public sale, 5.5% for ecosystem growth, and the rest for development, team, and treasury.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'Interesting! So it’s not just a money grab, right?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Nope! It’s about empowering creators and building something sustainable. Community rewards alone will be distributed over 20 years to keep the ecosystem strong.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'What’s the use for $ML? Why would people need it?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Loads of uses—tipping creators, buying premium content, governance voting, holding contests, and even accessing special features on Moonlight.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'And what’s the public sale about? Can anyone join?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Yep, the public sale is for everyone. It’s 7.5% of the total supply, and 25% is unlocked immediately at the Token Generation Event (TGE). The rest unlocks over 6 months.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'What’s a TGE?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'It’s the Token Generation Event, basically when $ML goes live, and people can start buying, earning, and trading it.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'How’s Moonlight planning to grow? What’s next?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'We’re following a clear roadmap—MVP launched, AI tools integrated, beta testing with 1K+ users, and next, we’re launching 1.0 with blockchain integration and $ML token!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'What comes after 1.0?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Big things! Staking $ML, expanding globally, creating a DAO for decentralized governance, and constant feature upgrades based on user feedback.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'A DAO? So $ML holders get a say?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Exactly. If you hold $ML, you can vote on important decisions—like what features to build next or how funds should be used.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ela',
        content: 'I can’t wait for the launch. How do I get started?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Adam',
        content: 'Sign up now to secure your spot! And don’t forget to follow the journey—we’re just getting started.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
    },
];


/***/ }),

/***/ 28973:
/*!***************************************************!*\
  !*** ./src/app/constants/team-info-card-items.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEAM_INFO_CARD_ITEMS": function() { return /* binding */ TEAM_INFO_CARD_ITEMS; }
/* harmony export */ });
const TEAM_INFO_CARD_ITEMS = [
    {
        image: 'assets/images/quality.svg',
        title: 'QUALITY',
        description: 'We have seen poor quality and we are not going down that road. A product that is easy to use will give the user a pleasant user experience. It will enable the user to focus on what is important instead of worrying or being slowed down.'
    },
    {
        image: 'assets/images/impact.svg',
        title: 'IMPACT',
        description: 'We aim to make our product as powerful and innovative as possible. Yet super simple and efficient to use. This is how we enable user sustainability. We´ll give the user all the tools and features they need to get their message out in the world.'
    },
    {
        image: 'assets/images/education.svg',
        title: 'EDUCATION',
        description: 'Learning and growing is one of the primary reasons we exist. We want to enable people to enjoy themselves and find new ways to share across the globe. To learn, teach and connect in new and unique ways. Everyone can be the student and the teacher.'
    },
    {
        image: 'assets/images/creativity.svg',
        title: 'CREATIVITY',
        description: 'We pride ourselves in making a new-thinking, fun and highly customizable product. Leaving the power of the experience up to the users. We´re the balance between clever and crazy, which is needed to solve any issue.'
    },
    {
        image: 'assets/images/passion.svg',
        title: 'PASSION',
        description: 'The common factor of all of our team members are a build in passion for what we are creating. In short we love to create. To go from idea til finished product. Everyone is driven by the fact that this app will change many lives.'
    },
    {
        image: 'assets/images/diversity.svg',
        title: 'DIVERSITY',
        description: 'Our team is put together by people from different areas, each their own expertise and experience. It’s important to make a broad use product. We co create to make sure our product is versatile for the users.'
    },
];


/***/ }),

/***/ 85521:
/*!*********************************************!*\
  !*** ./src/app/constants/team.messaages.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEAM_MESSAGES": function() { return /* binding */ TEAM_MESSAGES; }
/* harmony export */ });
const TEAM_MESSAGES = [
    {
        title: 'Deg',
        content: 'Hei, hva er moonlight?',
        isQuestion: true,
        isVisible: false
    },
    {
        title: '',
        content: 'Yo! Moonlight er et app der du kan utforske eller skape de beste fiction-historier i form av chat.',
        avatar: './assets/images/moonlight-logo.png',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Deg',
        content: 'Det hores bra ut! Hvem har laget dette?',
        isQuestion: true,
        isVisible: false
    },
    {
        title: '',
        content: 'Dette er utviklet av noen veldig entusiastiske ungdommer her i Oslo.',
        avatar: './assets/images/moonlight-logo.png',
        isQuestion: false,
        isVisible: false
    },
    {
        title: '',
        content: 'Jeg kan møte deg med teamet',
        avatar: './assets/images/moonlight-logo.png',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Marius',
        content: 'Hi, jeg er ansvarlig for iOS-appen',
        avatar: './assets/images/people/marius.jpg',
        isQuestion: false,
        isVisible: false
    },
    {
        title: 'Deg',
        content: 'Hyggelig, hvem lagte android?',
        isQuestion: true,
        isVisible: false
    },
    {
        title: 'Ardian',
        content: 'Hi, jeg har vært ansvarlig for å bygge Android-versjonen av appen',
        avatar: 'https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725589_JZfWRosnHjBUXOoYCVXTVQsKwf2CU3gd.jpg',
        isQuestion: false,
        isVisible: false
    },
];


/***/ }),

/***/ 21630:
/*!**************************************************!*\
  !*** ./src/app/dashboard/beta/beta.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BetaComponent": function() { return /* binding */ BetaComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_beta_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./beta.component.html */ 46824);
/* harmony import */ var _beta_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beta.component.scss */ 89234);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_beta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/beta.service */ 25948);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 46976);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);









let BetaComponent = class BetaComponent {
    constructor(betaService, messageService) {
        this.betaService = betaService;
        this.messageService = messageService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.successMessage = 'Successfully submitted, you’ll receive beta invite soon.!';
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
    }
    submitForm() {
        if (this.form.invalid || this.deviceType === undefined)
            return;
        this.showLoader = true;
        this.form.get('subject').patchValue(this.deviceType ? 'Android' : 'IOS');
        this.form.get('message').patchValue(this.form.value.email);
        this.betaService.send(this.form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.showLoader = false))
            .subscribe(_ => {
            this.form.reset();
            this.showSuccessMessage();
        });
    }
    showSuccessMessage() {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: this.successMessage
        });
    }
    getSelectedDevice(event) {
        this.deviceType = event === 1;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
};
BetaComponent.ctorParameters = () => [
    { type: _services_beta_service__WEBPACK_IMPORTED_MODULE_2__.BetaService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService }
];
BetaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-settings',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_beta_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_beta_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BetaComponent);



/***/ }),

/***/ 794:
/*!********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.component.html */ 74273);
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss */ 49035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/feedback.service */ 4016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 46976);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71435);








let ContactComponent = class ContactComponent {
    constructor(feedBackService, messageService) {
        this.feedBackService = feedBackService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
    }
    submitForm() {
        this.showLoader = true;
        this.feedbackSub = this.feedBackService.sendFeedBack(this.form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.showLoader = false))
            .subscribe(res => {
            this.form.reset();
        });
        // this.addSingle();
        // this.messageService.add({severity: 'info', summary: 'Service Message', detail: 'Via MessageService'});
    }
    addSingle() {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Your Feedback Submitted Successfully. '
        });
    }
    ngOnDestroy() {
        this.feedbackSub && this.feedbackSub.unsubscribe();
    }
};
ContactComponent.ctorParameters = () => [
    { type: _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService }
];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contact',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactComponent);



/***/ }),

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": function() { return /* binding */ DashboardRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invest-in-us/invest-in-us.component */ 83048);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 32488);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 794);
/* harmony import */ var _beta_beta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beta/beta.component */ 21630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 50257);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.component */ 57130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
            },
            {
                path: 'about',
                component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__.TeamComponent,
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent
            },
            {
                path: 'beta',
                component: _beta_beta_component__WEBPACK_IMPORTED_MODULE_3__.BetaComponent
            },
            {
                path: 'invest-in-us',
                component: _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_0__.InvestInUsComponent
            },
        ]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule
        ]
    })
], DashboardRoutingModule);



/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ui_fragments_user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-fragments/user-profile/user-profile.module */ 73372);
/* harmony import */ var _ui_kits_success_modal_success_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui-kits/success-modal/success-modal.module */ 34267);
/* harmony import */ var _ui_fragments_message_box_message_box_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-fragments/message-box/message-box.module */ 20215);
/* harmony import */ var _ui_kits_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-kits/input-switch/input-switch.module */ 40387);
/* harmony import */ var _ui_kits_radio_button_radio_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui-kits/radio-button/radio-button.module */ 88183);
/* harmony import */ var _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invest-in-us/invest-in-us.component */ 83048);
/* harmony import */ var _ui_fragments_info_card_info_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui-fragments/info-card/info-card.module */ 31464);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 32488);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var _ui_fragments_header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui-fragments/header/header.module */ 28562);
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/feedback.service */ 4016);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ 794);
/* harmony import */ var _services_beta_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/beta.service */ 25948);
/* harmony import */ var _beta_beta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beta/beta.component */ 21630);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ 50257);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team/team.component */ 57130);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 46976);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 63877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);






















let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__.HomeComponent,
            _team_team_component__WEBPACK_IMPORTED_MODULE_15__.TeamComponent,
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__.ContactComponent,
            _beta_beta_component__WEBPACK_IMPORTED_MODULE_13__.BetaComponent,
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent,
            _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_5__.InvestInUsComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutingModule,
            _ui_fragments_header_header_module__WEBPACK_IMPORTED_MODULE_9__.HeaderModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_19__.ToastModule,
            _ui_fragments_message_box_message_box_module__WEBPACK_IMPORTED_MODULE_2__.MessageBoxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _ui_kits_success_modal_success_modal_module__WEBPACK_IMPORTED_MODULE_1__.SuccessModalModule,
            _ui_fragments_user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_0__.UserProfileModule,
            _ui_kits_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_3__.InputSwitchModule,
            _ui_kits_radio_button_radio_button_module__WEBPACK_IMPORTED_MODULE_4__.RadioButtonModule,
            _ui_fragments_info_card_info_card_module__WEBPACK_IMPORTED_MODULE_6__.InfoCardModule,
        ],
        providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService,
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_10__.FeedbackService,
            _services_beta_service__WEBPACK_IMPORTED_MODULE_12__.BetaService,
        ]
    })
], DashboardModule);



/***/ }),

/***/ 32488:
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.component.html */ 98541);
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ 5060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 50257:
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 41);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 82294);
/* harmony import */ var _constants_home_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/home.messages */ 66936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





let HomeComponent = class HomeComponent {
    constructor() {
        this.showMessageBox = true;
        this.showTapIcon = true;
        this.messages = JSON.parse(JSON.stringify(_constants_home_messages__WEBPACK_IMPORTED_MODULE_2__.HOME_MESSAGES));
    }
    ngOnInit() {
    }
    toggleModal() {
        this.showMessageBox = !this.showMessageBox;
        this.messages = [...this.messages];
        setTimeout(() => {
            this.showScale = this.showMessageBox;
        }, 200);
    }
    onLastMessage() {
        this.showMessageBox = false;
        this.showMessageBoxModal = false;
        setTimeout(() => {
            this.showTapIcon = true;
        }, 300);
        setTimeout(() => {
            // this.showMessageBox = !this.showMessageBox;
            this.showMessageBox = true;
        }, 150);
        setTimeout(() => {
            this.showDownloadInfoContent = !this.showDownloadInfoContent;
        }, 0);
        this.showDownloadInfo = false;
        this.showScale = false;
    }
    navigateToHome() {
        setTimeout(() => {
            this.showDownloadInfo = false;
        }, 500);
        this.showDownloadInfoContent = !this.showDownloadInfoContent;
    }
    openMessageBoxModal() {
        this.showMessageBoxModal = true;
        this.showMessageBox = false;
    }
    navigateToWebStore() {
        window.open('https://testflight.apple.com/join/yb3jdbl6', '_blank');
    }
    navigateToDocs() {
        window.open('https://docs.moonlightapp.co/d', '_blank');
    }
    onFirstTimeClick() {
        this.showTapIcon = false;
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 83048:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/invest-in-us/invest-in-us.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestInUsComponent": function() { return /* binding */ InvestInUsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_invest_in_us_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./invest-in-us.component.html */ 83111);
/* harmony import */ var _invest_in_us_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invest-in-us.component.scss */ 94831);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/feedback.service */ 4016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71435);







let InvestInUsComponent = class InvestInUsComponent {
    constructor(feedBackService) {
        this.feedBackService = feedBackService;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
    }
    submit() {
        this.showLoader = true;
        this.feedbackSub = this.feedBackService.sendFeedBack(this.form.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.showLoader = false))
            .subscribe(res => {
            this.form.reset();
        });
    }
};
InvestInUsComponent.ctorParameters = () => [
    { type: _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService }
];
InvestInUsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-invest-in-us',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_invest_in_us_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invest_in_us_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvestInUsComponent);



/***/ }),

/***/ 57130:
/*!**************************************************!*\
  !*** ./src/app/dashboard/team/team.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": function() { return /* binding */ TeamComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./team.component.html */ 69419);
/* harmony import */ var _team_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.component.scss */ 2123);
/* harmony import */ var _constants_team_info_card_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/team-info-card-items */ 28973);
/* harmony import */ var _constants_team_messaages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/team.messaages */ 85521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);






let TeamComponent = class TeamComponent {
    constructor() {
        this.messages = JSON.parse(JSON.stringify(_constants_team_messaages__WEBPACK_IMPORTED_MODULE_3__.TEAM_MESSAGES));
        this.profileMode = true;
        this.teamInfoItems = _constants_team_info_card_items__WEBPACK_IMPORTED_MODULE_2__.TEAM_INFO_CARD_ITEMS;
        this.profiles = {
            foundersAndCoreTeam: [
                {
                    firstName: 'Besar',
                    lastName: 'Ismaili',
                    role: 'Founder and Senior Developer',
                    avatar: 'assets/images/people/besar.jpg',
                    link: 'https://www.linkedin.com/in/besar/',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Marius',
                    lastName: 'Fagerhol',
                    role: 'Co-Founder and iOS Lead',
                    avatar: 'assets/images/people/marius.jpg',
                    link: 'https://www.linkedin.com/in/marius-fagerhol-4076a4126/',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Bejtulla',
                    lastName: 'Ajeti',
                    role: 'Front-End Developer',
                    avatar: 'assets/images/people/profile.jpg',
                    link: '',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Taaha',
                    lastName: 'Bin Khalid',
                    role: 'Interaction and Service Designer',
                    avatar: 'assets/images/taaha-bin-khaled-image.jpg',
                    link: 'https://www.linkedin.com/in/taahabinkhalid/?originalSubdomain=no',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Muhamed',
                    lastName: 'Zeqiri',
                    role: 'Back-end Developer',
                    avatar: 'assets/images/muhamed-zeqiri-image.jpeg',
                    link: 'https://www.linkedin.com/in/muhamed-zeqiri-35a728241/',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Kujtim',
                    lastName: 'Saliu',
                    role: 'iOS Developer',
                    avatar: 'assets/images/kujtim-saliu-image.jpeg',
                    link: 'https://www.linkedin.com/in/kujtim-saliu-b205b217a',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Lot',
                    lastName: 'Bajrami',
                    role: 'Full-Stack Developer',
                    avatar: 'assets/images/lot-bajrami-image.jpeg',
                    link: 'https://www.linkedin.com/in/lot-bajrami-771226135',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Valdrin',
                    lastName: 'Muharemi',
                    role: 'Back-end Developer',
                    avatar: 'assets/images/valdrin-muharemi-image.jpeg',
                    link: 'https://www.linkedin.com/in/valdrin-muharemi',
                    platform: 'linkedin'
                }
            ],
            marketing: [
                {
                    firstName: 'Just',
                    lastName: 'Andreas',
                    role: 'Marketing',
                    avatar: 'assets/images/just-andreas-image.png',
                    link: 'https://www.instagram.com/justandreas/?hl=en',
                    platform: 'instagram'
                }
            ],
            investorsAndAdvisors: [
                {
                    firstName: 'Endre',
                    lastName: 'Brask Grønmyr',
                    role: 'Chairman of the Board',
                    avatar: 'assets/images/endre-brask-gronmyr-image.jpeg',
                    link: 'https://www.linkedin.com/in/endre-brask-gr%C3%B8nmyr/',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Marius',
                    lastName: 'Mårnes Mathiesen',
                    role: 'Advisor and Investor',
                    avatar: 'assets/images/marius-marnes-mathiesen-image.png',
                    link: 'https://www.linkedin.com/in/mmathiesen/?originalSubdomain=no',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Arve',
                    lastName: 'Egil Habjorg',
                    role: 'Advisor and Investor',
                    avatar: 'assets/images/arve-egil-habjorg-image.jpeg',
                    link: 'https://www.linkedin.com/in/arvehabjorg/',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Sigurd William',
                    lastName: 'Rachlew Høystad',
                    role: 'Advisor and Investor',
                    avatar: 'assets/images/sigurd-image.jpeg',
                    link: 'https://no.linkedin.com/in/sigurdwrh',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Thomas',
                    lastName: 'Pettersen',
                    role: 'Advisor and Early Investor',
                    avatar: 'assets/images/thomas-pettersen-image.jpeg',
                    link: 'https://www.linkedin.com/in/thomas-pettersen-45322622/',
                    platform: 'linkedin'
                },
                {
                    firstName: 'Elin',
                    lastName: 'Fjeld',
                    role: 'Advisor, Product Tester and Shareholder',
                    avatar: 'assets/images/elin-fjeld-image.jpeg',
                    link: 'https://no.linkedin.com/in/elinfjeld/en',
                    platform: 'linkedin'
                }
            ]
        };
    }
    ngOnInit() {
        console.log('++++++++++++++++++++++++++++', this.teamInfoItems);
    }
    getPlatformIcon(platform) {
        const icons = {
            linkedin: 'linkedin-icon.svg',
            tiktok: 'tiktok-icon.svg',
            instagram: 'instagram-icon.svg'
        };
        return icons[platform] || ''; // Return empty if no valid platform
    }
};
TeamComponent.ctorParameters = () => [];
TeamComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-team',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_team_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamComponent);



/***/ }),

/***/ 25948:
/*!******************************************!*\
  !*** ./src/app/services/beta.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BetaService": function() { return /* binding */ BetaService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



let BetaService = class BetaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    send(data) {
        return this.httpClient.post('https://formspree.io/mbnkornm', data);
        // return this.httpClient.post('http://ec2-52-30-111-90.eu-west-1.compute.amazonaws.com:8080/users/beta', data);
    }
};
BetaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
BetaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], BetaService);



/***/ }),

/***/ 4016:
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": function() { return /* binding */ FeedbackService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



let FeedbackService = class FeedbackService {
    constructor(http) {
        this.http = http;
    }
    sendFeedBack(formValue) {
        return this.http.post('https://formspree.io/mbnkornm', formValue);
    }
};
FeedbackService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FeedbackService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], FeedbackService);



/***/ }),

/***/ 40082:
/*!***************************************************************!*\
  !*** ./src/app/ui-fragments/info-card/info-card.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoCardComponent": function() { return /* binding */ InfoCardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./info-card.component.html */ 44521);
/* harmony import */ var _info_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-card.component.scss */ 97016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let InfoCardComponent = class InfoCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
InfoCardComponent.ctorParameters = () => [];
InfoCardComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
InfoCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-info-card',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_info_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoCardComponent);



/***/ }),

/***/ 31464:
/*!************************************************************!*\
  !*** ./src/app/ui-fragments/info-card/info-card.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoCardModule": function() { return /* binding */ InfoCardModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _info_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-card.component */ 40082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let InfoCardModule = class InfoCardModule {
};
InfoCardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _info_card_component__WEBPACK_IMPORTED_MODULE_0__.InfoCardComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _info_card_component__WEBPACK_IMPORTED_MODULE_0__.InfoCardComponent
        ]
    })
], InfoCardModule);



/***/ }),

/***/ 58606:
/*!*******************************************************************!*\
  !*** ./src/app/ui-fragments/message-box/message-box.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxComponent": function() { return /* binding */ MessageBoxComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message-box.component.html */ 46129);
/* harmony import */ var _message_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-box.component.scss */ 60282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let MessageBoxComponent = class MessageBoxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.lastMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onFirstTimeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.index = 1;
        this.isInited = false;
        this.hideMessageBox = false;
    }
    onKeyDown(event) {
        if (event.keyCode === 40) {
            this.displayMessagesByIndex();
        }
    }
    onClick(event) {
        if (!this.firstTimeClick) {
            this.firstTimeClick = true;
            this.onFirstTimeClick.emit(true);
        }
        this.isInited && this.displayMessagesByIndex();
    }
    onResize() {
        this.updateTopLimit();
    }
    ngOnInit() {
        this.updateTopLimit();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.messages[0].isVisible = true;
            this.isInited = true;
        }, 100);
    }
    updateTopLimit() {
        const container = document.querySelector('.message-box-container');
        const computedStyle = getComputedStyle(container);
        const topLimitVar = computedStyle.getPropertyValue('--message-top-limit');
        console.log('CSS Variable --message-top-limit:', topLimitVar);
        this.topLimit = parseInt(topLimitVar, 10) || 280;
        console.log('Parsed topLimit:', this.topLimit);
    }
    displayMessagesByIndex() {
        const container = document.getElementById('message-box-container');
        const items = Array.from(document.getElementsByClassName('message-box-container')[0].querySelectorAll('.message-item'));
        if (this.index > this.messages.length - 1) {
            if (!this.isHomePage) {
                this.index = 1;
                container['style'].transform = `translate(-50%, ${-(90)}px)`;
                this.messages.forEach((message, index) => index ? (message.isVisible = false) : (message.isVisible = true));
                return;
            }
            this.index = 1;
            this.messages.forEach((message, index) => index ? (message.isVisible = false) : (message.isVisible = true));
            this.hideMessageBox = true;
            this.lastMessage.emit(true);
        }
        else {
            this.messages[this.index].isVisible = true;
            let el = document.getElementById('' + (this.index));
            container['style'].transform = `translate(-50%, ${-(el.offsetTop + 90)}px)`;
        }
        setTimeout(() => {
            items.forEach((item, index) => {
                if (item.getBoundingClientRect().top < this.topLimit && this.messages[index].isVisible) {
                    this.messages[index].isVisible = false;
                }
            });
        }, 300);
        this.index++;
    }
};
MessageBoxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
MessageBoxComponent.propDecorators = {
    modalIsVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    lastMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onFirstTimeClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener, args: ['document:keydown', ['$event'],] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener, args: ['document:click', ['$event'],] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener, args: ['window:resize',] }]
};
MessageBoxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-message-box',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_box_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_message_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessageBoxComponent);



/***/ }),

/***/ 20215:
/*!****************************************************************!*\
  !*** ./src/app/ui-fragments/message-box/message-box.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxModule": function() { return /* binding */ MessageBoxModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ui_kits_message_item_message_item_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui-kits/message-item/message-item.module */ 82073);
/* harmony import */ var _message_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-box.component */ 58606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





let MessageBoxModule = class MessageBoxModule {
};
MessageBoxModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _message_box_component__WEBPACK_IMPORTED_MODULE_1__.MessageBoxComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ui_kits_message_item_message_item_module__WEBPACK_IMPORTED_MODULE_0__.MessageItemModule
        ],
        exports: [
            _message_box_component__WEBPACK_IMPORTED_MODULE_1__.MessageBoxComponent
        ]
    })
], MessageBoxModule);



/***/ }),

/***/ 5266:
/*!*********************************************************************!*\
  !*** ./src/app/ui-fragments/user-profile/user-profile.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": function() { return /* binding */ UserProfileComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-profile.component.html */ 54366);
/* harmony import */ var _user_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.scss */ 47667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let UserProfileComponent = class UserProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
UserProfileComponent.ctorParameters = () => [];
UserProfileComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UserProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user-profile',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserProfileComponent);



/***/ }),

/***/ 73372:
/*!******************************************************************!*\
  !*** ./src/app/ui-fragments/user-profile/user-profile.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileModule": function() { return /* binding */ UserProfileModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.component */ 5266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let UserProfileModule = class UserProfileModule {
};
UserProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent
        ]
    })
], UserProfileModule);



/***/ }),

/***/ 50672:
/*!****************************************************************!*\
  !*** ./src/app/ui-kits/message-item/message-item.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageItemComponent": function() { return /* binding */ MessageItemComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message-item.component.html */ 22289);
/* harmony import */ var _message_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-item.component.scss */ 50148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let MessageItemComponent = class MessageItemComponent {
    constructor() {
        this.message = {};
    }
    ngOnInit() {
    }
};
MessageItemComponent.ctorParameters = () => [];
MessageItemComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MessageItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-message-item',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_message_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessageItemComponent);



/***/ }),

/***/ 82073:
/*!*************************************************************!*\
  !*** ./src/app/ui-kits/message-item/message-item.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageItemModule": function() { return /* binding */ MessageItemModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _message_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-item.component */ 50672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let MessageItemModule = class MessageItemModule {
};
MessageItemModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _message_item_component__WEBPACK_IMPORTED_MODULE_0__.MessageItemComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _message_item_component__WEBPACK_IMPORTED_MODULE_0__.MessageItemComponent
        ]
    })
], MessageItemModule);



/***/ }),

/***/ 51607:
/*!****************************************************************!*\
  !*** ./src/app/ui-kits/radio-button/radio-button.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonComponent": function() { return /* binding */ RadioButtonComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./radio-button.component.html */ 1914);
/* harmony import */ var _radio_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button.component.scss */ 85513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




let RadioButtonComponent = class RadioButtonComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    onClick() {
        this.select.emit(this.selectedValue);
    }
};
RadioButtonComponent.ctorParameters = () => [];
RadioButtonComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
RadioButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-radio-button',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_radio_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RadioButtonComponent);



/***/ }),

/***/ 88183:
/*!*************************************************************!*\
  !*** ./src/app/ui-kits/radio-button/radio-button.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonModule": function() { return /* binding */ RadioButtonModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _radio_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button.component */ 51607);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 35751);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);






let RadioButtonModule = class RadioButtonModule {
};
RadioButtonModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _radio_button_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule
        ],
        exports: [
            _radio_button_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent
        ]
    })
], RadioButtonModule);



/***/ }),

/***/ 52258:
/*!******************************************************************!*\
  !*** ./src/app/ui-kits/success-modal/success-modal.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessModalComponent": function() { return /* binding */ SuccessModalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./success-modal.component.html */ 7848);
/* harmony import */ var _success_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-modal.component.scss */ 60129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let SuccessModalComponent = class SuccessModalComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
SuccessModalComponent.ctorParameters = () => [];
SuccessModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-success-modal',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_success_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuccessModalComponent);



/***/ }),

/***/ 34267:
/*!***************************************************************!*\
  !*** ./src/app/ui-kits/success-modal/success-modal.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessModalModule": function() { return /* binding */ SuccessModalModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _success_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-modal.component */ 52258);




let SuccessModalModule = class SuccessModalModule {
};
SuccessModalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _success_modal_component__WEBPACK_IMPORTED_MODULE_0__.SuccessModalComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [
            _success_modal_component__WEBPACK_IMPORTED_MODULE_0__.SuccessModalComponent
        ]
    })
], SuccessModalModule);



/***/ }),

/***/ 46824:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/beta/beta.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"beta-container\">\n    <div class=\"container\">\n\n        <div class=\"title\">\n            <h1>Beta is now out</h1>\n            <h5>This is a description text for beta version</h5>\n            <h5>Our beta version is already out, please submit the form to receive beta version</h5>\n        </div>\n\n        <form [formGroup]=\"form\" action=\"https://formspree.io/mbnkornm\" method=\"POST\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" id=\"email\" placeholder=\"Email\" [formControl]=\"form.get('email')\">\n\n            <div class=\"radio-button\">\n                <app-radio-button [label]=\"'Android'\" [selectedValue]=\"1\"\n                                  (select)=\"getSelectedDevice($event)\"></app-radio-button>\n            </div>\n\n            <div class=\"radio-button\">\n                <app-radio-button [label]=\"'iPhone'\" [selectedValue]=\"2\"\n                                  (select)=\"getSelectedDevice($event)\"></app-radio-button>\n            </div>\n\n            <button (click)=\"form.valid && submitForm()\">Submit</button>\n        </form>\n    </div>\n</div>\n\n<p-toast baseZIndex=\"100\" position=\"top-right\"></p-toast>\n\n<div id=\"myModal\" class=\"modal\" *ngIf=\"showLoader\">\n    <div class=\"modal-content\">\n        <img src=\"../../../assets/images/loading.gif\" alt=\"\">\n    </div>\n\n</div>\n");

/***/ }),

/***/ 74273:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/contact/contact.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-container\">\n    <div class=\"contact-info\">\n        <img src=\"assets/images/contact-page-image.svg\" alt=\"Contact Us Image\">\n\n        <p class=\"contact-text\">\n            <strong class=\"headline\">We'd Love to Hear From You!</strong><br />\n            Contact us via email at:<br />\n            <span class=\"email\">hello&#64;moonlightapp.co</span>\n        </p>\n    </div>\n</div>\n\n<p-toast baseZIndex=\"100\" position=\"top-right\"></p-toast>\n\n<div class=\"modal\" *ngIf=\"showLoader\">\n    <div class=\"modal-content\">\n        <img src=\"../../../assets/images/loading.gif\" alt=\"Loading\">\n    </div>\n</div>\n\n   <!-- <div class=\"container\">\n        <form [formGroup]=\"form\" action=\"https://formspree.io/mbnkornm\" method=\"POST\">\n            <label for=\"email\">E Post</label>\n            <input type=\"text\" id=\"email\" [formControl]=\"form.get('email')\">\n\n            <label for=\"subject\">Subject</label>\n            <input type=\"text\" id=\"subject\" [formControl]=\"form.get('subject')\">\n\n            <label for=\"message\">Message</label>\n            <textarea id=\"message\" [formControl]=\"form.get('message')\"></textarea>\n\n            <button [disabled]=\"form.invalid\" (click)=\"submitForm()\">Send</button>\n        </form>\n\n        <div class=\"info-text\">\n            Important Note: We respect privacy and will only use your email to answer your queries.\n        </div>\n    </div>\n</div>-->");

/***/ }),

/***/ 98541:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\n    <div class=\"main-container\">\n        <div class=\"header\">\n            <app-header></app-header>\n        </div>\n\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <div class=\"download-links\" *ngIf=\"false\">\n            <ul (click)=\"$event.stopPropagation()\">\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-appleinc\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-googleplay\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-facebook2\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-instagram\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ 41:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/home/home.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container\">\n    <div class=\"home-section\">\n        <!--        <h1 class=\"section-title\">-->\n        <!--            <div>Chat</div>-->\n        <!--            <div>historier!</div>-->\n        <!--        </h1>-->\n\n        <div class=\"home-section-message-box\">\n            <app-message-box *ngIf=\"showMessageBox\"\n                             (lastMessage)=\"onLastMessage()\"\n                             (onFirstTimeClick)=\"onFirstTimeClick()\"\n                             [isHomePage]=\"true\"\n                             [messages]=\"messages\"\n                             [modalIsVisible]=\"showMessageBox\"></app-message-box>\n        </div>\n\n\n    </div>\n\n    <!--    <ng-container *ngIf=\"showMessageBox\">--> <!--no-scale-->\n    <div class=\"message-box-modal scale\" *ngIf=\"showMessageBoxModal\">\n        <app-message-box (lastMessage)=\"onLastMessage()\"\n                         (onFirstTimeClick)=\"onFirstTimeClick()\"\n                         [isHomePage]=\"true\"\n                         [messages]=\"messages\"\n                         [modalIsVisible]=\"showMessageBox\"></app-message-box>\n\n        <img height=\"70\" width=\"200\" src=\"assets/images/app-store-logo.png\" (click)=\"navigateToDocs()\"\n             alt=\"App Store\">\n    </div>\n    <!--    </ng-container>-->\n\n    <ng-container *ngIf=\"showDownloadInfo\">\n        <div class=\"message-box-modal hide\"\n             [class.show]=\"showDownloadInfoContent\">\n            <div class=\"message-box-content\">\n                <p>Last ned appen for å fortsette å lese historien!</p>\n\n                <div class=\"pointer\" (click)=\"navigateToHome()\">\n                    <div class=\"angle-top\">\n                        <i class=\"icon-angle-top\"></i>\n                    </div>\n\n                    <div class=\"back-button-text\">\n                        Back to top\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </ng-container>\n\n    <!--    <div class=\"angle\" (click)=\"toggleModal()\" *ngIf=\"true\">-->\n    <!--        <img src=\"../../../assets/images/2x/baseline_play_circle_filled_white_48dp.png\" alt=\"\">-->\n    <!--    </div>-->\n\n    <div class=\"angle\" (click)=\"toggleModal()\" *ngIf=\"showTapIcon\">\n        <img src=\"./assets/images/icon_tap.png\" alt=\"Tap\">\n    </div>\n\n    <div class=\"play-icon-container\" (click)=\"openMessageBoxModal()\">\n        <img height=\"70\" width=\"70\" src=\"./assets/images/play-icon-yellow.svg\" alt=\"Play\">\n    </div>\n</div>\n");

/***/ }),

/***/ 83111:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/invest-in-us/invest-in-us.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"invest-in-us-container scroll\">\n    <div class=\"container-header\">\n        <img src=\"assets/images/invest-on-us-image.svg\" alt=\"Invest on Us\">\n        <div class=\"container-content\">\n            <p>Ready to take a stake and be part of this venture?</p>\n            <p>We are aiming for a market leader position, and we believe we have discovered a unique market gap that no one is currently filling.</p>\n            <p>We are a solid team, experienced in the most critical key areas. With this digital shift, we are well-connected and flexible in working from anywhere, anytime. Our team is deeply committed to Moonlight and we don't give up, no matter how complex the problem.</p>\n            <p>If you aim to be part of this next big tech venture, stay tuned for exciting investment opportunities!</p>\n        </div>\n    </div>\n\n    <div class=\"container-footer\">\n        <p class=\"footer-title\">New Investment Information Coming Soon</p>\n        <div class=\"investment-placeholder\">\n            <p>We are currently preparing a comprehensive investment prospectus. Our team is working diligently to provide you with detailed information about our innovative venture.</p>\n        </div>\n    </div>\n</div>\n\n\n  <!-- <div class=\"container-footer\">\n        <div class=\"footer-title\">\n            It's now or never. We won’t ask for investments forever.\n        </div>\n        <div class=\"form-container\">\n            <div>\n                <input [formControl]=\"form.get('name')\" placeholder=\"Full Name\" type=\"text\">\n                <input [formControl]=\"form.get('email')\" placeholder=\"Email\" type=\"email\">\n            </div>\n            <div>\n                <input [formControl]=\"form.get('phone')\" placeholder=\"Contact Number\" type=\"tel\">\n                <button [disabled]=\"form.invalid\" (click)=\"submit()\">Request a call</button>\n            </div>\n        </div>\n    </div>\n</div>-->");

/***/ }),

/***/ 69419:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/team/team.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"team-container scroll\">\n    <div class=\"team-header-container\">\n\n        <!--    <div class=\"switch-profile\">-->\n<!--        <app-input-switch [checked]=\"profileMode\"-->\n<!--                          (onChange)=\"profileMode = $event\"-->\n<!--                          [label]=\"profileMode ? 'Grid' : 'List'\"-->\n<!--                          [showSwitchValue]=\"false\"></app-input-switch>-->\n<!--    </div>-->\n<!--    <div class=\"container message-box-container\" *ngIf=\"!profileMode\">-->\n<!--        <app-message-box [modalIsVisible]=\"true\"-->\n<!--                         [messages]=\"messages\"></app-message-box>-->\n<!--    </div>-->\n\n\n        <div class=\"image-container\">\n            <img src=\"assets/images/about_page_header_image.png\" alt=\"About us image\">\n        </div>\n        <div class=\"description-container\">\n            We’ve discovered a huge opportunity to mix creating, reading, teaching, and learning into bite-sized pieces. Moonlight is the only app that lets you freely explore any style or genre across all these areas without any paywalls or limitations. Plus, with our $ML token, you can support your favorite creators and unlock even more features. We offer a fun, safe, and interactive platform that’s super easy to use and beautifully designed.\n        </div>\n    </div>\n\n    <!-- <div class=\"team-info-container\">\n        <div class=\"info-card-item\" *ngFor=\"let item of teamInfoItems\">\n            <app-info-card [item]=\"item\"></app-info-card>\n        </div>\n    </div> -->\n    \n    <div class=\"team-box-container\" *ngIf=\"profileMode\">\n        <div class=\"team-title\">\n            THE PEOPLE RESPONSIBLE FOR THE FUTURE SUCCESS OF MOONLIGHT:\n        </div>\n    \n        <!-- Founders and Core-Team Section -->\n        <div class=\"team-section\">\n            <div class=\"section-title\">FOUNDERS AND CORE-TEAM</div>\n            <div class=\"team-box-container-content\">\n                <div class=\"team-member\" *ngFor=\"let profile of profiles.foundersAndCoreTeam\">\n                    <img [src]=\"profile.avatar\" [alt]=\"'Photo of ' + profile.firstName + ' ' + profile.lastName\">\n                    <div class=\"name\">{{ profile.firstName }} {{ profile.lastName }}</div>\n                    <div class=\"role\">{{ profile.role }}</div>\n                    <div class=\"link\" *ngIf=\"profile.link && profile.platform\">\n                        <a [href]=\"profile.link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img [src]=\"'assets/images/' + getPlatformIcon(profile.platform)\" \n                                 [alt]=\"profile.platform + ' Icon'\" />\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n        <!-- Marketing Section -->\n        <div class=\"team-section\">\n            <div class=\"section-title\">MARKETING</div>\n            <div class=\"team-box-container-content\">\n                <div class=\"team-member\" *ngFor=\"let profile of profiles.marketing\">\n                    <img [src]=\"profile.avatar\" [alt]=\"'Photo of ' + profile.firstName + ' ' + profile.lastName\">\n                    <div class=\"name\">{{ profile.firstName }} {{ profile.lastName }}</div>\n                    <div class=\"role\">{{ profile.role }}</div>\n                    <div class=\"link\" *ngIf=\"profile.link && profile.platform\">\n                        <a [href]=\"profile.link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img [src]=\"'assets/images/' + getPlatformIcon(profile.platform)\" \n                                 [alt]=\"profile.platform + ' Icon'\" />\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n        <!-- Investors and Advisors Section -->\n        <div class=\"team-section\">\n            <div class=\"section-title\">INVESTORS AND ADVISORS</div>\n            <div class=\"team-box-container-content\">\n                <div class=\"team-member\" *ngFor=\"let profile of profiles.investorsAndAdvisors\">\n                    <img [src]=\"profile.avatar\" [alt]=\"'Photo of ' + profile.firstName + ' ' + profile.lastName\">\n                    <div class=\"name\">{{ profile.firstName }} {{ profile.lastName }}</div>\n                    <div class=\"role\">{{ profile.role }}</div>\n                    <div class=\"link\" *ngIf=\"profile.link && profile.platform\">\n                        <a [href]=\"profile.link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img [src]=\"'assets/images/' + getPlatformIcon(profile.platform)\" \n                                 [alt]=\"profile.platform + ' Icon'\" />\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n");

/***/ }),

/***/ 44521:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ui-fragments/info-card/info-card.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"info-card-container\">\n    <ul>\n        <li>\n            <div class=\"image-container\">\n                <img height=\"30\" width=\"30\" [src]=\"item.image\" alt=\"Image\">\n            </div>\n        </li>\n        <li>\n            <div class=\"title\">\n                {{ item.title }}\n            </div>\n        </li>\n        <li>\n            <div class=\"description\">\n                {{ item.description }}\n            </div>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ 46129:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ui-fragments/message-box/message-box.component.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"message-box-container\" id=\"message-box-container\">\n    <div class=\"message-item clearfix\"\n         *ngFor=\"let message of messages; index as index\"\n         [attr.id]=\"index\"\n         [hidden]=\"hideMessageBox\"\n         [class.visible]=\"message.isVisible\">\n        <app-message-item [isHomePage]=\"isHomePage\" [message]=\"message\"></app-message-item>\n    </div>\n</div>\n");

/***/ }),

/***/ 54366:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ui-fragments/user-profile/user-profile.component.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-profile-container\">\n    <div class=\"avatar\" [ngStyle]=\"{backgroundImage: 'url('+user.avatar+')'}\">\n    </div>\n    <div class=\"credentials\">\n        {{ user.firstName }} {{ user.lastName }}\n    </div>\n    <div class=\"role\">\n        {{ user.role }}\n    </div>\n</div>\n");

/***/ }),

/***/ 22289:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ui-kits/message-item/message-item.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"message-item-container clearfix\" [class.float-right]=\"message.isQuestion\">\n    <div class=\"avatar float-left\" *ngIf=\"!message.isQuestion && !isHomePage\">\n        <img [src]=\"message.avatar\" alt=\"UserAvatar\">\n    </div>\n    <div class=\"credentials\">\n<!--        <div  class=\"message-title\"-->\n<!--              [class.color-orange]=\"message.isQuestion\"-->\n<!--              [class.color-light-blue]=\"!message.isQuestion\">-->\n<!--            {{message.title}}-->\n<!--        </div>-->\n        <div  class=\"message-title\" [ngStyle]=\"{color: message.color}\">\n            {{message.title}}\n        </div>\n        <div class=\"message-content\">{{message.content}}</div>\n    </div>\n</div>\n");

/***/ }),

/***/ 1914:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ui-kits/radio-button/radio-button.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-radioButton name=\"groupname\"\n               [label]=\"label\"\n               (onClick)=\"onClick()\"\n               [value]=\"selectedValue\"></p-radioButton>\n");

/***/ }),

/***/ 7848:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/ui-kits/success-modal/success-modal.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<div id=\"success_tic\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <a class=\"close\" href=\"#\" data-dismiss=\"modal\">&times;</a>\n            <div class=\"page-body\">\n                <div class=\"head\">\n                    <h3 style=\"margin-top:5px;\">Lorem ipsum dolor sit amet</h3>\n                    <h4>Lorem ipsum dolor sit amet</h4>\n                </div>\n\n                <h1 style=\"text-align:center;\">\n                    <div class=\"checkmark-circle\">\n                        <div class=\"background\"></div>\n                        <div class=\"checkmark draw\"></div>\n                    </div>\n                </h1>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ 89234:
/*!****************************************************!*\
  !*** ./src/app/dashboard/beta/beta.component.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = ".beta-container {\n  padding-top: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 820px;\n}\n.beta-container .title {\n  color: #F9E3A7;\n  margin-bottom: 20px;\n}\n.beta-container h1 {\n  color: #F9E3A7;\n  margin-bottom: 5px;\n}\n.beta-container h5 {\n  margin-bottom: 2px;\n}\n.beta-container label {\n  color: #F9E3A7;\n}\n.beta-container input[type=text], .beta-container textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #EAEAEA;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n  background-color: #EAEAEA;\n}\n.beta-container button {\n  background-color: #F9E3A7;\n  color: #181727;\n  font-size: 16px;\n  font-weight: 800;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 15px;\n}\n.beta-container .radio-button {\n  display: inline-block;\n  margin-right: 10px;\n}\n.modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJldGEuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBSUEsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBRUksY0NkRDtFRGVDLG1CQUFBO0FBRlI7QUFLSTtFQUNJLGNDbkJEO0VEb0JDLGtCQUFBO0FBSFI7QUFNSTtFQUNJLGtCQUFBO0FBSlI7QUFPSTtFQUNJLGNDNUJEO0FEdUJQO0FBUUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFOUjtBQVNJO0VBQ0kseUJDNUNEO0VENkNDLGNDdkNTO0VEd0NULGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVBSO0FBVUk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBUlI7QUFZQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFUSjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0FBVEoiLCJmaWxlIjoiYmV0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5cbi5iZXRhLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogODIwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRnb2xkOztcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXRleHRdLCB0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZDtcbiAgICAgICAgY29sb3I6ICRibHVlLWRlZXAtZGFyaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";

/***/ }),

/***/ 49035:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/contact/contact.component.scss ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = ".contact-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 20px;\n}\n.contact-container .contact-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 25px;\n  gap: 25px;\n  text-align: center;\n  max-width: 900px;\n  width: 100%;\n}\n.contact-container .contact-info img {\n  width: 50%;\n  max-width: 400px;\n  height: auto;\n}\n.contact-container .contact-info .contact-text {\n  font-size: 32px;\n  color: white;\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.contact-container .contact-info .contact-text .headline {\n  font-size: 42px;\n  color: #F9E3A7;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 15px;\n}\n.contact-container .contact-info .contact-text .email {\n  font-size: 48px;\n  color: #F9E3A7;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-block;\n  padding: 5px 10px;\n  border-radius: 8px;\n}\n.contact-container .contact-info .contact-text .email:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  transform: scale(1.05);\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .contact-container .contact-info img {\n    width: 80%;\n  }\n  .contact-container .contact-info .contact-text {\n    font-size: 24px;\n  }\n  .contact-container .contact-info .contact-text .headline {\n    font-size: 32px;\n  }\n  .contact-container .contact-info .contact-text .email {\n    font-size: 36px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-container .contact-info .contact-text {\n    font-size: 18px;\n  }\n  .contact-container .contact-info .contact-text .headline {\n    font-size: 26px;\n  }\n  .contact-container .contact-info .contact-text .email {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFaSjtBQWNJO0VBakJBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFnQkksY0FBQTtFQUFBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRSO0FBV1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVFo7QUFZUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVZaO0FBWVk7RUFDSSxlQUFBO0VBQ0EsY0N2Q1Q7RUR3Q1MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVZoQjtBQWFZO0VBQ0ksZUFBQTtFQUNBLGNDaERUO0VEaURTLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWGhCO0FBYWdCO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWHBCO0FBa0JBO0VBR1k7SUFDSSxVQUFBO0VBakJkO0VBb0JVO0lBQ0ksZUFBQTtFQWxCZDtFQW9CYztJQUNJLGVBQUE7RUFsQmxCO0VBcUJjO0lBQ0ksZUFBQTtFQW5CbEI7QUFDRjtBQXlCQTtFQUdZO0lBQ0ksZUFBQTtFQXpCZDtFQTJCYztJQUNJLGVBQUE7RUF6QmxCO0VBNEJjO0lBQ0ksZUFBQTtFQTFCbEI7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcblxuQG1peGluIGZsZXgtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGVsZWdhbnQtc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsMCwwLDAuMSksIDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjA3KTtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5jb250YWN0LWluZm8ge1xuICAgICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcbiAgICAgICAgZ2FwOiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcblxuICAgICAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZW1haWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgIC5jb250YWN0LWluZm8ge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICAuaGVhZGxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XG4gICAgICAgICAgICAuY29udGFjdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgICAgICAgICAuaGVhZGxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";

/***/ }),

/***/ 5060:
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = ".dashboard {\n  background-image: url('main-background.svg');\n  color: white;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.dashboard .main-container {\n  max-width: 1240px;\n  width: 100%;\n  margin: 0 auto;\n}\n.dashboard .header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1500;\n  transition: transform 800ms;\n}\n.dashboard .download-links {\n  position: absolute;\n  bottom: 20px;\n  right: 87px;\n  z-index: 10;\n}\n.dashboard .download-links ul {\n  border-radius: 5px;\n}\n.dashboard .download-links ul li {\n  display: inline-block;\n  padding: 10px 15px;\n  transition: 1s;\n  cursor: pointer;\n  background-color: #F9E3A7;\n}\n.dashboard .download-links ul li:not(:last-child) {\n  border-right: 1px solid grey;\n}\n.dashboard .download-links ul li a {\n  color: #ffffff;\n  font-size: 15px;\n}\n.dashboard .download-links ul li:hover {\n  background-color: #181727;\n  color: #ffffff;\n  border-radius: 5px;\n  transition: 0.5s;\n}\n.icon-googleplay:before {\n  color: white;\n}\n@media only screen and (max-width: 800px) {\n  .dashboard .download-links {\n    right: 10px;\n  }\n\n  .switch-profile {\n    right: 0;\n  }\n}\n@media only screen and (max-width: 410px) {\n  .dashboard .download-links ul li {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFHQSwyQkFBQTtBQUxSO0FBUUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU5SO0FBUVE7RUFDSSxrQkFBQTtBQU5aO0FBUVk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkMzQ1Q7QURxQ1A7QUFRZ0I7RUFDSSw0QkFBQTtBQU5wQjtBQVNnQjtFQUNJLGNDbkRaO0VEb0RZLGVBQUE7QUFQcEI7QUFVZ0I7RUFDSSx5QkNqREg7RURrREcsY0N6RFo7RUQwRFksa0JBQUE7RUFDQSxnQkFBQTtBQVJwQjtBQWVBO0VBQ0ksWUFBQTtBQVpKO0FBZUE7RUFNUTtJQUNJLFdBQUE7RUFqQlY7O0VBcUJFO0lBQ0ksUUFBQTtFQWxCTjtBQUNGO0FBNkJBO0VBSWdCO0lBQ0ksY0FBQTtFQTlCbEI7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuXG4uZGFzaGJvYXJkIHtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfc3RhcnMucG5nXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi1iYWNrZ3JvdW5kLnN2Z1wiKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE1MDA7XG4gICAgICAgIC8vcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgLy9wYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwMG1zO1xuICAgIH1cblxuICAgIC5kb3dubG9hZC1saW5rcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICByaWdodDogODdweDtcbiAgICAgICAgei1pbmRleDogMTA7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGQ7XG5cbiAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWRlZXAtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaWNvbi1nb29nbGVwbGF5OmJlZm9yZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAzMHB4IDE1cHggMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvd25sb2FkLWxpbmtzIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN3aXRjaC1wcm9maWxlIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAzMHB4IDE1cHggMzBweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIC5kb3dubG9hZC1saW5rcyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";

/***/ }),

/***/ 82294:
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = ".home-container .no-scale {\n  transform: scale(1, 0);\n  transition: 0.8s;\n  transform-origin: bottom;\n}\n.home-container .scale {\n  transform: scale(1, 1);\n  transition: 0.5s;\n  transform-origin: bottom;\n}\n.home-container .message-box-modal {\n  display: none;\n  position: absolute;\n  background-image: url('main-background.svg');\n  z-index: 2;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n}\n.home-container .message-box-modal img {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.home-container .hide {\n  transform: scale(1, 0);\n  transition: 0.8s;\n  transform-origin: top;\n}\n.home-container .show {\n  transform: scale(1, 1);\n  transition: 0.5s;\n  transform-origin: top;\n}\n.home-container .message-box-content {\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 100%;\n  max-width: 1200px;\n  pointer-events: none;\n}\n.home-container .message-box-content p {\n  color: white;\n  font-size: 45px;\n}\n.home-container .message-box-content .angle-top {\n  margin-top: 30px;\n}\n.home-container .message-box-content .angle-top i {\n  font-size: 12px;\n  color: #12a5f4;\n}\n.home-container .message-box-content .back-button-text {\n  font-size: 15px;\n  margin-top: 10px;\n}\n.home-container .home-section {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 1200px;\n  height: 800px;\n  background: url('mockupiphone.svg') no-repeat left;\n  background-size: 800px;\n  background-position: -10% 25%;\n}\n.home-container .home-section .section-title {\n  font-size: 80px;\n  margin: 130px 0 0;\n  color: #ffffff;\n}\n.home-container .angle {\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  font-size: 20px;\n}\n.home-container .angle img {\n  cursor: pointer;\n  height: auto;\n  width: 50px;\n}\n.home-container .angle i {\n  cursor: pointer;\n}\n.home-container div.angle {\n  animation: mover 1s infinite alternate;\n}\n.home-container div.angle {\n  animation: mover 1s infinite alternate;\n}\n@keyframes mover {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n.home-container .play-icon-container {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  height: 77px;\n  width: 77px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.5);\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.home-container .play-icon-container img {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.icon-googleplay:before {\n  color: white;\n}\n@media only screen and (max-width: 800px) {\n  .home-container .angle {\n    display: none;\n  }\n  .home-container .home-section-message-box {\n    display: none;\n  }\n  .home-container .message-box-modal {\n    display: block;\n  }\n  .home-container .play-icon-container {\n    display: flex;\n  }\n  .home-container .home-section {\n    background-size: 1000px;\n    background-position: 43% 5%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBRlI7QUFLSTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUFKUjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSlo7QUFVSTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVJSO0FBV0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFUUjtBQVlJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUlBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVZSO0FBWVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQVZaO0FBYVE7RUFDSSxnQkFBQTtBQVhaO0FBYVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVhoQjtBQWVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBYlo7QUFpQkk7RUFDSSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxTQUFBO0VBSUEsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBaEJSO0FBa0JRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NuR0o7QURtRlI7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFsQlI7QUFvQlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQlo7QUFxQlE7RUFDSSxlQUFBO0FBbkJaO0FBdUJJO0VBRUksc0NBQUE7QUFyQlI7QUF3Qkk7RUFFSSxzQ0FBQTtBQXRCUjtBQWlDSTtFQUNJO0lBQ0ksd0JBQUE7RUF2QlY7RUF5Qk07SUFDSSw0QkFBQTtFQXZCVjtBQUNGO0FBMEJJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7S0FBQSxpQ0FBQTtVQUFBLDRCQUFBO0FBeEJSO0FBMkJJO0VBQ0Esb0NBQUE7S0FBQSxpQ0FBQTtVQUFBLDRCQUFBO0FBekJKO0FBOEJBO0VBQ0ksWUFBQTtBQTNCSjtBQThCQTtFQUdRO0lBQ0ksYUFBQTtFQTdCVjtFQWdDTTtJQUNJLGFBQUE7RUE5QlY7RUFpQ007SUFDSSxjQUFBO0VBL0JWO0VBa0NNO0lBQ0ksYUFBQTtFQWhDVjtFQW1DTTtJQUNJLHVCQUFBO0lBQ0EsMkJBQUE7SUFDQSxXQUFBO0VBakNWO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gICAgLm5vLXNjYWxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjhzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgfVxuXG4gICAgLnNjYWxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtYm94LW1vZGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21haW4tYmFja2dyb3VuZC5zdmdcIik7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG4gICAgICAgIH1cblxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICMyOTJGM0Y7XG4gICAgfVxuXG4gICAgLmhpZGUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgICAgICB0cmFuc2l0aW9uOiAuOHM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB9XG5cbiAgICAuc2hvdyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIH1cblxuICAgIC5tZXNzYWdlLWJveC1jb250ZW50IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYW5nbGUtdG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyYTVmNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrLWJ1dHRvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaG9tZS1zZWN0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vY2t1cGlwaG9uZS5zdmcpIG5vLXJlcGVhdCBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAlIDI1JTtcblxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEzMHB4IDAgMDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYW5nbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5hbmdsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cblxuICAgIGRpdi5hbmdsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGxheS1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xuICAgICAgICB3aWR0aDogNzdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5wbGF5LWljb24tY29udGFpbmVyIGltZyB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG59XG5cbi5pY29uLWdvb2dsZXBsYXk6YmVmb3JlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuaG9tZS1jb250YWluZXIge1xuXG4gICAgICAgIC5hbmdsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvbWUtc2VjdGlvbi1tZXNzYWdlLWJveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UtYm94LW1vZGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXktaWNvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob21lLXNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MyUgNSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";

/***/ }),

/***/ 94831:
/*!********************************************************************!*\
  !*** ./src/app/dashboard/invest-in-us/invest-in-us.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = ".invest-in-us-container {\n  position: relative;\n  width: 100%;\n  max-width: 820px;\n  margin: 80px auto;\n  padding: 120px 40px;\n  height: 100vh;\n  overflow-y: auto;\n}\n.invest-in-us-container .container-header {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.invest-in-us-container .container-header img {\n  width: 45%;\n  max-width: 400px;\n  margin-right: 20px;\n}\n.invest-in-us-container .container-header .container-content {\n  flex: 1;\n  min-width: 300px;\n}\n.invest-in-us-container .container-header .container-content p {\n  color: #F9E3A7;\n  line-height: 1.6;\n}\n.invest-in-us-container .container-header .container-content p:not(:last-child) {\n  margin-bottom: 20px;\n}\n.invest-in-us-container .container-header .container-content p:first-child {\n  font-size: 22px;\n  font-weight: 800;\n}\n.invest-in-us-container .container-footer {\n  background-color: #EAEAEA;\n  padding: 40px;\n  margin-top: 50px;\n  border-radius: 10px;\n}\n.invest-in-us-container .container-footer .footer-title {\n  text-align: center;\n  font-size: 18px;\n  color: #181727;\n  font-weight: 800;\n  margin-bottom: 30px;\n}\n.invest-in-us-container .container-footer .investment-placeholder {\n  text-align: center;\n  color: #181727;\n}\n.invest-in-us-container .container-footer .investment-placeholder p {\n  margin-bottom: 20px;\n  line-height: 1.6;\n}\n@media only screen and (max-width: 768px) {\n  .invest-in-us-container .container-header {\n    flex-direction: column;\n    text-align: center;\n  }\n  .invest-in-us-container .container-header img {\n    width: 70%;\n    margin-right: 0;\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n/* Hide scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdC1pbi11cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURSO0FBR1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURaO0FBSVE7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7QUFGWjtBQUlZO0VBQ0ksY0N6QlQ7RUQwQlMsZ0JBQUE7QUFGaEI7QUFJZ0I7RUFDSSxtQkFBQTtBQUZwQjtBQUtnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUhwQjtBQVNJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBSO0FBU1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQzNDSztFRDRDTCxnQkFBQTtFQUNBLG1CQUFBO0FBUFo7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsY0NsREs7QUQwQ2pCO0FBVVk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBY0E7RUFFUTtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUFaVjtFQWNVO0lBQ0ksVUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBWmQ7QUFDRjtBQWtCQTtFQUNJLFFBQUE7QUFoQko7QUFtQkEsVUFBQTtBQUNBO0VBQ0ksbUJBQUE7QUFoQko7QUFtQkEsV0FBQTtBQUNBO0VBQ0ksbUJDaEdHO0FEZ0ZQO0FBbUJBLG9CQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQWhCSjtBQW1CQSxnREFBQTtBQUNBO0VBQ0ksYUFBQTtBQWhCSjtBQW1CQSw0Q0FBQTtBQUNBO0VBQ0ksd0JBQUE7RUFBMkIsZ0JBQUE7RUFDM0IscUJBQUE7RUFBd0IsWUFBQTtBQWQ1QiIsImZpbGUiOiJpbnZlc3QtaW4tdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuXG4uaW52ZXN0LWluLXVzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogODIwcHg7XG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XG4gICAgcGFkZGluZzogMTIwcHggNDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuXG4gICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250YWluZXItZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAuZm9vdGVyLXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1kZWVwLWRhcms7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnZlc3RtZW50LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1kZWVwLWRhcms7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5pbnZlc3QtaW4tdXMtY29udGFpbmVyIHtcbiAgICAgICAgLmNvbnRhaW5lci1oZWFkZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4uc2Nyb2xsIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbn1cblxuXG5cblxuIiwiJGJsYWNrOiAjMWIxYjFiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdvbGQ6ICNGOUUzQTc7XG5cbiRibHVlOiAjNDg4NmZmO1xuJGJsdWUtZGFyazogIzMwNzNmNjtcbiRibHVlLXNoYWRvdzogcmdiYSg3MiwgMTM0LCAyNTUsIDAuNDUpO1xuJGJsdWUtbGlnaHQ6ICMxMmE1ZjQ7XG4kYmx1ZS1kZWVwLWRhcms6ICMxODE3Mjc7XG5cbiRncmV5OiAjYmNjMGQxO1xuJGdyZXktbGlnaHQ6ICNlOWVjZjY7XG4kZ3JleS1taWRkbGUtbGlnaHQ6ICNkOGQ4ZDg7XG4kZ3JleS1kYXJrOiAjOGM5NmE5O1xuJGdyZXktc2hhZG93OiByZ2JhKDQ5LCA1NiwgNzgsIDAuMTgpO1xuXG4kcmVkOiAjZDUwMDAwO1xuJHBpbms6ICNlYTQxODM7XG4kY29yYWw6ICNmZjZjNWY7XG4kZ3JlZW46ICMyMGFkMjM7XG4kZ3JlZW4tZGFyazogIzEwN2YxMjtcbiRncmVlbi1saWdodDogI2I5YzIzNztcbiRvcmFuZ2UtbGlnaHQ6ICNGOUUzQTc7XG4kb3JhbmdlOiAjZmJhZDUwO1xuJHB1cnBsZTogIzZiNGZlYjtcbiRibHVlLWdyZWVuOiAjMDBhMjg5O1xuJGRhcmstYmx1ZTogIzI5MkYzRjtcblxuXG4iXX0= */";

/***/ }),

/***/ 2123:
/*!****************************************************!*\
  !*** ./src/app/dashboard/team/team.component.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = ".team-container {\n  height: 100vh;\n  overflow-y: auto;\n}\n.team-container .switch-profile {\n  position: absolute;\n  right: 90px;\n  margin-top: 5px;\n  z-index: 1600;\n  top: 70px;\n}\n.team-container .container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.team-container .team-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 80px;\n  gap: 80px;\n  max-width: 900px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 150px;\n  margin-bottom: 70px;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n.team-container .team-header-container .image-container {\n  flex: 1 1 160px;\n}\n.team-container .team-header-container .image-container img {\n  width: 100%;\n}\n.team-container .team-header-container .description-container {\n  flex: 1 1 160px;\n  line-height: 1.8;\n  word-break: break-word;\n  color: #F9E3A7;\n  padding: 16px;\n  border-radius: 8px;\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n}\n.team-container .team-header-container .description-container:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);\n  transform: scale(1.02);\n}\n@media (max-width: 768px) {\n  .team-container .team-header-container .description-container {\n    flex-basis: 100%;\n    padding: 12px;\n    font-size: 1rem;\n  }\n}\n.team-container .team-box-container {\n  max-width: 1180px;\n  padding: 10px 15px;\n  transition: 0.5s;\n  margin-top: 120px;\n  padding-bottom: 50px;\n}\n.team-container .team-box-container .team-title {\n  color: #F9E3A7;\n  margin-left: 95px;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  margin-bottom: 80px;\n}\n.team-container .team-box-container .team-section {\n  margin-bottom: 60px;\n}\n.team-container .team-box-container .team-section .section-title {\n  color: #F9E3A7;\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  text-align: left;\n  margin-left: 95px;\n}\n.team-container .team-box-container .team-section .team-box-container-content {\n  display: flex;\n  align-items: stretch;\n  /* Ensures all items match height */\n  justify-content: center;\n  grid-gap: 40px;\n  gap: 40px;\n  /* Reduced gap for uniform spacing */\n  flex-wrap: wrap;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 15px;\n  border-radius: 10px;\n  width: 200px;\n  /* Set a fixed width */\n  height: 250px;\n  /* Ensure uniform size */\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  /* Transparent background to match parent container */\n  background-color: transparent;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member:hover {\n  transform: scale(1.1);\n  /* Slight expansion */\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n  transition: transform 0.3s ease;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .name {\n  font-weight: 600;\n  font-size: 16px;\n  color: white;\n  /* Updated to white */\n  margin-top: 5px;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .role {\n  font-size: 14px;\n  color: #F9E3A7;\n  /* Updated to gold */\n  margin-top: 5px;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link {\n  margin-top: auto;\n  /* Push the link icon to the bottom */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  /* Ensure consistent width */\n  height: 30px;\n  /* Ensure consistent height */\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  /* Adjust to fit icon dimensions */\n  background-repeat: no-repeat;\n  background-position: center;\n  text-decoration: none;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a img {\n  width: 100%;\n  /* Ensure it fills the link container */\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /* Ensure the icon scales without distortion */\n  transition: transform 0.3s ease, filter 0.3s ease;\n  /* Add some hover effects */\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a:hover img {\n  transform: scale(1.1);\n  /* Slight zoom effect on hover */\n  filter: brightness(1.2);\n  /* Brighten the icon on hover */\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n/* Hide scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n@media only screen and (max-width: 800px) {\n  .team-container {\n    align-items: center;\n  }\n  .team-container .switch-profile {\n    right: 5px;\n  }\n  .team-container .team-box-container .team-title {\n    margin-left: 10px;\n  }\n  .team-container .team-box-container .team-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .team-container .team-box-container .team-section .section-title {\n    text-align: center;\n    margin: 0;\n    width: 100%;\n    margin-bottom: 3rem;\n    font-weight: 900;\n  }\n  .team-container .team-info-container .info-card-item {\n    margin-right: unset;\n  }\n  .team-container .team-section .team-box-container-content {\n    grid-gap: 20px;\n    gap: 20px;\n  }\n  .team-container .team-section .team-box-container-content .team-member {\n    width: 150px;\n    height: 200px;\n  }\n  .team-container .team-section .team-box-container-content .team-member img {\n    width: 70px;\n    height: 70px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .name {\n    font-size: 14px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .role {\n    font-size: 12px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .link a {\n    font-size: 12px;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSlI7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtBQUhoQjtBQU9RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBTFo7QUFPWTtFQUNFLDBDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtBQUxkO0FBUVk7RUFuQko7SUFvQk0sZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQUxaO0FBQ0Y7QUFTSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFQUjtBQVNRO0VBQ0ksY0M1RUw7RUQ2RUssaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUFo7QUFVUTtFQUNJLG1CQUFBO0FBUlo7QUFVWTtFQUNJLGNDeEZUO0VEeUZTLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJoQjtBQVdZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQXNCLG1DQUFBO0VBQ3RCLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFBVyxvQ0FBQTtFQUNYLGVBQUE7QUFQaEI7QUFTZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUFjLHNCQUFBO0VBQ2QsYUFBQTtFQUFlLHdCQUFBO0VBQ2YscURBQUE7RUFDQSx3Q0FBQTtFQUVBLHFEQUFBO0VBQ0EsNkJBQUE7QUFOcEI7QUFRb0I7RUFDSSxxQkFBQTtFQUF1QixxQkFBQTtFQUN2Qix3Q0FBQTtBQUx4QjtBQVFvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBTnhCO0FBU29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUFjLHFCQUFBO0VBQ2QsZUFBQTtBQU54QjtBQVNvQjtFQUNJLGVBQUE7RUFDQSxjQzVJakI7RUQ0SStCLG9CQUFBO0VBQ2QsZUFBQTtBQU54QjtBQVNvQjtFQUNJLGdCQUFBO0VBQWtCLHFDQUFBO0VBQ2xCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUFhLDRCQUFBO0VBQ2IsWUFBQTtFQUFjLDZCQUFBO0FBSnRDO0FBTXdCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBMEIsa0NBQUE7RUFDMUIsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBSDVCO0FBSzRCO0VBQ0ksV0FBQTtFQUFhLHVDQUFBO0VBQ2IsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFBcUIsOENBQUE7RUFDckIsaURBQUE7RUFBbUQsMkJBQUE7QUFBbkY7QUFHNEI7RUFDSSxxQkFBQTtFQUF1QixnQ0FBQTtFQUN2Qix1QkFBQTtFQUF5QiwrQkFBQTtBQUN6RDtBQVNBO0VBQ0ksUUFBQTtBQU5KO0FBU0EsVUFBQTtBQUNBO0VBQ0ksbUJBQUE7QUFOSjtBQVNBLFdBQUE7QUFDQTtFQUNJLG1CQy9MRztBRHlMUDtBQVNBLG9CQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQU5KO0FBU0EsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFOSjtBQVNBLDRDQUFBO0FBQ0E7RUFDSSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBSjVCO0FBT0E7RUFDSTtJQUNJLG1CQUFBO0VBSk47RUFLTTtJQUNJLFVBQUE7RUFIVjtFQU1VO0lBQ0ksaUJBQUE7RUFKZDtFQU9VO0lBRUksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFOZDtFQVFjO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFObEI7RUFXVTtJQUNJLG1CQUFBO0VBVGQ7RUFjVTtJQUNJLGNBQUE7SUFBQSxTQUFBO0VBWmQ7RUFjYztJQUNJLFlBQUE7SUFDQSxhQUFBO0VBWmxCO0VBY2tCO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFadEI7RUFla0I7SUFDSSxlQUFBO0VBYnRCO0VBZ0JrQjtJQUNJLGVBQUE7RUFkdEI7RUFrQnNCO0lBQ0ksZUFBQTtJQUNBLHdCQUFBO0VBaEIxQjtBQUNGIiwiZmlsZSI6InRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9taXhpbnNcIjtcblxuLnRlYW0tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuc3dpdGNoLXByb2ZpbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE2MDA7XG4gICAgICAgIHRvcDogNzBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRlYW0taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDgwcHg7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxNjBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxNjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgY29sb3I6ICNGOUUzQTc7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAudGVhbS1ib3gtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIC50ZWFtLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlYW0tc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRlYW0tYm94LWNvbnRhaW5lci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBFbnN1cmVzIGFsbCBpdGVtcyBtYXRjaCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBnYXA6IDQwcHg7IC8qIFJlZHVjZWQgZ2FwIGZvciB1bmlmb3JtIHNwYWNpbmcgKi9cbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAudGVhbS1tZW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDsgLyogU2V0IGEgZml4ZWQgd2lkdGggKi9cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDsgLyogRW5zdXJlIHVuaWZvcm0gc2l6ZSAqL1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgICAgICAgICAgICAgICAvKiBUcmFuc3BhcmVudCBiYWNrZ3JvdW5kIHRvIG1hdGNoIHBhcmVudCBjb250YWluZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodCBleHBhbnNpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IC8qIFVwZGF0ZWQgdG8gd2hpdGUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yb2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ29sZDsgLyogVXBkYXRlZCB0byBnb2xkICovXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyAvKiBQdXNoIHRoZSBsaW5rIGljb24gdG8gdGhlIGJvdHRvbSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyAvKiBFbnN1cmUgY29uc2lzdGVudCB3aWR0aCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4OyAvKiBFbnN1cmUgY29uc2lzdGVudCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgLyogQWRqdXN0IHRvIGZpdCBpY29uIGRpbWVuc2lvbnMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgaXQgZmlsbHMgdGhlIGxpbmsgY29udGFpbmVyICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjsgLyogRW5zdXJlIHRoZSBpY29uIHNjYWxlcyB3aXRob3V0IGRpc3RvcnRpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgZmlsdGVyIDAuM3MgZWFzZTsgLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodCB6b29tIGVmZmVjdCBvbiBob3ZlciAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTsgLyogQnJpZ2h0ZW4gdGhlIGljb24gb24gaG92ZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4uc2Nyb2xsIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC50ZWFtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5zd2l0Y2gtcHJvZmlsZSB7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZWFtLWJveC1jb250YWluZXJ7XG4gICAgICAgICAgICAudGVhbS10aXRsZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRlYW0tc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOyBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGVhbS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuaW5mby1jYXJkLWl0ZW0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGVhbS1zZWN0aW9uIHtcbiAgICAgICAgICAgIC50ZWFtLWJveC1jb250YWluZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgLnRlYW0tbWVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yb2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";

/***/ }),

/***/ 97016:
/*!*****************************************************************!*\
  !*** ./src/app/ui-fragments/info-card/info-card.component.scss ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = ".info-card-container {\n  color: #181727;\n}\n.info-card-container ul li .image-container {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background-color: #181727;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-card-container ul li .title {\n  word-break: break-word;\n  font-weight: 800;\n  font-size: 20px;\n  text-align: left;\n}\n.info-card-container ul li .description {\n  font-size: 12px;\n  text-align: left;\n}\n.info-card-container ul li:not(:last-child) {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjtBQUdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEaEI7QUFJWTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7QUFLWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQU1ZO0VBQ0ksbUJBQUE7QUFKaEIiLCJmaWxlIjoiaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY2FyZC1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMTgxNzI3O1xuXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE3Mjc7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 60282:
/*!*********************************************************************!*\
  !*** ./src/app/ui-fragments/message-box/message-box.component.scss ***!
  \*********************************************************************/
/***/ (function(module) {

module.exports = ".message-box-container {\n  margin: auto;\n  max-width: 650px;\n  margin-left: 90px;\n  width: 100%;\n  min-width: 550px;\n  position: fixed;\n  top: 40%;\n  left: 70%;\n  transition: all 0.5s;\n  transform: translate(-50%, -90px);\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  --message-top-limit: 240px;\n}\n.message-box-container .visible {\n  opacity: 1 !important;\n}\n.message-box-container .message-item {\n  position: relative;\n  padding: 5px 2.5px;\n  border-radius: 25px;\n  font-family: Verdana sans-serif;\n  letter-spacing: 0.02em;\n  font-size: 20px;\n  line-height: 1.2;\n  font-weight: normal;\n  opacity: 0;\n  transform: translateY(20px) scale(0.9);\n  transition: transform 150ms, opacity 150ms;\n  pointer-events: none;\n}\n@media only screen and (max-width: 800px) {\n  .message-box-container {\n    --message-top-limit: 180px;\n  }\n\n  .message-box-container {\n    margin-left: 0;\n    top: 50%;\n    left: 50%;\n    max-width: 350px;\n    min-width: 250px;\n    pointer-events: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBSUk7RUFDSSxxQkFBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBSUEsc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0FBSFI7QUFPQTtFQUNJO0lBQ0ksMEJBQUE7RUFKTjs7RUFNRTtJQUNJLGNBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoibWVzc2FnZS1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9taXhpbnNcIjtcblxuLm1lc3NhZ2UtYm94LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA1NTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNzAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC05MHB4KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtLW1lc3NhZ2UtdG9wLWxpbWl0OiAyNDBweDsgLy8gRGVmYXVsdCB2YWx1ZVxuXG4gICAgLnZpc2libGUge1xuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDIuNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSBzYW5zLXNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC45KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjkpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC45KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zICwgb3BhY2l0eSAxNTBtcztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLm1lc3NhZ2UtYm94LWNvbnRhaW5lciB7XG4gICAgICAgIC0tbWVzc2FnZS10b3AtbGltaXQ6IDE4MHB4OyAvLyBBZGp1c3RlZCB2YWx1ZSBmb3Igc21hbGxlciBzY3JlZW5zXG4gICAgfSAgICBcbiAgICAubWVzc2FnZS1ib3gtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 47667:
/*!***********************************************************************!*\
  !*** ./src/app/ui-fragments/user-profile/user-profile.component.scss ***!
  \***********************************************************************/
/***/ (function(module) {

module.exports = ".user-profile-container {\n  width: 170px;\n  text-align: center;\n}\n.user-profile-container .avatar {\n  height: 120px;\n  width: 120px;\n  margin: 0 auto;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: cover;\n  border: 1px solid #e9ecf6;\n}\n.user-profile-container .credentials {\n  max-width: 170px;\n  font-size: 16px;\n  font-weight: 800;\n  text-align: center;\n  margin-top: 7px;\n  word-break: break-word;\n}\n.user-profile-container .role {\n  font-size: 12px;\n  margin-top: 5px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtBQUxSIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL21peGluc1wiO1xuXG4udXNlci1wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LWxpZ2h0O1xuICAgIH1cblxuICAgIC5jcmVkZW50aWFscyB7XG4gICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLnJvbGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgLy9mb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxufVxuIl19 */";

/***/ }),

/***/ 50148:
/*!******************************************************************!*\
  !*** ./src/app/ui-kits/message-item/message-item.component.scss ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = ".message-item-container {\n  min-height: 55px;\n  max-width: 500px;\n  width: 100%;\n  padding: 10px;\n  border-radius: 7px;\n  background: rgba(196, 196, 196, 0.1);\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.message-item-container .message-title {\n  margin-bottom: 15px;\n  pointer-events: none;\n}\n.message-item-container .message-content {\n  color: #ffffff;\n  word-break: break-word;\n  pointer-events: none;\n}\n.message-item-container .color-orange {\n  color: #fbad50;\n}\n.message-item-container .color-light-blue {\n  color: #12a5f4;\n}\n.message-item-container .avatar {\n  width: 100px;\n  margin-right: 10px;\n}\n.message-item-container .avatar img {\n  border-radius: 50%;\n  width: 100%;\n}\n@media only screen and (max-width: 800px) {\n  .message-item-container {\n    min-height: 45px;\n    max-width: 250px;\n  }\n  .message-item-container .message-title {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFKSjtBQU1JO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQUpSO0FBT0k7RUFDSSxjQ3BCQTtFRHFCQSxzQkFBQTtFQUNBLG9CQUFBO0FBTFI7QUFRSTtFQUNJLGNDSkM7QURGVDtBQVNJO0VBQ0ksY0N4Qks7QURpQmI7QUFVSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQVJSO0FBU1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFQWjtBQVlBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBVE47RUFVTTtJQUNJLG1CQUFBO0VBUlY7QUFDRiIsImZpbGUiOiJtZXNzYWdlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9taXhpbnNcIjtcblxuLm1lc3NhZ2UtaXRlbS1jb250YWluZXIge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogaHNsYSg4OSwgNDMlLCA1MSUsIDAuMSk7XG4gICAgbWluLWhlaWdodDogNTVweDtcbiAgICAvL21heC13aWR0aDogMzUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAubWVzc2FnZS10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5tZXNzYWdlLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuY29sb3Itb3JhbmdlIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgfVxuXG4gICAgLmNvbG9yLWxpZ2h0LWJsdWUge1xuICAgICAgICBjb2xvcjogJGJsdWUtbGlnaHQ7XG4gICAgfVxuXG4gICAgLmF2YXRhciB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubWVzc2FnZS1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgIC5tZXNzYWdlLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiJGJsYWNrOiAjMWIxYjFiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdvbGQ6ICNGOUUzQTc7XG5cbiRibHVlOiAjNDg4NmZmO1xuJGJsdWUtZGFyazogIzMwNzNmNjtcbiRibHVlLXNoYWRvdzogcmdiYSg3MiwgMTM0LCAyNTUsIDAuNDUpO1xuJGJsdWUtbGlnaHQ6ICMxMmE1ZjQ7XG4kYmx1ZS1kZWVwLWRhcms6ICMxODE3Mjc7XG5cbiRncmV5OiAjYmNjMGQxO1xuJGdyZXktbGlnaHQ6ICNlOWVjZjY7XG4kZ3JleS1taWRkbGUtbGlnaHQ6ICNkOGQ4ZDg7XG4kZ3JleS1kYXJrOiAjOGM5NmE5O1xuJGdyZXktc2hhZG93OiByZ2JhKDQ5LCA1NiwgNzgsIDAuMTgpO1xuXG4kcmVkOiAjZDUwMDAwO1xuJHBpbms6ICNlYTQxODM7XG4kY29yYWw6ICNmZjZjNWY7XG4kZ3JlZW46ICMyMGFkMjM7XG4kZ3JlZW4tZGFyazogIzEwN2YxMjtcbiRncmVlbi1saWdodDogI2I5YzIzNztcbiRvcmFuZ2UtbGlnaHQ6ICNGOUUzQTc7XG4kb3JhbmdlOiAjZmJhZDUwO1xuJHB1cnBsZTogIzZiNGZlYjtcbiRibHVlLWdyZWVuOiAjMDBhMjg5O1xuJGRhcmstYmx1ZTogIzI5MkYzRjtcblxuXG4iXX0= */";

/***/ }),

/***/ 85513:
/*!******************************************************************!*\
  !*** ./src/app/ui-kits/radio-button/radio-button.component.scss ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 60129:
/*!********************************************************************!*\
  !*** ./src/app/ui-kits/success-modal/success-modal.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "#success_tic .page-body {\n  max-width: 300px;\n  background-color: #FFFFFF;\n  margin: 10% auto;\n}\n\n#success_tic .page-body .head {\n  text-align: center;\n}\n\n/* #success_tic .tic{\n  font-size:186px;\n} */\n\n#success_tic .close {\n  opacity: 1;\n  position: absolute;\n  right: 0px;\n  font-size: 30px;\n  padding: 3px 15px;\n  margin-bottom: 10px;\n}\n\n#success_tic .checkmark-circle {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.checkmark-circle .background {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #1ab394;\n  position: absolute;\n}\n\n#success_tic .checkmark-circle .checkmark {\n  border-radius: 5px;\n}\n\n#success_tic .checkmark-circle .checkmark.draw:after {\n  animation-delay: 300ms;\n  animation-duration: 1s;\n  animation-timing-function: ease;\n  animation-name: checkmark;\n  transform: scaleX(-1) rotate(135deg);\n  animation-fill-mode: forwards;\n}\n\n#success_tic .checkmark-circle .checkmark:after {\n  opacity: 1;\n  height: 75px;\n  width: 37.5px;\n  transform-origin: left top;\n  border-right: 15px solid #fff;\n  border-top: 15px solid #fff;\n  border-radius: 2.5px !important;\n  content: \"\";\n  left: 35px;\n  top: 80px;\n  position: absolute;\n}\n\n@keyframes checkmark {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1;\n  }\n  20% {\n    height: 0;\n    width: 37.5px;\n    opacity: 1;\n  }\n  40% {\n    height: 75px;\n    width: 37.5px;\n    opacity: 1;\n  }\n  100% {\n    height: 75px;\n    width: 37.5px;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7O0dBQUE7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFKQTtFQUdJLHNCQUFBO0VBR0Esc0JBQUE7RUFHQSwrQkFBQTtFQUdBLHlCQUFBO0VBS0Esb0NBQUE7RUFHQSw2QkFBQTtBQU9KOztBQUxBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBS0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVFKOztBQXVDQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VBUU47RUFORTtJQUNJLFNBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQVFOO0VBTkU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFRTjtFQU5FO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBUU47QUFDRiIsImZpbGUiOiJzdWNjZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1Y2Nlc3NfdGljIC5wYWdlLWJvZHl7XG4gICAgbWF4LXdpZHRoOjMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcbiAgICBtYXJnaW46MTAlIGF1dG87XG59XG4jc3VjY2Vzc190aWMgLnBhZ2UtYm9keSAuaGVhZHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi8qICNzdWNjZXNzX3RpYyAudGlje1xuICBmb250LXNpemU6MTg2cHg7XG59ICovXG4jc3VjY2Vzc190aWMgLmNsb3Nle1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jc3VjY2Vzc190aWMgLmNoZWNrbWFyay1jaXJjbGUge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5jaGVja21hcmstY2lyY2xlIC5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzFhYjM5NDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4jc3VjY2Vzc190aWMgLmNoZWNrbWFyay1jaXJjbGUgLmNoZWNrbWFyayB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3N1Y2Nlc3NfdGljIC5jaGVja21hcmstY2lyY2xlIC5jaGVja21hcmsuZHJhdzphZnRlciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMG1zO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNoZWNrbWFyaztcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDEzNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4jc3VjY2Vzc190aWMgLmNoZWNrbWFyay1jaXJjbGUgLmNoZWNrbWFyazphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDM3LjVweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweCAhaW1wb3J0YW50O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDM1cHg7XG4gICAgdG9wOiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrbWFyayB7XG4gICAgMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAzNy41cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgY2hlY2ttYXJrIHtcbiAgICAwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB3aWR0aDogMzcuNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB3aWR0aDogMzcuNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcbiAgICAwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB3aWR0aDogMzcuNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICB3aWR0aDogMzcuNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es2015.js.map