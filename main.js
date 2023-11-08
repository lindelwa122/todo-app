/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  height: 100%;
}

#root,
#root > * {
  min-height: 100vh;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,YAAY;AACd;;AAEA;;EAEE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  height: 100%;\n}\n\n#root,\n#root > * {\n  min-height: 100vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dom-wizard/index.js":
/*!******************************************!*\
  !*** ./node_modules/dom-wizard/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssManager: () => (/* reexport safe */ _modules_cssManager__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   domManager: () => (/* reexport safe */ _modules_domManager__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   router: () => (/* reexport safe */ _modules_router__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   store: () => (/* reexport safe */ _modules_store__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _modules_domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManager */ "./node_modules/dom-wizard/modules/domManager.js");
/* harmony import */ var _modules_cssManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cssManager */ "./node_modules/dom-wizard/modules/cssManager.js");
/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/router */ "./node_modules/dom-wizard/modules/router.js");
/* harmony import */ var _modules_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/store */ "./node_modules/dom-wizard/modules/store.js");





_modules_cssManager__WEBPACK_IMPORTED_MODULE_1__["default"].addRule({ body: 'transition: opacity .25s' });







/***/ }),

/***/ "./node_modules/dom-wizard/modules/cssManager.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-wizard/modules/cssManager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The cssManager module facilitates the creation and application of CSS styles to elements. It's important to note that this module isn't intended to replace traditional CSS, but rather to provide an API for efficiently adding CSS rules to elements using JavaScript when it's the most suitable approach.
 */
const cssManager = () => {
  const style = document.createElement('style');
  style.id = 'dml-style';
  document.head.appendChild(style);

  /**
   * Adds a CSS rule to the stylesheet.
   *
   * @param {Object} rule - An object with a selector as its key and a declaration as its value.
   *
   * @throws an error if rule is not an Object with key and value pairs
   *
   * @returns {number} The index of the added rule, which can be used to remove the rule.
   *
   * @example
   * const ruleIndex = cssManager.addRule({ 'body': 'background-color: red' });
   * // Use the index to remove the rule:
   * cssManager.removeRule(ruleIndex);
   */
  const addRule = (rule) => {
    if (!(rule !== null && typeof rule === 'object' && !Array.isArray(rule))) {
      throw new Error(
        'rule must be of type object with key and value pairs for the styles to be applied correctly',
      );
    }

    const stylesheet = document.querySelector('#dml-style').sheet;
    const [selector, declaration] = Object.entries(rule)[0];
    return stylesheet.insertRule(
      `${selector}{${declaration}}`,
      stylesheet.cssRules.length,
    );
  };

  /**
   * Removes a CSS rule from the stylesheet using the specified index.
   *
   * @param {number} index - The index of the rule to be removed.
   *
   * @throws an error if index is not a number
   *
   * @example
   * // Remove a CSS rule by its index
   * cssManager.removeRule(ruleIndex);
   */
  const removeRule = (index) => {
    if (typeof index !== 'number') {
      throw new Error(
        `index should be a number for a rule to be removed correctly. Currently index is of type of ${typeof index}`,
      );
    }

    const stylesheet = document.querySelector('#dml-style').sheet;
    stylesheet.deleteRule(index);
  };

  /**
   * Adds multiple CSS rules to the page.
   *
   * @param {Array<Object>} rules - An array containing CSS rules, where each rule is an object
   * with a selector as its key and a declaration as its value.
   *
   * @throws an error if rules is not an array
   * @throws an error if rules doesn't contain object(s) with key(s) and value(s)
   *
   * @example
   * // Add CSS rules for different screen sizes and background colors
   * cssManager.createCSSRules([
   *   {
   *     '@media screen and (min-width: 480px)': `
   *       body {
   *         background-color: blue;
   *       }
   *     `
   *   },
   *   {
   *     'body': `
   *       min-height: 100vh;
   *       background-color: red;
   *     `
   *   }
   * ]);
   */
  const createCSSRules = (rules) => {
    if (!Array.isArray(rules)) {
      throw new Error('rules must an Array object');
    }

    for (const rule of rules) {
      addRule(rule);
    }
  };

  return { addRule, createCSSRules, removeRule };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cssManager());


/***/ }),

/***/ "./node_modules/dom-wizard/modules/domManager.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-wizard/modules/domManager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./node_modules/dom-wizard/modules/router.js");


/**
 * The domManager module is responsible for creating, updating, reading, and deleting DOM elements.
 */
const domManager = () => {
  /**
   * Creates an HTML element based on the provided element information.
   *
   * This function creates an HTML element based on the information provided in the 'element' object.
   * The 'element' object should have a 'tagName' property specifying the type of HTML element to create.
   *
   * @param {Object} element - An object with information about the element to be created (property: 'tagName' is required).
   * @returns {HTMLElement} A newly created HTML element.
   */
  const _createElement = (element) => {
    if (!element.tagName) element.tagName = 'div';

    const el = document.createElement(element.tagName);

    if (element.link) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].configureLink(Object.assign({}, element.link, { element: el }));
    }

    // Use text seperately because it is commonly used
    if (element.text) {
      el.textContent = element.text;
    }

    if (!element.options) return el;

    for (const [prop, value] of Object.entries(element.options)) {
      el[prop] = prop === 'classList' ? value.join(' ') : value;
    }

    if (element.options.style) {
      for (const [prop, value] of Object.entries(element.options.style)) {
        el.style[prop] = value;
      }
    }

    return el;
  };

  let afterFuncs = [];

  /**
   * Creates a DOM tree based on the provided element information.
   *
   * This function recursively creates an HTML element and its children based on the
   * information provided in the 'element' object. The 'element' object should have a 'tagName' property
   * specifying the type of HTML element to create.
   *
   * @param {Object} element - An object with information about the element to be created (property: 'tagName' is required).
   * @returns {Element} A newly created HTML element and its children.
   * @throws Throws an error if 'element' is undefined.
   */
  const _createDOMTree = (element) => {
    if (!element) {
      throw new Error('Element parameter is undefined.');
    }

    const el = _createElement(element);

    if (element.before) {
      if (typeof element.before !== 'function') {
        throw new Error("'before' must be a function'");
      }

      element.before(el);
    }

    if (element.after) {
      if (typeof element.after !== 'function') {
        throw new Error("'after' must be a function'");
      }

      afterFuncs.push({ func: element.after, arg: el });
    }

    if (element.children) {
      element.children.forEach((child) => {
        const childEl = _createDOMTree(child);
        el.appendChild(childEl);
      });
    }

    return el;
  };

  /**
   * Creates a new HTML element and appends it to a specified parent element.
   *
   * @param {Object} element - An object with information about the element to be created (property: tagName is required).
   * @param {string} selector - Selector of the parent to append the newly created element into.
   * @param {boolean} append - Indicates whether to append the new element as a child or replace existing content.
   * @throws Throws an error if the parent element specified by the selector is not found in the document.
   * @returns {Element} The parent element with the new child element appended to it.
   */
  const create = (element, selector = '#root', append = false) => {
    const el = _createDOMTree(element);

    const parent = document.querySelector(selector);
    if (!parent) {
      throw Error(
        `Element ${selector} is not found. Please ensure ${selector} exists in your HTML.`,
      );
    }

    if (!append) {
      parent.innerHTML = '';
    }

    parent.appendChild(el);

    for (const afterFunc of afterFuncs) {
      afterFunc.func(afterFunc.arg);
    }

    afterFuncs = [];

    return parent;
  };

  /**
   * Retrieves information from the DOM based on the provided selector and property name.
   *
   * @param {string} selector - The CSS selector to query the DOM.
   * @param {string} propertyName - The property name to retrieve from the selected element(s).
   * @param {boolean} all - If true, retrieves the property from all matching elements; otherwise, retrieves from the first matching element.
   *
   * @throws Throws an error if retrieving the element was not possible or if the selector didn't match any elements.
   *
   * @returns {Array|string|undefined} If all is true and propertyName is provided, an array of property values from all matching elements; if propertyName is provided, the property value from the first matching element; otherwise, the DOM element(s) matching the selector.
   */
  const read = (selector, propertyName = undefined, all = false) => {
    const el = !all
      ? document.querySelector(selector)
      : document.querySelectorAll(selector);

    if (!el || el.length === 0) {
      throw new Error(
        'Retrieving of the element was not possible. Please check your selector.',
      );
    }

    if (all && propertyName) {
      const props = [];
      el.forEach((element) => {
        props.push(element[propertyName]);
      });
      return props;
    } else if (propertyName) {
      return el[propertyName];
    } else {
      return el;
    }
  };

  /**
   * Removes elements from the DOM based on the provided selector.
   *
   * @param {string} selector - The CSS selector to target elements for removal.
   * @param {boolean} all - If true, removes all matching elements; otherwise, removes the first matching element.
   *
   * @throws Throws an error if the selector doesn't match any elements or if removal fails.
   *
   * @returns {Array|HTMLElement} If all is true, an array of removed elements; otherwise, the removed element.
   */
  const remove = (selector, all = false) => {
    const el = !all
      ? document.querySelector(selector)
      : document.querySelectorAll(selector);

    if (!el || el.length === 0) {
      throw new Error(
        `${selector} is not found in the DOM. Ensure the spelling is correct.`,
      );
    }

    if (all) {
      el.forEach((x) => x.remove());
    } else {
      el.remove();
    }

    return el;
  };

  /**
   * Toggles a class in the classList of the provided element.
   *
   * @param {HTMLElement} element - The element to toggle the class on.
   * @param {Object} instr - An instruction object containing the class name in the 'className' property.
   *
   * @throws {Error} When 'className' is missing in the instruction object.
   */
  const _toggle = (element, instr) => {
    if (!instr.className) {
      throw new Error("The property 'className' is required for toggle.");
    }

    element.classList.toggle(instr.className);
  };

  /**
   * Replaces a specific attribute in the provided element.
   *
   * @param {HTMLElement} element - The element to replace the attribute in.
   * @param {Object} instr - An instruction object containing the attribute name in 'attribute', 'old' value, and 'new' value.
   *
   * @throws {Error} When 'attribute', 'old', or 'new' is missing in the instruction object.
   * @throws {Error} When the 'attribute' specified doesn't support replace.
   */
  const _replace = (element, instr) => {
    if (!instr.attribute) {
      throw new Error("The property 'attribute' is required for replace.");
    }

    if (!instr.old || !instr.new) {
      throw new Error(
        "The properties 'old' and 'new' are required for replace.",
      );
    }

    try {
      if (instr.attribute === 'classList') {
        element[instr.attribute].replace(instr.old, instr.new);
      } else {
        element[instr.attribute] = element[instr.attribute].replace(
          instr.old,
          instr.new,
        );
      }
    } catch (e) {
      throw new Error(
        `The attribute '${instr.attribute}' doesn't support replace.`,
      );
    }
  };

  /**
   * Replaces all occurrences of a specific value in the provided element.
   *
   * @param {HTMLElement} element - The element to perform the replacement on.
   * @param {Object} instr - An instruction object containing the attribute name in 'attribute', 'old' value, and 'new' value.
   *
   * @throws {Error} When 'attribute', 'old', or 'new' is missing in the instruction object.
   * @throws {Error} When the 'attribute' specified doesn't support replaceAll.
   */
  const _replaceAll = (element, instr) => {
    if (!instr.attribute) {
      throw new Error("The property 'attribute' is required for replaceAll.");
    }

    if (!instr.old || !instr.new) {
      throw new Error(
        "The properties 'old' and 'new' are required for replaceAll.",
      );
    }

    try {
      element[instr.attribute] = element[instr.attribute].replaceAll(
        instr.old,
        instr.new,
      );
    } catch (e) {
      throw new Error(
        `The attribute '${instr.attribute}' doesn't support replaceAll.`,
      );
    }
  };

  /**
   * Updates the element's properties and attributes based on the provided instruction.
   *
   * @param {HTMLElement} element - The element to be updated.
   * @param {Object} instr - An instruction object containing properties and values for updating.
   */
  const _update = (element, instr) => {
    if (instr.children) {
      for (const child of instr.children) {
        const el = _createDOMTree(child);
        element.appendChild(el);
      }
    }

    for (const [key, item] of Object.entries(instr)) {
      if (key !== 'selector' && key !== 'action' && key !== 'children') {
        element[key] = item;
      }
    }
  };

  /**
   * Adds a value to the specified attribute (e.g., class, dataset) in the provided element.
   *
   * @param {HTMLElement} element - The element to add the value to.
   * @param {Object} instr - An instruction object containing 'attribute' and 'value'.
   *
   * @throws {Error} When 'attribute' or 'value' is missing in the instruction object.
   * @throws {Error} When the 'attribute' specified doesn't support add.
   */
  const _add = (element, instr) => {
    if (!instr.attribute) {
      throw new Error(
        "The properties 'attribute' and 'value' are required for add.",
      );
    }

    try {
      element[instr.attribute].add(instr.value);
    } catch (e) {
      throw new Error(`The attribute '${instr.attribute}' doesn't support add`);
    }
  };

  /**
   * Removes a value from the specified attribute (e.g., class, dataset) in the provided element.
   *
   * @param {HTMLElement} element - The element to remove the value from.
   * @param {Object} instr - An instruction object containing 'attribute' and 'value'.
   *
   * @throws {Error} When 'attribute' or 'value' is missing in the instruction object.
   * @throws {Error} When the 'attribute' specified doesn't support remove.
   */
  const _remove = (element, instr) => {
    if (!instr.attribute) {
      throw new Error(
        "The properties 'attribute' and 'value' are required for remove.",
      );
    }

    try {
      element[instr.attribute].remove(instr.value);
    } catch (e) {
      throw new Error(
        `The attribute '${instr.attribute}' doesn't support remove.`,
      );
    }
  };

  /**
   * Applies CSS styles to the provided element.
   *
   * @param {HTMLElement} element - The element to apply styles to.
   * @param {Object} instr - An instruction object containing style properties and values.
   */
  const _style = (element, instr) => {
    for (const [prop, val] of Object.entries(instr)) {
      if (prop !== 'selector' && prop !== 'action') {
        element.style[prop] = val;
      }
    }
  };

  /**
   * Adds new children to an element.
   *
   * @param {string} parentSelector - The selector of the element to update children of.
   * @param {Array} children - An array of children to be added.
   * @throws {Error} If 'children' is not an array.
   */
  const _addChildren = (parentSelector, children) => {
    if (!Array.isArray(children)) {
      throw new Error('children must be an array.');
    }

    for (const child of children) {
      create(child, parentSelector, true);
    }
  };

  /**
   * Removes children from an element based on a predicate function.
   *
   * @param {string} parentSelector - The selector of the element to update children of.
   * @param {function} predicate - A function that returns true for children to be deleted.
   * @throws {Error} If the element specified by 'parentSelector' is not found in the DOM.
   * @throws {Error} If 'predicate' is not a function.
   */
  const _removeChild = (parentSelector, predicate) => {
    const parent = document.querySelector(parentSelector);

    if (!parent) {
      throw new Error(
        `The element (${parentSelector}) is not found in the DOM.`,
      );
    }

    if (typeof predicate !== 'function') {
      throw new Error(
        'predicate must be a function that returns a boolean value',
      );
    }

    const childNodes = parent.childNodes;

    for (let i = 0; i < childNodes.length; i++) {
      const remove = predicate(childNodes[i], i);

      if (remove) childNodes[i].remove();
    }
  };

  /**
   * Updates children of an element, replacing the existing children.
   *
   * @param {string} parentSelector - The selector of the element to update children of.
   * @param {Array} children - An array of new children to be added.
   * @throws {Error} If 'children' is not an array.
   */
  const _updateChildren = (parentSelector, children) => {
    if (!Array.isArray(children)) {
      throw new Error('children must be an array.');
    }

    // Clear children
    update({ selector: parentSelector, action: 'update', innerHTML: '' });

    // Add new children
    for (const child of children) {
      create(child, parentSelector, true);
    }
  };

  /**
   * Modifies the information and attributes of elements in the DOM based on the provided instructions.
   *
   * @param {Object} instr - Contains information of the element to be modified and how it should be modified.
   * @param {string} instr.selector - A string to select the element to be modified.
   * @param {'toggle' | 'replace' | 'replaceAll' | 'update' | 'add' | 'remove' | 'style' | 'addChildren' | 'removeChild' | 'updateChildren' } instr.action - The action to be performed on the selected element.
   * @param {boolean} all - A boolean value to specify if the first or all items matching the selector should be updated
   *
   * @throws {Error} When the 'selector' property is missing in instr.
   * @throws {Error} When the 'action' property is missing in instr.
   * @throws {Error} When the element is not found in the DOM.
   */
  const update = (instr, all = false) => {
    if (!instr.selector) {
      throw new Error("The property 'selector' is required.");
    }

    if (!instr.action) {
      throw new Error("The property 'action' is required.");
    }

    const element = all
      ? document.querySelectorAll(instr.selector)
      : document.querySelector(instr.selector);

    if (!element) {
      throw new Error(`Element '${instr.selector}' does not exist in the DOM`);
    }

    const applyUpdate = (callback) => {
      if (all) {
        element.forEach((item) => {
          callback(item, instr);
        });
      } else {
        callback(element, instr);
      }
    };

    switch (instr.action) {
      case 'toggle':
        applyUpdate(_toggle);
        break;

      case 'replace':
        applyUpdate(_replace);
        break;

      case 'replaceAll':
        applyUpdate(_replaceAll);
        break;

      case 'update':
        applyUpdate(_update);
        break;

      case 'add':
        applyUpdate(_add);
        break;

      case 'remove':
        applyUpdate(_remove);
        break;

      case 'style':
        applyUpdate(_style);
        break;

      case 'addChildren':
        _addChildren(instr.selector, instr.children);
        break;

      case 'removeChild':
        _removeChild(instr.selector, instr.predicate);
        break;

      case 'updateChildren':
        _updateChildren(instr.selector, instr.children);
        break;
    }
  };

  return { create, read, remove, update };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManager());


/***/ }),

/***/ "./node_modules/dom-wizard/modules/router.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-wizard/modules/router.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager */ "./node_modules/dom-wizard/modules/domManager.js");


/**
 * The router module is responsible for registering routes, linking pages, and configuring URLs.
 */
const router = () => {
  const _pages = [];
  const _routes = [];

  /**
   * Registers the provided routes, allowing them to be used later for navigation.
   *
   * @param {Array<Object>} routes - An array containing information about the routes to be registered.
   * Each route object should have the following structure:
   * - `id` (string): A unique identifier for the route.
   * - `route` (Object): An object containing a component to ebe rendered by domManager.
   *
   * @throws {Error} If the `register` function is invoked more than once in the application.
   * @throws {Error} If the `routes` parameter is not an array.
   * @throws {Error} If any item in the `routes` array is not an object with key-value pairs.
   * @throws {Error} If any item in the `routes` array does not have the required 'id' and 'route' keys.
   * @throws {Error} If any routes share the same 'id'.
   */
  const register = (routes) => {
    if (_pages.length !== 0) {
      throw new Error(
        'register should only be used (invoked) once throughout the app',
      );
    }

    if (!Array.isArray(routes)) {
      throw new Error('register expects routes to be an array.');
    }

    for (const route of routes) {
      if (
        !(route !== null && typeof route === 'object' && !Array.isArray(route))
      ) {
        throw new Error(
          'Each item (route) inside routes is expected to be an object with key and value pairs.',
        );
      }

      if (!(route.id && route.route)) {
        throw new Error(
          'Each item (route) inside routes is expected to have id and route as its keys.',
        );
      }
    }

    routes.forEach((route, index) => {
      for (let i = index + 1; i < routes.length; i++) {
        if (routes[i].id === route.id) {
          throw new Error(
            `All routes should have unique IDs. Route at index ${i} and ${index} share the ID ${route.id}`,
          );
        }
      }
    });

    for (const route of routes) {
      _pages.push(route);
    }
  };

  const _deactivate = (name) => {
    for (const route of _routes) {
      if (route.name === name) {
        route.element.classList.remove('active');
      }
    }
  };

  /**
   * Configures a link with the provided link information.
   *
   * @param {Object} linkInfo - The link information object.
   * @param {string} linkInfo.name - The name of the link.
   * @param {string} linkInfo.to - The ID of the page to link to.
   * @param {string} [linkInfo.host] - The selector of the element to host the page.
   * @param {HTMLElement} linkInfo.element - The HTML element to attach the click event listener to.
   * @param {boolean} [linkInfo.animate] - A smooth transition is added when pages are changing if animate is true
   *
   * @throws {Error} If the linkInfo object is missing 'name,' 'to,' or 'element' properties.
   * @throws {Error} If the specified page ID ('to') does not match any registered pages.
   */
  const configureLink = (linkInfo) => {
    if (!linkInfo.name || !linkInfo.to || !linkInfo.element) {
      throw new Error(
        'linkInfo should contain name, to, and element as its properties.',
      );
    }

    const page = _pages.find((page) => page.id === linkInfo.to);
    if (!page) {
      throw new Error(
        `There are no registered page with the id of ${linkInfo.to}`,
      );
    }

    // Add the linkInfo object to the routes array
    _routes.push(linkInfo);

    linkInfo.element.addEventListener('click', () => {
      // Deactivate all links
      _deactivate(linkInfo.name);

      if (linkInfo.animate) {
        document.body.style.opacity = 0;
      }

      // Create the element for the page
      const selector = linkInfo.host ? linkInfo.host : '#root';
      _domManager__WEBPACK_IMPORTED_MODULE_0__["default"].create(page.route, selector);

      if (linkInfo.animate) {
        document.body.style.opacity = 1;
      }

      // Activate the link
      linkInfo.element.classList.add('active');
    });
  };

  return { configureLink, register };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router());


/***/ }),

/***/ "./node_modules/dom-wizard/modules/store.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-wizard/modules/store.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The store module provides a central storage mechanism for managing and sharing data across your application.
 * It allows you to create, retrieve, and update variables within a private store.
 */
const store = () => {
  const _store = {};

  /**
   * Creates the initial store by accepting an object with key-value pairs. This function throws an error
   * if invoked more than once.
   *
   * @param {Object} storeObject - An object containing properties and values to be stored in the store.
   *
   * @throws {Error} If storeObject is not an Object with key-value pairs.
   * @throws {Error} If createStore is invoked more than once.
   */
  const createStore = (storeObject) => {
    if (
      !(
        storeObject !== null &&
        typeof storeObject === 'object' &&
        !Array.isArray(storeObject)
      )
    ) {
      throw new Error(
        'createStore expects an Object with key-value pairs as its argument.',
      );
    }

    if (Object.keys(_store).length > 0) {
      throw new Error('You can only create store once.');
    }

    Object.assign(_store, storeObject);
  };

  /**
   * Retrieves the value associated with a specified key in the store.
   *
   * @param {string} key - The key of the variable stored in the private store.
   * @returns {*} The value of the specified key if found; otherwise, undefined.
   */
  const getState = (key) => _store[key];

  /**
   * Updates the value associated with a specified key in the store. If the key doesn't exist, an error is thrown.
   *
   * @param {string} key - The key of the state to be updated.
   * @param {*} newValue - The new value for the specified state.
   *
   * @throws {Error} If the key does not exist in the store.
   */
  const updateState = (key, newValue) => {
    if (!_store[key]) {
      throw new Error(`Key '${key}' doesn't exist in store`);
    }

    _store[key] = newValue;
  };

  return { createStore, getState, updateState };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store());


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/dialog.js":
/*!**********************************!*\
  !*** ./src/components/dialog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_icons_icons_x_lg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-icons/icons/x-lg.svg */ "./node_modules/bootstrap-icons/icons/x-lg.svg");
/* harmony import */ var dom_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-wizard */ "./node_modules/dom-wizard/index.js");
/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ "./src/helpers/updateDisplay.js");




const header = () => {
  const x = {
    children: [{ tagName: "img", options: { src: bootstrap_icons_icons_x_lg_svg__WEBPACK_IMPORTED_MODULE_0__ } }],
    options: {
      onclick: () => {
        const dialog = document.querySelector("dialog");
        dialog.close();
      },
    },
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  };

  return {
    children: [x],
    options: {
      style: headerStyle,
    },
  };
};

const form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const todo = e.target[0].value;
    const updateTodos = dom_wizard__WEBPACK_IMPORTED_MODULE_1__.store.getState("updateTodos");
    updateTodos(todo);

    dom_wizard__WEBPACK_IMPORTED_MODULE_1__.domManager.update({
      selector: "input#task-name",
      action: "update",
      value: "",
    });

    // Update display
    (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])();

    // Close modal
    const dialog = document.querySelector("dialog");
    dialog.close();
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "1.2rem",
    outline: "none",
  };

  const input = {
    tagName: "input",
    options: {
      placeholder: "Write the title of your todo here",
      id: "task-name",
      required: true,
      style: inputStyle,
    },
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "17px",
    fontSize: "1.2rem",
    backgroundColor: "purple",
    color: "white",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
  };

  const button = {
    tagName: "button",
    options: {
      textContent: "Save Todo",
      style: buttonStyle,
    },
  };

  return {
    tagName: "form",
    children: [input, button],
    options: {
      style: { textAlign: "center" },
      onsubmit: submitHandler,
    },
  };
};

const dialog = {
  tagName: "dialog",
  children: [header(), form()],
  options: {
    style: {
      borderRadius: "10px",
      border: "none",
    },
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialog);


/***/ }),

/***/ "./src/components/emptyView.js":
/*!*************************************!*\
  !*** ./src/components/emptyView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const emptyView = () => {
  const heading = {
    tagName: "p",
    options: {
      textContent: "No Todos Yet",
      style: {
        fontSize: "3rem",
        paddingTop: "100px",
        marginBottom: "30px",
      },
    },
  };

  const button = {
    tagName: "button",
    options: {
      textContent: "Create your first todo",
      style: {
        padding: "10px 20px",
        borderRadius: "17px",
        fontSize: "1.2rem",
        backgroundColor: "purple",
        color: "white",
        cursor: "pointer",
        border: "none",
      },
      onclick: () => {
        const dialog = document.querySelector("dialog");
        dialog.showModal();
      },
    },
  };

  return {
    children: [heading, button],
    options: {
      className: "empty-view",
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyView());


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const leftDiv = {
  text: "ToDo",
  options: {
    style: {
      fontSize: "1.2rem",
      fontWeight: 800,
    },
  },
};

const rightDiv = {
  text: "DOM Wizard",
};

const header = {
  options: {
    id: "header",
    style: {
      padding: "25px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "purple",
      color: "white",
    },
  },
  children: [leftDiv, rightDiv],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_icons_icons_x_lg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-icons/icons/x-lg.svg */ "./node_modules/bootstrap-icons/icons/x-lg.svg");
/* harmony import */ var dom_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-wizard */ "./node_modules/dom-wizard/index.js");
/* harmony import */ var _helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateDisplay */ "./src/helpers/updateDisplay.js");




dom_wizard__WEBPACK_IMPORTED_MODULE_1__.cssManager.createCSSRules([
  {
    ".radio": `
        border: 2px solid;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        cursor: pointer;
        padding: 2px;
    `,
  },
  {
    ".radio.checked > .ball": `
      height: 100%;
      background-color: #000;
      border-radius: 50%;
    `,
  },
  {
    ".todo": `
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid;
      padding-bottom: 10px;
      margin-bottom: 10px;
      min-width: 200px;
    `,
  },
  {
    img: `
      cursor: pointer;
    `,
  },
]);

const radio = (checked, id) => ({
  options: {
    classList: ["radio", checked ? "checked" : ""],
    onclick: () => {
      const toggleCompleted = dom_wizard__WEBPACK_IMPORTED_MODULE_1__.store.getState("toggleCompleted");
      toggleCompleted(id);
      (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])();
    },
  },
  children: [
    {
      options: {
        className: "ball",
      },
    },
  ],
});

const task = (taskName) => ({ text: taskName });

const x = (id) => ({
  children: [{ tagName: "img", options: { src: bootstrap_icons_icons_x_lg_svg__WEBPACK_IMPORTED_MODULE_0__ } }],
  options: {
    onclick: () => {
      const removeTodo = dom_wizard__WEBPACK_IMPORTED_MODULE_1__.store.getState("removeTodo");
      removeTodo(id);
      (0,_helpers_updateDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])();
    },
  },
});

const todo = (todoInfo) => {
  const { id, completed, taskName } = todoInfo;

  const container = {
    options: {
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
      },
    },
    children: [radio(completed, id), task(taskName)],
  };

  return {
    children: [container, x(id)],
    options: { className: "todo" },
    before: (el) => {
      el.dataset.id = id;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ }),

/***/ "./src/components/todosView.js":
/*!*************************************!*\
  !*** ./src/components/todosView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/components/todo.js");


const todosView = (todos) => {
  const todosContainer = {
    options: { className: "todos-container" },
    children: [{ tagName: "h1", text: "Todos" }],
  };

  for (const todoInfo of todos) {
    todosContainer.children.push((0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todoInfo));
  }

  const addTodo = {
    text: "Add New Todo",
    options: {
      className: "add-new-todo",
      onclick: () => {
        const dialog = document.querySelector("dialog");
        dialog.showModal();
      },
    },
  };

  todosContainer.children.push(addTodo);

  return {
    options: { className: "main" },
    children: [todosContainer],
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todosView);


/***/ }),

/***/ "./src/helpers/updateDisplay.js":
/*!**************************************!*\
  !*** ./src/helpers/updateDisplay.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-wizard */ "./node_modules/dom-wizard/index.js");
/* harmony import */ var _components_emptyView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/emptyView */ "./src/components/emptyView.js");
/* harmony import */ var _components_todosView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todosView */ "./src/components/todosView.js");




const updateDisplay = () => {
  const todos = dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.getState("todos");

  const home = document.querySelector("#home");
  home.childNodes[home.childNodes.length - 1].remove();

  if (todos.length > 0) {
    dom_wizard__WEBPACK_IMPORTED_MODULE_0__.domManager.create((0,_components_todosView__WEBPACK_IMPORTED_MODULE_2__["default"])(todos), "#home", true);
  } else {
    dom_wizard__WEBPACK_IMPORTED_MODULE_0__.domManager.create(_components_emptyView__WEBPACK_IMPORTED_MODULE_1__["default"], "#home", true);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDisplay);


/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/home */ "./src/routes/home.js");
/* harmony import */ var _routes_landingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/landingPage */ "./src/routes/landingPage.js");



const routes = [
  { id: 'home', route: _routes_home__WEBPACK_IMPORTED_MODULE_0__["default"] },
  { id: 'landingPage', route: _routes_landingPage__WEBPACK_IMPORTED_MODULE_1__["default"] }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/routes/home.js":
/*!****************************!*\
  !*** ./src/routes/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-wizard */ "./node_modules/dom-wizard/index.js");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dialog */ "./src/components/dialog.js");
/* harmony import */ var _components_emptyView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/emptyView */ "./src/components/emptyView.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_todosView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/todosView */ "./src/components/todosView.js");






dom_wizard__WEBPACK_IMPORTED_MODULE_0__.cssManager.createCSSRules([
  {
    '#home > .main': `
      display: flex;
      justify-content: center;
      font-size: 1.3rem;
      padding-top: 100px;
    `
  },
  {
    '.add-new-todo': `
      cursor: pointer;
      border-radius: 10px;
      padding: 10px;
      transition: all .5s;
    `
  },
  {
    '.add-new-todo:hover': `
      background-color: #cacaca;
    `
  }
]);

const todos = dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.getState('todos');

const home = {
  options: { id: 'home' },
  children: [_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], _components_dialog__WEBPACK_IMPORTED_MODULE_1__["default"], todos.length > 0 ? (0,_components_todosView__WEBPACK_IMPORTED_MODULE_4__["default"])(todos) : _components_emptyView__WEBPACK_IMPORTED_MODULE_2__["default"]]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/routes/landingPage.js":
/*!***********************************!*\
  !*** ./src/routes/landingPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");


const mainContent = () => {
  const heading = {
    tagName: "p",
    text: "Todo App Made With DOM Wizard",
    options: {
      style: {
        fontSize: "4rem",
        paddingTop: "100px",
        marginBottom: "30px",
      },
    },
  };

  const button = {
    tagName: "button",
    link: {
      name: "button",
      to: "home",
    },
    options: {
      textContent: "Get Started",
      style: {
        padding: "10px 20px",
        borderRadius: "17px",
        fontSize: "1.2rem",
        backgroundColor: "purple",
        color: "white",
        cursor: "pointer",
        border: "none",
      },
    },
  };

  return {
    children: [heading, button],
    options: {
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  };
};

const landingPage = {
  children: [_components_header__WEBPACK_IMPORTED_MODULE_0__["default"], mainContent()],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingPage);


/***/ }),

/***/ "./node_modules/bootstrap-icons/icons/x-lg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-icons/icons/x-lg.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f520e54c746f7505bec4.svg";

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   customRandom: () => (/* binding */ customRandom),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-wizard */ "./node_modules/dom-wizard/index.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.createStore({
  todos: [],

  updateTodos: (newTodo) => {
    const todos = dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.getState("todos");
    todos.push({ id: "d" + (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(), completed: false, taskName: newTodo });
    dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.updateState("todos", todos);
  },

  toggleCompleted: (id) => {
    const todos = dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.getState("todos");
    const newTodos = [];

    for (const todo of todos) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      newTodos.push(todo);
    }

    dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.updateState("todos", newTodos);
  },

  removeTodo: (id) => {
    const todos = dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.getState("todos");

    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);

    dom_wizard__WEBPACK_IMPORTED_MODULE_0__.store.updateState("todos", todos);
  },
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-wizard */ "./node_modules/dom-wizard/index.js");
/* harmony import */ var _routes_landingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/landingPage */ "./src/routes/landingPage.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/router.js");





dom_wizard__WEBPACK_IMPORTED_MODULE_0__.router.register(_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
dom_wizard__WEBPACK_IMPORTED_MODULE_0__.domManager.create(_routes_landingPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksd0dBQXdHLE9BQU8sMkJBQTJCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLFVBQVUsd0NBQXdDLGNBQWMsaUJBQWlCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNyaEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMzQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y4QztBQUNBO0FBQ1I7QUFDRjs7QUFFcEMsMkRBQVUsV0FBVyxrQ0FBa0M7O0FBRWpDO0FBQ0E7QUFDSjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNWakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EsNENBQTRDLGlDQUFpQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEVBQUUsYUFBYTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHLGFBQWE7QUFDbkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0U7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLCtDQUFNLCtCQUErQixrQkFBa0IsYUFBYTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsOEJBQThCO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVLDhCQUE4QixVQUFVO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTLGtFQUFrRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QixxR0FBcUcsaUZBQWlGO0FBQzdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsU0FBUyw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUIsOENBQThDO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQix1QkFBdUI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDJEQUEyRDs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsaUlBQWlJO0FBQzlJLGFBQWEsU0FBUztBQUN0QjtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvZlU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQ7QUFDQTtBQUNBLGlFQUFpRSxHQUFHLE1BQU0sT0FBTyxlQUFlLFNBQVM7QUFDekc7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxhQUFhO0FBQzFCLGFBQWEsU0FBUztBQUN0QjtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVk7QUFDbkU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sbURBQVU7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWDs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9IeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxHQUFHLHlDQUF5QztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLEdBQUc7QUFDaEI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEdkIsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiaUQ7QUFDRjtBQUNNOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQixLQUFLLDJEQUFHLElBQUk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBSztBQUM3Qjs7QUFFQSxJQUFJLGtEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLElBQUksa0VBQWE7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0IyQjtBQUNGO0FBQ007O0FBRXJELGtEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZDQUFLO0FBQ25DO0FBQ0EsTUFBTSxrRUFBYTtBQUNuQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsOEJBQThCLGdCQUFnQjs7QUFFOUM7QUFDQSxlQUFlLDJCQUEyQixLQUFLLDJEQUFHLElBQUk7QUFDdEQ7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBSztBQUM5QjtBQUNBLE1BQU0sa0VBQWE7QUFDbkIsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EsVUFBVSwwQkFBMEI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9GTTs7QUFFMUI7QUFDQTtBQUNBLGVBQWUsOEJBQThCO0FBQzdDLGlCQUFpQiw4QkFBOEI7QUFDL0M7O0FBRUE7QUFDQSxpQ0FBaUMsaURBQUk7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JzQjtBQUNDO0FBQ0E7O0FBRWhEO0FBQ0EsZ0JBQWdCLDZDQUFLOztBQUVyQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxrREFBVSxRQUFRLGlFQUFTO0FBQy9CLElBQUk7QUFDSixJQUFJLGtEQUFVLFFBQVEsNkRBQVM7QUFDL0I7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJJO0FBQ2M7O0FBRS9DO0FBQ0EsSUFBSSxtQkFBbUIsb0RBQUksRUFBRTtBQUM3QixJQUFJLDBCQUEwQiwyREFBVztBQUN6Qzs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjBCO0FBQ0w7QUFDTTtBQUNOO0FBQ007O0FBRWhELGtEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsNkNBQUs7O0FBRW5CO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsMERBQU0sRUFBRSwwREFBTSxxQkFBcUIsaUVBQVMsVUFBVSw2REFBUztBQUM1RTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ3VCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDBEQUFNO0FBQ25COztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEQwQjtBQUM5QztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNIOztBQUVoQyw2Q0FBSztBQUNMOztBQUVBO0FBQ0Esa0JBQWtCLDZDQUFLO0FBQ3ZCLGlCQUFpQixVQUFVLDhDQUFNLHlDQUF5QztBQUMxRSxJQUFJLDZDQUFLO0FBQ1QsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQiw2Q0FBSztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksNkNBQUs7QUFDVCxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCLDZDQUFLOztBQUV2QjtBQUNBOztBQUVBLElBQUksNkNBQUs7QUFDVCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNuQytDO0FBQ0Q7QUFDdEI7QUFDSzs7QUFFOUIsOENBQU0sVUFBVSwrQ0FBTTtBQUN0QixrREFBVSxRQUFRLDJEQUFXLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RvbS13aXphcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZG9tLXdpemFyZC9tb2R1bGVzL2Nzc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZG9tLXdpemFyZC9tb2R1bGVzL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZG9tLXdpemFyZC9tb2R1bGVzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kb20td2l6YXJkL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9lbXB0eVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdG9kb3NWaWV3LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2hlbHBlcnMvdXBkYXRlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcm91dGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcm91dGVzL2xhbmRpbmdQYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jcm9vdCxcbiNyb290ID4gKiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Jvb3QsXFxuI3Jvb3QgPiAqIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBkb21NYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9kb21NYW5hZ2VyJztcbmltcG9ydCBjc3NNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9jc3NNYW5hZ2VyJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9tb2R1bGVzL3JvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9tb2R1bGVzL3N0b3JlJztcblxuY3NzTWFuYWdlci5hZGRSdWxlKHsgYm9keTogJ3RyYW5zaXRpb246IG9wYWNpdHkgLjI1cycgfSk7XG5cbmV4cG9ydCB7IGRvbU1hbmFnZXIgfTtcbmV4cG9ydCB7IGNzc01hbmFnZXIgfTtcbmV4cG9ydCB7IHJvdXRlciB9O1xuZXhwb3J0IHsgc3RvcmUgfTtcbiIsIi8qKlxuICogVGhlIGNzc01hbmFnZXIgbW9kdWxlIGZhY2lsaXRhdGVzIHRoZSBjcmVhdGlvbiBhbmQgYXBwbGljYXRpb24gb2YgQ1NTIHN0eWxlcyB0byBlbGVtZW50cy4gSXQncyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHRoaXMgbW9kdWxlIGlzbid0IGludGVuZGVkIHRvIHJlcGxhY2UgdHJhZGl0aW9uYWwgQ1NTLCBidXQgcmF0aGVyIHRvIHByb3ZpZGUgYW4gQVBJIGZvciBlZmZpY2llbnRseSBhZGRpbmcgQ1NTIHJ1bGVzIHRvIGVsZW1lbnRzIHVzaW5nIEphdmFTY3JpcHQgd2hlbiBpdCdzIHRoZSBtb3N0IHN1aXRhYmxlIGFwcHJvYWNoLlxuICovXG5jb25zdCBjc3NNYW5hZ2VyID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlkID0gJ2RtbC1zdHlsZSc7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgQ1NTIHJ1bGUgdG8gdGhlIHN0eWxlc2hlZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlIC0gQW4gb2JqZWN0IHdpdGggYSBzZWxlY3RvciBhcyBpdHMga2V5IGFuZCBhIGRlY2xhcmF0aW9uIGFzIGl0cyB2YWx1ZS5cbiAgICpcbiAgICogQHRocm93cyBhbiBlcnJvciBpZiBydWxlIGlzIG5vdCBhbiBPYmplY3Qgd2l0aCBrZXkgYW5kIHZhbHVlIHBhaXJzXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgYWRkZWQgcnVsZSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBydWxlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBydWxlSW5kZXggPSBjc3NNYW5hZ2VyLmFkZFJ1bGUoeyAnYm9keSc6ICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQnIH0pO1xuICAgKiAvLyBVc2UgdGhlIGluZGV4IHRvIHJlbW92ZSB0aGUgcnVsZTpcbiAgICogY3NzTWFuYWdlci5yZW1vdmVSdWxlKHJ1bGVJbmRleCk7XG4gICAqL1xuICBjb25zdCBhZGRSdWxlID0gKHJ1bGUpID0+IHtcbiAgICBpZiAoIShydWxlICE9PSBudWxsICYmIHR5cGVvZiBydWxlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShydWxlKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3J1bGUgbXVzdCBiZSBvZiB0eXBlIG9iamVjdCB3aXRoIGtleSBhbmQgdmFsdWUgcGFpcnMgZm9yIHRoZSBzdHlsZXMgdG8gYmUgYXBwbGllZCBjb3JyZWN0bHknLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RtbC1zdHlsZScpLnNoZWV0O1xuICAgIGNvbnN0IFtzZWxlY3RvciwgZGVjbGFyYXRpb25dID0gT2JqZWN0LmVudHJpZXMocnVsZSlbMF07XG4gICAgcmV0dXJuIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShcbiAgICAgIGAke3NlbGVjdG9yfXske2RlY2xhcmF0aW9ufX1gLFxuICAgICAgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgsXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhIENTUyBydWxlIGZyb20gdGhlIHN0eWxlc2hlZXQgdXNpbmcgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBydWxlIHRvIGJlIHJlbW92ZWQuXG4gICAqXG4gICAqIEB0aHJvd3MgYW4gZXJyb3IgaWYgaW5kZXggaXMgbm90IGEgbnVtYmVyXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFJlbW92ZSBhIENTUyBydWxlIGJ5IGl0cyBpbmRleFxuICAgKiBjc3NNYW5hZ2VyLnJlbW92ZVJ1bGUocnVsZUluZGV4KTtcbiAgICovXG4gIGNvbnN0IHJlbW92ZVJ1bGUgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgaW5kZXggc2hvdWxkIGJlIGEgbnVtYmVyIGZvciBhIHJ1bGUgdG8gYmUgcmVtb3ZlZCBjb3JyZWN0bHkuIEN1cnJlbnRseSBpbmRleCBpcyBvZiB0eXBlIG9mICR7dHlwZW9mIGluZGV4fWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG1sLXN0eWxlJykuc2hlZXQ7XG4gICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBtdWx0aXBsZSBDU1MgcnVsZXMgdG8gdGhlIHBhZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcnVsZXMgLSBBbiBhcnJheSBjb250YWluaW5nIENTUyBydWxlcywgd2hlcmUgZWFjaCBydWxlIGlzIGFuIG9iamVjdFxuICAgKiB3aXRoIGEgc2VsZWN0b3IgYXMgaXRzIGtleSBhbmQgYSBkZWNsYXJhdGlvbiBhcyBpdHMgdmFsdWUuXG4gICAqXG4gICAqIEB0aHJvd3MgYW4gZXJyb3IgaWYgcnVsZXMgaXMgbm90IGFuIGFycmF5XG4gICAqIEB0aHJvd3MgYW4gZXJyb3IgaWYgcnVsZXMgZG9lc24ndCBjb250YWluIG9iamVjdChzKSB3aXRoIGtleShzKSBhbmQgdmFsdWUocylcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gQWRkIENTUyBydWxlcyBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcyBhbmQgYmFja2dyb3VuZCBjb2xvcnNcbiAgICogY3NzTWFuYWdlci5jcmVhdGVDU1NSdWxlcyhbXG4gICAqICAge1xuICAgKiAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSc6IGBcbiAgICogICAgICAgYm9keSB7XG4gICAqICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICogICAgICAgfVxuICAgKiAgICAgYFxuICAgKiAgIH0sXG4gICAqICAge1xuICAgKiAgICAgJ2JvZHknOiBgXG4gICAqICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgKiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAqICAgICBgXG4gICAqICAgfVxuICAgKiBdKTtcbiAgICovXG4gIGNvbnN0IGNyZWF0ZUNTU1J1bGVzID0gKHJ1bGVzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdydWxlcyBtdXN0IGFuIEFycmF5IG9iamVjdCcpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcnVsZSBvZiBydWxlcykge1xuICAgICAgYWRkUnVsZShydWxlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYWRkUnVsZSwgY3JlYXRlQ1NTUnVsZXMsIHJlbW92ZVJ1bGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzc01hbmFnZXIoKTtcbiIsImltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuXG4vKipcbiAqIFRoZSBkb21NYW5hZ2VyIG1vZHVsZSBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcsIHVwZGF0aW5nLCByZWFkaW5nLCBhbmQgZGVsZXRpbmcgRE9NIGVsZW1lbnRzLlxuICovXG5jb25zdCBkb21NYW5hZ2VyID0gKCkgPT4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGVsZW1lbnQgaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIGluIHRoZSAnZWxlbWVudCcgb2JqZWN0LlxuICAgKiBUaGUgJ2VsZW1lbnQnIG9iamVjdCBzaG91bGQgaGF2ZSBhICd0YWdOYW1lJyBwcm9wZXJ0eSBzcGVjaWZ5aW5nIHRoZSB0eXBlIG9mIEhUTUwgZWxlbWVudCB0byBjcmVhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0gQW4gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVsZW1lbnQgdG8gYmUgY3JlYXRlZCAocHJvcGVydHk6ICd0YWdOYW1lJyBpcyByZXF1aXJlZCkuXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gQSBuZXdseSBjcmVhdGVkIEhUTUwgZWxlbWVudC5cbiAgICovXG4gIGNvbnN0IF9jcmVhdGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoIWVsZW1lbnQudGFnTmFtZSkgZWxlbWVudC50YWdOYW1lID0gJ2Rpdic7XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC50YWdOYW1lKTtcblxuICAgIGlmIChlbGVtZW50LmxpbmspIHtcbiAgICAgIHJvdXRlci5jb25maWd1cmVMaW5rKE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQubGluaywgeyBlbGVtZW50OiBlbCB9KSk7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRleHQgc2VwZXJhdGVseSBiZWNhdXNlIGl0IGlzIGNvbW1vbmx5IHVzZWRcbiAgICBpZiAoZWxlbWVudC50ZXh0KSB7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dDtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnQub3B0aW9ucykgcmV0dXJuIGVsO1xuXG4gICAgZm9yIChjb25zdCBbcHJvcCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVsZW1lbnQub3B0aW9ucykpIHtcbiAgICAgIGVsW3Byb3BdID0gcHJvcCA9PT0gJ2NsYXNzTGlzdCcgPyB2YWx1ZS5qb2luKCcgJykgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5vcHRpb25zLnN0eWxlKSB7XG4gICAgICBmb3IgKGNvbnN0IFtwcm9wLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZWxlbWVudC5vcHRpb25zLnN0eWxlKSkge1xuICAgICAgICBlbC5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICBsZXQgYWZ0ZXJGdW5jcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgRE9NIHRyZWUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGVsZW1lbnQgaW5mb3JtYXRpb24uXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVjdXJzaXZlbHkgY3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgYW5kIGl0cyBjaGlsZHJlbiBiYXNlZCBvbiB0aGVcbiAgICogaW5mb3JtYXRpb24gcHJvdmlkZWQgaW4gdGhlICdlbGVtZW50JyBvYmplY3QuIFRoZSAnZWxlbWVudCcgb2JqZWN0IHNob3VsZCBoYXZlIGEgJ3RhZ05hbWUnIHByb3BlcnR5XG4gICAqIHNwZWNpZnlpbmcgdGhlIHR5cGUgb2YgSFRNTCBlbGVtZW50IHRvIGNyZWF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBBbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkIChwcm9wZXJ0eTogJ3RhZ05hbWUnIGlzIHJlcXVpcmVkKS5cbiAgICogQHJldHVybnMge0VsZW1lbnR9IEEgbmV3bHkgY3JlYXRlZCBIVE1MIGVsZW1lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICogQHRocm93cyBUaHJvd3MgYW4gZXJyb3IgaWYgJ2VsZW1lbnQnIGlzIHVuZGVmaW5lZC5cbiAgICovXG4gIGNvbnN0IF9jcmVhdGVET01UcmVlID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gX2NyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudC5iZWZvcmUpIHtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5iZWZvcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2JlZm9yZScgbXVzdCBiZSBhIGZ1bmN0aW9uJ1wiKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5iZWZvcmUoZWwpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmFmdGVyKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuYWZ0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2FmdGVyJyBtdXN0IGJlIGEgZnVuY3Rpb24nXCIpO1xuICAgICAgfVxuXG4gICAgICBhZnRlckZ1bmNzLnB1c2goeyBmdW5jOiBlbGVtZW50LmFmdGVyLCBhcmc6IGVsIH0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkRWwgPSBfY3JlYXRlRE9NVHJlZShjaGlsZCk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkRWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEhUTUwgZWxlbWVudCBhbmQgYXBwZW5kcyBpdCB0byBhIHNwZWNpZmllZCBwYXJlbnQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBBbiBvYmplY3Qgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkIChwcm9wZXJ0eTogdGFnTmFtZSBpcyByZXF1aXJlZCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIFNlbGVjdG9yIG9mIHRoZSBwYXJlbnQgdG8gYXBwZW5kIHRoZSBuZXdseSBjcmVhdGVkIGVsZW1lbnQgaW50by5cbiAgICogQHBhcmFtIHtib29sZWFufSBhcHBlbmQgLSBJbmRpY2F0ZXMgd2hldGhlciB0byBhcHBlbmQgdGhlIG5ldyBlbGVtZW50IGFzIGEgY2hpbGQgb3IgcmVwbGFjZSBleGlzdGluZyBjb250ZW50LlxuICAgKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcGFyZW50IGVsZW1lbnQgc3BlY2lmaWVkIGJ5IHRoZSBzZWxlY3RvciBpcyBub3QgZm91bmQgaW4gdGhlIGRvY3VtZW50LlxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIG5ldyBjaGlsZCBlbGVtZW50IGFwcGVuZGVkIHRvIGl0LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlID0gKGVsZW1lbnQsIHNlbGVjdG9yID0gJyNyb290JywgYXBwZW5kID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBlbCA9IF9jcmVhdGVET01UcmVlKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgRWxlbWVudCAke3NlbGVjdG9yfSBpcyBub3QgZm91bmQuIFBsZWFzZSBlbnN1cmUgJHtzZWxlY3Rvcn0gZXhpc3RzIGluIHlvdXIgSFRNTC5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICBmb3IgKGNvbnN0IGFmdGVyRnVuYyBvZiBhZnRlckZ1bmNzKSB7XG4gICAgICBhZnRlckZ1bmMuZnVuYyhhZnRlckZ1bmMuYXJnKTtcbiAgICB9XG5cbiAgICBhZnRlckZ1bmNzID0gW107XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgaW5mb3JtYXRpb24gZnJvbSB0aGUgRE9NIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBzZWxlY3RvciBhbmQgcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gVGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSB0aGUgRE9NLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lIC0gVGhlIHByb3BlcnR5IG5hbWUgdG8gcmV0cmlldmUgZnJvbSB0aGUgc2VsZWN0ZWQgZWxlbWVudChzKS5cbiAgICogQHBhcmFtIHtib29sZWFufSBhbGwgLSBJZiB0cnVlLCByZXRyaWV2ZXMgdGhlIHByb3BlcnR5IGZyb20gYWxsIG1hdGNoaW5nIGVsZW1lbnRzOyBvdGhlcndpc2UsIHJldHJpZXZlcyBmcm9tIHRoZSBmaXJzdCBtYXRjaGluZyBlbGVtZW50LlxuICAgKlxuICAgKiBAdGhyb3dzIFRocm93cyBhbiBlcnJvciBpZiByZXRyaWV2aW5nIHRoZSBlbGVtZW50IHdhcyBub3QgcG9zc2libGUgb3IgaWYgdGhlIHNlbGVjdG9yIGRpZG4ndCBtYXRjaCBhbnkgZWxlbWVudHMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheXxzdHJpbmd8dW5kZWZpbmVkfSBJZiBhbGwgaXMgdHJ1ZSBhbmQgcHJvcGVydHlOYW1lIGlzIHByb3ZpZGVkLCBhbiBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMgZnJvbSBhbGwgbWF0Y2hpbmcgZWxlbWVudHM7IGlmIHByb3BlcnR5TmFtZSBpcyBwcm92aWRlZCwgdGhlIHByb3BlcnR5IHZhbHVlIGZyb20gdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQ7IG90aGVyd2lzZSwgdGhlIERPTSBlbGVtZW50KHMpIG1hdGNoaW5nIHRoZSBzZWxlY3Rvci5cbiAgICovXG4gIGNvbnN0IHJlYWQgPSAoc2VsZWN0b3IsIHByb3BlcnR5TmFtZSA9IHVuZGVmaW5lZCwgYWxsID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBlbCA9ICFhbGxcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBpZiAoIWVsIHx8IGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUmV0cmlldmluZyBvZiB0aGUgZWxlbWVudCB3YXMgbm90IHBvc3NpYmxlLiBQbGVhc2UgY2hlY2sgeW91ciBzZWxlY3Rvci4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYWxsICYmIHByb3BlcnR5TmFtZSkge1xuICAgICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICAgIGVsLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcHJvcHMucHVzaChlbGVtZW50W3Byb3BlcnR5TmFtZV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSBlbHNlIGlmIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHJldHVybiBlbFtwcm9wZXJ0eU5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGVsZW1lbnRzIGZyb20gdGhlIERPTSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgc2VsZWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIFRoZSBDU1Mgc2VsZWN0b3IgdG8gdGFyZ2V0IGVsZW1lbnRzIGZvciByZW1vdmFsLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFsbCAtIElmIHRydWUsIHJlbW92ZXMgYWxsIG1hdGNoaW5nIGVsZW1lbnRzOyBvdGhlcndpc2UsIHJlbW92ZXMgdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQuXG4gICAqXG4gICAqIEB0aHJvd3MgVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBzZWxlY3RvciBkb2Vzbid0IG1hdGNoIGFueSBlbGVtZW50cyBvciBpZiByZW1vdmFsIGZhaWxzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl8SFRNTEVsZW1lbnR9IElmIGFsbCBpcyB0cnVlLCBhbiBhcnJheSBvZiByZW1vdmVkIGVsZW1lbnRzOyBvdGhlcndpc2UsIHRoZSByZW1vdmVkIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCByZW1vdmUgPSAoc2VsZWN0b3IsIGFsbCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgZWwgPSAhYWxsXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgaWYgKCFlbCB8fCBlbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7c2VsZWN0b3J9IGlzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLiBFbnN1cmUgdGhlIHNwZWxsaW5nIGlzIGNvcnJlY3QuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFsbCkge1xuICAgICAgZWwuZm9yRWFjaCgoeCkgPT4geC5yZW1vdmUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICAvKipcbiAgICogVG9nZ2xlcyBhIGNsYXNzIGluIHRoZSBjbGFzc0xpc3Qgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byB0b2dnbGUgdGhlIGNsYXNzIG9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5zdHIgLSBBbiBpbnN0cnVjdGlvbiBvYmplY3QgY29udGFpbmluZyB0aGUgY2xhc3MgbmFtZSBpbiB0aGUgJ2NsYXNzTmFtZScgcHJvcGVydHkuXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuICdjbGFzc05hbWUnIGlzIG1pc3NpbmcgaW4gdGhlIGluc3RydWN0aW9uIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IF90b2dnbGUgPSAoZWxlbWVudCwgaW5zdHIpID0+IHtcbiAgICBpZiAoIWluc3RyLmNsYXNzTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb3BlcnR5ICdjbGFzc05hbWUnIGlzIHJlcXVpcmVkIGZvciB0b2dnbGUuXCIpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShpbnN0ci5jbGFzc05hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhIHNwZWNpZmljIGF0dHJpYnV0ZSBpbiB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIHJlcGxhY2UgdGhlIGF0dHJpYnV0ZSBpbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGluc3RyIC0gQW4gaW5zdHJ1Y3Rpb24gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGF0dHJpYnV0ZSBuYW1lIGluICdhdHRyaWJ1dGUnLCAnb2xkJyB2YWx1ZSwgYW5kICduZXcnIHZhbHVlLlxuICAgKlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiAnYXR0cmlidXRlJywgJ29sZCcsIG9yICduZXcnIGlzIG1pc3NpbmcgaW4gdGhlIGluc3RydWN0aW9uIG9iamVjdC5cbiAgICogQHRocm93cyB7RXJyb3J9IFdoZW4gdGhlICdhdHRyaWJ1dGUnIHNwZWNpZmllZCBkb2Vzbid0IHN1cHBvcnQgcmVwbGFjZS5cbiAgICovXG4gIGNvbnN0IF9yZXBsYWNlID0gKGVsZW1lbnQsIGluc3RyKSA9PiB7XG4gICAgaWYgKCFpbnN0ci5hdHRyaWJ1dGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwcm9wZXJ0eSAnYXR0cmlidXRlJyBpcyByZXF1aXJlZCBmb3IgcmVwbGFjZS5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0ci5vbGQgfHwgIWluc3RyLm5ldykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoZSBwcm9wZXJ0aWVzICdvbGQnIGFuZCAnbmV3JyBhcmUgcmVxdWlyZWQgZm9yIHJlcGxhY2UuXCIsXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAoaW5zdHIuYXR0cmlidXRlID09PSAnY2xhc3NMaXN0Jykge1xuICAgICAgICBlbGVtZW50W2luc3RyLmF0dHJpYnV0ZV0ucmVwbGFjZShpbnN0ci5vbGQsIGluc3RyLm5ldyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50W2luc3RyLmF0dHJpYnV0ZV0gPSBlbGVtZW50W2luc3RyLmF0dHJpYnV0ZV0ucmVwbGFjZShcbiAgICAgICAgICBpbnN0ci5vbGQsXG4gICAgICAgICAgaW5zdHIubmV3LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoZSBhdHRyaWJ1dGUgJyR7aW5zdHIuYXR0cmlidXRlfScgZG9lc24ndCBzdXBwb3J0IHJlcGxhY2UuYCxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgYSBzcGVjaWZpYyB2YWx1ZSBpbiB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIHBlcmZvcm0gdGhlIHJlcGxhY2VtZW50IG9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5zdHIgLSBBbiBpbnN0cnVjdGlvbiBvYmplY3QgY29udGFpbmluZyB0aGUgYXR0cmlidXRlIG5hbWUgaW4gJ2F0dHJpYnV0ZScsICdvbGQnIHZhbHVlLCBhbmQgJ25ldycgdmFsdWUuXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuICdhdHRyaWJ1dGUnLCAnb2xkJywgb3IgJ25ldycgaXMgbWlzc2luZyBpbiB0aGUgaW5zdHJ1Y3Rpb24gb2JqZWN0LlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiB0aGUgJ2F0dHJpYnV0ZScgc3BlY2lmaWVkIGRvZXNuJ3Qgc3VwcG9ydCByZXBsYWNlQWxsLlxuICAgKi9cbiAgY29uc3QgX3JlcGxhY2VBbGwgPSAoZWxlbWVudCwgaW5zdHIpID0+IHtcbiAgICBpZiAoIWluc3RyLmF0dHJpYnV0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb3BlcnR5ICdhdHRyaWJ1dGUnIGlzIHJlcXVpcmVkIGZvciByZXBsYWNlQWxsLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWluc3RyLm9sZCB8fCAhaW5zdHIubmV3KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVGhlIHByb3BlcnRpZXMgJ29sZCcgYW5kICduZXcnIGFyZSByZXF1aXJlZCBmb3IgcmVwbGFjZUFsbC5cIixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGVsZW1lbnRbaW5zdHIuYXR0cmlidXRlXSA9IGVsZW1lbnRbaW5zdHIuYXR0cmlidXRlXS5yZXBsYWNlQWxsKFxuICAgICAgICBpbnN0ci5vbGQsXG4gICAgICAgIGluc3RyLm5ldyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGF0dHJpYnV0ZSAnJHtpbnN0ci5hdHRyaWJ1dGV9JyBkb2Vzbid0IHN1cHBvcnQgcmVwbGFjZUFsbC5gLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBpbnN0cnVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGJlIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0ciAtIEFuIGluc3RydWN0aW9uIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgYW5kIHZhbHVlcyBmb3IgdXBkYXRpbmcuXG4gICAqL1xuICBjb25zdCBfdXBkYXRlID0gKGVsZW1lbnQsIGluc3RyKSA9PiB7XG4gICAgaWYgKGluc3RyLmNoaWxkcmVuKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGluc3RyLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGVsID0gX2NyZWF0ZURPTVRyZWUoY2hpbGQpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKGluc3RyKSkge1xuICAgICAgaWYgKGtleSAhPT0gJ3NlbGVjdG9yJyAmJiBrZXkgIT09ICdhY3Rpb24nICYmIGtleSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgICBlbGVtZW50W2tleV0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIHZhbHVlIHRvIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlIChlLmcuLCBjbGFzcywgZGF0YXNldCkgaW4gdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBhZGQgdGhlIHZhbHVlIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5zdHIgLSBBbiBpbnN0cnVjdGlvbiBvYmplY3QgY29udGFpbmluZyAnYXR0cmlidXRlJyBhbmQgJ3ZhbHVlJy5cbiAgICpcbiAgICogQHRocm93cyB7RXJyb3J9IFdoZW4gJ2F0dHJpYnV0ZScgb3IgJ3ZhbHVlJyBpcyBtaXNzaW5nIGluIHRoZSBpbnN0cnVjdGlvbiBvYmplY3QuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBXaGVuIHRoZSAnYXR0cmlidXRlJyBzcGVjaWZpZWQgZG9lc24ndCBzdXBwb3J0IGFkZC5cbiAgICovXG4gIGNvbnN0IF9hZGQgPSAoZWxlbWVudCwgaW5zdHIpID0+IHtcbiAgICBpZiAoIWluc3RyLmF0dHJpYnV0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlRoZSBwcm9wZXJ0aWVzICdhdHRyaWJ1dGUnIGFuZCAndmFsdWUnIGFyZSByZXF1aXJlZCBmb3IgYWRkLlwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZWxlbWVudFtpbnN0ci5hdHRyaWJ1dGVdLmFkZChpbnN0ci52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgYXR0cmlidXRlICcke2luc3RyLmF0dHJpYnV0ZX0nIGRvZXNuJ3Qgc3VwcG9ydCBhZGRgKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB2YWx1ZSBmcm9tIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlIChlLmcuLCBjbGFzcywgZGF0YXNldCkgaW4gdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byByZW1vdmUgdGhlIHZhbHVlIGZyb20uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0ciAtIEFuIGluc3RydWN0aW9uIG9iamVjdCBjb250YWluaW5nICdhdHRyaWJ1dGUnIGFuZCAndmFsdWUnLlxuICAgKlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiAnYXR0cmlidXRlJyBvciAndmFsdWUnIGlzIG1pc3NpbmcgaW4gdGhlIGluc3RydWN0aW9uIG9iamVjdC5cbiAgICogQHRocm93cyB7RXJyb3J9IFdoZW4gdGhlICdhdHRyaWJ1dGUnIHNwZWNpZmllZCBkb2Vzbid0IHN1cHBvcnQgcmVtb3ZlLlxuICAgKi9cbiAgY29uc3QgX3JlbW92ZSA9IChlbGVtZW50LCBpbnN0cikgPT4ge1xuICAgIGlmICghaW5zdHIuYXR0cmlidXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVGhlIHByb3BlcnRpZXMgJ2F0dHJpYnV0ZScgYW5kICd2YWx1ZScgYXJlIHJlcXVpcmVkIGZvciByZW1vdmUuXCIsXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBlbGVtZW50W2luc3RyLmF0dHJpYnV0ZV0ucmVtb3ZlKGluc3RyLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgYXR0cmlidXRlICcke2luc3RyLmF0dHJpYnV0ZX0nIGRvZXNuJ3Qgc3VwcG9ydCByZW1vdmUuYCxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIENTUyBzdHlsZXMgdG8gdGhlIHByb3ZpZGVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBhcHBseSBzdHlsZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0ciAtIEFuIGluc3RydWN0aW9uIG9iamVjdCBjb250YWluaW5nIHN0eWxlIHByb3BlcnRpZXMgYW5kIHZhbHVlcy5cbiAgICovXG4gIGNvbnN0IF9zdHlsZSA9IChlbGVtZW50LCBpbnN0cikgPT4ge1xuICAgIGZvciAoY29uc3QgW3Byb3AsIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoaW5zdHIpKSB7XG4gICAgICBpZiAocHJvcCAhPT0gJ3NlbGVjdG9yJyAmJiBwcm9wICE9PSAnYWN0aW9uJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBuZXcgY2hpbGRyZW4gdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFNlbGVjdG9yIC0gVGhlIHNlbGVjdG9yIG9mIHRoZSBlbGVtZW50IHRvIHVwZGF0ZSBjaGlsZHJlbiBvZi5cbiAgICogQHBhcmFtIHtBcnJheX0gY2hpbGRyZW4gLSBBbiBhcnJheSBvZiBjaGlsZHJlbiB0byBiZSBhZGRlZC5cbiAgICogQHRocm93cyB7RXJyb3J9IElmICdjaGlsZHJlbicgaXMgbm90IGFuIGFycmF5LlxuICAgKi9cbiAgY29uc3QgX2FkZENoaWxkcmVuID0gKHBhcmVudFNlbGVjdG9yLCBjaGlsZHJlbikgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2hpbGRyZW4gbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBjcmVhdGUoY2hpbGQsIHBhcmVudFNlbGVjdG9yLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSBhbiBlbGVtZW50IGJhc2VkIG9uIGEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50U2VsZWN0b3IgLSBUaGUgc2VsZWN0b3Igb2YgdGhlIGVsZW1lbnQgdG8gdXBkYXRlIGNoaWxkcmVuIG9mLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIGZvciBjaGlsZHJlbiB0byBiZSBkZWxldGVkLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGVsZW1lbnQgc3BlY2lmaWVkIGJ5ICdwYXJlbnRTZWxlY3RvcicgaXMgbm90IGZvdW5kIGluIHRoZSBET00uXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiAncHJlZGljYXRlJyBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0IF9yZW1vdmVDaGlsZCA9IChwYXJlbnRTZWxlY3RvciwgcHJlZGljYXRlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGVsZW1lbnQgKCR7cGFyZW50U2VsZWN0b3J9KSBpcyBub3QgZm91bmQgaW4gdGhlIERPTS5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBib29sZWFuIHZhbHVlJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHBhcmVudC5jaGlsZE5vZGVzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByZW1vdmUgPSBwcmVkaWNhdGUoY2hpbGROb2Rlc1tpXSwgaSk7XG5cbiAgICAgIGlmIChyZW1vdmUpIGNoaWxkTm9kZXNbaV0ucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnQsIHJlcGxhY2luZyB0aGUgZXhpc3RpbmcgY2hpbGRyZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRTZWxlY3RvciAtIFRoZSBzZWxlY3RvciBvZiB0aGUgZWxlbWVudCB0byB1cGRhdGUgY2hpbGRyZW4gb2YuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGNoaWxkcmVuIC0gQW4gYXJyYXkgb2YgbmV3IGNoaWxkcmVuIHRvIGJlIGFkZGVkLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgJ2NoaWxkcmVuJyBpcyBub3QgYW4gYXJyYXkuXG4gICAqL1xuICBjb25zdCBfdXBkYXRlQ2hpbGRyZW4gPSAocGFyZW50U2VsZWN0b3IsIGNoaWxkcmVuKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjaGlsZHJlbiBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cblxuICAgIC8vIENsZWFyIGNoaWxkcmVuXG4gICAgdXBkYXRlKHsgc2VsZWN0b3I6IHBhcmVudFNlbGVjdG9yLCBhY3Rpb246ICd1cGRhdGUnLCBpbm5lckhUTUw6ICcnIH0pO1xuXG4gICAgLy8gQWRkIG5ldyBjaGlsZHJlblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNyZWF0ZShjaGlsZCwgcGFyZW50U2VsZWN0b3IsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTW9kaWZpZXMgdGhlIGluZm9ybWF0aW9uIGFuZCBhdHRyaWJ1dGVzIG9mIGVsZW1lbnRzIGluIHRoZSBET00gYmFzZWQgb24gdGhlIHByb3ZpZGVkIGluc3RydWN0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGluc3RyIC0gQ29udGFpbnMgaW5mb3JtYXRpb24gb2YgdGhlIGVsZW1lbnQgdG8gYmUgbW9kaWZpZWQgYW5kIGhvdyBpdCBzaG91bGQgYmUgbW9kaWZpZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnN0ci5zZWxlY3RvciAtIEEgc3RyaW5nIHRvIHNlbGVjdCB0aGUgZWxlbWVudCB0byBiZSBtb2RpZmllZC5cbiAgICogQHBhcmFtIHsndG9nZ2xlJyB8ICdyZXBsYWNlJyB8ICdyZXBsYWNlQWxsJyB8ICd1cGRhdGUnIHwgJ2FkZCcgfCAncmVtb3ZlJyB8ICdzdHlsZScgfCAnYWRkQ2hpbGRyZW4nIHwgJ3JlbW92ZUNoaWxkJyB8ICd1cGRhdGVDaGlsZHJlbicgfSBpbnN0ci5hY3Rpb24gLSBUaGUgYWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBhbGwgLSBBIGJvb2xlYW4gdmFsdWUgdG8gc3BlY2lmeSBpZiB0aGUgZmlyc3Qgb3IgYWxsIGl0ZW1zIG1hdGNoaW5nIHRoZSBzZWxlY3RvciBzaG91bGQgYmUgdXBkYXRlZFxuICAgKlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiB0aGUgJ3NlbGVjdG9yJyBwcm9wZXJ0eSBpcyBtaXNzaW5nIGluIGluc3RyLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gV2hlbiB0aGUgJ2FjdGlvbicgcHJvcGVydHkgaXMgbWlzc2luZyBpbiBpbnN0ci5cbiAgICogQHRocm93cyB7RXJyb3J9IFdoZW4gdGhlIGVsZW1lbnQgaXMgbm90IGZvdW5kIGluIHRoZSBET00uXG4gICAqL1xuICBjb25zdCB1cGRhdGUgPSAoaW5zdHIsIGFsbCA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpbnN0ci5zZWxlY3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb3BlcnR5ICdzZWxlY3RvcicgaXMgcmVxdWlyZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICghaW5zdHIuYWN0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvcGVydHkgJ2FjdGlvbicgaXMgcmVxdWlyZWQuXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBhbGxcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbnN0ci5zZWxlY3RvcilcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnN0ci5zZWxlY3Rvcik7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCAnJHtpbnN0ci5zZWxlY3Rvcn0nIGRvZXMgbm90IGV4aXN0IGluIHRoZSBET01gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBseVVwZGF0ZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgaWYgKGFsbCkge1xuICAgICAgICBlbGVtZW50LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjYWxsYmFjayhpdGVtLCBpbnN0cik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soZWxlbWVudCwgaW5zdHIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2l0Y2ggKGluc3RyLmFjdGlvbikge1xuICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgYXBwbHlVcGRhdGUoX3RvZ2dsZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgYXBwbHlVcGRhdGUoX3JlcGxhY2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmVwbGFjZUFsbCc6XG4gICAgICAgIGFwcGx5VXBkYXRlKF9yZXBsYWNlQWxsKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgIGFwcGx5VXBkYXRlKF91cGRhdGUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgYXBwbHlVcGRhdGUoX2FkZCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICBhcHBseVVwZGF0ZShfcmVtb3ZlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgYXBwbHlVcGRhdGUoX3N0eWxlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2FkZENoaWxkcmVuJzpcbiAgICAgICAgX2FkZENoaWxkcmVuKGluc3RyLnNlbGVjdG9yLCBpbnN0ci5jaGlsZHJlbik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyZW1vdmVDaGlsZCc6XG4gICAgICAgIF9yZW1vdmVDaGlsZChpbnN0ci5zZWxlY3RvciwgaW5zdHIucHJlZGljYXRlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3VwZGF0ZUNoaWxkcmVuJzpcbiAgICAgICAgX3VwZGF0ZUNoaWxkcmVuKGluc3RyLnNlbGVjdG9yLCBpbnN0ci5jaGlsZHJlbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGUsIHJlYWQsIHJlbW92ZSwgdXBkYXRlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21NYW5hZ2VyKCk7XG4iLCJpbXBvcnQgZG9tTWFuYWdlciBmcm9tICcuL2RvbU1hbmFnZXInO1xuXG4vKipcbiAqIFRoZSByb3V0ZXIgbW9kdWxlIGlzIHJlc3BvbnNpYmxlIGZvciByZWdpc3RlcmluZyByb3V0ZXMsIGxpbmtpbmcgcGFnZXMsIGFuZCBjb25maWd1cmluZyBVUkxzLlxuICovXG5jb25zdCByb3V0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IF9wYWdlcyA9IFtdO1xuICBjb25zdCBfcm91dGVzID0gW107XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgcHJvdmlkZWQgcm91dGVzLCBhbGxvd2luZyB0aGVtIHRvIGJlIHVzZWQgbGF0ZXIgZm9yIG5hdmlnYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcm91dGVzIC0gQW4gYXJyYXkgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcm91dGVzIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEVhY2ggcm91dGUgb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuICAgKiAtIGBpZGAgKHN0cmluZyk6IEEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSByb3V0ZS5cbiAgICogLSBgcm91dGVgIChPYmplY3QpOiBBbiBvYmplY3QgY29udGFpbmluZyBhIGNvbXBvbmVudCB0byBlYmUgcmVuZGVyZWQgYnkgZG9tTWFuYWdlci5cbiAgICpcbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBgcmVnaXN0ZXJgIGZ1bmN0aW9uIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGByb3V0ZXNgIHBhcmFtZXRlciBpcyBub3QgYW4gYXJyYXkuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhbnkgaXRlbSBpbiB0aGUgYHJvdXRlc2AgYXJyYXkgaXMgbm90IGFuIG9iamVjdCB3aXRoIGtleS12YWx1ZSBwYWlycy5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIGFueSBpdGVtIGluIHRoZSBgcm91dGVzYCBhcnJheSBkb2VzIG5vdCBoYXZlIHRoZSByZXF1aXJlZCAnaWQnIGFuZCAncm91dGUnIGtleXMuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBhbnkgcm91dGVzIHNoYXJlIHRoZSBzYW1lICdpZCcuXG4gICAqL1xuICBjb25zdCByZWdpc3RlciA9IChyb3V0ZXMpID0+IHtcbiAgICBpZiAoX3BhZ2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVnaXN0ZXIgc2hvdWxkIG9ubHkgYmUgdXNlZCAoaW52b2tlZCkgb25jZSB0aHJvdWdob3V0IHRoZSBhcHAnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm91dGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWdpc3RlciBleHBlY3RzIHJvdXRlcyB0byBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgaWYgKFxuICAgICAgICAhKHJvdXRlICE9PSBudWxsICYmIHR5cGVvZiByb3V0ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocm91dGUpKVxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnRWFjaCBpdGVtIChyb3V0ZSkgaW5zaWRlIHJvdXRlcyBpcyBleHBlY3RlZCB0byBiZSBhbiBvYmplY3Qgd2l0aCBrZXkgYW5kIHZhbHVlIHBhaXJzLicsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHJvdXRlLmlkICYmIHJvdXRlLnJvdXRlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0VhY2ggaXRlbSAocm91dGUpIGluc2lkZSByb3V0ZXMgaXMgZXhwZWN0ZWQgdG8gaGF2ZSBpZCBhbmQgcm91dGUgYXMgaXRzIGtleXMuJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgcm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyb3V0ZXNbaV0uaWQgPT09IHJvdXRlLmlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEFsbCByb3V0ZXMgc2hvdWxkIGhhdmUgdW5pcXVlIElEcy4gUm91dGUgYXQgaW5kZXggJHtpfSBhbmQgJHtpbmRleH0gc2hhcmUgdGhlIElEICR7cm91dGUuaWR9YCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgX3BhZ2VzLnB1c2gocm91dGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfZGVhY3RpdmF0ZSA9IChuYW1lKSA9PiB7XG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiBfcm91dGVzKSB7XG4gICAgICBpZiAocm91dGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByb3V0ZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29uZmlndXJlcyBhIGxpbmsgd2l0aCB0aGUgcHJvdmlkZWQgbGluayBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGxpbmtJbmZvIC0gVGhlIGxpbmsgaW5mb3JtYXRpb24gb2JqZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlua0luZm8ubmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBsaW5rLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGlua0luZm8udG8gLSBUaGUgSUQgb2YgdGhlIHBhZ2UgdG8gbGluayB0by5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsaW5rSW5mby5ob3N0XSAtIFRoZSBzZWxlY3RvciBvZiB0aGUgZWxlbWVudCB0byBob3N0IHRoZSBwYWdlLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBsaW5rSW5mby5lbGVtZW50IC0gVGhlIEhUTUwgZWxlbWVudCB0byBhdHRhY2ggdGhlIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsaW5rSW5mby5hbmltYXRlXSAtIEEgc21vb3RoIHRyYW5zaXRpb24gaXMgYWRkZWQgd2hlbiBwYWdlcyBhcmUgY2hhbmdpbmcgaWYgYW5pbWF0ZSBpcyB0cnVlXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgbGlua0luZm8gb2JqZWN0IGlzIG1pc3NpbmcgJ25hbWUsJyAndG8sJyBvciAnZWxlbWVudCcgcHJvcGVydGllcy5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBzcGVjaWZpZWQgcGFnZSBJRCAoJ3RvJykgZG9lcyBub3QgbWF0Y2ggYW55IHJlZ2lzdGVyZWQgcGFnZXMuXG4gICAqL1xuICBjb25zdCBjb25maWd1cmVMaW5rID0gKGxpbmtJbmZvKSA9PiB7XG4gICAgaWYgKCFsaW5rSW5mby5uYW1lIHx8ICFsaW5rSW5mby50byB8fCAhbGlua0luZm8uZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnbGlua0luZm8gc2hvdWxkIGNvbnRhaW4gbmFtZSwgdG8sIGFuZCBlbGVtZW50IGFzIGl0cyBwcm9wZXJ0aWVzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZ2UgPSBfcGFnZXMuZmluZCgocGFnZSkgPT4gcGFnZS5pZCA9PT0gbGlua0luZm8udG8pO1xuICAgIGlmICghcGFnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlcmUgYXJlIG5vIHJlZ2lzdGVyZWQgcGFnZSB3aXRoIHRoZSBpZCBvZiAke2xpbmtJbmZvLnRvfWAsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbGlua0luZm8gb2JqZWN0IHRvIHRoZSByb3V0ZXMgYXJyYXlcbiAgICBfcm91dGVzLnB1c2gobGlua0luZm8pO1xuXG4gICAgbGlua0luZm8uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIERlYWN0aXZhdGUgYWxsIGxpbmtzXG4gICAgICBfZGVhY3RpdmF0ZShsaW5rSW5mby5uYW1lKTtcblxuICAgICAgaWYgKGxpbmtJbmZvLmFuaW1hdGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIHRoZSBlbGVtZW50IGZvciB0aGUgcGFnZVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBsaW5rSW5mby5ob3N0ID8gbGlua0luZm8uaG9zdCA6ICcjcm9vdCc7XG4gICAgICBkb21NYW5hZ2VyLmNyZWF0ZShwYWdlLnJvdXRlLCBzZWxlY3Rvcik7XG5cbiAgICAgIGlmIChsaW5rSW5mby5hbmltYXRlKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9XG5cbiAgICAgIC8vIEFjdGl2YXRlIHRoZSBsaW5rXG4gICAgICBsaW5rSW5mby5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGNvbmZpZ3VyZUxpbmssIHJlZ2lzdGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIoKTtcbiIsIi8qKlxuICogVGhlIHN0b3JlIG1vZHVsZSBwcm92aWRlcyBhIGNlbnRyYWwgc3RvcmFnZSBtZWNoYW5pc20gZm9yIG1hbmFnaW5nIGFuZCBzaGFyaW5nIGRhdGEgYWNyb3NzIHlvdXIgYXBwbGljYXRpb24uXG4gKiBJdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSwgcmV0cmlldmUsIGFuZCB1cGRhdGUgdmFyaWFibGVzIHdpdGhpbiBhIHByaXZhdGUgc3RvcmUuXG4gKi9cbmNvbnN0IHN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBfc3RvcmUgPSB7fTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgaW5pdGlhbCBzdG9yZSBieSBhY2NlcHRpbmcgYW4gb2JqZWN0IHdpdGgga2V5LXZhbHVlIHBhaXJzLiBUaGlzIGZ1bmN0aW9uIHRocm93cyBhbiBlcnJvclxuICAgKiBpZiBpbnZva2VkIG1vcmUgdGhhbiBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RvcmVPYmplY3QgLSBBbiBvYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgdG8gYmUgc3RvcmVkIGluIHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHRocm93cyB7RXJyb3J9IElmIHN0b3JlT2JqZWN0IGlzIG5vdCBhbiBPYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiBjcmVhdGVTdG9yZSBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlLlxuICAgKi9cbiAgY29uc3QgY3JlYXRlU3RvcmUgPSAoc3RvcmVPYmplY3QpID0+IHtcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICBzdG9yZU9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2Ygc3RvcmVPYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHN0b3JlT2JqZWN0KVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnY3JlYXRlU3RvcmUgZXhwZWN0cyBhbiBPYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMgYXMgaXRzIGFyZ3VtZW50LicsXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhfc3RvcmUpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbiBvbmx5IGNyZWF0ZSBzdG9yZSBvbmNlLicpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oX3N0b3JlLCBzdG9yZU9iamVjdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWVkIGtleSBpbiB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSB2YXJpYWJsZSBzdG9yZWQgaW4gdGhlIHByaXZhdGUgc3RvcmUuXG4gICAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgdW5kZWZpbmVkLlxuICAgKi9cbiAgY29uc3QgZ2V0U3RhdGUgPSAoa2V5KSA9PiBfc3RvcmVba2V5XTtcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWVkIGtleSBpbiB0aGUgc3RvcmUuIElmIHRoZSBrZXkgZG9lc24ndCBleGlzdCwgYW4gZXJyb3IgaXMgdGhyb3duLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgc3RhdGUgdG8gYmUgdXBkYXRlZC5cbiAgICogQHBhcmFtIHsqfSBuZXdWYWx1ZSAtIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBzcGVjaWZpZWQgc3RhdGUuXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUga2V5IGRvZXMgbm90IGV4aXN0IGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGNvbnN0IHVwZGF0ZVN0YXRlID0gKGtleSwgbmV3VmFsdWUpID0+IHtcbiAgICBpZiAoIV9zdG9yZVtrZXldKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEtleSAnJHtrZXl9JyBkb2Vzbid0IGV4aXN0IGluIHN0b3JlYCk7XG4gICAgfVxuXG4gICAgX3N0b3JlW2tleV0gPSBuZXdWYWx1ZTtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVTdG9yZSwgZ2V0U3RhdGUsIHVwZGF0ZVN0YXRlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSgpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeExnIGZyb20gXCJib290c3RyYXAtaWNvbnMvaWNvbnMveC1sZy5zdmdcIjtcbmltcG9ydCB7IGRvbU1hbmFnZXIsIHN0b3JlIH0gZnJvbSBcImRvbS13aXphcmRcIjtcbmltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gXCIuLi9oZWxwZXJzL3VwZGF0ZURpc3BsYXlcIjtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB4ID0ge1xuICAgIGNoaWxkcmVuOiBbeyB0YWdOYW1lOiBcImltZ1wiLCBvcHRpb25zOiB7IHNyYzogeExnIH0gfV0sXG4gICAgb3B0aW9uczoge1xuICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogW3hdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHN0eWxlOiBoZWFkZXJTdHlsZSxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG8gPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zdCB1cGRhdGVUb2RvcyA9IHN0b3JlLmdldFN0YXRlKFwidXBkYXRlVG9kb3NcIik7XG4gICAgdXBkYXRlVG9kb3ModG9kbyk7XG5cbiAgICBkb21NYW5hZ2VyLnVwZGF0ZSh7XG4gICAgICBzZWxlY3RvcjogXCJpbnB1dCN0YXNrLW5hbWVcIixcbiAgICAgIGFjdGlvbjogXCJ1cGRhdGVcIixcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGRpc3BsYXlcbiAgICB1cGRhdGVEaXNwbGF5KCk7XG5cbiAgICAvLyBDbG9zZSBtb2RhbFxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgfTtcblxuICBjb25zdCBpbnB1dCA9IHtcbiAgICB0YWdOYW1lOiBcImlucHV0XCIsXG4gICAgb3B0aW9uczoge1xuICAgICAgcGxhY2Vob2xkZXI6IFwiV3JpdGUgdGhlIHRpdGxlIG9mIHlvdXIgdG9kbyBoZXJlXCIsXG4gICAgICBpZDogXCJ0YXNrLW5hbWVcIixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3R5bGU6IGlucHV0U3R5bGUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxN3B4XCIsXG4gICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIH07XG5cbiAgY29uc3QgYnV0dG9uID0ge1xuICAgIHRhZ05hbWU6IFwiYnV0dG9uXCIsXG4gICAgb3B0aW9uczoge1xuICAgICAgdGV4dENvbnRlbnQ6IFwiU2F2ZSBUb2RvXCIsXG4gICAgICBzdHlsZTogYnV0dG9uU3R5bGUsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRhZ05hbWU6IFwiZm9ybVwiLFxuICAgIGNoaWxkcmVuOiBbaW5wdXQsIGJ1dHRvbl0sXG4gICAgb3B0aW9uczoge1xuICAgICAgc3R5bGU6IHsgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICBvbnN1Ym1pdDogc3VibWl0SGFuZGxlcixcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgZGlhbG9nID0ge1xuICB0YWdOYW1lOiBcImRpYWxvZ1wiLFxuICBjaGlsZHJlbjogW2hlYWRlcigpLCBmb3JtKCldLFxuICBvcHRpb25zOiB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaWFsb2c7XG4iLCJjb25zdCBlbXB0eVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmcgPSB7XG4gICAgdGFnTmFtZTogXCJwXCIsXG4gICAgb3B0aW9uczoge1xuICAgICAgdGV4dENvbnRlbnQ6IFwiTm8gVG9kb3MgWWV0XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTAwcHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBidXR0b24gPSB7XG4gICAgdGFnTmFtZTogXCJidXR0b25cIixcbiAgICBvcHRpb25zOiB7XG4gICAgICB0ZXh0Q29udGVudDogXCJDcmVhdGUgeW91ciBmaXJzdCB0b2RvXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTdweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInB1cnBsZVwiLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IFtoZWFkaW5nLCBidXR0b25dLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNsYXNzTmFtZTogXCJlbXB0eS12aWV3XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbXB0eVZpZXcoKTtcbiIsImNvbnN0IGxlZnREaXYgPSB7XG4gIHRleHQ6IFwiVG9Eb1wiLFxuICBvcHRpb25zOiB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgZm9udFdlaWdodDogODAwLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCByaWdodERpdiA9IHtcbiAgdGV4dDogXCJET00gV2l6YXJkXCIsXG59O1xuXG5jb25zdCBoZWFkZXIgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBpZDogXCJoZWFkZXJcIixcbiAgICBzdHlsZToge1xuICAgICAgcGFkZGluZzogXCIyNXB4IDIwcHhcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwdXJwbGVcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgfSxcbiAgfSxcbiAgY2hpbGRyZW46IFtsZWZ0RGl2LCByaWdodERpdl0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCJpbXBvcnQgeExnIGZyb20gXCJib290c3RyYXAtaWNvbnMvaWNvbnMveC1sZy5zdmdcIjtcbmltcG9ydCB7IGNzc01hbmFnZXIsIHN0b3JlIH0gZnJvbSBcImRvbS13aXphcmRcIjtcbmltcG9ydCB1cGRhdGVEaXNwbGF5IGZyb20gXCIuLi9oZWxwZXJzL3VwZGF0ZURpc3BsYXlcIjtcblxuY3NzTWFuYWdlci5jcmVhdGVDU1NSdWxlcyhbXG4gIHtcbiAgICBcIi5yYWRpb1wiOiBgXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgIGAsXG4gIH0sXG4gIHtcbiAgICBcIi5yYWRpby5jaGVja2VkID4gLmJhbGxcIjogYFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBgLFxuICB9LFxuICB7XG4gICAgXCIudG9kb1wiOiBgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgYCxcbiAgfSxcbiAge1xuICAgIGltZzogYFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGAsXG4gIH0sXG5dKTtcblxuY29uc3QgcmFkaW8gPSAoY2hlY2tlZCwgaWQpID0+ICh7XG4gIG9wdGlvbnM6IHtcbiAgICBjbGFzc0xpc3Q6IFtcInJhZGlvXCIsIGNoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJdLFxuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9IHN0b3JlLmdldFN0YXRlKFwidG9nZ2xlQ29tcGxldGVkXCIpO1xuICAgICAgdG9nZ2xlQ29tcGxldGVkKGlkKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuICB9LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImJhbGxcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5jb25zdCB0YXNrID0gKHRhc2tOYW1lKSA9PiAoeyB0ZXh0OiB0YXNrTmFtZSB9KTtcblxuY29uc3QgeCA9IChpZCkgPT4gKHtcbiAgY2hpbGRyZW46IFt7IHRhZ05hbWU6IFwiaW1nXCIsIG9wdGlvbnM6IHsgc3JjOiB4TGcgfSB9XSxcbiAgb3B0aW9uczoge1xuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlbW92ZVRvZG8gPSBzdG9yZS5nZXRTdGF0ZShcInJlbW92ZVRvZG9cIik7XG4gICAgICByZW1vdmVUb2RvKGlkKTtcbiAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHRvZG8gPSAodG9kb0luZm8pID0+IHtcbiAgY29uc3QgeyBpZCwgY29tcGxldGVkLCB0YXNrTmFtZSB9ID0gdG9kb0luZm87XG5cbiAgY29uc3QgY29udGFpbmVyID0ge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBnYXA6IFwiMTBweFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbcmFkaW8oY29tcGxldGVkLCBpZCksIHRhc2sodGFza05hbWUpXSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBbY29udGFpbmVyLCB4KGlkKV0sXG4gICAgb3B0aW9uczogeyBjbGFzc05hbWU6IFwidG9kb1wiIH0sXG4gICAgYmVmb3JlOiAoZWwpID0+IHtcbiAgICAgIGVsLmRhdGFzZXQuaWQgPSBpZDtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kbztcbiIsImltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgdG9kb3NWaWV3ID0gKHRvZG9zKSA9PiB7XG4gIGNvbnN0IHRvZG9zQ29udGFpbmVyID0ge1xuICAgIG9wdGlvbnM6IHsgY2xhc3NOYW1lOiBcInRvZG9zLWNvbnRhaW5lclwiIH0sXG4gICAgY2hpbGRyZW46IFt7IHRhZ05hbWU6IFwiaDFcIiwgdGV4dDogXCJUb2Rvc1wiIH1dLFxuICB9O1xuXG4gIGZvciAoY29uc3QgdG9kb0luZm8gb2YgdG9kb3MpIHtcbiAgICB0b2Rvc0NvbnRhaW5lci5jaGlsZHJlbi5wdXNoKHRvZG8odG9kb0luZm8pKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvZG8gPSB7XG4gICAgdGV4dDogXCJBZGQgTmV3IFRvZG9cIixcbiAgICBvcHRpb25zOiB7XG4gICAgICBjbGFzc05hbWU6IFwiYWRkLW5ldy10b2RvXCIsXG4gICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICB0b2Rvc0NvbnRhaW5lci5jaGlsZHJlbi5wdXNoKGFkZFRvZG8pO1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9uczogeyBjbGFzc05hbWU6IFwibWFpblwiIH0sXG4gICAgY2hpbGRyZW46IFt0b2Rvc0NvbnRhaW5lcl0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2Rvc1ZpZXc7XG4iLCJpbXBvcnQgeyBkb21NYW5hZ2VyLCBzdG9yZSB9IGZyb20gXCJkb20td2l6YXJkXCI7XG5pbXBvcnQgZW1wdHlWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2VtcHR5Vmlld1wiO1xuaW1wb3J0IHRvZG9zVmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy90b2Rvc1ZpZXdcIjtcblxuY29uc3QgdXBkYXRlRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb3MgPSBzdG9yZS5nZXRTdGF0ZShcInRvZG9zXCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG4gIGhvbWUuY2hpbGROb2Rlc1tob21lLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0ucmVtb3ZlKCk7XG5cbiAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICBkb21NYW5hZ2VyLmNyZWF0ZSh0b2Rvc1ZpZXcodG9kb3MpLCBcIiNob21lXCIsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGRvbU1hbmFnZXIuY3JlYXRlKGVtcHR5VmlldywgXCIjaG9tZVwiLCB0cnVlKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlRGlzcGxheTtcbiIsImltcG9ydCBob21lIGZyb20gXCIuL3JvdXRlcy9ob21lXCI7XG5pbXBvcnQgbGFuZGluZ1BhZ2UgZnJvbSBcIi4vcm91dGVzL2xhbmRpbmdQYWdlXCI7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgeyBpZDogJ2hvbWUnLCByb3V0ZTogaG9tZSB9LFxuICB7IGlkOiAnbGFuZGluZ1BhZ2UnLCByb3V0ZTogbGFuZGluZ1BhZ2UgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsImltcG9ydCB7IGNzc01hbmFnZXIsIHN0b3JlIH0gZnJvbSBcImRvbS13aXphcmRcIjtcbmltcG9ydCBkaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGlhbG9nXCI7XG5pbXBvcnQgZW1wdHlWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2VtcHR5Vmlld1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB0b2Rvc1ZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9kb3NWaWV3XCI7XG5cbmNzc01hbmFnZXIuY3JlYXRlQ1NTUnVsZXMoW1xuICB7XG4gICAgJyNob21lID4gLm1haW4nOiBgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBgXG4gIH0sXG4gIHtcbiAgICAnLmFkZC1uZXctdG9kbyc6IGBcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICBgXG4gIH0sXG4gIHtcbiAgICAnLmFkZC1uZXctdG9kbzpob3Zlcic6IGBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XG4gICAgYFxuICB9XG5dKTtcblxuY29uc3QgdG9kb3MgPSBzdG9yZS5nZXRTdGF0ZSgndG9kb3MnKTtcblxuY29uc3QgaG9tZSA9IHtcbiAgb3B0aW9uczogeyBpZDogJ2hvbWUnIH0sXG4gIGNoaWxkcmVuOiBbaGVhZGVyLCBkaWFsb2csIHRvZG9zLmxlbmd0aCA+IDAgPyB0b2Rvc1ZpZXcodG9kb3MpIDogZW1wdHlWaWV3XVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nID0ge1xuICAgIHRhZ05hbWU6IFwicFwiLFxuICAgIHRleHQ6IFwiVG9kbyBBcHAgTWFkZSBXaXRoIERPTSBXaXphcmRcIixcbiAgICBvcHRpb25zOiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogXCI0cmVtXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTAwcHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBidXR0b24gPSB7XG4gICAgdGFnTmFtZTogXCJidXR0b25cIixcbiAgICBsaW5rOiB7XG4gICAgICBuYW1lOiBcImJ1dHRvblwiLFxuICAgICAgdG86IFwiaG9tZVwiLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdGV4dENvbnRlbnQ6IFwiR2V0IFN0YXJ0ZWRcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxN3B4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHVycGxlXCIsXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogW2hlYWRpbmcsIGJ1dHRvbl0sXG4gICAgb3B0aW9uczoge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgbGFuZGluZ1BhZ2UgPSB7XG4gIGNoaWxkcmVuOiBbaGVhZGVyLCBtYWluQ29udGVudCgpXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmRpbmdQYWdlO1xuIiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiZG9tLXdpemFyZFwiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuXG5zdG9yZS5jcmVhdGVTdG9yZSh7XG4gIHRvZG9zOiBbXSxcblxuICB1cGRhdGVUb2RvczogKG5ld1RvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IHN0b3JlLmdldFN0YXRlKFwidG9kb3NcIik7XG4gICAgdG9kb3MucHVzaCh7IGlkOiBcImRcIiArIG5hbm9pZCgpLCBjb21wbGV0ZWQ6IGZhbHNlLCB0YXNrTmFtZTogbmV3VG9kbyB9KTtcbiAgICBzdG9yZS51cGRhdGVTdGF0ZShcInRvZG9zXCIsIHRvZG9zKTtcbiAgfSxcblxuICB0b2dnbGVDb21wbGV0ZWQ6IChpZCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gc3RvcmUuZ2V0U3RhdGUoXCJ0b2Rvc1wiKTtcbiAgICBjb25zdCBuZXdUb2RvcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICB9XG5cbiAgICAgIG5ld1RvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgc3RvcmUudXBkYXRlU3RhdGUoXCJ0b2Rvc1wiLCBuZXdUb2Rvcyk7XG4gIH0sXG5cbiAgcmVtb3ZlVG9kbzogKGlkKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBzdG9yZS5nZXRTdGF0ZShcInRvZG9zXCIpO1xuXG4gICAgY29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgc3RvcmUudXBkYXRlU3RhdGUoXCJ0b2Rvc1wiLCB0b2Rvcyk7XG4gIH0sXG59KTtcbiIsImltcG9ydCB7IGRvbU1hbmFnZXIsIHJvdXRlciB9IGZyb20gJ2RvbS13aXphcmQnO1xuaW1wb3J0IGxhbmRpbmdQYWdlIGZyb20gJy4vcm91dGVzL2xhbmRpbmdQYWdlJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXInO1xuXG5yb3V0ZXIucmVnaXN0ZXIocm91dGVzKTtcbmRvbU1hbmFnZXIuY3JlYXRlKGxhbmRpbmdQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=