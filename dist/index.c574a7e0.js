// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2G3IT":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5fd1119ec574a7e0";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gJRPm":[function(require,module,exports) {
var _randomPostJs = require("./post/RandomPost.js");
var _scrollJs = require("./feed/Scroll.js");
class App {
    constructor(elo){
        this.addInitialPosts();
        this.init();
    }
    init() {
        const sc = new _scrollJs.Scroll();
    }
    async addInitialPosts() {
        for(let index = 0; index < 2; index++)await new _randomPostJs.RandomPost().add();
    }
}
new App();

},{"./feed/Scroll.js":"7zfbI","./post/RandomPost.js":"hJZoe"}],"7zfbI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scroll", ()=>Scroll
);
var _randomPostJs = require("../post/RandomPost.js");
class Scroll {
    constructor(){
        this.lastPhotoFetchTimestamp = -Infinity;
        this.postFetchDelay = 500;
        this.initFeedHandler();
    }
    initFeedHandler() {
        this.feedContainer = document.getElementById('app-content');
        this.feedContainer.addEventListener('scroll', ()=>this.feedScrollHandler()
        );
    }
    getPostsHeight() {
        const posts = [
            ...document.querySelectorAll('.post')
        ];
        posts.forEach((post, id)=>posts[id] = post.offsetHeight
        );
        const height = posts.reduce((prev, curr)=>prev + curr
        , 0);
        return height;
    }
    getLastPostHeight() {
        const lastPost = document.querySelector('.post:last-child');
        return lastPost.offsetHeight;
    }
    getMsFromLastFetch() {
        return Date.now() - this.lastPhotoFetchTimestamp;
    }
    feedScrollHandler() {
        const feedHeight = this.getPostsHeight();
        const postFetchHeightThreshold = this.getLastPostHeight() * 1.4;
        if (this.feedContainer.scrollTop > feedHeight - postFetchHeightThreshold) {
            if (this.getMsFromLastFetch() > this.postFetchDelay) {
                new _randomPostJs.RandomPost().add();
                this.lastPhotoFetchTimestamp = Date.now();
            } else if (this.getMsFromLastFetch() < this.postFetchDelay) setTimeout(()=>{
                this.feedScrollHandler();
            }, this.postFetchDelay - this.getMsFromLastFetch());
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../post/RandomPost.js":"hJZoe"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hJZoe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RandomPost", ()=>RandomPost
);
var _namesJs = require("./data/Names.js");
var _descJs = require("./data/Desc.js");
var _postUtilsJs = require("./PostUtils.js");
class RandomPost extends _postUtilsJs.PostUtils {
    constructor(){
        super(_namesJs.getRandomName(), _descJs.getRandomSentence(), (Math.random() * 1000000).toFixed(0));
    }
    async add() {
        const postImageURL = await this.fetchImage();
        const profileImageURL = await this.fetchImage();
        const appFeedHook = document.getElementById('app-content');
        const postEl = this.postTemplateEl;
        postEl.querySelector('.post-photo img').src = postImageURL;
        postEl.querySelector('.post-user-img img').src = profileImageURL;
        await appFeedHook.append(postEl);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./PostUtils.js":"izjbP","./data/Names.js":"8Jz8L","./data/Desc.js":"hp7bG"}],"izjbP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostUtils", ()=>PostUtils
);
class PostUtils {
    constructor(username, description = '', likes = 0){
        this.postTemplateEl = document.getElementById('post-template').content.cloneNode(true);
        this.username = username;
        if (description) this.desc = description;
        this.likeCount = likes;
    }
    initPostElementsHook() {
        this.username;
    }
    set likeCount(likeAmount) {
        this.postTemplateEl.querySelector('.like-count span').textContent = likeAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    set username(username) {
        this.postTemplateEl.querySelector('.post-user-name').textContent = username;
        this.postTemplateEl.querySelector('.summary-username').textContent = username;
        this.postTemplateEl.querySelector('.details-username').textContent = username;
    }
    set desc(desc) {
        const descEl = this.postTemplateEl.querySelector('.description');
        descEl.textContent = desc;
        this.addHideDescButton(descEl);
        this.postTemplateEl.querySelector('summary span').textContent = this.generateDescPeekString(desc);
    }
    async fetchImage() {
        const resp = await fetch('https://picsum.photos/200');
        if (!resp.ok) return new URL(require("e87461f31f62f5eb"));
        return resp.url;
    }
    generateDescPeekString(desc) {
        const arr = desc.split(' ');
        const peekArr = arr.map((sentence, id)=>{
            if (id > 3) return;
            else return sentence;
        });
        return peekArr.join(' ').trim() + '...';
    }
    addHideDescButton(target) {
        const hideDesc = document.createElement('span');
        hideDesc.className = 'show-hide-btn-post';
        hideDesc.textContent = ' hide';
        hideDesc.addEventListener('click', ()=>{
            hideDesc.closest('details').open = false;
        });
        target.append(hideDesc);
    }
}

},{"e87461f31f62f5eb":"6GlWr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GlWr":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8e1QZ') + "placeholder.3f6dbcbe.webp" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"8Jz8L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomName", ()=>getRandomName
);
const names = [
    'Maizey',
    'Rhyker',
    'Crispin',
    'Karlie',
    'Xavion',
    'Maleyah',
    'Avi',
    'Bradyn',
    'Briar',
    'Lailah',
    'Jorden',
    'Easten',
    'Amiyah',
    'Karder',
    'Natania',
    'Zavian',
    'Bernardo',
    'Courtland',
    'Tori',
    'Marwa',
    'Giovanni',
    'Meena',
    'Ishaan',
    'Able',
    'Dua',
    'Jose',
    'Indra',
    'Mabel',
    'Raleigh',
    'Shayna',
    'Carrington',
    'Akeem',
    'Aranza',
    'Ahaan',
    'Christian',
    'Leonna',
    'Augustus',
    'Amberlynn',
    'Rory',
    'Kourtney',
    'Locklyn',
    'Miguelangel',
    'Austin',
    'Zacchaeus',
    'Muriel',
    'Harry',
    'Lazer',
    'Brynlee',
    'Salvatore',
    'Arden',
    'Saanvi',
    'Noor',
    'Clifton',
    'Lindy',
    'Brithany',
    'Daryl',
    'Tony',
    'Talynn',
    'Daisy',
    'Samual',
    'Andie',
    'Manuel',
    'Dietrich',
    'Mckayla',
    'Gaven',
    'Ashwin',
    'Bowman',
    'Andreas',
    'Jamyah',
    'Kordell',
    'Moxie',
    'Shannon',
    'Nika',
    'Dionte',
    'Risha',
    'Erianna',
    'Karis',
    'Laken',
    'Kaylana',
    'Taylar',
    'Zekiel',
    'Kai',
    'Kyaire',
    'Finnley',
    'Mccoy',
    'Everette',
    'Raider',
    'Rayven',
    'Tayton',
    'Kylea',
    'Larkin',
    'Tomas',
    'Anand',
    'Samia',
    'Amaiah',
    'Bakari',
    'Minnie',
    'Reese',
    'Zakai',
    'Rowynn',
    'Amiliana',
    'Oliver',
    'Brayden',
    'Laniyah',
    'Brycen',
    'Damoni',
    'Maryanne',
    'Koltyn',
    'Aleiah',
    'Jocelynn',
    'Giavanna',
    'Analynn',
    'Hallee',
    'Jerome',
    'Cullen',
    'Elyas',
    'Ken',
    'Edyn',
    'Hanah',
    'Troy',
    'Gerardo',
    'Renesmee',
    'Veera',
    'Laia',
    'Calee',
    'Takoda',
    'Nessa',
    'Nellie',
    'Ryan',
    'Krystal',
    'Audrielle',
    'Dirk',
    'Rio',
    'Dublin',
    'Presley',
    'Britney',
    'Lillyann',
    'Eleanora',
    'Kyrin',
    'Aleena',
    'Sanaya',
    'Leliana',
    'Sunshine',
    'Saryah',
    'Khyree',
    'Thiago',
    'Aminata',
    'Talia',
    'Atlas',
    'Fernando',
    'Mara',
    'Pablo',
    'Jaysen',
    'Bjorn',
    'Liviana',
    'Yulian',
    'Ambrielle',
    'Blessyn',
    'Bayan',
    'Reanna',
    'Maite',
    'Ainhoa',
    'Cinthia',
    'Bracha',
    'Maximilliano',
    'Jett',
    'Ike',
    'Alasdair',
    'Habiba',
    'Aylee',
    'Samaria',
    'Finnigan',
    'Fynn',
    'Rueben',
    'Jameria',
    'Delia',
    'Aizen',
    'Mayleigh',
    'Parker',
    'Ronen',
    'Andi',
    'Billy',
    'Emir',
    'Alyzah',
    'Abdallah',
    'Cobe',
    'Wesson',
    'Morrison',
    'Colten',
    'Imari',
    'Exodus',
    'Rilyn',
    'Andrew',
    'Bayley',
    'Camden',
    'Aryelle',
    'Adon',
    'Tallon',
    'Divine',
    'Croix',
    'Sephora',
    'Sanjay',
    'Dakotah',
    'Kelvin',
    'Manal',
    'Alayah',
    'Hermione',
    'Arizbeth',
    'Nixie',
    'Reid',
    'Kairi',
    'Masyn',
    'Franki',
    'Halina',
    'Jolie',
    'Aryeh',
    'Arlan',
    'Alanie',
    'Brinley',
    'Eowyn',
    'Kylei',
    'Izrael',
    'Vanesa',
    'Mariama',
    'Naeem',
    'Marlo',
    'Korben',
    'Siya',
    'Denny',
    'Royal',
    'Mason',
    'Dejon',
    'Charisma',
    'Shani',
    'Soliana',
    'Janey',
    'Gio',
    'Salem',
    'Daksh',
    'Rayyan',
    'Houston',
    'Aydan',
    'Klara',
    'Goldy',
    'Antoine',
    'Alinah',
    'Isael',
    'Fayth',
    'Aribella',
    'Celia',
    'Raisa',
    'Emmy',
    'Aaryn',
    'Navya',
    'Aspen',
    'Jiya',
    'Didier',
    'Kayde',
    'Natan',
    'Kirk',
    'Oriana',
    'Alix',
    'Stetson',
    'Annastasia',
    'Kevon',
    'Kelly',
    'Maelani',
    'Malachi',
    'Fabrizio',
    'Ajah',
    'Annamarie',
    'Kensie',
    'Gus',
    'Joachim',
    'Inna',
    'Cru',
    'Dillon',
    'Maysen',
    'Lexie',
    'Nickolas',
    'Abhay',
    'Angelita',
    'Roland',
    'Emilly',
    'Armani',
    'Dania',
    'Kalleigh',
    'Neil',
    'Jordyn',
    'Cornelius',
    'Niam',
    'Anahy',
    'Hernan',
    'Ishani',
    'Sahana',
    'Kye',
    'Adaya',
    'Dalilah',
    'Emmi',
    'Janelle',
    'Darnell',
    'Jordy',
    'Riona',
    'Aking',
    'Lyndi',
    'Kaylen',
    'Anai',
    'Nicholai',
    'Irelynn',
    'Katherin',
    'Jailyn',
    'Makenna',
    'Caraline',
    'Rudra',
    'Kameren',
    'Devin',
    'Allisyn',
    'Kingston',
    'Maxemiliano',
    'Rishan',
    'July',
    'Addisyn',
    'Reign',
    'Anniston',
    'Marigold',
    'Jaelynn',
    'Lachlan',
    'Alida',
    'Collyn',
    'Aamir',
    'Pepper',
    'Dontay',
    'Tianna',
    'Summer',
    'Emaan',
    'Rhea',
    'Erick',
    'Franklin',
    'Oden',
    'Francis',
    'Markell',
    'Catherine',
    'Alyanna',
    'Ava',
    'Dre',
    'Yatzil',
    'Matix',
    'Juelz',
    'Kyro',
    'Ursula',
    'Heston',
    'Amelia',
    'Moises',
    'Aydon',
    'Moksh',
    'Kennadi',
    'Khalessi',
    'Bowie',
    'Ebony',
    'Isabel',
    'Mariely',
    'Narek',
    'Jakari',
    'Anastacia',
    'Rosalina',
    'Naveen',
    'Alycia',
    'Morghan',
    'Jerry',
    'Alexandru',
    'Esme',
    'Chace',
    'Daniella',
    'Marietta',
    'Miliani',
    'Skarlett',
    'Makynlee',
    'Viviane',
    'Jeriah',
    'Zyla',
    'Cherry',
    'Sloan',
    'Zamiyah',
    'Denton',
    'Ahmir',
    'Ryken',
    'Lenox',
    'Brenley',
    'Leighton',
    'Jazlyn',
    'Airabella',
    'Shayan',
    'Isabella',
    'Presleigh',
    'Landry',
    'Trinitee',
    'Jahiem',
    'Amberly',
    'Jermani',
    'Koen',
    'Kameryn',
    'Weslyn',
    'Liz',
    'Brandi',
    'Lailani',
    'Sydnee',
    'Nikki',
    'Zade',
    'Amorah',
    'Darsh',
    'Yusra',
    'Tej',
    'Kyng',
    'Benuel',
    'Ehan',
    'Cienna',
    'Kelley',
    'Florence',
    'Stefania',
    'Nicolo',
    'Rayne',
    'Opal',
    'Tionna',
    'Remmi',
    'Janell',
    'Aizah',
    'Evelina',
    'Niko',
    'Karter',
    'Adelie',
    'Stuart',
    'Jenson',
    'Kamani',
    'Raymon',
    'Saige',
    'Bradlee',
    'Tasia',
    'Chastity',
    'Coltyn',
    'Braedon',
    'Azlyn',
    'Lenyx',
    'Leana',
    'Alen',
    'Cody',
    'Annabelle',
    'Juel',
    'Elie',
    'Killian',
    'Mattilyn',
    'Neely',
    'Lavon',
    'Ryon',
    'Dorcas',
    'Amaiya',
    'Ashlin',
    'Alenna',
    'Paris',
    'Eddison',
    'Berklee',
    'Rochelle',
    'Mayson',
    'Ivanna',
    'Leina',
    'Laiah',
    'Alona',
    'Yadier',
    'Haydon',
    'Tai',
    'Yara',
    'Tauriel',
    'Kolbie',
    'Mathilda',
    'Jentry',
    'Bailee',
    'Trent',
    'Devansh',
    'Collins',
    'Stephon',
    'Kailah',
    'Jaeden',
    'Sailor',
    'Dhruv',
    'Kendric',
    'Emeri',
    'Branton',
    'Aisha',
    'Zayra',
    'Mariana',
    'Semaj',
    'Lena',
    'Alyana',
    'Treyson',
    'Ashtin',
    'Kaycen',
    'Kyliee',
    'Annamaria',
    'Karissa',
    'Era',
    'Amilia',
    'Davontae',
    'David',
    'Tess',
    'Payslee',
    'Janna',
    'Kynlie',
    'Dimitrios',
    'Zemirah',
    'Corbyn',
    'Mackenzy',
    'Jaycion',
    'Jailene',
    'Saylor',
    'Dmarion',
    'Evalynn',
    'Cristobal',
    'Avree',
    'Novaleigh',
    'Blaze',
    'Tobin',
    'Avayah',
    'Nia',
    'Avner',
    'Priya',
    'Juancarlos',
    'Klay',
    'Sara',
    'Emery',
    'Tyrese',
    'Isaiah',
    'Hiro',
    'Gianni',
    'Lillian',
    'Rodrick',
    'Kevin',
    'Nava',
    'Valentin',
    'Dariana',
    'Zaara',
    'Rayshawn',
    'Rianna',
    'Kyla',
    'Daniyal',
    'Ria',
    'Najma',
    'Graycen',
    'Laith',
    'Jackie',
    'Shifra',
    'Nevaeha',
    'Stellan',
    'Cal',
    'Lyriq',
    'Eleanore',
    'Rebeca',
    'Daren',
    'Kinzleigh',
    'Jaycee',
    'Abhinav',
    'Rylynn',
    'Leyah',
    'Teresa',
    'Fynlee',
    'Annelise',
    'Thayer',
    'Jocelynne',
    'Kent',
    'Kaavya',
    'Zaydin',
    'Hunter',
    'Katerina',
    'Evette',
    'Trey',
    'Zayla',
    'Elli',
    'Titan',
    'Braydin',
    'Dakotah',
    'Karlyn',
    'Reece',
    'Eesa',
    'Kalin',
    'Lula',
    'Bree',
    'Leeyah',
    'Betsy',
    'Brelynn',
    'Malique',
    'Tyce',
    'Abdulaziz',
    'Salim',
    'Caidence',
    'Talan',
    'Lakshmi',
    'Nicco',
    'Elisabet',
    'Arantxa',
    'Advait',
    'Aletheia',
    'Kodi',
    'Wylie',
    'Aariana',
    'Arik',
    'Jaykob',
    'Huxley',
    'Westen',
    'Liani',
    'Sonya',
    'Mikael',
    'Jozlyn',
    'Emmerson',
    'Kohl',
    'Layne',
    'Baxter',
    'Elexis',
    'Maximiliano',
    'Ellory',
    'Zymere',
    'Townes',
    'Natali',
    'Imogen',
    'Honesti',
    'Herbert',
    'Betzaida',
    'Ayelen',
    'Aidyn',
    'Amadeus',
    'Rashad',
    'Jesse',
    'Maxwell',
    'Kynleigh',
    'Ines',
    'Alexi',
    'Lanna',
    'Maliki',
    'Evaline',
    'Madigan',
    'Unknown',
    'Macoy',
    'Ameera',
    'Egypt',
    'Merritt',
    'Keane',
    'Emalynn',
    'Trever',
    'Tavin',
    'Rex',
    'Honor',
    'Radley',
    'Elan',
    'Lynley',
    'Khaled',
    'Acelynn',
    'Eyad',
    'Kenai',
    'Elliot',
    'Analyn',
    'Moshe',
    'Elana',
    'Birdie',
    'Bridgett',
    'Dawud',
    'Zyriah',
    'Greyson',
    'Jaylyn',
    'Blair',
    'Lilith',
    'Niya',
    'Nicolle',
    'Nazareth',
    'Harlyn',
    'Aarya',
    'Angelika',
    'Makinlee',
    'Camden',
    'Ricki',
    'Stevan',
    'Evamarie',
    'Anderson',
    'Jamiah',
    'Saniya',
    'Coralie',
    'Oliviana',
    'Aura',
    'Navaeh',
    'Mars',
    'Zubair',
    'Breann',
    'Kaydin',
    'Eliott',
    'Jentry',
    'Holly',
    'Leviticus',
    'Brantley',
    'Charles',
    'Jarvis',
    'Efraim',
    'Jamarian',
    'Marshall',
    'Molly',
    'Jaime',
    'Briseis',
    'Damiya',
    'Gianella',
    'Kristy',
    'Azriel',
    'Magdalene',
    'Davina',
    'Karim',
    'Zainab',
    'Radha',
    'Pascal',
    'Cayden',
    'Taegan',
    'Kataleya',
    'Joey',
    'Sherman',
    'Elektra',
    'Xylia',
    'Adisyn',
    'Desean',
    'Kaylen',
    'Lleyton',
    'Danilo',
    'Citlalli',
    'Lorena',
    'Katy',
    'Rashid',
    'Ayat',
    'Jasai',
    'Dorothea',
    'Safiyyah',
    'Tierney',
    'Eero',
    'Jaydan',
    'Allen',
    'Liora',
    'Aleen',
    'Anistyn',
    'Kamara',
    'Jahir',
    'Rivkah',
    'Basya',
    'Carleigh',
    'Alistair',
    'Elizabella',
    'Ila',
    'Dayanara',
    'Aidan',
    'Elisabeth',
    'Jeffrey',
    'Alonna',
    'Britain',
    'Chase',
    'Hazen',
    'Dylan',
    'Khushi',
    'Safia',
    'Raygen',
    'Jacinta',
    'Bailey',
    'Paislee',
    'Fraidy',
    'Malaki',
    'Braxtin',
    'Annalicia',
    'Reese',
    'Kinley',
    'Shneur',
    'Kelcie',
    'Elvin',
    'Saketh',
    'Ellieana',
    'Diesel',
    'Alyna',
    'Shawn',
    'Lillee',
    'Valerie',
    'Rylee',
    'Jaslynn',
    'Jaedon',
    'Shemar',
    'Montana',
    'Kaniyah',
    'Ricky',
    'Arabelle',
    'Gracee',
    'Kimi',
    'Angelina',
    'Baron',
    'Alyah',
    'Wilder',
    'Kelly',
    'Ernest',
    'Sally',
    'Safiya',
    'Maddelyn',
    'Elsy',
    'Abraham',
    'Torrey',
    'Kole',
    'Kelli',
    'Barrett',
    'Nala',
    'Anyah',
    'Christal',
    'Hilda',
    'Vihan',
    'Aston',
    'Carys',
    'Brayan',
    'Inessa',
    'Cameron',
    'Harlow',
    'Tanay',
    'Devonta',
    'Josslyn',
    'Mea',
    'Medha',
    'Erin',
    'Declan',
    'Jawad',
    'Jory',
    'Milena',
    'Dhilan',
    'Estefania',
    'Nolin',
    'Kaitlynn',
    'Lilyanne',
    'Clay',
    'Advay',
    'Kenadee',
    'Scout',
    'Eleena',
    'Morris',
    'Kyah',
    'Kymani',
    'Amaryllis',
    'Kendyl',
    'Ania',
    'Ruslan',
    'Annabel',
    'Eren',
    'Marceline',
    'Ravenna',
    'Calia',
    'Renner',
    'Christen',
    'Ebenezer',
    'Alissandra',
    'Edwin',
    'Evianna',
    'Lia',
    'Rowen',
    'Kennidy',
    'Oona',
    'Lorraine',
    'Aiya',
    'Tamara',
    'Erielle',
    'Keara',
    'Nikko',
    'Usman',
    'Kohen',
    'Vihaan',
    'Jaelah',
    'Karson',
    'Tayden',
    'Keyla',
    'Valery',
    'Cavan',
    'Donnie',
    'Donavin',
    'Ripley',
    'Shaye',
    'Viyan',
    'Jake',
    'Kaidon',
    'Mckenzie',
    'Scotland',
    'Wilbert',
    'Taj',
    'Kerry',
    'Darian',
    'Kaidence',
    'Marguerite',
    'Saydee',
    'Marcell',
    'Aja',
    'Carver',
    'Anela',
    'Effie',
    'Laila',
    'Aloni',
    'Ren',
    'Amri',
    'Shiloh',
    'Kristyn',
    'Sylar',
    'Xia',
    'Simon',
    'Dalary',
    'Kiana',
    'Kailee',
    'Brixton',
    'Bentley',
    'Cecelia',
    'Vikram',
    'Kyden',
    'Thelma',
    'Meera',
    'Hero',
    'Lakin',
    'Hagen',
    'Galileo',
    'Eamonn',
    'Brysen',
    'Emitt',
    'Jocelyne',
    'Makaylah',
    'Deaglan',
    'Kyson',
    'Tilly',
    'Sianna',
    'Arya',
    'Fatuma',
    'Kingstyn',
    'Izayah',
    'Dartagnan',
    'Edwardo',
    'Jathan',
    'Leela',
    'Louella',
    'Pari',
    'Yovani',
    'Eevee',
    'Hafsa',
    'Ilana',
    'Braelyn',
    'Hunter',
    'Julieta',
    'Oaklynn',
    'Gissel',
    'Jerrell',
    'Tina',
    'Minh',
    'Ellis',
    'Valen',
    'Jaiya',
    'Flynn',
    'Paityn',
    'Shaylynn',
    'Aymen',
    'Zyion',
    'Aleeyah',
    'Griffin',
    'Avyukth',
    'Naomie',
    'Juan',
    'Bellarose',
    'Judah',
    'Levin',
    'Neyla',
    'Graciela',
    'Scarleth',
    'Emery',
    'Lazarus',
    'Allister',
    'Brynnleigh',
    'Macen',
    'Witten',
    'Ameya',
    'Dev',
    'Wesley',
    'Aundrea',
    'Josey',
    'Dutch',
    'Kloe',
    'Debanhi',
    'Hera',
    'Wayne',
    'Aryn',
    'Carrie',
    'Shylah',
    'Nancy',
    'Ophelia',
    'Nelia',
    'Khyla',
    'Lyon',
    'Issa',
    'Mirabel',
    'Ean',
    'Deion',
    'Dylann',
    'Reid',
    'Cora',
    'Viviana',
    'Keilyn',
    'Khari',
    'Adelynne',
    'Saron',
    'Savanah',
    'Simone',
    'Leigh',
    'Adel',
    'Shivani',
    'Lamia',
    'Kaydon',
    'Alex',
    'Maleny',
    'Jasiah',
    'Rain',
    'Theodor',
    'Evolet',
    'Winona',
    'Skarlet',
    'Gerrit',
    'Elyjah',
    'Matilde',
    'Riggin',
    'Diego',
    'Aleida',
    'Tuff',
    'Rey',
    'Johnluke',
    'Aislyn',
    'Breon',
    'Nash',
    'Kaliya',
    'Emelyn',
    'Reef',
    'Snow',
    'Cathy',
    'Sydni',
    'Amour',
    'Yaslin',
    'Lenore',
    'Aela',
    'Briggs',
    'Darin',
    'Briley',
    'Laycee',
    'Eshaal',
    'Timber',
    'Lucero',
    'Jill',
    'Elnathan',
    'Jo',
    'Colette',
    'Jaelle',
    'Ascher',
    'Mickey',
    'Brienna',
    'Ayse',
    'Monica',
    'Odin',
    'Lian',
    'Cecily',
    'Melany',
    'Jamieson',
    'Aiko',
    'Ander',
    'Basma',
    'Andy',
    'Rylyn',
    'Taleah',
    'Alyse',
    'Ariel',
    'Domenico',
    'Conor',
    'Gilberto',
    'Yehuda',
    'Jerald',
    'Avianna',
    'Lucca',
    'Hadrian',
    'Lillie',
    'Luqman',
    'Paden',
    'Landree',
    'Sahib',
    'Conlan',
    'Shai',
    'Audrianna',
    'Iram',
    'Pryce',
    'Karianna',
    'Lake',
    'Denim',
    'Maysa',
    'Kael',
    'Itzae',
    'Hayden',
    'Raina',
    'Noah',
    'Bryceson',
    'Marina',
    'Angie',
    'Shelby',
    'Abby',
    'Lou',
    'Rumi',
    'Decklyn',
    'Remmy',
    'Laelah',
    'Malakhi',
    'Jakiyah',
    'Chelsea',
    'Jaeda',
    'Carrigan',
    'Alisa',
    'Talyn',
    'Krishna',
    'Montana',
    'Javari',
    'Khai',
    'Demani',
    'Rubin',
    'Faigy',
    'Suzanne',
    'Zophia',
    'Uriah',
    'Kiya',
    'Johana',
    'Clement',
    'Milton',
    'Tara',
    'Uri',
    'Akshara',
    'Evren',
    'Bobbie',
    'Winnie',
    'Blythe',
    'Siena',
    'Philippa',
    'Zayvian',
    'Swayze',
    'Cristian',
    'Marley',
    'Scarlet',
    'Isra',
    'Ishanvi',
    'Athan',
    'Cali',
    'Sandro',
    'Jarett',
    'Reina',
    'Arisbeth',
    'Treasure',
    'Keyli',
    'Rhett',
    'Jaleyah',
    'Simcha',
    'Olympia',
    'Tarik',
    'Coraline',
    'Ahad',
    'Miamor',
    'Marlow',
    'Omar',
    'Jacklynn',
    'Allyssa',
    'Maddyn',
    'Valente',
    'Kaydence',
    'Tylen',
    'Ibrahim',
    'Gianluca',
    'Virat',
    'Jorge',
    'Ranveer',
    'Bray',
    'Kadence',
    'Lucus',
    'Alec',
    'Wells',
    'Camber',
    'Gittel',
    'Chevelle',
    'Laine',
    'Taurean',
    'Crew',
    'Dawsyn',
    'Emari',
    'Miracle',
    'Elayna',
    'Charbel',
    'Karizma',
    'Aaniyah',
    'Yitty',
    'Linkoln',
    'Jayci',
    'Reggie',
    'Logan',
    'Noe',
    'Billie',
    'Angely',
    'Benedict',
    'Agustin',
    'Jenifer',
    'Sahar',
    'Tyra',
    'Paola',
    'Elif',
    'Madelynn',
    'Yuri',
    'Zaidyn',
    'Windsor',
    'Malky',
    'Zaine',
    'Karlee',
    'Aven',
    'Sparrow',
    'Zaydon',
    'Zayd',
    'Hadassa',
    'Erynn',
    'Angeles',
    'Sunny',
    'Arielle',
    'Marciano',
    'Dashel',
    'Jayanna',
    'Lilee',
    'Aryanna',
    'Boris',
    'Avraham',
    'Taim',
    'Rori',
    'Sundus',
    'Kamiya',
    'Rylan',
    'Faris',
    'Antoni',
    'Mark',
    'Henryk',
    'Kailyn',
    'Adem',
    'Hellen',
    'Emilie',
    'Rylen',
    'Kareena',
    'Zelia',
    'Mackenzie',
    'Jodie',
    'Luciano',
    'Demond',
    'Ravyn',
    'Jaidyn',
    'Shilah',
    'Elric',
    'Ryker',
    'Laine',
    'Anden',
    'Patricio',
    'Kayanna',
    'Kalli',
    'Love',
    'Mckinley',
    'Georgie',
    'Ryleigh',
    'Chanell',
    'John',
    'Shivansh',
    'Santiago',
    'Mykel',
    'Edin',
    'Harlym',
    'Everlee',
    'Ayana',
    'Karmelo',
    'Maryam',
    'Judah',
    'Chisom',
    'Jaquan',
    'Paulo',
    'Alitza',
    'Liv',
    'Gregorio',
    'Annamae',
    'Leya',
    'Paradise',
    'Raidyn',
    'Melani',
    'Oliva',
    'Karaline',
    'Charlea',
    'Duke',
    'Shyann',
    'Enos',
    'Slate',
    'Van',
    'Aleksander',
    'Gretchen',
    'Meir',
    'Nolyn',
    'Vladislav',
    'Arsh',
    'Henrietta',
    'Janiah',
    'Colter',
    'Richard',
    'Carmine',
    'Holland',
    'Abdulahi',
    'Blayne',
    'Leylanie',
    'Aniylah',
    'Boe',
    'Ailyn',
    'Katia',
    'Jarrell',
    'Vivienne',
    'Caius',
    'Erika',
    'Braleigh',
    'Navi',
    'Chyanne',
    'Layal',
    'Padraig',
    'Aubre',
    'Erik',
    'Scarlette',
    'Kaysen',
    'Davidson',
    'Kiersten',
    'Robyn',
    'Jaya',
    'Garrick',
    'Ezrah',
    'Lahna',
    'Alain',
    'Vedansh',
    'Brantly',
    'Delainey',
    'Rylinn',
    'Ezio',
    'Maleena',
    'Evey',
    'Krista',
    'Jermaine',
    'Mena',
    'Jenavieve',
    'Campbell',
    'Micheal',
    'Zachary',
    'Makenzy',
    'Jayvon',
    'Aislinn',
    'King',
    'Conrad',
    'Shanell',
    'Caileigh',
    'Alexey',
    'Drayven',
    'Galen',
    'Calin',
    'Patience',
    'Ryann',
    'Zayn',
    'Hennessy',
    'Wade',
    'Alice',
    'Odette',
    'Jewel',
    'Seth',
    'Kyndal',
    'Carnell',
    'Dayna',
    'Jadiel',
    'Holland',
    'Tyrin',
    'Shimon',
    'Moriah',
    'Virgil',
    'Alaric',
    'Asa',
    'Leda',
    'Roosevelt',
    'Farida',
    'Elijah',
    'Maebry',
    'Jeter',
    'Ilaria',
    'Jamila',
    'Zuri',
    'Sylvan',
    'Jaclynn',
    'Ellyanna',
    'Reena',
    'Jemma',
    'Pax',
    'Magdalyn',
    'Claude',
    'Annagrace',
    'Ayden',
    'Daylin',
    'Andrey',
    'Malena',
    'Joann',
    'Shaw',
    'Monte',
    'Dante',
    'Unity',
    'Aniela',
    'Maxim',
    'Tehya',
    'Elowen',
    'Cedrick',
    'Elle',
    'Varnika',
    'Blakeleigh',
    'Beatrix',
    'Evelynn',
    'Dariah',
    'Kenli',
    'Suhayla',
    'Stone',
    'Alijah',
    'Waylon',
    'Keily',
    'Brienne',
    'Mathis',
    'Jazmyn',
    'Kaan',
    'Phinehas',
    'Sumayyah',
    'Raziel',
    'Cale',
    'Jase',
    'Patrick',
    'Kaniya',
    'Niah',
    'Kaidance',
    'Abrianna',
    'Rylen',
    'Breana',
    'Sire',
    'Mileena',
    'Amya',
    'Linda',
    'Briana',
    'Bodey',
    'Mackayla',
    'Jaslyn',
    'Kylie',
    'Suzette',
    'Madisyn',
    'Rowyn',
    'Rayhan',
    'Tatianna',
    'Zahra',
    'Ananias',
    'Maddyson',
    'Viaan',
    'Renly',
    'Hussain',
    'Janette',
    'Kaycee',
    'Briza',
    'Rhyder',
    'Alana',
    'Guadalupe',
    'Mirna',
    'Naina',
    'Tamya',
    'Tallen',
    'Cedar',
    'Kalani',
    'Jackeline',
    'Anwita',
    'Kailea',
    'Kristina',
    'Jakira',
    'Tehila',
    'Kinsley',
    'Athena',
    'Yanely',
    'Kensi',
    'Aviona',
    'Layah',
    'Claire',
    'Brea',
    'Latrell',
    'Izel',
    'Aurora',
    'Tyrion',
    'Leon',
    'Aramis',
    'Lyrik',
    'Hudsen',
    'Khari',
    'Jameer',
    'Polly',
    'Abigail',
    'Emberly',
    'Hawthorne',
    'Lennox',
    'Tristan',
    'Phaedra',
    'Carma',
    'Kendon',
    'Blayden',
    'Jace',
    'Menachem',
    'Maylin',
    'Kailynn',
    'Aadvik',
    'Evin',
    'Amaziah',
    'Anibal',
    'Geronimo',
    'Caliyah',
    'Kimberlee',
    'Shaylyn',
    'Merrick',
    'Kalie',
    'Cord',
    'Zeppelin',
    'Debra',
    'Raeann',
    'Edric',
    'Rudy',
    'Ever',
    'Camdyn',
    'Davonte',
    'Aylah',
    'Venice',
    'Draco',
    'Luiz',
    'Adler',
    'Arizona',
    'Larson',
    'Sarai',
    'Quadir',
    'Saw',
    'Keanna',
    'Giulianna',
    'Jayceon',
    'Vittorio',
    'Emerie',
    'Teagen',
    'Denver',
    'Adonai',
    'Kaylyn',
    'Symphony',
    'Marin',
    'Aline',
    'Avrie',
    'Zadyn',
    'Blayke',
    'Merida',
    'Payten',
    'Gemma',
    'Olivier',
    'Dawsyn',
    'Maddox',
    'Johny',
    'Jayse',
    'Cole',
    'Jizelle',
    'An',
    'Alden',
    'Rashawn',
    'Brixton',
    'Sahir',
    'Fannie',
    'Marilynn',
    'Leslie',
    'Karsen',
    'Kali',
    'Perry',
    'Brecken',
    'Jami',
    'Jarrod',
    'Milani',
    'Lillyanne',
    'Carla',
    'Deana',
    'Stiles',
    'Osiel',
    'Kayli',
    'Lettie',
    'Abree',
    'Rhys',
    'Ishan',
    'Gordon',
    'Niyla',
    'Jozlynn',
    'Domingo',
    'Jimena',
    'Monet',
    'Woodrow',
    'Elon',
    'Zyonna',
    'Elinor',
    'Oaklie',
    'Kalea',
    'Tinsley',
    'Colson',
    'Ozias',
    'Zinnia',
    'Julien',
    'Evana',
    'Jodi',
    'Emmalina',
    'Hadassah',
    'Brenleigh',
    'Gauge',
    'Dario',
    'Chandler',
    'Irina',
    'Hayat',
    'Jasen',
    'Jewels',
    'Maurice',
    'Ahna',
    'Zenaida',
    'Kainoa',
    'Kaimana',
    'Nirvan',
    'Melvin',
    'Tydus',
    'Tytan',
    'Theodore',
    'Kellyn',
    'Zakary',
    'Ezriel',
    'Quentin',
    'Jurnee',
    'Naira',
    'Uriel',
    'Sol',
    'Maddox',
    'Nell',
    'Jaydin',
    'Kylon',
    'Mayar',
    'Mario',
    'Dyland',
    'Koral',
    'Haylee',
    'Sanaa',
    'Gwen',
    'Trinity',
    'Adelene',
    'Jules',
    'Shanelle',
    'Kaylor',
    'Leighla',
    'Christianna',
    'Graysen',
    'Brissa',
    'Ailee',
    'Amelya',
    'Lois',
    'Ahuva',
    'Haven',
    'Copeland',
    'Zakaria',
    'Sudais',
    'Scarlett',
    'Krish',
    'Carlin',
    'Siddharth',
    'Charlee',
    'Carolina',
    'Rayvon',
    'Kamrynn',
    'Mylee',
    'Keenan',
    'Raiden',
    'Valentine',
    'Trevin',
    'Waylan',
    'Aidric',
    'Amos',
    'Ty',
    'Quaid',
    'Gamaliel',
    'Karoline',
    'Layth',
    'Keysi',
    'Calvin',
    'Eternity',
    'Huntley',
    'Tristan',
    'Keeley',
    'Freddy',
    'Aralyn',
    'Toryn',
    'Chasity',
    'Levi',
    'Favour',
    'Terrell',
    'Lilian',
    'Nalani',
    'November',
    'Mauro',
    'Briseida',
    'Ezana',
    'Marques',
    'Remy',
    'Amariah',
    'Ansel',
    'Finnley',
    'Ramona',
    'Kaelan',
    'Nathanael',
    'Lindsey',
    'Dia',
    'Jalil',
    'Stryder',
    'Gillian',
    'Ellinor',
    'Luisangel',
    'Emelia',
    'Kelani',
    'Nolan',
    'Brooklynne',
    'Kynsleigh',
    'Jezebel',
    'Marcella',
    'Anneliese',
    'Tyrus',
    'Anilah',
    'Gisella',
    'Quin',
    'Essie',
    'Martha',
    'Kaybree',
    'Guinevere',
    'Leeana',
    'Zaniya',
    'Emberlynn',
    'Azucena',
    'Leyna',
    'Dyllan',
    'Lakin',
    'Leen',
    'Kamora',
    'Rustin',
    'Kasper',
    'Ysabella',
    'Jax',
    'Cove',
    'Niklas',
    'Rony',
    'Maleah',
    'Flora',
    'Afia',
    'Kysen',
    'Blaire',
    'Avielle',
    'Bliss',
    'Dash',
    'Memphis',
    'Sicily',
    'Kaylan',
    'Matai',
    'Maja',
    'Jasey',
    'Maddisyn',
    'Kyana',
    'Genesis',
    'Micaela',
    'Miller',
    'Ritchie',
    'Delani',
    'Waylen',
    'Mohammed',
    'Adleigh',
    'Uziel',
    'Lane',
    'Aayush',
    'Neftali',
    'Ely',
    'Amalia',
    'Finn',
    'Jarod',
    'Bryar',
    'Cortland',
    'Chany',
    'Auri',
    'Auriana',
    'Aayla',
    'Favor',
    'Yanelly',
    'Tidus',
    'Elena',
    'Connie',
    'Solange',
    'Kwame',
    'Eduard',
    'Abran',
    'Finnleigh',
    'Murphy',
    'Iain',
    'Aleister',
    'Giacomo',
    'Rafaela',
    'Namir',
    'Jewelz',
    'Daelyn',
    'Zach',
    'Javeon',
    'Cheyann',
    'Quran',
    'Rozalyn',
    'Naksh',
    'Elyse',
    'Bradley',
    'Ayiana',
    'Haiden',
    'Kinslie',
    'Cheyanne',
    'Malik',
    'Amar',
    'Yash',
    'Yatziry',
    'Benny',
    'Isaac',
    'Tenzin',
    'Sky',
    'Zamira',
    'Hawkins',
    'Tymber',
    'Kaylah',
    'Ajay',
    'Katherine',
    'Shaya',
    'Isaak',
    'Taym',
    'Garrett',
    'Reginald',
    'Daylin',
    'Thomas',
    'Emmalynne',
    'Lisette',
    'Imran',
    'Italia',
    'Karen',
    'Kurtis',
    'Lennyn',
    'Lynn',
    'Jianna',
    'Drea',
    'Lemuel',
    'Eliud',
    'Jayon',
    'Ward',
    'Donatello',
    'Audree',
    'Humza',
    'Roderick',
    'Cedar',
    'Eian',
    'Oskar',
    'Adreanna',
    'Jonatan',
    'Jiovanni',
    'Avika',
    'Teo',
    'Eisley',
    'Graycen',
    'Kierstyn',
    'Giuseppe',
    'Lilyan',
    'Caden',
    'Zaylin',
    'Rylin',
    'Sakura',
    'Srinika',
    'Roger',
    'Eyan',
    'Nilah',
    'Elanie',
    'Fradel',
    'Musa',
    'Zaina',
    'Carmelo',
    'Leelah',
    'Subhan',
    'Emoree',
    'Belinda',
    'Porter',
    'Raylan',
    'Braylie',
    'Armaan',
    'Gwyneth',
    'Katrina',
    'Harrison',
    'Azlynn',
    'Kobi',
    'Lars',
    'Callahan',
    'Tevita',
    'Brannon',
    'Nikolas',
    'Maxine',
    'Zander',
    'Selma',
    'Marbella',
    'Keagen',
    'Madeleine',
    'Adna',
    'Cyril',
    'Jozie',
    'Trisha',
    'Jordan',
    'Chaya',
    'Alexie',
    'Caleb',
    'Brystal',
    'Junia',
    'Mayrin',
    'Aarish',
    'Jaxxon',
    'Posey',
    'Ryden',
    'Samora',
    'Kasey',
    'Kristel',
    'Gautham',
    'Charley',
    'Kyron',
    'Laikynn',
    'Abisai',
    'Aubrey',
    'Jaxston',
    'Yamir',
    'Graydon',
    'Kaius',
    'Adrianna',
    'Violetta',
    'Nigel',
    'Wynn',
    'Briella',
    'Jordon',
    'Sharon',
    'Alaiyah',
    'Ryli',
    'Nalia',
    'Brianne',
    'Jovanny',
    'Cohen',
    'Keiran',
    'Dontavious',
    'Octavia',
    'Bayla',
    'Mackenzie',
    'Sonny',
    'Rina',
    'Jceon',
    'Jessalyn',
    'Abdelrahman',
    'Mckenna',
    'Barry',
    'Perla',
    'Jaelen',
    'Meklit',
    'Yoel',
    'Shaniya',
    'Ethyn',
    'Catarina',
    'Hania',
    'Aliana',
    'Ezra',
    'Khristopher',
    'Deven',
    'Scotty',
    'Emsley',
    'Liesl',
    'Emiley',
    'Rahaf',
    'Zayed',
    'Donavan',
    'Kenslie',
    'Leighton',
    'Gianna',
    'Aaliya',
    'Chantel',
    'Akari',
    'Siddhartha',
    'Kit',
    'Alfred',
    'Odyssey',
    'Alexzandria',
    'Jaziah',
    'Halo',
    'Kylo',
    'Charity',
    'Frederick',
    'Seeley',
    'Arhaan',
    'Maiya',
    'Avary',
    'Avi',
    'Emri',
    'Thalia', 
];
function getRandomName() {
    return names[(Math.random() * (names.length - 1)).toFixed(0)];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hp7bG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomSentence", ()=>getRandomSentence
);
const desc = `My biggest joy is roasting almonds while stalking prey.
Twin 4-month-olds slept in the shade of the palm tree while the mother tanned in the sun.
Shingle color was not something the couple had ever talked about.
Sometimes you have to just give up and win by cheating.
He had reached the point where he was paranoid about being paranoid.
He watched the dancing piglets with panda bear tummies in the swimming pool.
It took me too long to realize that the ceiling hadn't been painted to look like the sky.
Before he moved to the inner city, he had always believed that security complexes were psychological.
I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.
Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.
The beach was crowded with snow leopards.
The teens wondered what was kept in the red shed on the far edge of the school grounds.
Three years later, the coffin was still full of Jello.
Warm beer on a cold day isn't my idea of fun.
When she didn’t like a guy who was trying to pick her up, she started using sign language.
It's never been my responsibility to glaze the donuts.
The secret ingredient to his wonderful life was crime.
100 years old is such a young age if you happen to be a bristlecone pine.
The rain pelted the windshield as the darkness engulfed us.
Had he known what was going to happen, he would have never stepped into the shower.
My Mum tries to be cool by saying that she likes all the same things that I do.
Despite multiple complications and her near-death experience
Traveling became almost extinct during the pandemic.
You have no right to call yourself creative until you look at a trowel and think that it would make a great lockpick.
The busker hoped that the people passing by would throw money, but they threw tomatoes instead, so he exchanged his hat for a juicer.
They throw cabbage that turns your brain into emotional baggage.
The murder hornet was disappointed by the preconceived ideas people had of him.
I love bacon, beer, birds, and baboons.
We will not allow you to bring your pet armadillo along.
Trash covered the landscape like sprinkles do a birthday cake.
The beauty of the sunset was obscured by the industrial cranes.
They desperately needed another drummer since the current one only knew how to play bongos.
Peanut butter and jelly caused the elderly lady to think about her past.
A song can make or ruin a person’s day if they let it get to them.
She works two jobs to make ends meet; at least, that was her reason for not having time to join us.
She always speaks to him in a loud voice.
The irony of the situation wasn't lost on anyone in the room.
I'll have you know I've written over fifty novels
Beach-combing replaced wine tasting as his new obsession.
He waited for the stop sign to turn to a go sign.
I used to live in my neighbor's fishpond, but the aesthetic wasn't to my taste.
The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.
He was sure the Devil created red sparkly glitter.
He is good at eating pickles and telling women about his emotional problems.
A dead duck doesn't fly backward.
The most exciting eureka moment I've had was when I realized that the instructions on food packets were just guidelines.
Eating eggs on Thursday for choir practice was recommended.
Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.
There's no reason a hula hoop can't also be a circus ring.
For some unfathomable reason, the response team didn't consider a lack of milk for my cereal as a proper emergency.
Today is the day I'll finally know what brick tastes like.
He found his art never progressed when he literally used his sweat and tears.
The chic gangster liked to start the day with a pink scarf.
She thought there'd be sufficient time if she hid her watch.
Three years later, the coffin was still full of Jello.
He took one look at what was under the table and noped the hell out of there.
Nancy decided to make the porta-potty her home.
It would have been a better night if the guys next to us weren't in the splash zone.
The tumbleweed refused to tumble but was more than willing to prance.
It's difficult to understand the lengths he'd go to remain short.
The heat
I think I will buy the red car, or I will lease the blue one.
Jeanne wished she has chosen the red button.
Red is greener than purple, for sure.
It must be easy to commit crimes as a snake because you don't have to worry about leaving fingerprints.
A good example of a useful vegetable is medicinal rhubarb.
Excitement replaced fear until the final moment.
The shooter says goodbye to his love.
My dentist tells me that chewing bricks is very bad for your teeth.
The best part of marriage is animal crackers with peanut butter.
I may struggle with geography, but I'm sure I'm somewhere around here.
Watching the geriatric men’s softball team brought back memories of 3 yr olds playing t-ball.
I've never seen a more beautiful brandy glass filled with wine.
Everybody should read Chaucer to improve their everyday vocabulary.
The bees decided to have a mutiny against their queen.
He poured rocks in the dungeon of his mind.
Improve your goldfish's physical fitness by getting him a bicycle.
He ended up burning his fingers poking someone else's fire.
Flash photography is best used in full sunlight.
He was all business when he wore his clown suit.
The balloons floated away along with all my hopes and dreams.
He wondered if she would appreciate his toenail collection.
She can live her life however she wants as long as she listens to what I have to say.
He fumbled in the darkness looking for the light switch, but when he finally found it there was someone already there.
Gwen had her best sleep ever on her new bed of nails.
The Japanese yen for commerce is still well-known.
Mary plays the piano.
Her daily goal was to improve on yesterday.
The golden retriever loved the fireworks each Fourth of July.
He strives to keep the best lawn in the neighborhood.
The waitress was not amused when he ordered green eggs and ham.
The light that burns twice as bright burns half as long.
Warm beer on a cold day isn't my idea of fun.
The murder hornet was disappointed by the preconceived ideas people had of him.
She used her own hair in the soup to give it more flavor.
The Guinea fowl flies through the air with all the grace of a turtle.
Flying fish few by the space station.
I caught my squirrel rustling through my gym bag.
Courage and stupidity were all he had.
The light in his life was actually a fire burning all around him.
I never knew what hardship looked like until it started raining bowling balls.
The father handed each child a roadmap at the beginning of the 2-day road trip and explained it was so they could find their way home.
25 years later, she still regretted that specific moment.
He turned in the research paper on Friday; otherwise, he would have not passed the class.
The complicated school homework left the parents trying to help their kids quite confused.
It was always dangerous to drive with him since he insisted the safety cones were a slalom course.
All you need to do is pick up the pen and begin.
Improve your goldfish's physical fitness by getting him a bicycle.
He liked to play with words in the bathtub.
The hawk didn’t understand why the ground squirrels didn’t want to be his friend.
Dan took the deep dive down the rabbit hole.
The lake is a long way from here.
He waited for the stop sign to turn to a go sign.
The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder.
The team members were hard to tell apart since they all wore their hair in a ponytail.
I just wanted to tell you I could see the love you have for your child by the way you look at her.
Siri became confused when we reused to follow her directions.
Patricia found the meaning of life in a bowl of Cheerios.
The memory we used to share is no longer coherent.
Jenny made the announcement that her baby was an alien.
It's never been my responsibility to glaze the donuts.
My biggest joy is roasting almonds while stalking prey.
I was starting to worry that my pet turtle could tell what I was thinking.
Peter found road kill an excellent way to save money on dinner.
We will not allow you to bring your pet armadillo along.
They ran around the corner to find that they had traveled back in time.
Andy loved to sleep on a bed of nails.
His mind was blown that there was nothing in space except space itself.
He had unknowingly taken up sleepwalking as a nighttime hobby.
Her daily goal was to improve on yesterday.
She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.
There can never be too many cherries on an ice cream sundae.
If I don’t like something, I’ll stay away from it.
She was too short to see over the fence.
All she wanted was the answer, but she had no idea how much she would hate it.
The tumbleweed refused to tumble but was more than willing to prance.
It would have been a better night if the guys next to us weren't in the splash zone.
The crowd yells and screams for more memes.
He excelled at firing people nicely.
The stench from the feedlot permeated the car despite having the air conditioning on recycled air.
She insisted that cleaning out your closet was the key to good driving.
A suit of armor provides excellent sun protection on hot days.
Combines are no longer just for farms.
He was 100% into fasting with her until he understood that meant he couldn't eat.
Waffles are always better without fire ants and fleas.
The father died during childbirth.
Just because the water is red doesn't mean you can't drink it.
They decided to plant an orchard of cotton candy.
With the high wind warning
Three generations with six decades of life experience.
He had a vague sense that trees gave birth to dinosaurs.
The old apple revels in its authority.
Bill ran from the giraffe toward the dolphin.
He was the only member of the club who didn't like plum pudding.
Please tell me you don't work in a morgue.
The random sentence generator generated a random sentence about a random sentence.
You should never take advice from someone who thinks red paint dries quicker than blue paint.
The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.
Greetings from the galaxy MACS0647-JD, or what we call home.
The snow-covered path was no help in finding his way out of the back-country.
Barking dogs and screaming toddlers have the unique ability to turn friendly neighbors into cranky enemies.
I ate a sock because people on the Internet told me to.
Joyce enjoyed eating pancakes with ketchup.
She was only made the society president because she can whistle with her toes.
He went on a whiskey diet and immediately lost three days.
I want to buy a onesie… but know it won’t suit me.
She insisted that cleaning out your closet was the key to good driving.
Chocolate covered crickets were his favorite snack.
The ice-cream trucks bring back bad memories for all of us.
There is no better feeling than staring at a wall with closed eyes.
Boulders lined the side of the road foretelling what could come next.
She had some amazing news to share but nobody to share it with.
It isn't true that my mattress is made of cotton candy.
People who insist on picking their teeth with their elbows are so annoying!
It was a slippery slope and he was willing to slide all the way to the deepest depths.
He is good at eating pickles and telling women about his emotional problems.
You bite up because of your lower jaw.
The Japanese yen for commerce is still well-known.
She was sad to hear that fireflies are facing extinction due to artificial light, habitat loss, and pesticides.
She had a habit of taking showers in lemonade.
You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital.
He decided to live his life by the big beats manifesto.
She hadn't had her cup of coffee, and that made things all the worse.
At that moment she realized she had a sixth sense.
The light that burns twice as bright burns half as long.
Henry couldn't decide if he was an auto mechanic or a priest.
If my calculator had a history, it would be more embarrassing than my browser history.
There can never be too many cherries on an ice cream sundae.
They say people remember important moments in their life well, yet no one even remembers their own birth.
He set out for a short walk, but now all he could see were mangroves and water were for miles.
They did nothing as the raccoon attacked the lady’s bag of food.
Edith could decide if she should paint her teeth or brush her nails.
The thunderous roar of the jet overhead confirmed her worst fears.
Nancy decided to make the porta-potty her home.
The bees decided to have a mutiny against their queen.
He turned in the research paper on Friday; otherwise, he would have not passed the class.
I was fishing for compliments and accidentally caught a trout.
I made myself a peanut butter sandwich as I didn't want to subsist on veggie crackers.
I'll have you know I've written over fifty novels
Nancy was proud that she ran a tight shipwreck.
Had he known what was going to happen, he would have never stepped into the shower.
Green should have smelled more tranquil, but somehow it just tasted rotten.
Three generations with six decades of life experience.
Some bathing suits just shouldn’t be worn by some people.
Happiness can be found in the depths of chocolate pudding.
Choosing to do nothing is still a choice, after all.
If you don't like toenails, you probably shouldn't look at your feet.
The doll spun around in circles in hopes of coming alive.
He had a wall full of masks so she could wear a different face every day.
There should have been a time and a place, but this wasn't it.
Even with the snow falling outside, she felt it appropriate to wear her bikini.
She says she has the ability to hear the soundtrack of your life.
Never underestimate the willingness of the greedy to throw you under the bus.
It dawned on her that others could make her happier, but only she could make herself happy.
No matter how beautiful the sunset, it saddened her knowing she was one day older.
Nothing seemed out of place except the washing machine in the bar.
He is no James Bond; his name is Roger Moore.
She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.
The hawk didn’t understand why the ground squirrels didn’t want to be his friend.
The fact that there's a stairway to heaven and a highway to hell explains life well.
Jason lived his life by the motto, "Anything worth doing is worth doing poorly.
Beach-combing replaced wine tasting as his new obsession.
She works two jobs to make ends meet; at least, that was her reason for not having time to join us.
I used to live in my neighbor's fishpond, but the aesthetic wasn't to my taste.
The Japanese yen for commerce is still well-known.
The changing of down comforters to cotton bedspreads always meant the squirrels had returned.
I really want to go to work, but I am too sick to drive.
She felt that chill that makes the hairs on the back of your neck when he walked into the room.
There's an art to getting your way, and spitting olive pits across the table isn't it.
He decided that the time had come to be stronger than any of the excuses he'd used until then.
His thought process was on so many levels that he gave himself a phobia of heights.
It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.
He found the chocolate covered roaches quite tasty.
The wooden spoon couldn’t cut but left emotional scars.
It took me too long to realize that the ceiling hadn't been painted to look like the sky.
The tattered work gloves speak of the many hours of hard labor he endured throughout his life.
I was offended by the suggestion that my baby brother was a jewel thief.
She was amazed by the large chunks of ice washing up on the beach.
The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.
It turns out you don't need all that stuff you insisted you did.
When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.
Even though he thought the world was flat he didn’t see the irony of wanting to travel around the world.
Potato wedges probably are not best for relationships.
He put heat on the wound to see what would grow.
Patricia found the meaning of life in a bowl of Cheerios.
The lake is a long way from here.
She wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages.
The crowd yells and screams for more memes.
Always bring cinnamon buns on a deep-sea diving expedition.
It's always a good idea to seek shelter from the evil gaze of the sun.`;
const wordArray = desc.split('\n');
function getRandomSentence() {
    return wordArray[Math.floor(wordArray.length * Math.random())];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2G3IT","gJRPm"], "gJRPm", "parcelRequireab7b")

//# sourceMappingURL=index.c574a7e0.js.map
