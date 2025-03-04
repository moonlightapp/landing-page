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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _team_mission_team_mission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-mission/team-mission.component */ 96402);









const routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'team-mission',
                pathMatch: 'full'
            },
            {
                path: 'platform',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
            },
            {
                path: 'team-mission',
                component: _team_mission_team_mission_component__WEBPACK_IMPORTED_MODULE_5__.TeamMissionComponent,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 42321);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 46976);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ 63877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _team_mission_team_mission_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./team-mission/team-mission.component */ 96402);























let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__.HomeComponent,
            _team_team_component__WEBPACK_IMPORTED_MODULE_15__.TeamComponent,
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__.ContactComponent,
            _beta_beta_component__WEBPACK_IMPORTED_MODULE_13__.BetaComponent,
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent,
            _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_5__.InvestInUsComponent,
            _team_mission_team_mission_component__WEBPACK_IMPORTED_MODULE_16__.TeamMissionComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutingModule,
            _ui_fragments_header_header_module__WEBPACK_IMPORTED_MODULE_9__.HeaderModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule,
            _ui_fragments_message_box_message_box_module__WEBPACK_IMPORTED_MODULE_2__.MessageBoxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            _ui_kits_success_modal_success_modal_module__WEBPACK_IMPORTED_MODULE_1__.SuccessModalModule,
            _ui_fragments_user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_0__.UserProfileModule,
            _ui_kits_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_3__.InputSwitchModule,
            _ui_kits_radio_button_radio_button_module__WEBPACK_IMPORTED_MODULE_4__.RadioButtonModule,
            _ui_fragments_info_card_info_card_module__WEBPACK_IMPORTED_MODULE_6__.InfoCardModule,
        ],
        providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_22__.MessageService,
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
        }, 400);
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
    navigateToTestFlight() {
        window.open('https://testflight.apple.com/join/0DaLdUmA', '_blank');
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

/***/ 96402:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/team-mission/team-mission.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMissionComponent": function() { return /* binding */ TeamMissionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_mission_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./team-mission.component.html */ 99627);
/* harmony import */ var _team_mission_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-mission.component.scss */ 35759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let TeamMissionComponent = class TeamMissionComponent {
    constructor() {
        this.profiles = {
            foundersAndCoreTeam: [
                { firstName: 'Besar', lastName: 'Ismaili,', role: 'Oversees the company’s overall vision, strategy, and operations.', avatar: 'assets/images/people/besar.jpg', link: 'https://www.linkedin.com/in/besar/', platform: 'linkedin', team: 'Founders & Core Team' },
                { firstName: 'Marius', lastName: 'Fagerhol,', role: 'Collaborates closely with design and product teams to deliver seamless, high-performance iOS experiences.', avatar: 'assets/images/people/marius.jpg', link: 'https://www.linkedin.com/in/marius-fagerhol-4076a4126/', platform: 'linkedin', team: 'Co-founder & iOS Lead' },
                { firstName: 'Bejtulla', lastName: 'Ajeti,', role: 'Specializes in crafting responsive, user-friendly web interfaces.', avatar: 'assets/images/people/profile.jpg', link: '', platform: 'linkedin', team: 'Front-End Developer' },
                { firstName: 'Taaha', lastName: 'Bin Khalid,', role: 'Focuses on the end-to-end user journey, improving service touchpoints and interaction patterns.', avatar: 'assets/images/taaha-bin-khaled-image.jpg', link: 'https://www.linkedin.com/in/taahabinkhalid/?originalSubdomain=no', platform: 'linkedin', team: 'Senior Interaction & Service Designer' },
                { firstName: 'Muhamed', lastName: 'Zeqiri,', role: 'Responsible for server-side logic, database management, and API integrations. ', avatar: 'assets/images/muhamed-zeqiri-image.jpeg', link: 'https://www.linkedin.com/in/muhamed-zeqiri-35a728241/', platform: 'linkedin', team: 'Back-End Developer,' },
                { firstName: 'Kujtim', lastName: 'Saliu,', role: 'Responsible for coding, testing, and optimizing iOS functionalities to meet high performance standards.', avatar: 'assets/images/kujtim-saliu-image.jpeg', link: 'https://www.linkedin.com/in/kujtim-saliu-b205b217a', platform: 'linkedin', team: 'iOS Engineer' },
                { firstName: 'Lot', lastName: 'Bajrami,', role: 'Ensures smooth feature implementation and system-wide efficiency.', avatar: 'assets/images/lot-bajrami-image.jpeg', link: 'https://www.linkedin.com/in/lot-bajrami-771226135', platform: 'linkedin', team: 'Senior Full-Stack Engineer' },
                { firstName: 'Valdrin', lastName: 'Muharemi,', role: 'Back-End Developer', avatar: 'assets/images/valdrin-muharemi-image.jpeg', link: 'https://www.linkedin.com/in/valdrin-muharemi', platform: 'linkedin', team: 'Founders & Core Team' }
            ],
            marketing: [
                { firstName: 'Just', lastName: 'Andreas,', role: 'Oversees marketing initiatives and his work includes creating compelling campaigns and supporting product launches to enhance market reach.', avatar: 'assets/images/just-andreas-image.png', link: 'https://www.instagram.com/justandreas/?hl=en', platform: 'instagram', team: 'Marketing Specialist' }
            ],
            investorsAndAdvisors: [
                { firstName: 'Endre', lastName: 'Brask Grønmyr,', role: 'Strong finance background and a history of leading successful companies in Norway, Endre provides strategic governance and financial oversight.', avatar: 'assets/images/endre-brask-gronmyr-image.jpeg', link: 'https://www.linkedin.com/in/endre-brask-gr%C3%B8nmyr/', platform: 'linkedin', team: 'Chairman of the Board' },
                { firstName: 'Marius', lastName: 'Mårnes Mathiesen,', role: 'Founder and CEO of Shortcut AS.', avatar: 'assets/images/marius-marnes-mathiesen-image.png', link: 'https://www.linkedin.com/in/mmathiesen/?originalSubdomain=no', platform: 'linkedin', team: 'Investor & Advisor' },
                { firstName: 'Arve', lastName: 'Egil Habjorg,', role: 'CFO at Unacast', avatar: 'assets/images/arve-egil-habjorg-image.jpeg', link: 'https://www.linkedin.com/in/arvehabjorg/', platform: 'linkedin', team: 'Investor & Advisor' },
                { firstName: 'Sigurd William', lastName: 'Rachlew Høystad,', role: 'Advisor and Investor', avatar: 'assets/images/sigurd-image.jpeg', link: 'https://no.linkedin.com/in/sigurdwrh', platform: 'linkedin', team: 'Investor & Advisor' },
                { firstName: 'Thomas', lastName: 'Pettersen,', role: 'CEO of Skråstrek.', avatar: 'assets/images/thomas-pettersen-image.jpeg', link: 'https://www.linkedin.com/in/thomas-pettersen-45322622/', platform: 'linkedin', team: 'Advisor & Early Investor' },
                { firstName: 'Elin', lastName: 'Fjeld,', role: 'Advisor, Product Tester and Shareholder', avatar: 'assets/images/elin-fjeld-image.jpeg', link: 'https://no.linkedin.com/in/elinfjeld/en', platform: 'linkedin', team: 'Investor & Advisor' }
            ]
        };
        this.allMembers = [];
        this.isMobile = false;
    }
    ngOnInit() {
        this.allMembers = [
            ...this.profiles.foundersAndCoreTeam,
            ...this.profiles.marketing,
            ...this.profiles.investorsAndAdvisors
        ];
        // Default selected member
        this.selectedMember = this.allMembers[0];
        // Detect if the device is mobile
        this.isMobile = this.checkIfMobile();
    }
    // Check if the device is mobile
    checkIfMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    showMemberDetails(member) {
        this.selectedMember = member;
    }
    openMemberLink(member) {
        if (member.link) {
            window.open(member.link, '_blank');
        }
        else {
            alert('No link available for this member.');
        }
    }
    // Handle click events
    onClick(member) {
        if (!this.isMobile) {
            // On desktop, click opens the link
            this.openMemberLink(member);
        }
        else {
            // On mobile, click selects the member
            this.showMemberDetails(member);
        }
    }
    // Handle touch events for mobile
    onTouchStart(member) {
        if (this.isMobile) {
            this.touchTimeout = setTimeout(() => {
                this.openMemberLink(member);
            }, 1000); // 1 second long press
        }
    }
    onTouchEnd(member) {
        if (this.isMobile) {
            clearTimeout(this.touchTimeout);
        }
    }
};
TeamMissionComponent.ctorParameters = () => [];
TeamMissionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-team-mission',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_webapp_github_pages_testing_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_mission_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_team_mission_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamMissionComponent);



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
        }, 200);
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-container px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8\">\n    <div class=\"contact-info flex flex-col sm:flex-row items-center sm:space-x-8\">\n        <img src=\"assets/images/contact-page-image.svg\" alt=\"Contact Us Image\" class=\"w-32 h-32 sm:w-48 sm:h-48 mb-4 sm:mb-0\">\n\n        <p class=\"contact-text text-center sm:text-left\">\n            <strong class=\"headline text-lg sm:text-xl font-semibold\">We'd Love to Hear From You!</strong><br />\n            Contact us via email at:<br />\n            <span class=\"email text-blue-500\">hello&#64;moonlightapp.co</span>\n        </p>\n    </div>\n</div>\n\n<p-toast baseZIndex=\"100\" position=\"top-right\"></p-toast>\n\n<div class=\"modal\" *ngIf=\"showLoader\">\n    <div class=\"modal-content flex justify-center items-center\">\n        <img src=\"../../../assets/images/loading.gif\" alt=\"Loading\" class=\"w-16 h-16 sm:w-24 sm:h-24\">\n    </div>\n</div>\n\n   <!-- <div class=\"container\">\n        <form [formGroup]=\"form\" action=\"https://formspree.io/mbnkornm\" method=\"POST\">\n            <label for=\"email\">E Post</label>\n            <input type=\"text\" id=\"email\" [formControl]=\"form.get('email')\">\n\n            <label for=\"subject\">Subject</label>\n            <input type=\"text\" id=\"subject\" [formControl]=\"form.get('subject')\">\n\n            <label for=\"message\">Message</label>\n            <textarea id=\"message\" [formControl]=\"form.get('message')\"></textarea>\n\n            <button [disabled]=\"form.invalid\" (click)=\"submitForm()\">Send</button>\n        </form>\n\n        <div class=\"info-text\">\n            Important Note: We respect privacy and will only use your email to answer your queries.\n        </div>\n    </div>\n</div>-->");

/***/ }),

/***/ 98541:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard\">\n    <div class=\"main-container flex flex-col min-h-screen\">\n        <div class=\"header\">\n            <app-header></app-header>\n        </div>\n\n        <div class=\"container flex-1 px-4 sm:px-6 md:px-8\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <div class=\"download-links\" *ngIf=\"false\">\n            <ul class=\"flex justify-center space-x-4 sm:space-x-6\">\n                <li>\n                    <a [routerLink]=\"['/']\" class=\"text-gray-800 hover:text-blue-500\">\n                        <i class=\"icon-appleinc text-2xl sm:text-3xl\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\" class=\"text-gray-800 hover:text-blue-500\">\n                        <i class=\"icon-googleplay text-2xl sm:text-3xl\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\" class=\"text-gray-800 hover:text-blue-500\">\n                        <i class=\"icon-facebook2 text-2xl sm:text-3xl\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\" class=\"text-gray-800 hover:text-blue-500\">\n                        <i class=\"icon-instagram text-2xl sm:text-3xl\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ 41:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/home/home.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container px-4 sm:px-6 md:px-8 lg:px-16 py-8\">\n    <div class=\"home-section\">\n        <!-- <h1 class=\"section-title\">\n        <div>Chat</div>\n        <div>historier!</div>\n        </h1> -->\n\n        <div class=\"home-section-message-box\">\n            <app-message-box *ngIf=\"showMessageBox\"\n                             (lastMessage)=\"onLastMessage()\"\n                             (onFirstTimeClick)=\"onFirstTimeClick()\"\n                             [isHomePage]=\"true\"\n                             [messages]=\"messages\"\n                             [modalIsVisible]=\"showMessageBox\"></app-message-box>\n        </div>\n        <div class=\"test-flight-container text-center\">\n            <div>\n                <img \n                    class=\"test-flight-img\" \n                    src=\"assets/images/flight-test-img.png\" \n                    alt=\"Test Flight\" \n                    (click)=\"navigateToTestFlight()\"> <!-- Click event only on image -->\n            </div>\n        </div>\n        \n    </div>\n\n    <div class=\"message-box-modal scale\" *ngIf=\"showMessageBoxModal\">\n        <app-message-box (lastMessage)=\"onLastMessage()\"\n                         (onFirstTimeClick)=\"onFirstTimeClick()\"\n                         [isHomePage]=\"true\"\n                         [messages]=\"messages\"\n                         [modalIsVisible]=\"showMessageBox\"></app-message-box>\n\n        <img src=\"./assets/images/icon_tap.png\"\n             alt=\"App Store\" class=\"w-12 sm:w-16 md:w-20 lg:w-24 mx-auto mt-4\">\n    </div>\n\n    <ng-container *ngIf=\"showDownloadInfo\">\n        <div class=\"message-box-modal hide\" [class.show]=\"showDownloadInfoContent\">\n            <div class=\"message-box-content p-4 sm:p-6 md:p-8\">\n                <p class=\"text-center sm:text-left text-sm sm:text-base md:text-lg\">Last ned appen for å fortsette å lese historien!</p>\n\n                <div class=\"pointer mt-4 sm:mt-6\" (click)=\"navigateToHome()\">\n                    <div class=\"angle-top\">\n                        <i class=\"icon-angle-top text-xl sm:text-2xl md:text-3xl\"></i>\n                    </div>\n\n                    <div class=\"back-button-text text-center sm:text-left text-sm sm:text-base md:text-lg\">\n                        Back to top\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n     <!--    <div class=\"angle\" (click)=\"toggleModal()\" *ngIf=\"true\">-->\n    <!--        <img src=\"../../../assets/images/2x/baseline_play_circle_filled_white_48dp.png\" alt=\"\">-->\n    <!--    </div>-->\n\n    <div class=\"angle\" *ngIf=\"showTapIcon\">\n        <img src=\"./assets/images/icon_tap.png\" alt=\"Tap\" class=\"w-12 sm:w-16 md:w-20 lg:w-24 mx-auto mt-4\">\n    </div>\n    <div class=\"play-icon-container flex justify-center mt-8\" (click)=\"openMessageBoxModal()\">\n        <img height=\"70\" width=\"70\" src=\"./assets/images/play-icon-yellow.svg\" alt=\"Play\"\n             class=\"w-16 sm:w-20 md:w-24 lg:w-28\">\n    </div>\n</div>\n");

/***/ }),

/***/ 83111:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/invest-in-us/invest-in-us.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"invest-in-us-container scroll p-4 sm:p-6 md:p-8\">\n    <!-- Container Header -->\n    <div class=\"container-header mb-8 text-center sm:text-left\">\n        <img src=\"assets/images/invest-on-us-image.svg\" alt=\"Invest on Us\" class=\"w-full sm:w-1/2 mx-auto mb-6 sm:mb-0\">\n        <div class=\"container-content text-lg sm:text-xl space-y-4\">\n            <p>Ready to take a stake and be part of this venture?</p>\n            <p>We are aiming for a market leader position, and we believe we have discovered a unique market gap that no one is currently filling.</p>\n            <p>We are a solid team, experienced in the most critical key areas. With this digital shift, we are well-connected and flexible in working from anywhere, anytime. Our team is deeply committed to Moonlight and we don't give up, no matter how complex the problem.</p>\n            <p>If you aim to be part of this next big tech venture, stay tuned for exciting investment opportunities!</p>\n        </div>\n    </div>\n\n    <!-- Container Footer -->\n    <div class=\"container-footer mt-8 sm:mt-12 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg\">\n        <p class=\"footer-title text-2xl font-bold text-center sm:text-left\">New Investment Information Coming Soon</p>\n        <div class=\"investment-placeholder mt-4 sm:mt-6\">\n            <p class=\"text-lg sm:text-xl\">We are currently preparing a comprehensive investment prospectus. Our team is working diligently to provide you with detailed information about our innovative venture.</p>\n        </div>\n    </div>\n</div>\n\n\n\n  <!-- <div class=\"container-footer\">\n        <div class=\"footer-title\">\n            It's now or never. We won’t ask for investments forever.\n        </div>\n        <div class=\"form-container\">\n            <div>\n                <input [formControl]=\"form.get('name')\" placeholder=\"Full Name\" type=\"text\">\n                <input [formControl]=\"form.get('email')\" placeholder=\"Email\" type=\"email\">\n            </div>\n            <div>\n                <input [formControl]=\"form.get('phone')\" placeholder=\"Contact Number\" type=\"tel\">\n                <button [disabled]=\"form.invalid\" (click)=\"submit()\">Request a call</button>\n            </div>\n        </div>\n    </div>\n</div>-->");

/***/ }),

/***/ 99627:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/team-mission/team-mission.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"team-container scroll  items-center text-center\">\n    <!-- Team Header Section -->\n    <div class=\"team-header-container  flex flex-col items-center text-center\">\n        <div class=\"header-logo\">\n            <img height=\"80\" width=\"300\" src=\"assets/images/moonlight_website_logo.svg\" alt=\"Logo\">\n        </div>\n        <div class=\"space-y-16 w-full max-w-5xl px-6 items-center text-center\">\n\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg mx-8 items-center text-center\">\n                <p>Moonlight is redefining content creation and consumption by blending bite-sized storytelling, interactive engagement, and Web3 incentives. As attention spans shrink and traditional platforms fail to innovate, Moonlight provides a dynamic space where creators can craft immersive narratives, monetize their work, and engage directly with their audience. </p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg mx-8 items-center text-center\">\n            <p>Moonlight ensures that creators are fairly rewarded, while readers enjoy a seamless, personalized experience tailored to modern content consumption habits.</p>\n            </div>\n            <div class=\"space-y-8 w-full max-w-5xl px-4 items-center text-center\">\n                <!-- Title Container -->\n                <div class=\"title-container p-6 rounded-lg mx-4\">\n                    <p class=\"text-xl font-bold\">Meet the Team and Advisors</p>\n                </div>\n\n                <!-- Team Members List -->\n                <div class=\"team-members-list flex flex-wrap justify-start sm:justify-center gap-4\">\n                    <div *ngFor=\"let member of allMembers\"\n                         class=\"team-member text-gray-800 cursor-pointer p-1 sm:p-2 rounded-lg hover:bg-gray-200\"\n                         (mouseenter)=\"!isMobile && showMemberDetails(member)\"\n                         [class.active]=\"member === selectedMember\"\n                         (click)=\"onClick(member)\"\n                         (touchstart)=\"onTouchStart(member)\"\n                         (touchend)=\"onTouchEnd(member)\">\n                        <p class=\"font-semibold text-[12px] sm:text-sm md:text-base\">{{ member.firstName }} {{ member.lastName }}</p>\n                    </div>\n                </div>\n\n                <!-- Team Member Details -->\n                <div class=\"team-member-details p-6 md:p-6 sm:p-8 mt-6 rounded-lg text-center bg-gray-100 items-center\">\n                    <h3 class=\"team-text text-lg font-semibold\">{{ selectedMember.firstName }} {{ selectedMember.lastName }} <span class=\"font-bold\">{{ selectedMember.team }}</span></h3>\n                    <p class=\"team-text text-center text-sm sm:text-[12px]\">{{ selectedMember.role }}</p>\n                </div>\n            </div>\n            <div class=\"title-container p-10 rounded-lg  mx-8\">\n                <p>The Cognitive Science of Better Content</p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg  mx-8\">\n                <p>The way we consume and create content is deeply rooted in psychology and evolving user behavior. At Moonlight, we continuously study reading habits, attention spans, cognitive engagement, and the psychology of storytelling to refine how content is experienced. Our goal is to make both consumption and creation effortless, engaging, and rewarding.</p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg  mx-8\">\n\n            <p>We’re not just building a platform, we’re applying scientific research, behavioral insights, and real user data to ensure that every feature, from bite-sized content formats to AI-powered creative tools, is designed to optimize focus, creativity, and retention.</p>\n            </div>\n            <div class=\"title-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg  mx-8\">\n                <p>Strong Foundations, Lasting Impact</p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg  mx-8\">\n                <p>Building with intention. At Moonlight, we believe in crafting technology the right way, avoiding shortcuts that may compromise long-term scalability, security, or user experience. Every line of code, every feature, and every design choice is made with a deep focus on longevity and performance. Our infrastructure is built from the ground up, using native technologies endorsed by Apple and Google.</p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg  mx-8\">\n            <p>Scalability at the core. Rather than patching together existing frameworks, we’ve architected Moonlight’s backend with custom-built, scalable infrastructure, designed to handle future growth while maintaining reliability.</p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg  mx-8\">\n            <p>User experience backed by science. Every design choice in Moonlight, from typography to interface layout, is rooted in behavioral research and cognitive studies. We optimize for readability, attention retention, and seamless interaction, ensuring that both content consumption and creation feel natural and effortless. Our UI isn’t just beautiful, it’s scientifically refined for maximum engagement and user satisfaction.</p>\n            </div>\n\n            <div class=\"title-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg mx-8 mt-12\">\n                <p>Join Us</p>\n            </div>\n            <div class=\"description-container text-lg sm:text-xl text-gray-700 p-10 rounded-lg mx-8\">\n                <p>\n                    If you’re a software engineer, Figma designer, or someone who believes they can contribute to this mission, we’d love to hear from you. Whether it’s shaping our infrastructure, refining user experience, or bringing new creative ideas to life, there’s room for passionate minds to make an impact.\n                    Send your resume to\n                    <a href=\"mailto:hello@moonlightapp.co\" class=\"underline\">hello@moonlightapp.co</a>.\n                    Follow us on X\n                    <a href=\"https://x.com/ml_ai_official\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline\">(@ml_ai_official)</a>\n                    and be part of the journey.\n                </p>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"title-container text-s p-12 rounded-lg  mx-8 flex flex-col items-center text-center mt-\">\n        <p>© 2025 Moonlight.</p>\n    </div>\n</div>\n");

/***/ }),

/***/ 69419:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/dashboard/team/team.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"team-container scroll p-4 sm:p-6 md:p-8\">\n       <!--    <div class=\"switch-profile\">-->\n<!--        <app-input-switch [checked]=\"profileMode\"-->\n<!--                          (onChange)=\"profileMode = $event\"-->\n<!--                          [label]=\"profileMode ? 'Grid' : 'List'\"-->\n<!--                          [showSwitchValue]=\"false\"></app-input-switch>-->\n<!--    </div>-->\n<!--    <div class=\"container message-box-container\" *ngIf=\"!profileMode\">-->\n<!--        <app-message-box [modalIsVisible]=\"true\"-->\n<!--                         [messages]=\"messages\"></app-message-box>-->\n<!--    </div>-->\n    <!-- Team Header Section -->\n    <div class=\"team-header-container mb-8\">\n        <div class=\"image-container mb-6 sm:mb-0\">\n            <img src=\"assets/images/about_page_header_image.png\" alt=\"About us image\" class=\"w-full h-auto rounded-lg\">\n        </div>\n        <div class=\"description-container text-lg sm:text-xl text-gray-700\">\n            We’ve discovered a huge opportunity to mix creating, reading, teaching, and learning into bite-sized pieces. Moonlight is the only app that lets you freely explore any style or genre across all these areas without any paywalls or limitations. Plus, with our $ML token, you can support your favorite creators and unlock even more features. We offer a fun, safe, and interactive platform that’s super easy to use and beautifully designed.\n        </div>\n    </div>\n\n      <!-- <div class=\"team-info-container\">\n        <div class=\"info-card-item\" *ngFor=\"let item of teamInfoItems\">\n            <app-info-card [item]=\"item\"></app-info-card>\n        </div>\n    </div> -->\n    <div class=\"team-box-container\" *ngIf=\"profileMode\">\n        <div class=\"team-title text-2xl font-semibold text-center mb-6\">\n            THE PEOPLE RESPONSIBLE FOR THE FUTURE SUCCESS OF MOONLIGHT:\n        </div>\n\n        <!-- Founders and Core Team Section -->\n        <div class=\"team-section mb-8\">\n            <div class=\"section-title text-xl font-bold text-gray-900\">FOUNDERS AND CORE-TEAM</div>\n            <div class=\"team-box-container-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4\">\n                <div class=\"team-member text-center\" *ngFor=\"let profile of profiles.foundersAndCoreTeam\">\n                    <img [src]=\"profile.avatar\" [alt]=\"'Photo of ' + profile.firstName + ' ' + profile.lastName\" class=\"w-32 h-32 mx-auto rounded-full\">\n                    <div class=\"name mt-2 text-lg font-semibold\">{{ profile.firstName }} {{ profile.lastName }}</div>\n                    <div class=\"role text-gray-500\">{{ profile.role }}</div>\n                    <div class=\"link mt-2\" *ngIf=\"profile.link && profile.platform\">\n                        <a [href]=\"profile.link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img [src]=\"'assets/images/' + getPlatformIcon(profile.platform)\" [alt]=\"profile.platform + ' Icon'\" class=\"w-6 h-6 mx-auto\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Marketing Section -->\n        <div class=\"team-section mb-8\">\n            <div class=\"section-title text-xl font-bold text-gray-900\">MARKETING</div>\n            <div class=\"team-box-container-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4\">\n                <div class=\"team-member text-center\" *ngFor=\"let profile of profiles.marketing\">\n                    <img [src]=\"profile.avatar\" [alt]=\"'Photo of ' + profile.firstName + ' ' + profile.lastName\" class=\"w-32 h-32 mx-auto rounded-full\">\n                    <div class=\"name mt-2 text-lg font-semibold\">{{ profile.firstName }} {{ profile.lastName }}</div>\n                    <div class=\"role text-gray-500\">{{ profile.role }}</div>\n                    <div class=\"link mt-2\" *ngIf=\"profile.link && profile.platform\">\n                        <a [href]=\"profile.link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img [src]=\"'assets/images/' + getPlatformIcon(profile.platform)\" [alt]=\"profile.platform + ' Icon'\" class=\"w-6 h-6 mx-auto\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Investors and Advisors Section -->\n        <div class=\"team-section mb-8\">\n            <div class=\"section-title text-xl font-bold text-gray-900\">INVESTORS AND ADVISORS</div>\n            <div class=\"team-box-container-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4\">\n                <div class=\"team-member text-center\" *ngFor=\"let profile of profiles.investorsAndAdvisors\">\n                    <img [src]=\"profile.avatar\" [alt]=\"'Photo of ' + profile.firstName + ' ' + profile.lastName\" class=\"w-32 h-32 mx-auto rounded-full\">\n                    <div class=\"name mt-2 text-lg font-semibold\">{{ profile.firstName }} {{ profile.lastName }}</div>\n                    <div class=\"role text-gray-500\">{{ profile.role }}</div>\n                    <div class=\"link mt-2\" *ngIf=\"profile.link && profile.platform\">\n                        <a [href]=\"profile.link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img [src]=\"'assets/images/' + getPlatformIcon(profile.platform)\" [alt]=\"profile.platform + ' Icon'\" class=\"w-6 h-6 mx-auto\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

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

module.exports = ".contact-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 10px;\n}\n.contact-container .contact-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 25px;\n  gap: 25px;\n  text-align: center;\n  max-width: 900px;\n  width: 100%;\n}\n.contact-container .contact-info img {\n  width: 50%;\n  max-width: 400px;\n  height: auto;\n}\n.contact-container .contact-info .contact-text {\n  font-size: 22px;\n  color: white;\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n}\n.contact-container .contact-info .contact-text .headline {\n  font-size: 22px;\n  color: #F9E3A7;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 15px;\n}\n.contact-container .contact-info .contact-text .email {\n  font-size: 28px;\n  color: #F9E3A7;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-block;\n  padding: 5px 10px;\n  border-radius: 8px;\n}\n.contact-container .contact-info .contact-text .email:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  transform: scale(1.05);\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .contact-container .contact-info img {\n    width: 80%;\n  }\n  .contact-container .contact-info .contact-text {\n    font-size: 20px;\n  }\n  .contact-container .contact-info .contact-text .headline {\n    font-size: 26px;\n  }\n  .contact-container .contact-info .contact-text .email {\n    font-size: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-container .contact-info .contact-text {\n    font-size: 14px;\n  }\n  .contact-container .contact-info .contact-text .headline {\n    font-size: 18px;\n  }\n  .contact-container .contact-info .contact-text .email {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFaSjtBQWNJO0VBakJBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFnQkksY0FBQTtFQUFBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRSO0FBV1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVFo7QUFZUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVZaO0FBWVk7RUFDSSxlQUFBO0VBQ0EsY0N2Q1Q7RUR3Q1MseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVZoQjtBQWFZO0VBQ0ksZUFBQTtFQUNBLGNDaERUO0VEaURTLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWGhCO0FBYWdCO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBWHBCO0FBa0JBO0VBR1k7SUFDSSxVQUFBO0VBakJkO0VBb0JVO0lBQ0ksZUFBQTtFQWxCZDtFQW9CYztJQUNJLGVBQUE7RUFsQmxCO0VBcUJjO0lBQ0ksZUFBQTtFQW5CbEI7QUFDRjtBQXlCQTtFQUdZO0lBQ0ksZUFBQTtFQXpCZDtFQTJCYztJQUNJLGVBQUE7RUF6QmxCO0VBNEJjO0lBQ0ksZUFBQTtFQTFCbEI7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcblxuQG1peGluIGZsZXgtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1peGluIGVsZWdhbnQtc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDAsMCwwLDAuMSksIDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjA3KTtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC5jb250YWN0LWluZm8ge1xuICAgICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcbiAgICAgICAgZ2FwOiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcblxuICAgICAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZW1haWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICAgIC5jb250YWN0LWluZm8ge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFjdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAuaGVhZGxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XG4gICAgICAgICAgICAuY29udGFjdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgICAgICAuaGVhZGxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";

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

module.exports = ".home-container .no-scale {\n  transform: scale(1, 0);\n  transition: 0.8s;\n  transform-origin: bottom;\n}\n.home-container .scale {\n  transform: scale(1, 1);\n  transition: 0.5s;\n  transform-origin: bottom;\n}\n.home-container .message-box-modal {\n  display: none;\n  position: absolute;\n  background-image: url('main-background.svg');\n  z-index: 2;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.home-container .message-box-modal img {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.home-container .hide {\n  transform: scale(1, 0);\n  transition: 0.8s;\n  transform-origin: top;\n}\n.home-container .show {\n  transform: scale(1, 1);\n  transition: 0.5s;\n  transform-origin: top;\n}\n.home-container .message-box-content {\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 100%;\n  max-width: 1200px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.home-container .message-box-content p {\n  color: white;\n  font-size: 45px;\n}\n.home-container .message-box-content .angle-top {\n  margin-top: 30px;\n}\n.home-container .message-box-content .angle-top i {\n  font-size: 12px;\n  color: #12a5f4;\n}\n.home-container .message-box-content .back-button-text {\n  font-size: 15px;\n  margin-top: 10px;\n}\n.home-container .home-section {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 1200px;\n  height: 800px;\n  background: url('mockupiphone.svg') no-repeat center center;\n  background-size: 800px;\n  background-position: -10% center;\n  /* Default position for larger screens */\n}\n.home-container .home-section .section-title {\n  font-size: 80px;\n  margin: 130px 0 0;\n  color: #ffffff;\n}\n.home-container .home-section .test-flight-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-33%, 70%);\n  width: 100%;\n  transition: left 0.5s ease, bottom 0.5s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n.home-container .home-section .test-flight-container .test-flight-img {\n  height: auto;\n  max-width: 200px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: all;\n}\n.home-container .angle {\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  font-size: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.home-container .angle img {\n  cursor: pointer;\n  height: auto;\n  width: 50px;\n}\n.home-container .angle i {\n  cursor: pointer;\n}\n.home-container div.angle {\n  animation: mover 1s infinite alternate;\n}\n@keyframes mover {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n.home-container .play-icon-container {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  height: 77px;\n  width: 77px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.5);\n  justify-content: center;\n  align-items: center;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.home-container .play-icon-container img {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n          user-select: none !important;\n}\n.icon-googleplay:before {\n  color: white;\n}\n/* For screens 1024px and below */\n@media only screen and (max-width: 1022px) {\n  .home-container .home-section {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 80vh;\n    max-height: 800px;\n    width: 100%;\n    background-position: 66% 50% !important;\n    background-size: 800px auto;\n    margin: 0 auto;\n  }\n\n  .test-flight-container {\n    display: none;\n  }\n}\n/* For screens 1024px, position at the bottom-center, angle above it */\n@media only screen and (min-width: 1023px) and (max-width: 1199px) {\n  .home-container .angle {\n    position: absolute;\n    bottom: 5rem;\n    margin-bottom: 2rem;\n  }\n  .home-container .home-section .test-flight-container {\n    position: absolute;\n    bottom: 2rem;\n    transform: translate(-10%, 160%);\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .home-container .angle {\n    position: absolute;\n    bottom: 5rem;\n    margin-bottom: 2rem;\n  }\n  .home-container .home-section .test-flight-container {\n    position: absolute;\n    bottom: 2rem;\n    transform: translate(-33%, 60%);\n  }\n}\n/* For devices smaller than 768px */\n@media only screen and (max-width: 768px) {\n  .home-container .home-section {\n    background-size: 800px auto;\n    /* Reduced size for tablets */\n    height: 70vh;\n    max-height: 800px;\n  }\n}\n/* For devices smaller than 480px */\n@media only screen and (max-width: 480px) {\n  .home-container .home-section {\n    background: none;\n    background-size: 500px auto;\n    /* Further reduced size for mobile */\n    height: 60vh;\n    max-height: 500px;\n  }\n}\n@media only screen and (min-width: 1920px) {\n  .home-container .home-section {\n    background-size: 800px auto;\n    /* Reduced size for tablets */\n    height: 70vh;\n    max-height: 800px;\n  }\n  .home-container .test-flight-container {\n    position: absolute;\n    bottom: 4rem;\n    transform: translate(5%, -25%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBRlI7QUFLSTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBSlI7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUpaO0FBUUk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFOUjtBQVNJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUFI7QUFVSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFJQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBUlI7QUFVUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBUlo7QUFXUTtFQUNJLGdCQUFBO0FBVFo7QUFXWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBVGhCO0FBYVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFYWjtBQWVJO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUFrQyx3Q0FBQTtBQVoxQztBQWVRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0MvRko7QURrRlI7QUFnQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtBQWRaO0FBaUJVO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FBZlo7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFsQlI7QUFvQlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQlo7QUFxQlE7RUFDSSxlQUFBO0FBbkJaO0FBdUJJO0VBRUksc0NBQUE7QUFyQlI7QUFpQ0k7RUFDSTtJQUNJLHdCQUFBO0VBdkJWO0VBeUJNO0lBQ0ksNEJBQUE7RUF2QlY7QUFDRjtBQTBCSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0tBQUEsaUNBQUE7VUFBQSw0QkFBQTtBQXhCUjtBQTJCSTtFQUNJLG9DQUFBO0tBQUEsaUNBQUE7VUFBQSw0QkFBQTtBQXpCUjtBQTZCQTtFQUNJLFlBQUE7QUExQko7QUE2QkEsaUNBQUE7QUFDQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGdDQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHVDQUFBO0lBQ0EsMkJBQUE7SUFDQSxjQUFBO0VBM0JWOztFQThCRTtJQUNJLGFBQUE7RUEzQk47QUFDRjtBQTZCQSxzRUFBQTtBQUNBO0VBR1E7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQTdCVjtFQWdDVTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdDQUFBO0VBOUJkO0FBQ0Y7QUFrQ0E7RUFHUTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBbENWO0VBcUNVO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsK0JBQUE7RUFuQ2Q7QUFDRjtBQXdDQSxtQ0FBQTtBQUNBO0VBRVE7SUFDSSwyQkFBQTtJQUE2Qiw2QkFBQTtJQUM3QixZQUFBO0lBQ0EsaUJBQUE7RUF0Q1Y7QUFDRjtBQTBDQSxtQ0FBQTtBQUNBO0VBRVE7SUFDSSxnQkFBQTtJQUNBLDJCQUFBO0lBQTZCLG9DQUFBO0lBQzdCLFlBQUE7SUFDQSxpQkFBQTtFQXhDVjtBQUNGO0FBNENBO0VBRVE7SUFDSSwyQkFBQTtJQUE2Qiw2QkFBQTtJQUM3QixZQUFBO0lBQ0EsaUJBQUE7RUExQ1Y7RUE0Q007SUFDSSxrQkFBQTtJQUNLLFlBQUE7SUFDQSw4QkFBQTtFQTFDZjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuXG4uaG9tZS1jb250YWluZXIge1xuICAgIC5uby1zY2FsZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IC44cztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgIH1cblxuICAgIC5zY2FsZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgIH1cblxuICAgIC5tZXNzYWdlLWJveC1tb2RhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluLWJhY2tncm91bmQuc3ZnXCIpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oaWRlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjhzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB9XG5cbiAgICAubWVzc2FnZS1ib3gtY29udGVudCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFuZ2xlLXRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMmE1ZjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjay1idXR0b24tdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhvbWUtc2VjdGlvbiB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vY2t1cGlwaG9uZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAlIGNlbnRlcjsgLyogRGVmYXVsdCBwb3NpdGlvbiBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cbiAgICBcblxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEzMHB4IDAgMDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAudGVzdC1mbGlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMzJSwgNzAlKTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2UsIGJvdHRvbSAwLjVzIGVhc2U7IFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnRlc3QtZmxpZ2h0LWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyBcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYW5nbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYuYW5nbGUge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgICBhbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGxheS1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xuICAgICAgICB3aWR0aDogNzdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5wbGF5LWljb24tY29udGFpbmVyIGltZyB7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uaWNvbi1nb29nbGVwbGF5OmJlZm9yZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBGb3Igc2NyZWVucyAxMDI0cHggYW5kIGJlbG93ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjJweCkge1xuICAgIC5ob21lLWNvbnRhaW5lciB7XG4gICAgICAgIC5ob21lLXNlY3Rpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgIHRvcDogNTAlOyBcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcbiAgICAgICAgICAgIGhlaWdodDogODB2aDsgXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjYlIDUwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCBhdXRvOyBcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50ZXN0LWZsaWdodC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG59XG4vKiBGb3Igc2NyZWVucyAxMDI0cHgsIHBvc2l0aW9uIGF0IHRoZSBib3R0b20tY2VudGVyLCBhbmdsZSBhYm92ZSBpdCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDIzcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBcbiAgICAuaG9tZS1jb250YWluZXJ7XG4gICAgICAgIC5hbmdsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDVyZW07IFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgXG4gICAgICAgIH1cbiAgICAgICAgLmhvbWUtc2VjdGlvbntcbiAgICAgICAgICAgIC50ZXN0LWZsaWdodC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgMTYwJSk7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgXG4gICAgLmhvbWUtY29udGFpbmVye1xuICAgICAgICAuYW5nbGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1cmVtOyBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07IFxuICAgICAgICB9XG4gICAgICAgIC5ob21lLXNlY3Rpb257XG4gICAgICAgICAgICAudGVzdC1mbGlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMyUsIDYwJSk7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbn1cblxuLyogRm9yIGRldmljZXMgc21hbGxlciB0aGFuIDc2OHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAgICAgLmhvbWUtc2VjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IGF1dG87IC8qIFJlZHVjZWQgc2l6ZSBmb3IgdGFibGV0cyAqL1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIEZvciBkZXZpY2VzIHNtYWxsZXIgdGhhbiA0ODBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5ob21lLWNvbnRhaW5lciB7XG4gICAgICAgIC5ob21lLXNlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHggYXV0bzsgLyogRnVydGhlciByZWR1Y2VkIHNpemUgZm9yIG1vYmlsZSAqL1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gICAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAgICAgLmhvbWUtc2VjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IGF1dG87IC8qIFJlZHVjZWQgc2l6ZSBmb3IgdGFibGV0cyAqL1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRlc3QtZmxpZ2h0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgIGJvdHRvbTogNHJlbTtcbiAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIC0yNSUpOyAgXG4gICAgICAgICB9XG4gICAgfVxufSIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";

/***/ }),

/***/ 94831:
/*!********************************************************************!*\
  !*** ./src/app/dashboard/invest-in-us/invest-in-us.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = ".invest-in-us-container {\n  position: relative;\n  width: 100%;\n  max-width: 820px;\n  margin: 8rem auto;\n  padding: 2rem 4rem;\n  height: 100vh;\n  overflow-y: auto;\n}\n.invest-in-us-container .container-header {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  text-align: left;\n}\n.invest-in-us-container .container-header img {\n  width: 45%;\n  max-width: 400px;\n  margin-right: 20px;\n}\n.invest-in-us-container .container-header .container-content {\n  flex: 1;\n  min-width: 300px;\n}\n.invest-in-us-container .container-header .container-content p {\n  color: #F9E3A7;\n  line-height: 1.6;\n}\n.invest-in-us-container .container-header .container-content p:not(:last-child) {\n  margin-bottom: 20px;\n}\n.invest-in-us-container .container-header .container-content p:first-child {\n  font-size: 22px;\n  font-weight: 800;\n}\n.invest-in-us-container .container-footer {\n  background-color: #EAEAEA;\n  padding: 40px;\n  margin-top: 50px;\n  border-radius: 10px;\n}\n.invest-in-us-container .container-footer .footer-title {\n  text-align: center;\n  font-size: 18px;\n  color: #181727;\n  font-weight: 800;\n  margin-bottom: 30px;\n}\n.invest-in-us-container .container-footer .investment-placeholder {\n  text-align: center;\n  color: #181727;\n}\n.invest-in-us-container .container-footer .investment-placeholder p {\n  margin-bottom: 20px;\n  line-height: 1.6;\n}\n@media only screen and (max-width: 900px) {\n  .invest-in-us-container {\n    padding: 6rem 3rem;\n    margin: 2rem;\n  }\n  .invest-in-us-container .container-header {\n    flex-direction: column;\n  }\n  .invest-in-us-container .container-header img {\n    width: 70%;\n    margin-right: 0;\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .invest-in-us-container {\n    padding: 6rem 0;\n    margin: 2rem auto;\n  }\n  .invest-in-us-container .container-header {\n    flex-direction: column;\n  }\n  .invest-in-us-container .container-header img {\n    width: 70%;\n    margin-right: 0;\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n/* Hide scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdC1pbi11cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFJUTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtBQUZaO0FBSVk7RUFDSSxjQzFCVDtFRDJCUyxnQkFBQTtBQUZoQjtBQUlnQjtFQUNJLG1CQUFBO0FBRnBCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSHBCO0FBU0k7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDNUNLO0VENkNMLGdCQUFBO0VBQ0EsbUJBQUE7QUFQWjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxjQ25ESztBRDJDakI7QUFVWTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7QUFhQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0VBVk47RUFZTTtJQUNJLHNCQUFBO0VBVlY7RUFZVTtJQUNJLFVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQVZkO0FBQ0Y7QUFjQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBWk47RUFjTTtJQUNJLHNCQUFBO0VBWlY7RUFjVTtJQUNJLFVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQVpkO0FBQ0Y7QUFrQkE7RUFDSSxRQUFBO0FBaEJKO0FBbUJBLFVBQUE7QUFDQTtFQUNJLG1CQUFBO0FBaEJKO0FBbUJBLFdBQUE7QUFDQTtFQUNJLG1CQ3JIRztBRHFHUDtBQW1CQSxvQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUFoQko7QUFtQkEsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFoQko7QUFtQkEsNENBQUE7QUFDQTtFQUNJLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7QUFkNUIiLCJmaWxlIjoiaW52ZXN0LWluLXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcblxuLmludmVzdC1pbi11cy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgyMHB4O1xuICAgIG1hcmdpbjogOHJlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAuY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuXG4gICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250YWluZXItZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAuZm9vdGVyLXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1kZWVwLWRhcms7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnZlc3RtZW50LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1kZWVwLWRhcms7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAuaW52ZXN0LWluLXVzLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDZyZW0gM3JlbTtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuXG4gICAgICAgIC5jb250YWluZXItaGVhZGVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5pbnZlc3QtaW4tdXMtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogNnJlbSAwO1xuICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcblxuICAgICAgICAuY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGdvbGQ7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuLnNjcm9sbCB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG59XG5cblxuXG5cbiIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";

/***/ }),

/***/ 35759:
/*!********************************************************************!*\
  !*** ./src/app/dashboard/team-mission/team-mission.component.scss ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "html, body {\n  font-family: \"Courier New\", Courier, monospace !important;\n}\n\n.team-container {\n  height: 100vh;\n  overflow-y: auto;\n}\n\n.team-container * {\n  font-family: \"Courier New\", Courier, monospace !important;\n}\n\n.team-container .switch-profile {\n  position: absolute;\n  right: 90px;\n  margin-top: 5px;\n  z-index: 1600;\n  top: 70px;\n}\n\n.team-container .container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n\n.team-container .team-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  grid-gap: 80px;\n  gap: 80px;\n  max-width: 900px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 150px;\n  margin-bottom: 70px;\n  flex-wrap: wrap;\n}\n\n.team-container .team-header-container .image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.team-container .team-header-container .image-container img {\n  width: 50%;\n}\n\n.team-container .team-header-container .description-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.8;\n  word-break: break-word;\n  color: #F9E3A7;\n  padding: 1px;\n  border-radius: 8px;\n  max-width: 800px;\n  margin: 1rem;\n  font-size: 1rem;\n  font-weight: 300;\n  transition: all 0.3s ease;\n  text-align: left;\n}\n\n@media (max-width: 768px) {\n  .team-container .team-header-container .description-container {\n    flex-basis: 100%;\n    padding: 12px;\n    font-size: 1rem;\n  }\n}\n\n.team-container .team-header-container .title-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.8;\n  word-break: break-word;\n  color: #F9E3A7;\n  padding: 1px;\n  border-radius: 8px;\n  max-width: 800px;\n  margin: 2rem 1rem;\n  font-size: 1.6rem;\n  font-weight: 900;\n  transition: all 0.3s ease;\n}\n\n@media (max-width: 768px) {\n  .team-container .team-header-container .title-container {\n    flex-basis: 100%;\n    padding: 12px;\n    font-size: 1rem;\n  }\n}\n\n.team-container .team-box-container {\n  max-width: 1180px;\n  padding: 10px 15px;\n  transition: 0.5s;\n  margin-top: 120px;\n  padding-bottom: 50px;\n}\n\n.team-container .team-box-container .team-title {\n  color: #F9E3A7;\n  margin-left: 95px;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  margin-bottom: 80px;\n}\n\n.team-container .team-box-container .team-section {\n  margin-bottom: 60px;\n}\n\n.team-container .team-box-container .team-section .section-title {\n  color: #F9E3A7;\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  text-align: left;\n  margin-left: 95px;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content {\n  display: flex;\n  align-items: stretch;\n  /* Ensures all items match height */\n  justify-content: center;\n  grid-gap: 40px;\n  gap: 40px;\n  /* Reduced gap for uniform spacing */\n  flex-wrap: wrap;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 15px;\n  border-radius: 10px;\n  width: 200px;\n  /* Set a fixed width */\n  height: 250px;\n  /* Ensure uniform size */\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  /* Transparent background to match parent container */\n  background-color: transparent;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member:hover {\n  transform: scale(1.1);\n  /* Slight expansion */\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n  transition: transform 0.3s ease;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member .name {\n  font-weight: 600;\n  font-size: 16px;\n  color: white;\n  /* Updated to white */\n  margin-top: 5px;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member .role {\n  font-size: 14px;\n  color: #F9E3A7;\n  /* Updated to gold */\n  margin-top: 5px;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link {\n  margin-top: auto;\n  /* Push the link icon to the bottom */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  /* Ensure consistent width */\n  height: 30px;\n  /* Ensure consistent height */\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  /* Adjust to fit icon dimensions */\n  background-repeat: no-repeat;\n  background-position: center;\n  text-decoration: none;\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a img {\n  width: 100%;\n  /* Ensure it fills the link container */\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /* Ensure the icon scales without distortion */\n  transition: transform 0.3s ease, filter 0.3s ease;\n  /* Add some hover effects */\n}\n\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a:hover img {\n  transform: scale(1.1);\n  /* Slight zoom effect on hover */\n  filter: brightness(1.2);\n  /* Brighten the icon on hover */\n}\n\n::-webkit-scrollbar {\n  width: 0;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n@media only screen and (max-width: 900px) {\n  .team-container {\n    align-items: center;\n  }\n  .team-container .switch-profile {\n    right: 5px;\n  }\n  .team-container .team-box-container .team-title {\n    margin-left: 10px;\n  }\n  .team-container .team-box-container .team-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .team-container .team-box-container .team-section .section-title {\n    margin-left: 1.5rem;\n    width: 100%;\n    margin-bottom: 3rem;\n    font-weight: 900;\n  }\n  .team-container .team-info-container .info-card-item {\n    margin-right: unset;\n  }\n  .team-container .team-section .team-box-container-content {\n    grid-gap: 20px;\n    gap: 20px;\n  }\n  .team-container .team-section .team-box-container-content .team-member {\n    width: 150px;\n    height: 200px;\n  }\n  .team-container .team-section .team-box-container-content .team-member img {\n    width: 70px;\n    height: 70px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .name {\n    font-size: 14px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .role {\n    font-size: 12px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .link a {\n    font-size: 12px;\n    background-size: contain;\n  }\n}\n\n.team-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 4rem 2rem;\n}\n\n.team-member {\n  border-radius: 6px;\n  transition: background 0.3s ease-in-out;\n  color: #F9E3A7;\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  text-underline-offset: 3px;\n}\n\n.team-member.active {\n  background: rgba(255, 255, 255, 0.1);\n  font-weight: bold;\n}\n\n.team-member-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 900px;\n  width: 100%;\n  height: 12rem;\n  border-radius: 8px;\n  color: #F9E3A7;\n  background: none;\n  margin-bottom: 2rem;\n  border: 1px solid rgba(249, 227, 167, 0.3);\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.team-member-details .team-text {\n  color: #F9E3A7;\n}\n\n.space-y-16 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5REFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUk7RUFDSSx5REFBQTtBQUFSOztBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBQVI7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRFI7O0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGUjs7QUFJUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRlo7O0FBR1k7RUFDSSxVQUFBO0FBRGhCOztBQUtRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUhaOztBQUtZO0VBakJKO0lBa0JNLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUFGWjtBQUNGOztBQUlRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFGWjs7QUFLWTtFQWhCSjtJQWlCUSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBRmQ7QUFDRjs7QUFNSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFKUjs7QUFNUTtFQUNJLGNDdkdMO0VEd0dLLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpaOztBQU9RO0VBQ0ksbUJBQUE7QUFMWjs7QUFPWTtFQUNJLGNDbkhUO0VEb0hTLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxoQjs7QUFRWTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFzQixtQ0FBQTtFQUN0Qix1QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQVcsb0NBQUE7RUFDWCxlQUFBO0FBSmhCOztBQU1nQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxhQUFBO0VBQWUsd0JBQUE7RUFDZixxREFBQTtFQUNBLHdDQUFBO0VBRUEscURBQUE7RUFDQSw2QkFBQTtBQUhwQjs7QUFLb0I7RUFDSSxxQkFBQTtFQUF1QixxQkFBQTtFQUN2Qix3Q0FBQTtBQUZ4Qjs7QUFLb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUh4Qjs7QUFNb0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQWMscUJBQUE7RUFDZCxlQUFBO0FBSHhCOztBQU1vQjtFQUNJLGVBQUE7RUFDQSxjQ3ZLakI7RUR1SytCLG9CQUFBO0VBQ2QsZUFBQTtBQUh4Qjs7QUFNb0I7RUFDSSxnQkFBQTtFQUFrQixxQ0FBQTtFQUNsQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFBYSw0QkFBQTtFQUNiLFlBQUE7RUFBYyw2QkFBQTtBQUR0Qzs7QUFHd0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUEwQixrQ0FBQTtFQUMxQiw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFBNUI7O0FBRTRCO0VBQ0ksV0FBQTtFQUFhLHVDQUFBO0VBQ2IsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFBcUIsOENBQUE7RUFDckIsaURBQUE7RUFBbUQsMkJBQUE7QUFHbkY7O0FBQTRCO0VBQ0kscUJBQUE7RUFBdUIsZ0NBQUE7RUFDdkIsdUJBQUE7RUFBeUIsK0JBQUE7QUFJekQ7O0FBTUE7RUFDSSxRQUFBO0FBSEo7O0FBTUEsVUFBQTs7QUFDQTtFQUNJLG1CQUFBO0FBSEo7O0FBTUEsV0FBQTs7QUFDQTtFQUNJLG1CQzFORztBRHVOUDs7QUFNQSxvQkFBQTs7QUFDQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUEsZ0RBQUE7O0FBQ0E7RUFDSSxhQUFBO0FBSEo7O0FBTUEsNENBQUE7O0FBQ0E7RUFDSSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBRDVCOztBQUlBO0VBQ0k7SUFDSSxtQkFBQTtFQUROO0VBRU07SUFDSSxVQUFBO0VBQVY7RUFHVTtJQUNJLGlCQUFBO0VBRGQ7RUFJVTtJQUVJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBSGQ7RUFLYztJQUNJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFIbEI7RUFRVTtJQUNJLG1CQUFBO0VBTmQ7RUFXVTtJQUNJLGNBQUE7SUFBQSxTQUFBO0VBVGQ7RUFXYztJQUNJLFlBQUE7SUFDQSxhQUFBO0VBVGxCO0VBV2tCO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFUdEI7RUFZa0I7SUFDSSxlQUFBO0VBVnRCO0VBYWtCO0lBQ0ksZUFBQTtFQVh0QjtFQWVzQjtJQUNJLGVBQUE7SUFDQSx3QkFBQTtFQWIxQjtBQUNGOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQW5CSjs7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsY0M1VEc7RUQ2VEgsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSwwQkFBQTtBQXBCSjs7QUFzQkk7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0FBcEJSOztBQXlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2xWRztFRG1WSCxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtBQXRCSjs7QUF1Qkk7RUFDSSxjQ3hWRDtBRG1VUDs7QUEyQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF4QkoiLCJmaWxlIjoidGVhbS1taXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvbWl4aW5zXCI7XG5odG1sLCBib2R5IHtcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbn1cbi50ZWFtLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc3dpdGNoLXByb2ZpbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA5MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE2MDA7XG4gICAgICAgIHRvcDogNzBweDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRlYW0taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGdhcDogODBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIGNvbG9yOiAjRjlFM0E3O1xuICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjoxcmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBjb2xvcjogI0Y5RTNBNztcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZWFtLWJveC1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDExODBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG5cbiAgICAgICAgLnRlYW0tdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDk1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGVhbS1zZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGVhbS1ib3gtY29udGFpbmVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIEVuc3VyZXMgYWxsIGl0ZW1zIG1hdGNoIGhlaWdodCAqL1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGdhcDogNDBweDsgLyogUmVkdWNlZCBnYXAgZm9yIHVuaWZvcm0gc3BhY2luZyAqL1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgIC50ZWFtLW1lbWJlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4OyAvKiBTZXQgYSBmaXhlZCB3aWR0aCAqL1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4OyAvKiBFbnN1cmUgdW5pZm9ybSBzaXplICovXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qIFRyYW5zcGFyZW50IGJhY2tncm91bmQgdG8gbWF0Y2ggcGFyZW50IGNvbnRhaW5lciAqL1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0IGV4cGFuc2lvbiAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgLyogVXBkYXRlZCB0byB3aGl0ZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnJvbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkOyAvKiBVcGRhdGVkIHRvIGdvbGQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87IC8qIFB1c2ggdGhlIGxpbmsgaWNvbiB0byB0aGUgYm90dG9tICovXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7IC8qIEVuc3VyZSBjb25zaXN0ZW50IHdpZHRoICovXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7IC8qIEVuc3VyZSBjb25zaXN0ZW50IGhlaWdodCAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAvKiBBZGp1c3QgdG8gZml0IGljb24gZGltZW5zaW9ucyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgaXQgZmlsbHMgdGhlIGxpbmsgY29udGFpbmVyICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjsgLyogRW5zdXJlIHRoZSBpY29uIHNjYWxlcyB3aXRob3V0IGRpc3RvcnRpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgZmlsdGVyIDAuM3MgZWFzZTsgLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHQgem9vbSBlZmZlY3Qgb24gaG92ZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7IC8qIEJyaWdodGVuIHRoZSBpY29uIG9uIGhvdmVyICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGdvbGQ7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuLnNjcm9sbCB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAudGVhbS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuc3dpdGNoLXByb2ZpbGUge1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudGVhbS1ib3gtY29udGFpbmVye1xuICAgICAgICAgICAgLnRlYW0tdGl0bGV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ZWFtLXNlY3Rpb24ge1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGVhbS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuaW5mby1jYXJkLWl0ZW0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGVhbS1zZWN0aW9uIHtcbiAgICAgICAgICAgIC50ZWFtLWJveC1jb250YWluZXItY29udGVudCB7XG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgLnRlYW0tbWVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yb2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50ZWFtLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjo0cmVtIDJyZW07XG5cbn1cblxuLnRlYW0tbWVtYmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAkZ29sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLy8gQWRkcyBhbiB1bmRlcmxpbmUgKHVuZGVyc2NvcmUpXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4OyAvLyBBZGp1c3QgdGhpY2tuZXNzIG9mIHRoZSB1bmRlcmxpbmVcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkOyAvLyBFbnN1cmVzIGl0J3MgYSBzb2xpZCB1bmRlcmxpbmVcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDNweDsgLy8gQWRqdXN0cyB0aGUgZGlzdGFuY2Ugb2YgdGhlIHVuZGVybGluZSBmcm9tIHRleHRcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cblxuLnRlYW0tbWVtYmVyLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICRnb2xkO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRnb2xkLDAuMyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC50ZWFtLXRleHR7XG4gICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICB9XG59XG5cblxuXG4uc3BhY2UteS0xNntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";

/***/ }),

/***/ 2123:
/*!****************************************************!*\
  !*** ./src/app/dashboard/team/team.component.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = ".team-container {\n  height: 100vh;\n  overflow-y: auto;\n}\n.team-container .switch-profile {\n  position: absolute;\n  right: 90px;\n  margin-top: 5px;\n  z-index: 1600;\n  top: 70px;\n}\n.team-container .container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.team-container .team-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 80px;\n  gap: 80px;\n  max-width: 900px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 150px;\n  margin-bottom: 70px;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n.team-container .team-header-container .image-container {\n  flex: 1 1 160px;\n}\n.team-container .team-header-container .image-container img {\n  width: 100%;\n}\n.team-container .team-header-container .description-container {\n  flex: 1 1 160px;\n  line-height: 1.8;\n  word-break: break-word;\n  color: #F9E3A7;\n  padding: 16px;\n  border-radius: 8px;\n  max-width: 600px;\n  margin: 0 auto;\n  text-align: left;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n}\n.team-container .team-header-container .description-container:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);\n  transform: scale(1.02);\n}\n@media (max-width: 768px) {\n  .team-container .team-header-container .description-container {\n    flex-basis: 100%;\n    padding: 12px;\n    font-size: 1rem;\n  }\n}\n.team-container .team-box-container {\n  max-width: 1180px;\n  padding: 10px 15px;\n  transition: 0.5s;\n  margin-top: 120px;\n  padding-bottom: 50px;\n}\n.team-container .team-box-container .team-title {\n  color: #F9E3A7;\n  margin-left: 95px;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  margin-bottom: 80px;\n}\n.team-container .team-box-container .team-section {\n  margin-bottom: 60px;\n}\n.team-container .team-box-container .team-section .section-title {\n  color: #F9E3A7;\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 30px;\n  text-align: left;\n  margin-left: 95px;\n}\n.team-container .team-box-container .team-section .team-box-container-content {\n  display: flex;\n  align-items: stretch;\n  /* Ensures all items match height */\n  justify-content: center;\n  grid-gap: 40px;\n  gap: 40px;\n  /* Reduced gap for uniform spacing */\n  flex-wrap: wrap;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 15px;\n  border-radius: 10px;\n  width: 200px;\n  /* Set a fixed width */\n  height: 250px;\n  /* Ensure uniform size */\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  /* Transparent background to match parent container */\n  background-color: transparent;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member:hover {\n  transform: scale(1.1);\n  /* Slight expansion */\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin-bottom: 10px;\n  transition: transform 0.3s ease;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .name {\n  font-weight: 600;\n  font-size: 16px;\n  color: white;\n  /* Updated to white */\n  margin-top: 5px;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .role {\n  font-size: 14px;\n  color: #F9E3A7;\n  /* Updated to gold */\n  margin-top: 5px;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link {\n  margin-top: auto;\n  /* Push the link icon to the bottom */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  /* Ensure consistent width */\n  height: 30px;\n  /* Ensure consistent height */\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  /* Adjust to fit icon dimensions */\n  background-repeat: no-repeat;\n  background-position: center;\n  text-decoration: none;\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a img {\n  width: 100%;\n  /* Ensure it fills the link container */\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /* Ensure the icon scales without distortion */\n  transition: transform 0.3s ease, filter 0.3s ease;\n  /* Add some hover effects */\n}\n.team-container .team-box-container .team-section .team-box-container-content .team-member .link a:hover img {\n  transform: scale(1.1);\n  /* Slight zoom effect on hover */\n  filter: brightness(1.2);\n  /* Brighten the icon on hover */\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n/* Hide scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n@media only screen and (max-width: 900px) {\n  .team-container {\n    align-items: center;\n  }\n  .team-container .switch-profile {\n    right: 5px;\n  }\n  .team-container .team-box-container .team-title {\n    margin-left: 10px;\n  }\n  .team-container .team-box-container .team-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .team-container .team-box-container .team-section .section-title {\n    margin-left: 1.5rem;\n    width: 100%;\n    margin-bottom: 3rem;\n    font-weight: 900;\n  }\n  .team-container .team-info-container .info-card-item {\n    margin-right: unset;\n  }\n  .team-container .team-section .team-box-container-content {\n    grid-gap: 20px;\n    gap: 20px;\n  }\n  .team-container .team-section .team-box-container-content .team-member {\n    width: 150px;\n    height: 200px;\n  }\n  .team-container .team-section .team-box-container-content .team-member img {\n    width: 70px;\n    height: 70px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .name {\n    font-size: 14px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .role {\n    font-size: 12px;\n  }\n  .team-container .team-section .team-box-container-content .team-member .link a {\n    font-size: 12px;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSlI7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtBQUhoQjtBQU9RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBTFo7QUFPWTtFQUNFLDBDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtBQUxkO0FBUVk7RUFuQko7SUFvQk0sZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQUxaO0FBQ0Y7QUFTSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFQUjtBQVNRO0VBQ0ksY0M1RUw7RUQ2RUssaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUFo7QUFVUTtFQUNJLG1CQUFBO0FBUlo7QUFVWTtFQUNJLGNDeEZUO0VEeUZTLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJoQjtBQVdZO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQXNCLG1DQUFBO0VBQ3RCLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFBVyxvQ0FBQTtFQUNYLGVBQUE7QUFQaEI7QUFTZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUFjLHNCQUFBO0VBQ2QsYUFBQTtFQUFlLHdCQUFBO0VBQ2YscURBQUE7RUFDQSx3Q0FBQTtFQUVBLHFEQUFBO0VBQ0EsNkJBQUE7QUFOcEI7QUFRb0I7RUFDSSxxQkFBQTtFQUF1QixxQkFBQTtFQUN2Qix3Q0FBQTtBQUx4QjtBQVFvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBTnhCO0FBU29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUFjLHFCQUFBO0VBQ2QsZUFBQTtBQU54QjtBQVNvQjtFQUNJLGVBQUE7RUFDQSxjQzVJakI7RUQ0SStCLG9CQUFBO0VBQ2QsZUFBQTtBQU54QjtBQVNvQjtFQUNJLGdCQUFBO0VBQWtCLHFDQUFBO0VBQ2xCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUFhLDRCQUFBO0VBQ2IsWUFBQTtFQUFjLDZCQUFBO0FBSnRDO0FBTXdCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBMEIsa0NBQUE7RUFDMUIsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBSDVCO0FBSzRCO0VBQ0ksV0FBQTtFQUFhLHVDQUFBO0VBQ2IsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFBcUIsOENBQUE7RUFDckIsaURBQUE7RUFBbUQsMkJBQUE7QUFBbkY7QUFHNEI7RUFDSSxxQkFBQTtFQUF1QixnQ0FBQTtFQUN2Qix1QkFBQTtFQUF5QiwrQkFBQTtBQUN6RDtBQVNBO0VBQ0ksUUFBQTtBQU5KO0FBU0EsVUFBQTtBQUNBO0VBQ0ksbUJBQUE7QUFOSjtBQVNBLFdBQUE7QUFDQTtFQUNJLG1CQy9MRztBRHlMUDtBQVNBLG9CQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQU5KO0FBU0EsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFOSjtBQVNBLDRDQUFBO0FBQ0E7RUFDSSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBSjVCO0FBT0E7RUFDSTtJQUNJLG1CQUFBO0VBSk47RUFLTTtJQUNJLFVBQUE7RUFIVjtFQU1VO0lBQ0ksaUJBQUE7RUFKZDtFQU9VO0lBRUksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFOZDtFQVFjO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQU5sQjtFQVdVO0lBQ0ksbUJBQUE7RUFUZDtFQWNVO0lBQ0ksY0FBQTtJQUFBLFNBQUE7RUFaZDtFQWNjO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFabEI7RUFja0I7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQVp0QjtFQWVrQjtJQUNJLGVBQUE7RUFidEI7RUFnQmtCO0lBQ0ksZUFBQTtFQWR0QjtFQWtCc0I7SUFDSSxlQUFBO0lBQ0Esd0JBQUE7RUFoQjFCO0FBQ0YiLCJmaWxlIjoidGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL21peGluc1wiO1xuXG4udGVhbS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5zd2l0Y2gtcHJvZmlsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDkwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgei1pbmRleDogMTYwMDtcbiAgICAgICAgdG9wOiA3MHB4O1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGVhbS1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogODBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMSAxIDE2MHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMSAxIDE2MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBjb2xvcjogI0Y5RTNBNztcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAudGVhbS1ib3gtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIC50ZWFtLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlYW0tc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRlYW0tYm94LWNvbnRhaW5lci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBFbnN1cmVzIGFsbCBpdGVtcyBtYXRjaCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBnYXA6IDQwcHg7IC8qIFJlZHVjZWQgZ2FwIGZvciB1bmlmb3JtIHNwYWNpbmcgKi9cbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAudGVhbS1tZW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDsgLyogU2V0IGEgZml4ZWQgd2lkdGggKi9cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDsgLyogRW5zdXJlIHVuaWZvcm0gc2l6ZSAqL1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgICAgICAgICAgICAgICAvKiBUcmFuc3BhcmVudCBiYWNrZ3JvdW5kIHRvIG1hdGNoIHBhcmVudCBjb250YWluZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodCBleHBhbnNpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IC8qIFVwZGF0ZWQgdG8gd2hpdGUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5yb2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ29sZDsgLyogVXBkYXRlZCB0byBnb2xkICovXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyAvKiBQdXNoIHRoZSBsaW5rIGljb24gdG8gdGhlIGJvdHRvbSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyAvKiBFbnN1cmUgY29uc2lzdGVudCB3aWR0aCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4OyAvKiBFbnN1cmUgY29uc2lzdGVudCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgLyogQWRqdXN0IHRvIGZpdCBpY29uIGRpbWVuc2lvbnMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgaXQgZmlsbHMgdGhlIGxpbmsgY29udGFpbmVyICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjsgLyogRW5zdXJlIHRoZSBpY29uIHNjYWxlcyB3aXRob3V0IGRpc3RvcnRpb24gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgZmlsdGVyIDAuM3MgZWFzZTsgLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodCB6b29tIGVmZmVjdCBvbiBob3ZlciAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTsgLyogQnJpZ2h0ZW4gdGhlIGljb24gb24gaG92ZXIgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4uc2Nyb2xsIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC50ZWFtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5zd2l0Y2gtcHJvZmlsZSB7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZWFtLWJveC1jb250YWluZXJ7XG4gICAgICAgICAgICAudGVhbS10aXRsZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnRlYW0tc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRlYW0taW5mby1jb250YWluZXIge1xuICAgICAgICAgICAgLmluZm8tY2FyZC1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRlYW0tc2VjdGlvbiB7XG4gICAgICAgICAgICAudGVhbS1ib3gtY29udGFpbmVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcblxuICAgICAgICAgICAgICAgIC50ZWFtLW1lbWJlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucm9sZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJsYWNrOiAjMWIxYjFiO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGdvbGQ6ICNGOUUzQTc7XG5cbiRibHVlOiAjNDg4NmZmO1xuJGJsdWUtZGFyazogIzMwNzNmNjtcbiRibHVlLXNoYWRvdzogcmdiYSg3MiwgMTM0LCAyNTUsIDAuNDUpO1xuJGJsdWUtbGlnaHQ6ICMxMmE1ZjQ7XG4kYmx1ZS1kZWVwLWRhcms6ICMxODE3Mjc7XG5cbiRncmV5OiAjYmNjMGQxO1xuJGdyZXktbGlnaHQ6ICNlOWVjZjY7XG4kZ3JleS1taWRkbGUtbGlnaHQ6ICNkOGQ4ZDg7XG4kZ3JleS1kYXJrOiAjOGM5NmE5O1xuJGdyZXktc2hhZG93OiByZ2JhKDQ5LCA1NiwgNzgsIDAuMTgpO1xuXG4kcmVkOiAjZDUwMDAwO1xuJHBpbms6ICNlYTQxODM7XG4kY29yYWw6ICNmZjZjNWY7XG4kZ3JlZW46ICMyMGFkMjM7XG4kZ3JlZW4tZGFyazogIzEwN2YxMjtcbiRncmVlbi1saWdodDogI2I5YzIzNztcbiRvcmFuZ2UtbGlnaHQ6ICNGOUUzQTc7XG4kb3JhbmdlOiAjZmJhZDUwO1xuJHB1cnBsZTogIzZiNGZlYjtcbiRibHVlLWdyZWVuOiAjMDBhMjg5O1xuJGRhcmstYmx1ZTogIzI5MkYzRjtcblxuXG4iXX0= */";

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

module.exports = ".message-box-container {\n  margin: auto;\n  max-width: 650px;\n  margin-left: 90px;\n  width: 100%;\n  min-width: 550px;\n  position: fixed;\n  top: 40%;\n  left: 70%;\n  transition: all 0.5s;\n  transform: translate(-50%, -90px);\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  --message-top-limit: 240px;\n}\n.message-box-container .visible {\n  opacity: 1 !important;\n}\n.message-box-container .message-item {\n  position: relative;\n  padding: 5px 2.5px;\n  border-radius: 25px;\n  font-family: Verdana sans-serif;\n  letter-spacing: 0.02em;\n  font-size: 20px;\n  line-height: 1.2;\n  font-weight: normal;\n  opacity: 0;\n  transform: translateY(20px) scale(0.9);\n  transition: transform 150ms, opacity 150ms;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n@media only screen and (max-width: 768px) {\n  .message-box-container {\n    --message-top-limit: 180px;\n    margin-left: 0;\n    top: 50%;\n    left: 50%;\n    max-width: 350px;\n    min-width: 250px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .message-box-container {\n    --message-top-limit: 180px;\n    margin-left: 0;\n    top: 50%;\n    left: 50%;\n    max-width: 450px;\n    min-width: 350px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBSUk7RUFDSSxxQkFBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBSUEsc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUhSO0FBT0E7RUFDSTtJQUNJLDBCQUFBO0lBR0EsY0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO09BQUEsc0JBQUE7WUFBQSxpQkFBQTtFQVpOO0FBVUY7QUFNQTtFQUNJO0lBQ0ksMEJBQUE7SUFHQSxjQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7T0FBQSxzQkFBQTtZQUFBLGlCQUFBO0VBWk47QUFVRiIsImZpbGUiOiJtZXNzYWdlLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL21peGluc1wiO1xuXG4ubWVzc2FnZS1ib3gtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDU1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA3MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTkwcHgpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC0tbWVzc2FnZS10b3AtbGltaXQ6IDI0MHB4OyAvLyBEZWZhdWx0IHZhbHVlXG5cbiAgICAudmlzaWJsZSB7XG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWVzc2FnZS1pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA1cHggMi41cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hIHNhbnMtc2VyaWY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjkpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KSBzY2FsZSguOSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjkpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgLCBvcGFjaXR5IDE1MG1zO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubWVzc2FnZS1ib3gtY29udGFpbmVyIHtcbiAgICAgICAgLS1tZXNzYWdlLXRvcC1saW1pdDogMTgwcHg7IC8vIEFkanVzdGVkIHZhbHVlIGZvciBzbWFsbGVyIHNjcmVlbnNcbiAgICB9ICAgIFxuICAgIC5tZXNzYWdlLWJveC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5tZXNzYWdlLWJveC1jb250YWluZXIge1xuICAgICAgICAtLW1lc3NhZ2UtdG9wLWxpbWl0OiAxODBweDsgLy8gQWRqdXN0ZWQgdmFsdWUgZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgIH0gICAgXG4gICAgLm1lc3NhZ2UtYm94LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgfVxufVxuIl19 */";

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

module.exports = ".message-item-container {\n  min-height: 75px;\n  max-width: 500px;\n  width: 100%;\n  padding: 10px;\n  border-radius: 7px;\n  background: rgba(41, 47, 63, 0.33);\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.message-item-container .message-title {\n  margin-bottom: 15px;\n  pointer-events: none;\n}\n.message-item-container .message-content {\n  color: #ffffff;\n  word-break: break-word;\n  pointer-events: none;\n}\n.message-item-container .color-orange {\n  color: #fbad50;\n}\n.message-item-container .color-light-blue {\n  color: #12a5f4;\n}\n.message-item-container .avatar {\n  width: 100px;\n  margin-right: 10px;\n}\n.message-item-container .avatar img {\n  border-radius: 50%;\n  width: 100%;\n}\n@media only screen and (max-width: 1024px) {\n  .message-item-container {\n    min-height: 55px;\n    max-width: 350px;\n    background: #292f3f;\n  }\n  .message-item-container .message-title {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .message-item-container {\n    min-height: 45px;\n    max-width: 250px;\n    background: #292f3f;\n  }\n  .message-item-container .message-title {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFKSjtBQU1JO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQUpSO0FBT0k7RUFDSSxjQ3BCQTtFRHFCQSxzQkFBQTtFQUNBLG9CQUFBO0FBTFI7QUFRSTtFQUNJLGNDSkM7QURGVDtBQVNJO0VBQ0ksY0N4Qks7QURpQmI7QUFVSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQVJSO0FBU1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFQWjtBQVlBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFUTjtFQVdNO0lBQ0ksbUJBQUE7RUFUVjtBQUNGO0FBYUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQVhOO0VBYU07SUFDSSxtQkFBQTtFQVhWO0FBQ0YiLCJmaWxlIjoibWVzc2FnZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvbWl4aW5zXCI7XG5cbi5tZXNzYWdlLWl0ZW0tY29udGFpbmVyIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGhzbGEoODksIDQzJSwgNTElLCAwLjEpO1xuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XG4gICAgLy9tYXgtd2lkdGg6IDM1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDcsIDYzLCAwLjMzKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIC5tZXNzYWdlLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5jb2xvci1vcmFuZ2Uge1xuICAgICAgICBjb2xvcjogJG9yYW5nZTtcbiAgICB9XG5cbiAgICAuY29sb3ItbGlnaHQtYmx1ZSB7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1saWdodDtcbiAgICB9XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubWVzc2FnZS1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQ3LCA2MywgMSk7XG5cbiAgICAgICAgLm1lc3NhZ2UtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5tZXNzYWdlLWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDcsIDYzLCAxKTtcblxuICAgICAgICAubWVzc2FnZS10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";

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