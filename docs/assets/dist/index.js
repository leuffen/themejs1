/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.ts");



/***/ }),

/***/ "./src.dev/SwitcherElement.ts":
/*!************************************!*\
  !*** ./src.dev/SwitcherElement.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitcherElement: () => (/* binding */ SwitcherElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


const tpl = `
    <style>
        .sidepanel {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            border: 0;
            width: 250px;
            z-index: 99999;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            background: #000;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            padding: 5px
        }
        
        .sidepanel .activator {
            position: absolute;
            top: 38vh;
            height: 50px;
            width: 50px;
            left: -50px;
            cursor: pointer;
            background: #000;
            color: #fff;
            border-radius: 10% 0 0 10%;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            opacity: 0.5;
            transition: opacity 0.3s ease-in-out;
        }
        .sidepanel.active .activator {
            opacity: 0.8;
        }
        .sidepanel .activator:hover {
            opacity: 1;
        }
        .sidepanel.active {
            transform: translateX(0);
        }
        .sidepanel .content {
            color: #fff;
        }
        
    </style>
    
    <nav class="sidepanel" ka.classlist.active="state.active">
        <div class="activator" ka.on.click="$fn.toggle()">B</div>
        <div class="content">
            <div  ka.content="$content"></div>
        </div>
    </nav>
`;
let SwitcherElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomWrapper {
  constructor(config) {
    super();
    let state = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_session_storage)({ active: false }, "switcher-element");
    let scope = this.init({
      state,
      $fn: {
        toggle: () => {
          state.active = !state.active;
          scope.render();
        }
      },
      $on: {
        change: (e) => {
          console.log("change", e);
        }
      }
    });
  }
};
SwitcherElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)(tpl)
], SwitcherElement);
let SubElement = class extends _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement {
  constructor() {
    super();
    this.wrap(new SwitcherElement({}));
  }
};
SubElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("switcher-element"),
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.template)("<b>Hello World</b>")
], SubElement);
document.body.appendChild(new SubElement());


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _template_autocontent_autocontent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/autocontent/autocontent */ "./src/template/autocontent/autocontent.ts");
/* harmony import */ var _template_navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/navbar/navbar */ "./src/template/navbar/navbar.ts");
/* harmony import */ var _template_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template/footer/footer */ "./src/template/footer/footer.ts");
/* harmony import */ var _template_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template/header/header */ "./src/template/header/header.ts");
/* harmony import */ var _template_hero_hero1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template/hero/hero1 */ "./src/template/hero/hero1.ts");
/* harmony import */ var _template_map_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/map/map */ "./src/template/map/map.ts");
/* harmony import */ var _template_col2_col2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template/col2/col2 */ "./src/template/col2/col2.ts");
/* harmony import */ var _template_textstyle_textstyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template/textstyle/textstyle */ "./src/template/textstyle/textstyle.ts");











/***/ }),

/***/ "./src/template/autocontent/autocontent.ts":
/*!*************************************************!*\
  !*** ./src/template/autocontent/autocontent.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


class AutocontentLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.style = "fullsize";
  }
}
let tpl = {};
tpl["fullsize"] = `
<div class="as__autocontent">
    <div class="[[ layout.container ]]" data-ref="main">
        
    </div>
</div>
`;
let AutoContent = class {
  render(element, layout) {
    let tplHtml = tpl[layout.style];
    if (!tplHtml)
      throw new Error("Unknown style: " + layout.style);
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tplHtml);
    main.parse({ layout });
    main.select("main").append(element.childNodes);
    element.append(main.content);
    return main.content;
  }
};
AutoContent = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("autocontent", AutocontentLayout)
], AutoContent);


/***/ }),

/***/ "./src/template/col2/col2.ts":
/*!***********************************!*\
  !*** ./src/template/col2/col2.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


class Col2Layout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.order = "";
    this.cols = 8;
    this.side_content = "";
  }
}
const tpl = `
<div class="as__2col [[layout.container]]">
    <div class="row [[layout.order]] ">
        <div class=":: col-12 order-2 :[[layout.break1]]: col-[[ layout.cols ]] " data-ref="main"></div>
        <div class=":: col-12 order-1 :[[layout.break1]]: col-[[ 12-layout.cols ]]" data-ref="side">[[ layout.side_content]]</div>
    </div>
    
</div>
`;
let Col2 = class {
  render(element, layout) {
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tpl);
    main.parse({ layout });
    main.select("main").append(element.childNodes);
    element.append(main.content);
    return main.content;
  }
};
Col2 = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("col2", Col2Layout)
], Col2);


/***/ }),

/***/ "./src/template/footer/footer.ts":
/*!***************************************!*\
  !*** ./src/template/footer/footer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


class FooterLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.max_cols = 4;
  }
}
const tpl = `
<div class="as__footer">
    <div class="[[layout.container]]">
        <div class="row [[layout.order]]" data-ref="row">
        </div>
    </div>
</div>
`;
const tplCol = `
<div class="as__footer-column :: col-12 :[[layout.break1]]: col-[[ cols ]] " data-ref="main">
    
</div>
`;
let Footer = class {
  render(element, layout) {
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tpl);
    main.parse({ layout });
    let children = (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.splitChildrenBySelector)(element, "h2");
    let tplCol2 = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tplCol);
    tplCol2.parse({ layout, cols: (12 / children.length).toFixed(0) });
    children.forEach((child) => {
      let row = tplCol2.clone().select("main").append(child);
      main.select("row").append(row);
    });
    element.append(main.content);
    return main.content;
  }
};
Footer = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("footer", FooterLayout)
], Footer);


/***/ }),

/***/ "./src/template/header/header.ts":
/*!***************************************!*\
  !*** ./src/template/header/header.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderLayout: () => (/* binding */ HeaderLayout)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



const tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_html)(`
<div class="as__header [[ layout.style ]]">
    <div class="as__header-background" data-ref="img">
    </div>
    <div class="as__header-main" >
        <div class="[[ layout.container ]]" data-ref="main">
        </div>
    </div>
</div>
`);
class HeaderLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.style = "default";
  }
}
let Hero1 = class {
  render(element, layout) {
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_2__.QTemplate(tpl);
    main.parse({ layout });
    let hasImage = false;
    Array.from(element.querySelectorAll("img")).forEach((el) => {
      main.select("img").append(el);
      hasImage = true;
    });
    if (!hasImage) {
      main.select("img").selected.classList.add("no-image");
    }
    Array.from(element.children).forEach((el) => {
      main.select("main").append(el);
    });
    element.innerHTML = "";
    element.append(main.content);
    return main.content;
  }
};
Hero1 = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaRenderer)("header", HeaderLayout)
], Hero1);


/***/ }),

/***/ "./src/template/hero/hero1.ts":
/*!************************************!*\
  !*** ./src/template/hero/hero1.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroLayout: () => (/* binding */ HeroLayout)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



const tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_html)(`
<div class="as__hero1 position-relative" style="isolation: isolate">
    <div class="as__hero1_image-mobile :: d-block :[[layout.break1]]: d-none   col-[[12 - layout.cols]] " data-ref="image-mobile"></div>

    <div class="[[layout.container]] ">
        <div class="as__hero1_content-row row :: mobile :[[layout.break1]]: full_height align-items-center">
            
            <div class="as__hero1_content [[layout.content_classes]] :: col-12 :[[layout.break1]]:  col-[[layout.cols]] " data-ref="main"></div>
        </div>
    </div>
    <div class="position-absolute top-0 bottom-0 w-100" style="z-index: -1">
        <div class="container-fluid p-0 h-100 :: d-none :[[layout.break1]]: d-block">
            <div class="row g-0 flex-lg-row-reverse h-100">
                <div class="col-[[layout.image_cols]] position-relative as__hero1_image h-100" data-ref="image">
                    <div class="position-absolute image-overlay [[ layout.content_cols-layout.image_cols < 0 ? 'overlay-fade' : '']]"></div>
                </div>
               
            </div>
            
        </div>
    </div>
</div>
`);
class HeroLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.DefaultLayout {
  constructor() {
    super(...arguments);
    /**
     * Columns of the content overlay
     */
    this.cols = 6;
    /**
     * set Classes of the content div
     */
    this.content_classes = "";
    /**
     * Size of the image in Background
     */
    this.image_cols = 6;
    /**
     *
     */
    this.image_content = "contentSelector(img)";
  }
}
let Hero1 = class {
  render(element, layout) {
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_2__.QTemplate(tpl);
    main.parse({ layout });
    Array.from(element.querySelectorAll(".background img, img.background")).forEach((el) => {
      main.select("image").append(el.cloneNode(true));
      main.select("image-mobile").append(el);
    });
    Array.from(element.children).forEach((el) => {
      main.select("main").append(el);
    });
    element.innerHTML = "";
    element.append(main.content);
    return main.content;
  }
};
Hero1 = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaRenderer)("hero1", HeroLayout)
], Hero1);


/***/ }),

/***/ "./src/template/map/map.ts":
/*!*********************************!*\
  !*** ./src/template/map/map.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapLayout: () => (/* binding */ MapLayout)
/* harmony export */ });
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


const tpl = `
    <div class="as__map [[ layout.mapClass ]]">
        <div class="as__map-overlay" data-ref="overlay">
            <img src="[[ layout.mapPreviewUrl ]]" loading="lazy" width="1461" height="729" alt="map preview" />
            <div>
                <div>
                    <button class="btn btn-secondary mx-auto my-auto btn-lg" data-ref="button">Google Maps anzeigen</button>
                    <p class="mx-auto">Mit Klick auf "Anzeigen" erkl\xE4ren Sie sich mit den Datenschutzbestimmungen einverstanden.</p>
                </div>
               
            </div>
        </div>
        <iframe width="100%" hidden title="Google Maps" height="100%" data-ref="iframe"></iframe>
        <script>
        <\/script>
    </div>
`;
class MapLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.mapPreviewUrl = "https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg";
  }
}
let Map = class {
  render(element, layout) {
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__.QTemplate(tpl);
    main.parse({ layout });
    if (!element.hasAttribute("data-map-url")) {
      console.warn("Missing data-map-url attribute on element", element);
    }
    main.select("button").selected.addEventListener("click", () => {
      main.select("iframe").selected.removeAttribute("hidden");
      main.select("iframe").selected.setAttribute("src", element.getAttribute("data-map-url"));
      main.select("overlay").selected.setAttribute("hidden", "true");
    });
    element.append(main.content);
    return main.content;
  }
};
Map = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("map", MapLayout)
], Map);


/***/ }),

/***/ "./src/template/navbar/navbar.ts":
/*!***************************************!*\
  !*** ./src/template/navbar/navbar.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarLayout: () => (/* binding */ NavbarLayout)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



const tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_html)(`
<nav class="as__navbar [[layout.style]] [[layout.position]]" style="z-index: 999">

    <div id="as__minibar" class="as__minibar top" >
        <div class="[[layout.container]]" data-ref="minibar"></div>
    </div>
    
    <div class="as__mainbar navbar navbar-expand-lg w-100">
        <div class="[[layout.container]]" data-ref="main">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div data-ref="navbar" class="collapse navbar-collapse" id="navbarSupportedContent">

                
            </div>
        </div>
    </div>
    
</nav>
`);
class NavbarLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.DefaultLayout {
  constructor() {
    super(...arguments);
    /**
     * a additional class name added to the main element
     * to allow for custom styling. Defaults to "default" (see as-navbar.scss for details)
     */
    this.style = "default";
    /**
     * default position: Fixed on top
     */
    this.position = "fixed";
    /**
     * Show fixed navbar if scrolled down more than this distance
     */
    this.fixed_scroll_distance = 10;
  }
}
let Navbar = class {
  render(element, layout) {
    console.log(layout);
    let original = element.cloneNode(true);
    let template = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_2__.QTemplate(tpl);
    element.innerHTML = "";
    element.appendChild(template.content);
    template.parse({ layout });
    let result = template.content;
    let mainDiv = template.with("main");
    let navbar = template.with("navbar");
    let minibar = template.with("minibar");
    let navbarBrand = original.querySelector(".navbar-brand");
    if (navbarBrand === null) {
      navbarBrand = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("a", { href: "/" }, "No class='navbar-brand' element");
    }
    mainDiv.selected.insertBefore(navbarBrand, mainDiv.selected.firstElementChild);
    let mainUl = original.querySelector("ul.mainbar");
    if (mainUl === null) {
      mainUl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("ul", {}, "Missing ul.mainbar element");
    }
    mainUl = mainUl.cloneNode(true);
    navbar.append(mainUl);
    let miniUl = original.querySelector("ul.minibar");
    if (miniUl.firstElementChild === null) {
      miniUl = null;
    }
    minibar.append(miniUl);
    mainUl.classList.add(..."navbar-nav navbar-nav-scroll ms-auto my-2 my-lg-0".split(" "));
    if (layout.fixed_scroll_distance !== null)
      result.firstElementChild.classList.add("auto-fixed");
    result.firstElementChild.classList.add(layout.style);
    let scolled = false;
    let fixed = false;
    window.setInterval(() => {
      if (window.scrollY > 0 && !scolled) {
        result.classList.add("scrolled");
        scolled = true;
      } else if (window.scrollY === 0 && scolled) {
        result.classList.remove("scrolled");
        scolled = false;
      } else {
      }
      if (layout.fixed_scroll_distance === null)
        return;
      if (window.scrollY > layout.fixed_scroll_distance && !fixed) {
        result.classList.add("fixed");
        fixed = true;
      } else if (window.scrollY <= layout.fixed_scroll_distance && fixed) {
        result.classList.remove("fixed");
        fixed = false;
      }
    }, 300);
    mainUl.querySelectorAll("li").forEach((e) => e.classList.add("nav-item"));
    mainUl.querySelectorAll("li a").forEach((e) => e.classList.add("nav-link"));
    mainUl.querySelectorAll("li.dropdown ul").forEach((e) => e.classList.add("dropdown-menu"));
    mainUl.querySelectorAll("li.dropdown ul li").forEach((e) => e.classList.add("dropdown-item"));
    element.replaceWith(template.content);
    return template.content;
  }
};
Navbar = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_1__.jodaRenderer)("navbar", NavbarLayout)
], Navbar);


/***/ }),

/***/ "./src/template/textstyle/textstyle.ts":
/*!*********************************************!*\
  !*** ./src/template/textstyle/textstyle.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @leuffen/jodastyle */ "./workspaces/jodastyle/index.ts");
/* harmony import */ var _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @leuffen/jodastyle/src/helper/QTemplate */ "./workspaces/jodastyle/src/helper/QTemplate.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


class TextStyleLayout extends _leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.DefaultLayout {
  constructor() {
    super(...arguments);
    this.template = "default";
    this.icon = "bi bi-play-fill";
  }
}
let tpl = {};
tpl["icontext"] = `
<div class="as__textstyle-icontext">
    <span class="icon [[layout.icon]]"></span>
    <div class="text" data-ref="main">
    </div>
</div>
`;
let TextStyle = class {
  render(element, layout) {
    let template = tpl[layout.template];
    if (template === void 0)
      throw new Error("Template not found: " + layout.template);
    let main = new _leuffen_jodastyle_src_helper_QTemplate__WEBPACK_IMPORTED_MODULE_1__.QTemplate(template);
    main.parse({ layout });
    main.select("main").append(element.childNodes);
    element.append(main.content);
    return main.content;
  }
};
TextStyle = __decorateClass([
  (0,_leuffen_jodastyle__WEBPACK_IMPORTED_MODULE_0__.jodaRenderer)("textstyle", TextStyleLayout)
], TextStyle);


/***/ }),

/***/ "./workspaces/jodastyle/index.ts":
/*!***************************************!*\
  !*** ./workspaces/jodastyle/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/jodastyle/src/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _src_index__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _src_index__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./workspaces/jodastyle/src/component/joda-content-element.ts":
/*!********************************************************************!*\
  !*** ./workspaces/jodastyle/src/component/joda-content-element.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JodaContentElement: () => (/* binding */ JodaContentElement)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
/* harmony import */ var _processor_jodasplit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor/jodasplit */ "./workspaces/jodastyle/src/processor/jodasplit.ts");
/* harmony import */ var _processor_jodastyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../processor/jodastyle */ "./workspaces/jodastyle/src/processor/jodastyle.ts");
/* harmony import */ var _processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../processor/jodaresponsive */ "./workspaces/jodastyle/src/processor/jodaresponsive.ts");
/* harmony import */ var _helper_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/logger */ "./workspaces/jodastyle/src/helper/logger.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _origContentTemplate, _outputDiv;





function getCSSRule(ruleName) {
  ruleName = ruleName.toLowerCase();
  var result = null;
  var find = Array.prototype.find;
  find.call(document.styleSheets, (styleSheet) => {
    result = find.call(styleSheet.cssRules, (cssRule) => {
      return cssRule instanceof CSSStyleRule && cssRule.selectorText.toLowerCase() == ruleName;
    });
    return result != null;
  });
  return result;
}
let JodaContentElement = class extends HTMLElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _origContentTemplate, void 0);
    __privateAdd(this, _outputDiv, void 0);
  }
  awaitStyles() {
    return __async(this, null, function* () {
      let index = 0;
      while (true) {
        index++;
        if (getComputedStyle(this).getPropertyValue("--joda-init") === "true") {
          break;
        }
        if (index > 100) {
          index = 0;
          console.warn("Still waiting for --joda-init: true", this);
        }
        yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(10 + index);
      }
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(1);
      console.time("time");
      __privateSet(this, _origContentTemplate, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template"));
      __privateSet(this, _outputDiv, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("div"));
      __privateGet(this, _origContentTemplate).innerHTML = this.innerHTML;
      this.innerHTML = "";
      this.appendChild(__privateGet(this, _origContentTemplate));
      this.appendChild(__privateGet(this, _outputDiv));
      console.timeLog("time");
      let logger = new _helper_logger__WEBPACK_IMPORTED_MODULE_4__.Logger("joda-content");
      let jodaSplit = new _processor_jodasplit__WEBPACK_IMPORTED_MODULE_1__.Jodasplit(logger);
      let jodaresponsive = new _processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_3__.Jodaresponsive(logger);
      let currentBreakpoint = (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_3__.getCurrentBreakpoint)();
      __privateGet(this, _outputDiv).appendChild(jodaSplit.process(__privateGet(this, _origContentTemplate).content.cloneNode(true)));
      yield this.awaitStyles();
      console.timeLog("time");
      for (let child of Array.from(__privateGet(this, _outputDiv).childNodes)) {
        let jodaStyle = new _processor_jodastyle__WEBPACK_IMPORTED_MODULE_2__.Jodastyle(logger);
        yield jodaStyle.process(child);
        console.timeLog("time");
      }
      ;
      jodaresponsive.process(__privateGet(this, _outputDiv));
      console.timeEnd("time");
      window.addEventListener("resize", () => {
        if (currentBreakpoint === (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_3__.getCurrentBreakpoint)()) {
          return;
        }
        currentBreakpoint = (0,_processor_jodaresponsive__WEBPACK_IMPORTED_MODULE_3__.getCurrentBreakpoint)();
        logger.log("Breakpoint changed to " + currentBreakpoint);
        __privateGet(this, _outputDiv).childNodes.forEach((child) => {
          jodaresponsive.process(child);
        });
      });
    });
  }
};
_origContentTemplate = new WeakMap();
_outputDiv = new WeakMap();
JodaContentElement = __decorateClass([
  (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.customElement)("joda-content")
], JodaContentElement);


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/JodaRenderer.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/JodaRenderer.ts ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./workspaces/jodastyle/src/helper/QTemplate.ts":
/*!******************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/QTemplate.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QTemplate: () => (/* binding */ QTemplate),
/* harmony export */   template_parse: () => (/* binding */ template_parse)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");


function template_parse(input, scope, element) {
  return input.replace(/\[\[(.*?)]]/gmi, (match, p1) => {
    let val = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(p1, scope, element, {});
    return val;
  });
}
class QTemplate {
  constructor(content) {
    this.content = content;
    if (this.content instanceof HTMLTemplateElement) {
      if (this.content.content.children.length > 1) {
        throw new Error("Template must have exactly one root element. Found: " + this.content.innerHTML);
      }
      this.content = this.content.content.firstElementChild.cloneNode(true);
    }
    this.selected = null;
  }
  parse(scope) {
    let tpl = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("template", {}, [], null);
    tpl.content.append(this.content);
    tpl.innerHTML = template_parse(tpl.innerHTML, scope, tpl);
    this.content = tpl.content.firstElementChild;
    return this;
  }
  /**
   * Returns the element with the given data-ref attribute
   * @param data_ref
   */
  by(data_ref) {
    return this.content.querySelector(`[data-ref="${data_ref}"]`);
  }
  select(data_ref) {
    this.selected = this.by(data_ref);
    if (this.selected === null) {
      console.error("Element with data-ref '" + data_ref + "' not found.", this.content);
      throw "Element with data-ref '" + data_ref + "' not found.";
    }
    return this;
  }
  /**
   * Select and return own wrapper
   *
   * @param data_ref
   */
  with(data_ref) {
    let instance = new QTemplate(this.content);
    instance.select(data_ref);
    return instance;
  }
  append(element) {
    if (element instanceof QTemplate) {
      this.selected.append(element.content);
      return this;
    }
    if (Array.isArray(element) || element instanceof NodeList) {
      element.forEach((e) => this.selected.append(e));
      return this;
    }
    this.selected.append(element);
    return this;
  }
  clone() {
    return new QTemplate(this.content.cloneNode(true));
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/functions.ts":
/*!******************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/functions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   await_property: () => (/* binding */ await_property),
/* harmony export */   jodaRenderer: () => (/* binding */ jodaRenderer),
/* harmony export */   registerJodaRenderer: () => (/* binding */ registerJodaRenderer)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

function await_property(object, property, wait = 10) {
  return __async(this, null, function* () {
    if (typeof property === "string") {
      property = property.split(".");
    }
    let value = void 0;
    let index = 0;
    while (value === void 0) {
      index++;
      let curObject = object;
      for (let i = 0; i < property.length; i++) {
        if (curObject === void 0) {
          break;
        }
        curObject = curObject[property[i]];
      }
      value = curObject;
      if (value === void 0)
        yield (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(wait);
      if (index > 1e3) {
        index = 0;
        console.warn("Still waiting for property: ", property, "in object", object);
      }
    }
    return value;
  });
}
function registerJodaRenderer(name, renderer, config) {
  if (window["jodastyle"] === void 0) {
    window["jodastyle"] = {};
  }
  if (window["jodastyle"]["renderer"] === void 0) {
    window["jodastyle"]["renderer"] = {};
  }
  window["jodastyle"]["renderer"][name] = { renderer, config };
}
function jodaRenderer(name, config) {
  return function(classOrDescriptor) {
    console.log(classOrDescriptor);
    registerJodaRenderer(name, classOrDescriptor, config);
  };
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/ka-quick-template.ts":
/*!**************************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/ka-quick-template.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElementTree: () => (/* binding */ createElementTree),
/* harmony export */   parseAttributeStr: () => (/* binding */ parseAttributeStr),
/* harmony export */   parseVariableAndStyleStr: () => (/* binding */ parseVariableAndStyleStr),
/* harmony export */   parseVariableStr: () => (/* binding */ parseVariableStr)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");

function parseVariableAndStyleStr(varString) {
  let attrs = { "$": {}, "@": {} };
  let regex = new RegExp(`([@$])[^@^$]+`, "gi");
  varString.replace(regex, (match, type) => {
    match = match.substring(1);
    if (match.indexOf("=") === -1 && type === "@") {
      if (typeof attrs[type].class === "undefined")
        attrs[type].class = "";
      attrs[type].class += " " + match;
      attrs[type].class = attrs[type].class.trim();
    } else {
      let res = match.split("=");
      attrs[type][res.shift()] = res.join("=").trim();
    }
    return "";
  });
  return attrs;
}
function parseVariableStr(varString, delimiter = "@") {
  let attrs = {};
  let regex = new RegExp(`\\${delimiter}[^${delimiter}]+`, "gi");
  varString.replace(regex, (match) => {
    match = match.substring(1);
    if (match.indexOf("=") === -1) {
      if (typeof attrs.class === "undefined")
        attrs.class = "";
      attrs.class += " " + match;
      attrs.class = attrs.class.trim();
    } else {
      let res = match.split("=");
      attrs[res.shift()] = res.join("=").trim();
    }
    return "";
  });
  return attrs;
}
function parseAttributeStr(attrString) {
  return parseVariableStr(attrString, "@");
}
function createElement(definition) {
  let defRest = definition.trim();
  let tag = "div";
  defRest = defRest.replace(/^[a-z0-9_\:\-]+/ig, (match) => {
    tag = match;
    return "";
  });
  let attrs = parseAttributeStr(defRest);
  let element = (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)(tag, attrs);
  return element;
}
function createElementTree(def) {
  let start = null;
  let leaf = null;
  let splitted = def.split(">");
  while (splitted.length > 0) {
    let cur = splitted.shift();
    let refName = null;
    cur = cur.replace(/§([a-z0-9_\-]+)/, (a, name) => {
      refName = name;
      return "";
    });
    if (cur.trim().startsWith("|")) {
      let el2 = document.createElement("div");
      if (splitted.length > 0)
        cur += ">" + splitted.join(">");
      el2.innerHTML = cur.trim().substring(1);
      el2.childNodes.forEach((e) => leaf.append(e.cloneNode(true)));
      el2.remove();
      break;
    }
    let el = createElement(cur);
    if (start === null) {
      start = leaf = el;
    } else {
      if (leaf instanceof HTMLTemplateElement) {
        leaf.content.appendChild(el);
      } else {
        leaf.appendChild(el);
      }
      leaf = el;
    }
  }
  return { start, leaf };
}


/***/ }),

/***/ "./workspaces/jodastyle/src/helper/logger.ts":
/*!***************************************************!*\
  !*** ./workspaces/jodastyle/src/helper/logger.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
  constructor(name) {
    this.name = name;
  }
  log(...args) {
    console.log("[" + this.name + "]", ...args);
  }
  warn(...args) {
    console.warn("[" + this.name + "]", ...args);
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/index.ts":
/*!*******************************************!*\
  !*** ./workspaces/jodastyle/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* reexport safe */ _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__.DefaultLayout),
/* harmony export */   JodaContentElement: () => (/* reexport safe */ _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__.JodaContentElement),
/* harmony export */   await_property: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_2__.await_property),
/* harmony export */   jodaRenderer: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_2__.jodaRenderer),
/* harmony export */   registerJodaRenderer: () => (/* reexport safe */ _helper_functions__WEBPACK_IMPORTED_MODULE_2__.registerJodaRenderer)
/* harmony export */ });
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/JodaRenderer */ "./workspaces/jodastyle/src/helper/JodaRenderer.ts");
/* harmony import */ var _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _component_joda_content_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/joda-content-element */ "./workspaces/jodastyle/src/component/joda-content-element.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__) if(["default","JodaContentElement","await_property","jodaRenderer","registerJodaRenderer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _helper_JodaRenderer__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/DefaultLayout */ "./workspaces/jodastyle/src/types/DefaultLayout.ts");







/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodaresponsive.ts":
/*!**************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodaresponsive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodaresponsive: () => (/* binding */ Jodaresponsive),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   getCurrentBreakpoint: () => (/* binding */ getCurrentBreakpoint),
/* harmony export */   parseClassStr: () => (/* binding */ parseClassStr)
/* harmony export */ });
const breakpoints = {
  "xsm": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1400
};
function getCurrentBreakpoint() {
  let ret = "";
  Object.keys(breakpoints).forEach((key) => {
    if (window.innerWidth >= breakpoints[key]) {
      ret = key;
    }
  });
  return ret;
}
class ResponsiveClass {
  constructor() {
    this.always = [];
    this.default = null;
    this.xsm = null;
    this.xs = null;
    this.sm = null;
    this.md = null;
    this.lg = null;
    this.xl = null;
    this.xxl = null;
    this.breakpoints = ["xsm", "xs", "sm", "md", "lg", "xl", "xxl"];
  }
  getClassesForBreakpoint(breakpoint = null) {
    if (breakpoint === null) {
      breakpoint = getCurrentBreakpoint();
    }
    let ret = [];
    ret.push(...this.always);
    let isDefault = true;
    for (let bp of this.breakpoints) {
      if (this[bp] !== null) {
        ret.push(...this[bp]);
        isDefault = false;
      }
      if (bp === breakpoint) {
        break;
      }
    }
    if (isDefault) {
      ret.push(...this.default);
    }
    ret = ret.filter((item) => item !== "");
    return ret;
  }
}
function parseClassStr(input) {
  let ret = new ResponsiveClass();
  let pointer = "always";
  input.split(" ").map((item) => {
    let matches = item.match(/\:([a-zA-Z]*)\:/);
    if (matches === null) {
      ret[pointer].push(item);
      return;
    }
    pointer = matches[1];
    if (pointer === "") {
      pointer = "default";
    }
    if (ret[pointer] === null) {
      ret[pointer] = [];
    }
  });
  return ret;
}
class Jodaresponsive {
  constructor(logger) {
    this.logger = logger;
  }
  processNode(node) {
    var _a;
    const origAttr = "data-class-orig";
    if (!node.hasAttribute(origAttr)) {
      let classes2 = (_a = node.getAttribute("class")) != null ? _a : "";
      if (classes2.indexOf(":") === -1)
        return;
      node.setAttribute(origAttr, classes2);
    }
    let classes = node.getAttribute(origAttr);
    let responsiveClasses = parseClassStr(classes);
    node.setAttribute("class", "");
    node.classList.add(...responsiveClasses.getClassesForBreakpoint());
  }
  process(node) {
    Array.from([node, ...Array.from(node.querySelectorAll("*"))]).forEach((child) => {
      this.processNode(child);
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodasplit.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodasplit.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodasplit: () => (/* binding */ Jodasplit)
/* harmony export */ });
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _target, _parents, _currentParent;

class Jodasplit {
  constructor(logger) {
    this.logger = logger;
    __privateAdd(this, _target, document.createDocumentFragment());
    __privateAdd(this, _parents, [__privateGet(this, _target)]);
    __privateAdd(this, _currentParent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)("section", { class: "section-h1pre" }));
  }
  findParentElement(layer) {
    while (__privateGet(this, _parents).length > layer) {
      __privateGet(this, _parents).pop();
    }
    while (__privateGet(this, _parents)[__privateGet(this, _parents).length - 1] === void 0) {
      __privateGet(this, _parents).pop();
    }
    return __privateGet(this, _parents)[__privateGet(this, _parents).length - 1];
  }
  createNewElement(tagName, layer, tag) {
    tagName = tagName.toLowerCase();
    let curParent = this.findParentElement(layer);
    __privateSet(this, _currentParent, (0,_kasimirjs_embed__WEBPACK_IMPORTED_MODULE_0__.ka_create_element)(tag, { class: "section-" + tagName }));
    while (__privateGet(this, _parents).length < layer) {
      __privateGet(this, _parents).push(void 0);
    }
    __privateGet(this, _parents).push(__privateGet(this, _currentParent));
    curParent.appendChild(__privateGet(this, _currentParent));
    return __privateGet(this, _currentParent);
  }
  process(source) {
    let lastLayer = 1;
    __privateGet(this, _target).append(__privateGet(this, _currentParent));
    Array.from(source.children).forEach((child) => {
      if (child instanceof HTMLElement && child.matches("h1, h2, h3, h4, h5, h6, h7, h8, h9, hr")) {
        let layer = 1;
        let tag = "div";
        if (child.matches("h1, h2")) {
          layer = lastLayer = 1;
          tag = "section";
        } else if (child.matches("h3, h4, h5, h6, h7, h8, h9")) {
          layer = lastLayer = parseInt(child.tagName.substr(1)) * 2;
          tag = "div";
        } else if (child.matches("hr")) {
          layer = lastLayer + 1;
          tag = "div";
        }
        let e = this.createNewElement(child.tagName.toLowerCase(), layer, tag);
        e.classList.add(...child.classList);
      }
      __privateGet(this, _currentParent).appendChild(child);
    });
    return __privateGet(this, _target);
  }
}
_target = new WeakMap();
_parents = new WeakMap();
_currentParent = new WeakMap();


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodastyle-commands.ts":
/*!******************************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodastyle-commands.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jodaStyleCommands: () => (/* binding */ jodaStyleCommands)
/* harmony export */ });
/* harmony import */ var _helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/ka-quick-template */ "./workspaces/jodastyle/src/helper/ka-quick-template.ts");
/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/functions */ "./workspaces/jodastyle/src/helper/functions.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


let jodaStyleCommands = {};
jodaStyleCommands["--joda-replace-by"] = (value, target, element, logger) => {
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  parent.replaceChild(ret.start, element);
  Array.from(element.children).forEach((child) => {
    ret.leaf.append(child);
  });
  element.remove();
  return ret.leaf;
};
jodaStyleCommands["--joda-wrap"] = (value, target, element, logger) => {
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  parent.replaceChild(ret.start, element);
  ret.leaf.append(element);
  return element;
};
jodaStyleCommands["--joda-wrap-same"] = (value, target, element, logger) => {
  if (element["jodaIsWrappedSame"] !== void 0) {
    return element;
  }
  let parent = element.parentElement;
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  parent.replaceChild(ret.start, element);
  ret.leaf.append(element);
  return element;
};
jodaStyleCommands["--joda-class"] = (value, target, element, logger) => {
  let ret = (0,_helper_ka_quick_template__WEBPACK_IMPORTED_MODULE_0__.createElementTree)(value);
  element.setAttribute("class", element.getAttribute("class") + " " + value);
  return element;
};
jodaStyleCommands["--joda-use"] = (value, target, element, logger) => __async(void 0, null, function* () {
  let matches = value.match(/([a-z0-9\_-]+)\s*\((.*?)\)/);
  if (!matches) {
    console.error("Invalid --joda-use command: ", value, "in element", element, " should be in format: commandName(arg1: value1, arg2: value2, ...)");
    throw "Invalid --joda-use command: " + value + " should be in format: commandName(arg1: value1, arg2: value2, ...)";
  }
  logger.log("Using renderer: ", matches[1], "with args: ", matches[2], "on element", element);
  let commandName = matches[1];
  let args = JSON.parse("{" + matches[2] + "}");
  let command = yield (0,_helper_functions__WEBPACK_IMPORTED_MODULE_1__.await_property)(window, ["jodastyle", "renderer", commandName]);
  let config = new command.config();
  let style = getComputedStyle(element);
  Object.keys(config).forEach((key) => {
    let val = style.getPropertyValue("--layout-" + key.replace(/\_/g, "-"));
    if (val !== "") {
      config[key] = val.replace(/^["']/g, "").replace(/["']$/, "").trim();
    }
  });
  Object.assign(config, args);
  return yield new command.renderer().render(element, config);
});


/***/ }),

/***/ "./workspaces/jodastyle/src/processor/jodastyle.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/processor/jodastyle.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jodastyle: () => (/* binding */ Jodastyle)
/* harmony export */ });
/* harmony import */ var _jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jodastyle-commands */ "./workspaces/jodastyle/src/processor/jodastyle-commands.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

class Jodastyle {
  constructor(logger) {
    this.logger = logger;
  }
  process(node) {
    return __async(this, null, function* () {
      for (let child of [node, ...Array.from(node.querySelectorAll("*"))]) {
        let style = getComputedStyle(child);
        let keys = Object.keys(_jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__.jodaStyleCommands);
        for (let key of Array.from(keys)) {
          let styleValue = style.getPropertyValue(key);
          if (styleValue === "") {
            continue;
          }
          if (styleValue === getComputedStyle(child.parentElement).getPropertyValue(key)) {
            continue;
          }
          styleValue = styleValue.trim().replace(/^["']/g, "").replace(/["']$/, "").trim();
          let command = _jodastyle_commands__WEBPACK_IMPORTED_MODULE_0__.jodaStyleCommands[key];
          child = yield command(styleValue, node, child, this.logger);
        }
      }
    });
  }
}


/***/ }),

/***/ "./workspaces/jodastyle/src/types/DefaultLayout.ts":
/*!*********************************************************!*\
  !*** ./workspaces/jodastyle/src/types/DefaultLayout.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLayout: () => (/* binding */ DefaultLayout)
/* harmony export */ });
class DefaultLayout {
  constructor() {
    this.container = "container";
    this.break1 = "xl";
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/index.ts":
/*!****************************************!*\
  !*** ./workspaces/kasi-embed/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.Debouncer),
/* harmony export */   KaCustomElement: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomElement),
/* harmony export */   KaCustomFragment: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomFragment),
/* harmony export */   KaCustomModal: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomModal),
/* harmony export */   KaCustomWrapper: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaCustomWrapper),
/* harmony export */   KaHtmlElement: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaHtmlElement),
/* harmony export */   KaModal: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaModal),
/* harmony export */   KaTemplate: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaTemplate),
/* harmony export */   KaUse: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.KaUse),
/* harmony export */   createScopeObject: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.createScopeObject),
/* harmony export */   customElement: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   isUndefined: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   isset: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.isset),
/* harmony export */   ka_await_element: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_await_element),
/* harmony export */   ka_create_element: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_create_element),
/* harmony export */   ka_debounce: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_debounce),
/* harmony export */   ka_dom_ready: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_dom_ready),
/* harmony export */   ka_eval: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_eval),
/* harmony export */   ka_html: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_html),
/* harmony export */   ka_query_selector: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_query_selector),
/* harmony export */   ka_session_storage: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_session_storage),
/* harmony export */   ka_set_options: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_set_options),
/* harmony export */   ka_sleep: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_sleep),
/* harmony export */   ka_templatify: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.ka_templatify),
/* harmony export */   template: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_0__.template)
/* harmony export */ });
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./workspaces/kasi-embed/src/index.ts");



/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/html.ts":
/*!**********************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/html.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_html: () => (/* binding */ ka_html)
/* harmony export */ });
function ka_html(htmlContent) {
  let e = document.createElement("template");
  e.innerHTML = htmlContent;
  return e;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/htmlFile.ts":
/*!**************************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/htmlFile.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteTemplate: () => (/* binding */ RemoteTemplate)
/* harmony export */ });
/* harmony import */ var _loadHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHtml */ "./workspaces/kasi-embed/src/ce/loadHtml.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

class RemoteTemplate {
  constructor(url) {
    this.url = url;
    this.tpl = null;
  }
  /**
   *
   * @return {Promise<HTMLTemplateElement>}
   */
  load() {
    return __async(this, null, function* () {
      if (this.tpl === null)
        this.tpl = yield (0,_loadHtml__WEBPACK_IMPORTED_MODULE_0__.ka_load_html)(this.url);
      return this.tpl;
    });
  }
}
function htmlUrl(url) {
  return new RemoteTemplate(url);
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/loadHtml.ts":
/*!**************************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/loadHtml.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_load_html: () => (/* binding */ ka_load_html)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_load_html(url) {
  return __async(this, null, function* () {
    let e = document.createElement("template");
    let result = yield fetch(url);
    if (!result.ok) {
      console.error(`[loadHtml] failed to load '${url}'`);
      throw `[loadHtml] failed to load '${url}'`;
    }
    let body = yield result.text();
    e.innerHTML = body;
    return e;
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/create-element.ts":
/*!**********************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/create-element.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_create_element: () => (/* binding */ ka_create_element)
/* harmony export */ });
function ka_create_element(tagName, attributes = null, children = null, appendToElement = null) {
  let e = document.createElement(tagName);
  if (attributes === null)
    attributes = {};
  for (let attName in attributes) {
    e.setAttribute(attName, attributes[attName]);
  }
  if (children instanceof NodeList) {
    children = Array.from(children);
  }
  if (Array.isArray(children)) {
    for (let ce of children) {
      e.appendChild(ce);
    }
  }
  if (typeof children === "string") {
    e.innerText = children;
  }
  if (appendToElement !== null) {
    appendToElement.appendChild(e);
  }
  return e;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/debounce.ts":
/*!****************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/debounce.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_debounce: () => (/* binding */ ka_debounce)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const _debounceInterval = { i: null, time: null };
function ka_debounce(min, max = null) {
  return __async(this, null, function* () {
    if (max === null)
      max = min;
    let dbi = _debounceInterval;
    return new Promise((resolve) => {
      if (dbi.time < +new Date() - max && dbi.i !== null) {
        return resolve();
      }
      if (dbi.i !== null) {
        return;
      }
      dbi.time = +new Date();
      dbi.i = window.setTimeout(() => {
        dbi.i = null;
        return resolve();
      }, min);
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/debouncer.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/debouncer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* binding */ Debouncer)
/* harmony export */ });
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _resolve, _interval, _time;
class Debouncer {
  constructor(min = 100, max = null) {
    this.min = min;
    this.max = max;
    __privateAdd(this, _resolve, []);
    __privateAdd(this, _interval, null);
    __privateAdd(this, _time, null);
  }
  debounce() {
    return __async(this, arguments, function* (min = this.min, max = this.max) {
      if (max === null)
        max = min;
      if (__privateGet(this, _interval) !== null) {
        window.clearInterval(__privateGet(this, _interval));
      }
      __privateSet(this, _interval, window.setInterval(() => {
        __privateGet(this, _resolve).forEach((r) => r());
        __privateSet(this, _resolve, []);
        window.clearInterval(__privateGet(this, _interval));
      }, min));
      return new Promise((resolve) => {
        __privateGet(this, _resolve).push(resolve);
      });
    });
  }
}
_resolve = new WeakMap();
_interval = new WeakMap();
_time = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/dom-ready.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/dom-ready.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_dom_ready: () => (/* binding */ ka_dom_ready)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_dom_ready() {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      if (document.readyState === "complete" || document.readyState === "interactive")
        return resolve("loaded");
      document.addEventListener("DOMContentLoaded", () => resolve("DOMContentLoaded"));
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/ka-set-options.ts":
/*!**********************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/ka-set-options.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_set_options: () => (/* binding */ ka_set_options)
/* harmony export */ });
function ka_set_options(element, options, value = null) {
  element.innerHTML = "";
  for (let option in options) {
    if (isNaN(option)) {
      element.appendChild(new Option(options[option], option));
    } else {
      if (typeof options[option].text !== "undefined") {
        element.appendChild(new Option(options[option].text, options[option].value));
      } else {
        element.appendChild(new Option(options[option], options[option]));
      }
    }
  }
  if (value !== null)
    element.value = value;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/query-select.ts":
/*!********************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/query-select.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_query_selector: () => (/* binding */ ka_query_selector)
/* harmony export */ });
function ka_query_selector(query, parent = null, exception = null) {
  if (typeof exception === "undefined")
    exception = `querySelector '${query}' not found`;
  if (typeof parent === "undefined" || parent === null)
    parent = document;
  let e = parent.querySelectorAll(query);
  if (e.length === 0) {
    console.warn(exception, "on parent: ", parent);
    throw exception;
  }
  return e[0];
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/sleep.ts":
/*!*************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/sleep.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_sleep: () => (/* binding */ ka_sleep)
/* harmony export */ });
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function ka_sleep(sleepms) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        return resolve();
      }, sleepms);
    });
  });
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/storage.ts":
/*!***************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/storage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_session_storage: () => (/* binding */ ka_session_storage)
/* harmony export */ });
function ka_session_storage(object, scopeName = null) {
  if (scopeName == null) {
    scopeName = "ka_session_storage";
  }
  if (object === null) {
    sessionStorage.removeItem(scopeName);
    return;
  }
  if (sessionStorage.getItem(scopeName) == null) {
    sessionStorage.setItem(scopeName, JSON.stringify(object));
  }
  let savedObject = JSON.parse(sessionStorage.getItem(scopeName));
  for (let key in object) {
    if (typeof savedObject[key] === "undefined") {
      savedObject[key] = object[key];
    }
  }
  let proxy = new Proxy(savedObject, {
    set: function(target, property, value, receiver) {
      target[property] = value;
      sessionStorage.setItem(scopeName, JSON.stringify(target));
      return true;
    }
  });
  return proxy;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomElement.ts":
/*!**************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomElement.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





class KaCustomElement extends HTMLElement {
  constructor() {
    super(...arguments);
    this.__html = "<div>No template defined</div>";
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.tplPrototype = null;
    this.wrapper = null;
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]))
      this.__html = this.constructor["html"];
    if (this.tplPrototype === null) {
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.__html));
    }
    this.scope.init(scope);
    return this.scope;
  }
  wrap(fragment) {
    this.wrapper = fragment;
  }
  setParentScope(scope) {
    this.scope.$parent = scope;
  }
  connectedCallback() {
    return __async(this, null, function* () {
      this.setAttribute("ka.stop", "true");
      if (!this.scope.isInitialized())
        this.init({});
      this.tpl = this.tplPrototype.cloneNode(true);
      if (this.wrapper !== null) {
        this.append(this.wrapper.wrapTemplate(this.tpl));
        yield this.wrapper.fragmentConnectedCallback();
      } else {
        this.append(this.tpl);
      }
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
    });
  }
  disconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts":
/*!***************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomFragment.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomFragment: () => (/* binding */ KaCustomFragment)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






class KaCustomFragment {
  constructor() {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.html = null;
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]) && this.html === null)
      this.html = this.constructor["html"];
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
    this.scope.init(scope);
    return this.scope;
  }
  setParentScope(scope) {
    this.scope.$parent = scope;
  }
  setScope(scope) {
    this.scope.importFrom(scope);
  }
  fragmentConnectedCallback(parentElement) {
    return __async(this, null, function* () {
      parentElement.setAttribute("ka.stop", "true");
      if (!this.scope.isInitialized()) {
        this.init({});
      }
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
      parentElement.append(this.tpl);
      yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_5__.ka_sleep)(1);
      this.scope.render();
    });
  }
  fragmentDisconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomModal.ts":
/*!************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomModal.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomModal: () => (/* binding */ KaCustomModal)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _main, _configDefaults, _promise;






class KaCustomModal {
  constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.__html = "<div>No Template defined</div>";
    __privateAdd(this, _main, void 0);
    __privateAdd(this, _configDefaults, {
      parentElement: document.body,
      zIndex: 9999,
      styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
      styleBackdrop: "background-color: #999;opacity:0.5;",
      maxWidth: 800
    });
    __privateAdd(this, _promise, {
      promise: null,
      reject: null,
      resolve: null
    });
    let config = __privateGet(this, _configDefaults);
    config = __spreadValues(__spreadValues({}, config), modalConfig);
    this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
    this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
    let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
    __privateSet(this, _main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master));
    this.adjustWidth(config);
    __privateGet(this, _promise).promise = new Promise((resolve, reject) => {
      __privateGet(this, _promise).resolve = resolve;
      __privateGet(this, _promise).reject = reject;
    });
  }
  adjustWidth(modalConfig) {
    let w = window.innerWidth;
    if (w > modalConfig.maxWidth)
      w = modalConfig.maxWidth;
    __privateGet(this, _main).style.width = w + "px";
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]))
      this.__html = this.constructor["html"];
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.__html));
    this.scope.init(scope);
    return this.scope;
  }
  setParentScope(scope) {
    this.scope.$parent = scope;
  }
  setScope(scope) {
    this.scope.importFrom(scope);
  }
  resolve(value) {
    this.element.remove();
    __privateGet(this, _promise).resolve(value);
  }
  show(...params) {
    return __async(this, null, function* () {
      if (!this.scope.isInitialized()) {
        this.init({});
      }
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_5__.KaTemplate(this.tpl);
      __privateGet(this, _main).append(this.tpl);
      this.element.removeAttribute("hidden");
      this.scope.render();
      return __privateGet(this, _promise).promise;
    });
  }
  fragmentDisconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}
_main = new WeakMap();
_configDefaults = new WeakMap();
_promise = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaCustomWrapper.ts":
/*!**************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaCustomWrapper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomWrapper: () => (/* binding */ KaCustomWrapper)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};







class KaCustomWrapper {
  constructor() {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_0__.createScopeObject)();
    this.html = null;
  }
  init(scope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.constructor["html"]) && this.html === null)
      this.html = this.constructor["html"];
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isset)(this.tplPrototype))
      this.tplPrototype = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_2__.ka_templatify)((0,_ce_html__WEBPACK_IMPORTED_MODULE_3__.ka_html)(this.html));
    this.scope.init(scope);
    return this.scope;
  }
  wrapTemplate(tpl) {
    let wrapelem = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_6__.ka_create_element)("div");
    wrapelem.setAttribute("ka.stop", "true");
    this.scope.$content = tpl;
    this.returnedTpl = wrapelem;
    return wrapelem;
  }
  fragmentConnectedCallback() {
    return __async(this, null, function* () {
      if (!this.scope.isInitialized()) {
        this.init({});
      }
      this.tpl = this.tplPrototype.cloneNode(true);
      this.scope.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_4__.KaTemplate(this.tpl);
      this.returnedTpl.append(this.tpl);
      yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_5__.ka_sleep)(1);
      this.scope.render();
    });
  }
  fragmentDisconnectedCallback() {
    this.scope.$tpl.dispose();
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaHtmlElement.ts":
/*!************************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaHtmlElement.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaHtmlElement: () => (/* binding */ KaHtmlElement)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




class KaHtmlElement extends HTMLElement {
  constructor(shadowRootInit = null) {
    super();
    this.shadowRootInit = shadowRootInit;
    this.addEventListener("load", (e) => console.log(e));
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let htmlTpl = null;
      if (typeof this.html === "function") {
        let fn = this.html;
        htmlTpl = yield fn(this);
      } else {
        htmlTpl = this.html;
      }
      if (typeof htmlTpl === "string")
        htmlTpl = (0,_ce_html__WEBPACK_IMPORTED_MODULE_2__.ka_html)(htmlTpl);
      let attachTo = this;
      if (this.shadowRootInit !== null) {
        attachTo = this.attachShadow(this.shadowRootInit);
      }
      if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isset)(htmlTpl)) {
        let tpl;
        try {
          tpl = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_1__.ka_templatify)(htmlTpl);
        } catch (e) {
          console.error("Templatify failed on element", this, "for template", htmlTpl);
          throw e;
        }
        this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(tpl);
        attachTo.appendChild(tpl);
      }
      this.connected();
    });
  }
  disconnectedCallback() {
    return __async(this, null, function* () {
      this.$tpl.dispose();
      this.disconnected();
    });
  }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/KaModal.ts":
/*!******************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/KaModal.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaModal: () => (/* binding */ KaModal)
/* harmony export */ });
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./workspaces/kasi-embed/src/types.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _main, _configDefaults, _promise;





class KaModal {
  constructor(tagName = "ka-modal", shadowRootInit = null, modalConfig = {}) {
    this.scope = (0,_types__WEBPACK_IMPORTED_MODULE_4__.createScopeObject)();
    __privateAdd(this, _main, void 0);
    this.$tpl = null;
    __privateAdd(this, _configDefaults, {
      parentElement: document.body,
      zIndex: 9999,
      styleBase: "position:fixed; top:0; bottom:0; left:0; right:0;",
      styleBackdrop: "background-color: #999;opacity:0.5;",
      maxWidth: 800
    });
    __privateAdd(this, _promise, {
      promise: null,
      reject: null,
      resolve: null
    });
    let config = __privateGet(this, _configDefaults);
    config = __spreadValues(__spreadValues({}, config), modalConfig);
    this.element = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)(tagName, { hidden: "hidden" }, null, config.parentElement);
    this.backdrop = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `${config.styleBase};${config.styleBackdrop};z-index:${config.zIndex};` }, null, this.element);
    let master = (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;z-index:${config.zIndex + 1};` }, null, this.element);
    __privateSet(this, _main, (0,_core_create_element__WEBPACK_IMPORTED_MODULE_1__.ka_create_element)("div", { style: `;max-height:100%;max-width:100%;` }, null, master));
    this.adjustWidth(config);
    __privateGet(this, _promise).promise = new Promise((resolve, reject) => {
      __privateGet(this, _promise).resolve = resolve;
      __privateGet(this, _promise).reject = reject;
    });
  }
  adjustWidth(modalConfig) {
    let w = window.innerWidth;
    if (w > modalConfig.maxWidth)
      w = modalConfig.maxWidth;
    __privateGet(this, _main).style.width = w + "px";
  }
  render(scope = null) {
    if (this.$tpl === null) {
      let html = this.html;
      if (typeof html === "string") {
        html = (0,_ce_html__WEBPACK_IMPORTED_MODULE_2__.ka_html)(html);
      }
      if (!(html instanceof HTMLTemplateElement)) {
        console.error("html is not HtmlTemplateElement", html, "on", this);
        throw "html is not HtmlTemplateElement";
      }
      console.log("html", html);
      let elem;
      try {
        elem = (0,_tpl_templatify__WEBPACK_IMPORTED_MODULE_3__.ka_templatify)(html);
      } catch (e) {
        console.log("error templatify for element", this, ":", e);
        throw e;
      }
      __privateGet(this, _main).appendChild(elem);
      this.$tpl = new _tpl_template__WEBPACK_IMPORTED_MODULE_0__.KaTemplate(elem);
    }
    this.$tpl.render(scope);
  }
  resolve(value) {
    this.element.remove();
    __privateGet(this, _promise).resolve(value);
  }
  show(...params) {
    this.element.removeAttribute("hidden");
    return __privateGet(this, _promise).promise;
  }
}
_main = new WeakMap();
_configDefaults = new WeakMap();
_promise = new WeakMap();


/***/ }),

/***/ "./workspaces/kasi-embed/src/element/ka-use.ts":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/element/ka-use.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaUse: () => (/* binding */ KaUse)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KaCustomFragment */ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


let KaUse = class extends HTMLElement {
  get component() {
    return this.myComponent;
  }
  set component(val) {
    this.myComponent = val;
    this.innerHTML = "";
    this.append(val);
  }
  /**
   * called from ka.use="" by apply()
   *
   * @param val
   */
  use(val, parentScope) {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(val["setParentScope"]))
      val["setParentScope"](parentScope);
    this.myComponent = val;
    this.innerHTML = "";
    if (!this.hasAttribute("ka.scope"))
      val["setScope"](parentScope);
    if (val instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
      val.fragmentConnectedCallback(this);
      return;
    }
    this.append(val);
  }
  /**
   * set dedicated scope using ka.scope
   *
   * @param scope
   */
  setScope(scope) {
    if (this.myComponent instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
      this.myComponent.setScope(scope);
    }
  }
  disconnectedCallback() {
  }
  connectedCallback() {
    this.style.display = "contents";
    this.setAttribute("ka.stop", "true");
    if (this.myComponent instanceof _KaCustomFragment__WEBPACK_IMPORTED_MODULE_1__.KaCustomFragment) {
      this.myComponent.fragmentConnectedCallback(this);
    }
  }
};
KaUse = __decorateClass([
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.customElement)("ka-use")
], KaUse);


/***/ }),

/***/ "./workspaces/kasi-embed/src/functions.ts":
/*!************************************************!*\
  !*** ./workspaces/kasi-embed/src/functions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   isset: () => (/* binding */ isset),
/* harmony export */   ka_await_element: () => (/* binding */ ka_await_element),
/* harmony export */   template: () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

function isset(input) {
  return typeof input !== "undefined" && input !== null;
}
function isUndefined(input) {
  return typeof input === "undefined";
}
function customElement(tagName, template2 = null) {
  return function(classOrDescriptor) {
    if (template2 !== null) {
      classOrDescriptor.html = template2;
    }
    console.debug("registering custom element", classOrDescriptor, tagName);
    customElements.define(tagName, classOrDescriptor);
    return classOrDescriptor;
  };
}
function ka_await_element(_0) {
  return __async(this, arguments, function* (selector, parent = document, maxWait = 2e3) {
    let elem = parent.querySelector(selector);
    let rounds = 1;
    while (elem === null && maxWait > 0) {
      let delay = 20 * rounds++;
      yield (0,_core_sleep__WEBPACK_IMPORTED_MODULE_0__.ka_sleep)(delay);
      elem = parent.querySelector(selector);
      maxWait -= delay;
    }
    return elem;
  });
}
function template(template2) {
  return function(classOrDescriptor) {
    classOrDescriptor.html = template2;
    return classOrDescriptor;
  };
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/index.ts":
/*!********************************************!*\
  !*** ./workspaces/kasi-embed/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* reexport safe */ _core_debouncer__WEBPACK_IMPORTED_MODULE_19__.Debouncer),
/* harmony export */   KaCustomElement: () => (/* reexport safe */ _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__.KaCustomElement),
/* harmony export */   KaCustomFragment: () => (/* reexport safe */ _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__.KaCustomFragment),
/* harmony export */   KaCustomModal: () => (/* reexport safe */ _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__.KaCustomModal),
/* harmony export */   KaCustomWrapper: () => (/* reexport safe */ _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__.KaCustomWrapper),
/* harmony export */   KaHtmlElement: () => (/* reexport safe */ _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__.KaHtmlElement),
/* harmony export */   KaModal: () => (/* reexport safe */ _element_KaModal__WEBPACK_IMPORTED_MODULE_13__.KaModal),
/* harmony export */   KaTemplate: () => (/* reexport safe */ _tpl_template__WEBPACK_IMPORTED_MODULE_12__.KaTemplate),
/* harmony export */   KaUse: () => (/* reexport safe */ _element_ka_use__WEBPACK_IMPORTED_MODULE_14__.KaUse),
/* harmony export */   createScopeObject: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.createScopeObject),
/* harmony export */   customElement: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   isUndefined: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isUndefined),
/* harmony export */   isset: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.isset),
/* harmony export */   ka_await_element: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.ka_await_element),
/* harmony export */   ka_create_element: () => (/* reexport safe */ _core_create_element__WEBPACK_IMPORTED_MODULE_4__.ka_create_element),
/* harmony export */   ka_debounce: () => (/* reexport safe */ _core_debounce__WEBPACK_IMPORTED_MODULE_3__.ka_debounce),
/* harmony export */   ka_dom_ready: () => (/* reexport safe */ _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__.ka_dom_ready),
/* harmony export */   ka_eval: () => (/* reexport safe */ _core_eval__WEBPACK_IMPORTED_MODULE_16__.ka_eval),
/* harmony export */   ka_html: () => (/* reexport safe */ _ce_html__WEBPACK_IMPORTED_MODULE_17__.ka_html),
/* harmony export */   ka_query_selector: () => (/* reexport safe */ _core_query_select__WEBPACK_IMPORTED_MODULE_15__.ka_query_selector),
/* harmony export */   ka_session_storage: () => (/* reexport safe */ _core_storage__WEBPACK_IMPORTED_MODULE_20__.ka_session_storage),
/* harmony export */   ka_set_options: () => (/* reexport safe */ _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__.ka_set_options),
/* harmony export */   ka_sleep: () => (/* reexport safe */ _core_sleep__WEBPACK_IMPORTED_MODULE_2__.ka_sleep),
/* harmony export */   ka_templatify: () => (/* reexport safe */ _tpl_templatify__WEBPACK_IMPORTED_MODULE_18__.ka_templatify),
/* harmony export */   template: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_0__.template)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./workspaces/kasi-embed/src/types.ts");
/* harmony import */ var _core_sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/sleep */ "./workspaces/kasi-embed/src/core/sleep.ts");
/* harmony import */ var _core_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/debounce */ "./workspaces/kasi-embed/src/core/debounce.ts");
/* harmony import */ var _core_create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/create-element */ "./workspaces/kasi-embed/src/core/create-element.ts");
/* harmony import */ var _core_ka_set_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/ka-set-options */ "./workspaces/kasi-embed/src/core/ka-set-options.ts");
/* harmony import */ var _core_dom_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/dom-ready */ "./workspaces/kasi-embed/src/core/dom-ready.ts");
/* harmony import */ var _element_KaHtmlElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element/KaHtmlElement */ "./workspaces/kasi-embed/src/element/KaHtmlElement.ts");
/* harmony import */ var _element_KaCustomElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element/KaCustomElement */ "./workspaces/kasi-embed/src/element/KaCustomElement.ts");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./element/KaCustomFragment */ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts");
/* harmony import */ var _element_KaCustomWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./element/KaCustomWrapper */ "./workspaces/kasi-embed/src/element/KaCustomWrapper.ts");
/* harmony import */ var _element_KaCustomModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./element/KaCustomModal */ "./workspaces/kasi-embed/src/element/KaCustomModal.ts");
/* harmony import */ var _tpl_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tpl/template */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _element_KaModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element/KaModal */ "./workspaces/kasi-embed/src/element/KaModal.ts");
/* harmony import */ var _element_ka_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./element/ka-use */ "./workspaces/kasi-embed/src/element/ka-use.ts");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/query-select */ "./workspaces/kasi-embed/src/core/query-select.ts");
/* harmony import */ var _core_eval__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/eval */ "./workspaces/kasi-embed/src/core/eval.js");
/* harmony import */ var _ce_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ce/html */ "./workspaces/kasi-embed/src/ce/html.ts");
/* harmony import */ var _tpl_templatify__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tpl/templatify */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _core_debouncer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/debouncer */ "./workspaces/kasi-embed/src/core/debouncer.ts");
/* harmony import */ var _core_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/storage */ "./workspaces/kasi-embed/src/core/storage.ts");























/***/ }),

/***/ "./workspaces/kasi-embed/src/types.ts":
/*!********************************************!*\
  !*** ./workspaces/kasi-embed/src/types.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScopeObject: () => (/* binding */ createScopeObject)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kasimirjs/embed */ "./workspaces/kasi-embed/index.ts");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


class KaDefaultScope {
  constructor() {
    this.__isInitialized = false;
  }
  isInitialized() {
    return this.__isInitialized;
  }
  render() {
    return __async(this, null, function* () {
      this.$tpl.render(this);
    });
  }
  raw() {
    return this.$__scope_orig;
  }
  importFrom(scope) {
    for (let key of Object.keys(scope)) {
      if (key.startsWith("$") || key.startsWith("__"))
        continue;
      this["$__scope_orig"][key] = scope[key];
    }
  }
  dump() {
    return __spreadValues({}, this);
  }
  init(scopeDef) {
    if (this.isInitialized())
      throw "Scope is already initalized";
    this.__isInitialized = true;
    for (let key of Object.keys(scopeDef)) {
      this[key] = scopeDef[key];
    }
  }
}
function createScopeObject(init = null) {
  let scopeDef = new KaDefaultScope();
  scopeDef["$__scope_orig"] = scopeDef;
  let proxy = new Proxy(scopeDef, {
    get(target, prop, receiver) {
      if (prop.startsWith("$"))
        return target[prop];
      return target[prop];
    },
    set(target, p, value, receiver) {
      if (target[p] === value)
        return true;
      target[p] = value;
      let debouncer = new _kasimirjs_embed__WEBPACK_IMPORTED_MODULE_1__.Debouncer(50, 50);
      if (p.startsWith("$") || p.startsWith("__"))
        return true;
      if ((0,_functions__WEBPACK_IMPORTED_MODULE_0__.isset)(scopeDef.$tpl))
        scopeDef.$tpl.render();
      (() => __async(this, null, function* () {
        yield debouncer.debounce();
      }))();
      return true;
    }
  });
  if (init !== null)
    scopeDef.init(init);
  return proxy;
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/ce/custom-element.js":
/*!********************************************************!*\
  !*** ./workspaces/kasi-embed/src/ce/custom-element.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaCustomElement: () => (/* binding */ KaCustomElement)
/* harmony export */ });
/* harmony import */ var _tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tpl/templatify.js */ "./workspaces/kasi-embed/src/tpl/templatify.js");
/* harmony import */ var _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl/template.js */ "./workspaces/kasi-embed/src/tpl/template.js");
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/query-select */ "./workspaces/kasi-embed/src/core/query-select.ts");
/* harmony import */ var _htmlFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlFile */ "./workspaces/kasi-embed/src/ce/htmlFile.ts");





class KaCustomElement extends HTMLElement {

    constructor(props) {
        super(props);

        /**
         *
         * @protected
         * @var {KaTemplate}
         */
        this.__tpl = null;

        this.__isConnected = false;
    }

    /**
     * The Template associated with this Element
     *
     * @return {KaTemplate}
     */
    get $tpl () {
        return this.__tpl
    }

    isConnected() {
        return this.isConnected;
    }

    /**
     * @abstract
     * @return {Promise<void>}
     */
    async connected($tpl, $this) {
        console.warn("connected() method not overridden in", this);
    }

    async connectedCallback() {
        let callback = this.constructor.__callback;
        if (callback === null) {
        } else {
            callback.bind(this);
        }

        if (this.constructor.__tpl !== null) {
            let origTpl = this.constructor.__tpl;
            if (origTpl instanceof _htmlFile__WEBPACK_IMPORTED_MODULE_3__.RemoteTemplate)
                origTpl = await origTpl.load();

            let tpl = (0,_tpl_templatify_js__WEBPACK_IMPORTED_MODULE_0__.ka_templatify)(origTpl);

            if (this.constructor.__options.shadowDom === true) {
                let shadowDom = this.attachShadow(this.constructor.__options.shadowDomOptions);
                shadowDom.appendChild(tpl);
            } else {
                this.appendChild(tpl);
            }

            this.__tpl = new _tpl_template_js__WEBPACK_IMPORTED_MODULE_1__.KaTemplate(tpl);
        }

        if (this.constructor.__options.waitEvent !== null) {
            let wd = this.constructor.__options.waitEvent.split("@");
            let eventName = wd[0];
            let target = document;
            if (wd.length === 2) {
                target = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_2__.ka_query_selector)(wd[1]);
            }
            target.addEventListener(eventName, async (event) => {
                callback(this.$tpl, this);
                this.__isConnected = true;
            })
            return;
        }

        if (callback === null) {
            // Class: Call connected() Method
            await this.connected(this.$tpl, this);
            this.__isConnected = true;
            return
        }

        // Function
        callback(this.$tpl, this);
        this.__isConnected = true;
    }

};


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/apply.js":
/*!*************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/apply.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_apply: () => (/* binding */ ka_apply)
/* harmony export */ });
/* harmony import */ var _eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eval.js */ "./workspaces/kasi-embed/src/core/eval.js");
/* harmony import */ var _str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./str-to-camelcase.js */ "./workspaces/kasi-embed/src/core/str-to-camelcase.js");
/* harmony import */ var _element_ka_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element/ka-use */ "./workspaces/kasi-embed/src/element/ka-use.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ "./workspaces/kasi-embed/src/functions.ts");
/* harmony import */ var _element_KaCustomFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/KaCustomFragment */ "./workspaces/kasi-embed/src/element/KaCustomFragment.ts");







function ka_apply (selector, scope, recursive=false) {
    if (typeof selector === "string")
        selector = KaToolsV1.querySelector(selector);

    let attMap = {
        "textcontent": "textContent",
        "htmlcontent": "innerHTML",
        "innerhtml": "innerHTML",
    }

    for(let attName of selector.getAttributeNames()) {
        //console.log(attName);
        if ( ! attName.startsWith("ka.")) {
            continue;
        }

        let attVal = selector.getAttribute(attName);

        let attType = attName.split(".")[1];
        let attSelector = attName.split(".")[2];
        if (typeof attSelector === "undefined")
            attSelector = null;


        let registerEventHandler = function(element, action, callbackOrCode, scope) {
            if (typeof element._ka_on === "undefined")
                element._ka_on = {};

            if (typeof element._ka_on[action] === "undefined")
                element.addEventListener(action, (e) => element._ka_on[action](e));

            element._ka_on[action] = async(e) => {
                scope["$event"] = e;
                if (typeof callbackOrCode === "function") {
                    return callbackOrCode(e, element, scope);
                } else {
                    return (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(callbackOrCode, scope, element);
                }
            };
        }

        if (attType === "on") {
            let attScope = {$scope: scope, ...scope}
            if (attSelector !== null) {
                registerEventHandler(selector, attSelector, attVal, attScope);
            } else {
                let callBackMap = KaToolsV1.eval(attVal, attScope, selector);
                for(let curAction in callBackMap) {
                    registerEventHandler(selector, curAction, callBackMap[curAction], attScope);
                }

            }
            continue;
        }

        let r = null;
        if (typeof attVal !== "undefined" && typeof attVal !== null && attVal !== "")
            r = (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(attVal, scope, selector);

        switch (attType) {
            case "use":
                if ( ! (selector instanceof _element_ka_use__WEBPACK_IMPORTED_MODULE_2__.KaUse)) {
                    console.error("ka.use is only available on <ka-use/> Elements: Used on ", r, "found in ", selector);
                    throw "ka.use called on non <ka-use/> Element."
                }

                selector.use(r, scope)
                continue;

            case "become":
                if ( ! (r instanceof HTMLElement)) {
                    console.error("ka.become is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.become called on non HTMLElement."
                }
                let attributes = selector.attributes;

                selector.replaceWith(r);

                continue;

            case "content":
                if ( ! (r instanceof HTMLElement)) {
                    console.error("ka.content is only available on HTMLElements: Used on ", r, "found in ", selector);
                    throw "ka.content called on non HTMLElement."
                }
                selector.append(r);
                continue;

            case "scope":
                if ( ! (r instanceof Object)) {
                    console.error("ka.scope must be object type <ka-use/> Elements: Value is ", r, "found in ", selector);
                    throw "ka.scope insuffient value";
                }

                selector.setScope(r);
                continue;

            case "stop":
                continue;

            case "debug":
                console.log("ka.debug on element", selector, "value:", r, "scope:", scope);
                continue;

            case "ref":
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(scope.$ref))
                    scope.$ref = {};
                // Allow ref without parameter to use $ref.$last
                if (r !== null)
                    scope.$ref[r] = selector;
                scope.$ref.$last = selector;
                break;

            case "classlist":
                if (attSelector  !== null) {
                    if (r === true) {
                        selector.classList.add(attSelector)
                    } else {
                        selector.classList.remove(attSelector)
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] === true) {
                        selector.classList.add(cname);
                    } else {
                        selector.classList.remove(cname);
                    }
                }
                break;

            case "style":
                if (attSelector  !== null) {
                    let val = r;
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(attSelector) !== -1)
                        val = val + "px";
                    selector.style[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(attSelector)] = val;
                    break;
                }
                for (let cname in r) {
                    let val = r[cname];
                    if (typeof val === "number" && ["left", "top", "height", "width", "bottom", "right", "line-height", "font-size"].indexOf(cname) !== -1)
                        val = val + "px";
                    selector.style[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(cname)] = val;
                }
                break;

            case "bindarray":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(r)) {
                    // Bind default values
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = {$scope: scope, ...scope};
                        scope = {$scope: scope, ...scope, __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector)}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if ( ! Array.isArray(r)) {
                    console.error("kap:bindarr: Not an array!", r, selector);
                    return;
                }
                if (r.indexOf(selector.value) === -1)
                    selector.checked = false;
                else
                    selector.checked = true;

                if (typeof selector._kap_bind === "undefined") {
                    selector.addEventListener("change", (event) => {

                        let arr = (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(attVal, scope, selector);

                        if (arr.indexOf(selector.value) === -1 && selector.checked)
                            arr.push(selector.value);
                        if (arr.indexOf(selector.value) !== -1 && ! selector.checked)
                            arr = arr.filter((e) => e !== selector.value);
                        scope = {$scope: scope, ...scope, __curVal: arr};
                        (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    })
                    selector._kap_bind = true;
                }
                break;

            case "bind":
                if (attSelector === "default")
                    continue;
                if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(r)) {
                    // Bind default values
                    if ((0,_functions__WEBPACK_IMPORTED_MODULE_3__.isset) (selector.value)) {
                        scope = {$scope: scope,...scope, __curVal: selector.value}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                    if (selector.hasAttribute("ka.bind.default")) {
                        scope = {$scope: scope, ...scope};
                        scope = {$scope: scope, ...scope, __curVal: (0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(selector.getAttribute("ka.bind.default"), scope, selector)}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        r = scope.__curVal;
                    }
                }
                if (selector.type === "checkbox" || selector.type === "radio") {
                    if (selector.hasAttribute("value")) {
                        if (r === selector.getAttribute("value"))
                            selector.checked = true;
                        else
                            selector.checked = false;
                    } else {
                        if (r === true)
                            selector.checked = true;
                        else
                            selector.checked = false;
                    }
                } else {
                    selector.value = typeof r !== "undefined" ? r : "";
                }

                if (typeof selector._kap_bind === "undefined") {
                    selector.addEventListener("change", (event) => {

                        let value = null;
                        if (selector.type === "checkbox" || selector.type === "radio") {
                            if (selector.hasAttribute("value")) {
                                if (selector.checked === false)
                                    return;
                                value = selector.getAttribute("value");
                            } else {
                                value = selector.checked
                            }
                        } else {
                            value = selector.value
                        }
                        scope = {$scope: scope, ...scope, __curVal: value}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);
                    })
                    selector.addEventListener("keyup", (event) => {
                        scope = {$scope: scope,...scope, __curVal: selector.value}
                        ;(0,_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(`${attVal} = __curVal`, scope, selector);
                        if (scope.$on && scope.$on.change)
                            scope.$on.change(event);

                    })
                    selector._kap_bind = true;
                }
                break;

            case "options":
                let value = selector.value;
                selector.innerHTML = "";
                for (let option in r) {
                    if (! Array.isArray(r)) {
                        // Object key => value value => text
                        selector.appendChild(new Option(r[option], option));
                    } else {
                        // Array
                        if (typeof r[option].text !== "undefined") {
                            selector.appendChild(new Option(r[option].text, r[option].value));
                        } else {
                            // Array value and text will be array value
                            selector.appendChild(new Option(r[option], r[option]));
                        }
                    }
                }
                if (value !== null)
                    selector.value = value;
                break;

            case "attr":
                if (attSelector  !== null) {
                    if (r === null || r === false) {
                        selector.removeAttribute(attSelector)
                    } else {
                        selector.setAttribute(attSelector, r);
                    }
                    break;
                }
                for (let cname in r) {
                    if (r[cname] ===null || r[cname] === false) {
                        selector.removeAttribute(cname);
                    } else {
                        selector.setAttribute(cname, r[cname]);
                    }
                }
                break;

            case "prop":
                if (attSelector  !== null) {
                    // Set Property directly
                    selector[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(attSelector)] = r;
                    break;
                }
                for (let cname in r) {
                    selector[(0,_str_to_camelcase_js__WEBPACK_IMPORTED_MODULE_1__.ka_str_to_camel_case)(cname)] = r[cname];
                }
                break;

            default:
                if (typeof attMap[attType] !== "undefined")
                    attType = attMap[attType];
                if (typeof selector[attType] === "undefined") {
                    console.warn("apply(): trying to set undefined property ", attType, "on element", selector);
                }
                selector[attType] = r;
                break;
        }



    }
    if (recursive) {
        for (let e of selector.children) {
            ka_apply(e, scope, recursive);
        }
    }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/elwalk.js":
/*!**************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/elwalk.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_elwalk: () => (/* binding */ ka_elwalk)
/* harmony export */ });


/**
 *
 * @param {HTMLElement} elem
 * @param fn
 * @param recursive
 */
function ka_elwalk (elem, fn, recursive=false, includeFirst=false) {
    if (Array.isArray(elem))
        elem.children = elem;
    if (typeof elem.children === "undefined")
        return;
    if (includeFirst && elem instanceof HTMLElement) {
        let ret = fn(elem);
        if (ret === false)
            return false;
    }
    for(let child of elem.children) {
        let ret = fn(child);
        if (ret === false)
            continue; // No recursiion

        if (recursive && typeof child.children !== "undefined")
            ka_elwalk(child, fn, recursive);

    }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/eval.js":
/*!************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/eval.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_eval: () => (/* binding */ ka_eval)
/* harmony export */ });

function ka_eval (stmt, __scope, e, __refs) {
    if (stmt.endsWith(";"))
        stmt = stmt.slice(0, -1);

    const reserved = ["var", "null", "let", "const", "function", "class", "in", "of", "for", "true", "false", "await", "$this"];
    let r = "var $this = e;";
    for (let __name in __scope) {
        if (reserved.indexOf(__name) !== -1)
            continue;
        if (__name.indexOf("-") !== -1) {
            console.error(`Invalid scope key '${__name}': Cannot contain - in scope:`, __scope);
            throw `eval() failed: Invalid scope key: '${__name}': Cannot contain minus char '-'`;
        }
        r += `var ${__name} = __scope['${__name}'];`
    }
    // If the scope was cloned, the original will be in $scope. This is important when
    // Using events [on.click], e.g.
    if (typeof __scope.$scope === "undefined") {
        r += "var $scope = __scope;";
    }
    try {
        // console.log(r + '(' + stmt + ')');
        return eval(r  + '('+stmt+')')
    } catch (ex) {
        console.error("cannot eval() stmt: '" + stmt + "': " + ex, " on element ", e, ex, "(context:", __scope, ")");
        throw "eval('" + stmt + "') failed: " + ex;
    }
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/core/str-to-camelcase.js":
/*!************************************************************!*\
  !*** ./workspaces/kasi-embed/src/core/str-to-camelcase.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_str_to_camel_case: () => (/* binding */ ka_str_to_camel_case)
/* harmony export */ });


/**
 * Transform any input to CamelCase
 *
 * Example: some-class => someClass
 *
 * @param str {string}
 * @return {string}
 */
function ka_str_to_camel_case (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()).replace(/[^a-zA-Z0-9]+/g, '');
}


/***/ }),

/***/ "./workspaces/kasi-embed/src/tpl/template.js":
/*!***************************************************!*\
  !*** ./workspaces/kasi-embed/src/tpl/template.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KaTemplate: () => (/* binding */ KaTemplate)
/* harmony export */ });
/* harmony import */ var _core_eval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/eval.js */ "./workspaces/kasi-embed/src/core/eval.js");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./workspaces/kasi-embed/src/core/elwalk.js");
/* harmony import */ var _core_apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/apply.js */ "./workspaces/kasi-embed/src/core/apply.js");
/* harmony import */ var _ce_custom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ce/custom-element.js */ "./workspaces/kasi-embed/src/ce/custom-element.js");






class KaTemplate {

    constructor(template) {
        this.template = template;
        if (typeof this.template.__kachilds === "undefined")
            this.template.__kachilds = [];
        if (typeof this.template.__kasibling === "undefined")
            this.template.__kasibling = this.template.nextElementSibling;

        this.__renderCount = 0;
        this.$scope = {};
    }

    _error(msg) {
        console.error(`[ka-template] ${msg} on element`, this.template);
        throw `[ka-template] ${msg} on element` + this.template;
    }

    _appendTemplate() {
        let elements = this.template.content;

        let elList = [];
        for (let curE of elements.children) {
            curE = curE.cloneNode(true);
            curE._ka_maintained_by = this.template.getAttribute("_kaidx");
            elList.push(curE);
            this.template.parentNode.insertBefore(curE, this.template.__kasibling);
        }
        this.template.__kachilds.push(elList);
    }

    _removeLastChild() {
        if (this.template.__kachilds.length === 0)
            return;
        let childs = this.template.__kachilds[this.template.__kachilds.length - 1];
        for (let curE of childs) {
            this.template.parentElement.removeChild(curE);
        }
        this.template.__kachilds.length = this.template.__kachilds.length - 1;

    }

    _renderFor($scope, stmt) {
        //console.log("kachilds", this.template.__kachilds);
        let matches = stmt.match(/^(let)?\s*(?<target>.+)\s+(?<type>of|in|repeat)\s+(?<select>.+)$/);
        if (matches === null) {
            this._error(`Can't parse ka.for='${stmt}'`);
        }
        let selectVal = (0,_core_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(matches.groups.select, $scope, this.template);

        if (matches.groups.type === "repeat") {
            if (typeof selectVal !== "number")
                this._error(`Error ka.for='${stmt}': Selected val must be number in repeat loop`);
            selectVal = new Array(selectVal).fill(null);
        }

        let eIndex = 0;
        for (let index in selectVal) {
            let curScope = {$scope: $scope, ...$scope};
            curScope[matches.groups.target] = index;

            if (matches.groups.type === "of")
                curScope[matches.groups.target] = selectVal[index];

            if (this.template.__kachilds.length < eIndex + 1) {
                //console.log("append", eIndex, this.template.__kachilds.length);
                this._appendTemplate();
            }
            this._maintain(curScope, this.template.__kachilds[eIndex], eIndex);
            eIndex++;
        }
        for(let remIdx = eIndex; remIdx < this.template.__kachilds.length; ) {
            this._removeLastChild();
        }

    }

    _maintain($scope, childs, forIndex=0) {
        for (let child of childs) {
            child._ka_for_index = forIndex;
            (0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(child, (el) => {
                //console.log("walk", el);

                if (el instanceof HTMLTemplateElement) {
                    //console.log("maintain", el);
                    let r = new this.constructor(el);
                    r.render($scope);
                    return false;
                }

                if (typeof el._ka_maintained_by !== "undefined" && el._ka_maintained_by !== this.template.getAttribute("_kaidx")) {
                    return false;
                }

                (0,_core_apply_js__WEBPACK_IMPORTED_MODULE_2__.ka_apply)(el, $scope);
                if ((el instanceof HTMLElement && (el.hasAttribute("ka.stop" )) || el instanceof _ce_custom_element_js__WEBPACK_IMPORTED_MODULE_3__.KaCustomElement))
                    return false; // Skip Element rendering
            }, true, true);
        }
    }


    _renderIf($scope, stmt) {
         let selectVal = (0,_core_eval_js__WEBPACK_IMPORTED_MODULE_0__.ka_eval)(stmt, $scope, this.template);
        if (selectVal === true) {
            if (this.template.__kachilds.length === 0)
                this._appendTemplate();

            this._maintain($scope, this.template.__kachilds[0]);
        } else {
            this._removeLastChild();
        }
    }

    /**
     * Remove all rendered element
     */
    dispose() {
        for(;this.template.__kachilds.length > 0;)
            this._removeLastChild();
    }


    setScope($scope) {
        this.$scope = $scope;
    }

    /**
     * Render / Update the Template
     *
     * Once the scope in parameter 1 was set, it will render
     * without any parameters. Scope is available via property $scope
     *
     * @param $scope
     */
    render($scope = null) {
        if ($scope === null)
            $scope = this.$scope;
        this.$scope = $scope;
        this.__renderCount++;

        if (this.template.hasAttribute("ka.for")) {
            this._renderFor($scope, this.template.getAttribute("ka.for"));
        } else if (this.template.hasAttribute("ka.if")) {
            this._renderIf($scope, this.template.getAttribute("ka.if"));
        } else {
            if (typeof this.template._ka_active === "undefined") {
                this._appendTemplate();
                this.template._ka_active = true;
            }
            this._maintain($scope, this.template.__kachilds);
        }
    }

    /**
     * Return true if this template was renderd the first time
     *
     * @returns {boolean}
     */
    isFirstRender() {
        return this.__renderCount === 1;
    }

};


/***/ }),

/***/ "./workspaces/kasi-embed/src/tpl/templatify.js":
/*!*****************************************************!*\
  !*** ./workspaces/kasi-embed/src/tpl/templatify.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ka_templatify: () => (/* binding */ ka_templatify)
/* harmony export */ });
/* harmony import */ var _core_query_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/query-select */ "./workspaces/kasi-embed/src/core/query-select.ts");
/* harmony import */ var _core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/elwalk.js */ "./workspaces/kasi-embed/src/core/elwalk.js");



function quoteattr(s, preserveCR) {
    preserveCR = preserveCR ? '&#13;' : '\n';
    return ('' + s) /* Forces the conversion to string. */
        .replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
        .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        /*
        You may add other replacements here for HTML only
        (but it's not necessary).
        Or for XML, only if the named entities are defined in its DTD.
        */
        .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
        .replace(/[\r\n]/g, preserveCR);
    ;
}

window._ka_el_idx = 0;
/**
 * Generate a renderable Template from <template> Element
 *
 * @param {HTMLElement|string} elem
 * @return {HTMLTemplateElement}
 */
function ka_templatify (elem, returnMode=true) {
    if (typeof elem === "string")
        elem = (0,_core_query_select__WEBPACK_IMPORTED_MODULE_0__.ka_query_selector)(elem);

    if ( ! (elem instanceof Node)) {
        console.error("[ka-templatify] Parameter 1 is not a html element: ", elem)
        throw `[ka-templify] Parameter 1 is not a html element: ${elem}`;
    }

    if (returnMode) {
        let returnTpl = document.createElement("template");
        returnTpl.setAttribute("_kaidx", (window._ka_el_idx++).toString())
        /* @var {HTMLTemplateElement} returnTpl */
        returnTpl.innerHTML = elem.innerHTML
            .replace(/\[\[(.*?)\]\]/g, (matches, m1) => `<span ka.textContent="${quoteattr(m1)}"></span>`);

        ka_templatify(returnTpl.content, false);
        return returnTpl;
    }

    if (elem instanceof HTMLTemplateElement)
        elem = elem.content;

    let wrapElem = (el, attName, attVal) => {
        let tpl = document.createElement("template");
        tpl.setAttribute("_kaidx", (window._ka_el_idx++).toString())
        let clonedEl = el.cloneNode(true);
        clonedEl.removeAttribute(attName);
        tpl.content.append(clonedEl);
        tpl.setAttribute(attName, attVal);
        el.replaceWith(tpl);
        return tpl;
    }

    ;(0,_core_elwalk_js__WEBPACK_IMPORTED_MODULE_1__.ka_elwalk)(elem, (el) => {
        //console.log(el);
        if ( ! (el instanceof HTMLElement))
            return;
        let tpl = null;
        for (let attrName of el.getAttributeNames()) {
            if (attrName === "ka.for") {
                tpl = wrapElem(el, "ka.for", el.getAttribute("ka.for"));
                ka_templatify(tpl, false);
                break;
            }
            if (attrName === "ka.if") {
                tpl = wrapElem(el, "ka.if", el.getAttribute("ka.if"));
                ka_templatify(tpl, false);
                break;
            }
        }
    }, true, false);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src.dev/index-dev.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitcherElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitcherElement */ "./src.dev/SwitcherElement.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./index.ts");



})();

/******/ })()
;
//# sourceMappingURL=index.js.map