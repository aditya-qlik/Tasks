// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submit = exports.operation = exports.number2 = exports.number1 = void 0;
const number1 = document.getElementById('num1');
exports.number1 = number1;
const number2 = document.getElementById('num2');
exports.number2 = number2;
const operation = document.querySelector('#operator');
exports.operation = operation;
const submit = document.querySelector('[name="submit"]');
exports.submit = submit;
},{}],"validation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkNumber1 = checkNumber1;
exports.checkNumber2 = checkNumber2;

var element = _interopRequireWildcard(require("./elements.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-restricted-globals */

/* eslint-disable no-console */
function checkNumber1() {
  const num1 = parseFloat(element.number1.value);
  const valueOfNumber1 = element.number1.value;

  if (valueOfNumber1 === '') {
    console.error(`Enter a NUMBER `);
    return undefined;
  }

  if (isNaN(num1)) {
    console.error(`Enter a NUMBER `);
    element.number1.value = '';
    return undefined;
  }

  return num1;
}

function checkNumber2() {
  const num2 = parseFloat(element.number2.value);
  const valueOfNumber2 = element.number2.value;

  if (valueOfNumber2 === '') {
    console.error(`Enter a NUMBER `);
    return undefined;
  }

  if (isNaN(num2)) {
    console.error(`Enter a NUMBER`);
    element.number2.value = '';
    return undefined;
  }

  return num2;
}
},{"./elements.js":"elements.js"}],"addition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function add(valueOfNum1 = 0, valueOfNum2 = 0) {
  return valueOfNum1 + valueOfNum2;
}

var _default = add;
exports.default = _default;
},{}],"subtraction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function subtraction(valueOfNum1 = 0, valueOfNum2 = 0) {
  return valueOfNum1 - valueOfNum2;
}

var _default = subtraction;
exports.default = _default;
},{}],"multiplication.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function multiplication(valueOfNum1 = 0, valueOfNum2 = 1) {
  return valueOfNum1 * valueOfNum2;
}

var _default = multiplication;
exports.default = _default;
},{}],"division.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-console */
function division(valueOfNum1 = 0, valueOfNum2 = 1) {
  console.log(valueOfNum2);

  if (valueOfNum2 === 0) {
    console.error(`2nd Number can't be 0`);
    return `<strong style="color:red;">ERROR!!!! 2nd Number can't be 0</strong>`;
  } else {
    return valueOfNum1 / valueOfNum2;
  }
}

var _default = division;
exports.default = _default;
},{}],"modulus.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-restricted-globals */

/* eslint-disable no-console */
function modulus(valueOfNum2, valueOfNum1 = 0) {
  console.log(valueOfNum2);

  if (valueOfNum2 === 0 || isNaN(valueOfNum2)) {
    console.error(`2nd Number can't be 0`);
    return `<strong style="color:red;">ERROR!!!! 2nd Number can't be 0</strong>`;
  } else {
    return valueOfNum1 % valueOfNum2;
  }
}

var _default = modulus;
exports.default = _default;
},{}],"util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayResult = displayResult;
exports.clear = clear;

var _elements = require("./elements.js");

/* eslint-disable no-console */
function displayResult(toBeDisplayed) {
  document.querySelector('#displayResult').innerHTML = toBeDisplayed; // console.log(toBeDisplayed);
}

function clear() {
  console.clear();
  _elements.number1.value = '';
  _elements.number2.value = '';
  document.querySelector('#displayResult').innerHTML = '';
}
},{"./elements.js":"elements.js"}],"calculate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validation = require("./validation.js");

var _addition = _interopRequireDefault(require("./addition.js"));

var _subtraction = _interopRequireDefault(require("./subtraction.js"));

var _multiplication = _interopRequireDefault(require("./multiplication.js"));

var _division = _interopRequireDefault(require("./division.js"));

var _modulus = _interopRequireDefault(require("./modulus"));

var _util = require("./util.js");

var _elements = require("./elements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calculate() {
  const num1 = (0, _validation.checkNumber1)();
  const num2 = (0, _validation.checkNumber2)();
  const operator = _elements.operation.value; // eslint-disable-next-line no-console

  console.log(num1, num2);
  let printOut;

  switch (operator) {
    case '+':
      printOut = `The sum of ${num1} and ${num2} is ${(0, _addition.default)(num1, num2)}`;
      break;

    case '-':
      printOut = `The difference of ${num1} and ${num2} is ${(0, _subtraction.default)(num1, num2)}`;
      break;

    case '*':
      printOut = `The product of ${num1} and ${num2} is ${(0, _multiplication.default)(num1, num2)}`;
      break;

    case '/':
      printOut = `The quotient of ${num1} and ${num2} is ${(0, _division.default)(num1, num2)}`;
      break;

    case '%':
      printOut = ` The modulus of ${num1} and ${num2} is ${(0, _modulus.default)(num2, num1)}`;
      break;

    default:
      printOut = `Invalid operator`;
  }

  (0, _util.displayResult)(printOut);
}

var _default = calculate;
exports.default = _default;
},{"./validation.js":"validation.js","./addition.js":"addition.js","./subtraction.js":"subtraction.js","./multiplication.js":"multiplication.js","./division.js":"division.js","./modulus":"modulus.js","./util.js":"util.js","./elements.js":"elements.js"}],"script.js":[function(require,module,exports) {
"use strict";

var element = _interopRequireWildcard(require("./elements.js"));

var _validation = require("./validation.js");

var _calculate = _interopRequireDefault(require("./calculate.js"));

var _util = require("./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

element.number1.addEventListener('blur', _validation.checkNumber1);
element.number2.addEventListener('blur', _validation.checkNumber2);
element.submit.addEventListener('click', _calculate.default);
document.querySelector('#clean').addEventListener('click', _util.clear);
},{"./elements.js":"elements.js","./validation.js":"validation.js","./calculate.js":"calculate.js","./util.js":"util.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60141" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map