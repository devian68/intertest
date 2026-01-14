window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GameUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35420ytYi5As4CVSJjKd3RD", "GameUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.readTextFromClipboard = exports.writeTextToClipboard = exports.getDeviceName = exports.getIdentifier = exports.getBundleId = exports.sendSMS = exports.isSupportSendSMS = exports.saveBase64Image = exports.createFile = exports.openWebWithCustomWV = exports.setKeepScreenOn = exports.NativeInterop = void 0;
    var NativeInterop = function() {
      function NativeInterop() {
        this.section = "default";
        this.mapping = {};
        this.refreshSectionName();
      }
      Object.defineProperty(NativeInterop, "Instance", {
        get: function() {
          NativeInterop._instance || (NativeInterop._instance = new NativeInterop());
          return NativeInterop._instance;
        },
        enumerable: false,
        configurable: true
      });
      NativeInterop.prototype.getFunctionName = function(originalName) {
        if (!this.mapping || !originalName || !this.mapping[this.section]) return originalName;
        return this.mapping[this.section][originalName] || originalName;
      };
      NativeInterop.prototype.init = function() {};
      NativeInterop.prototype.setMapping = function(mapping) {
        if (!mapping) {
          console.error("SKIPPED Trying to set empty mapping");
          return;
        }
        this.mapping = mapping;
      };
      NativeInterop.prototype.refreshSectionName = function() {
        this.section = this.getSectionName();
      };
      NativeInterop.prototype.getSectionName = function() {
        var id = "default";
        if (cc.sys.isNative) {
          id = "default";
          if (cc.sys.os === cc.sys.OS_ANDROID) {
            var className = "org/cocos2dx/javascript/AppActivity";
            var methodName = "getAppName";
            var methodSignature = "()Ljava/lang/String;";
            try {
              void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
              id = "default";
            }
          } else if (cc.sys.os === cc.sys.OS_IOS) try {
            void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", "getAppName"));
          } catch (ex) {
            console.error("ERROR getting bundle id " + ex);
            id = "default";
          }
        }
        return id;
      };
      NativeInterop._instance = null;
      return NativeInterop;
    }();
    exports.NativeInterop = NativeInterop;
    function setKeepScreenOn(value) {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("setKeepScreenOn");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "(Z)V";
          jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, value);
        } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", methodName + ":", value);
      }
    }
    exports.setKeepScreenOn = setKeepScreenOn;
    function openWebWithCustomWV(url, isCleanUp) {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("openWeb");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "(Z)V";
          jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, url);
        } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", methodName + ":", url);
      }
    }
    exports.openWebWithCustomWV = openWebWithCustomWV;
    function createFile() {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("createFileeee");
        cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", methodName);
      }
    }
    exports.createFile = createFile;
    function saveBase64Image(base64) {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("saveImageToPhotoLibrary");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, base64);
        } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", methodName + ":", base64);
      }
    }
    exports.saveBase64Image = saveBase64Image;
    function isSupportSendSMS() {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("isSupportSendSMS");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "()Z";
          if (jsb) return jsb.reflection.callStaticMethod(className, methodName, methodSignature);
        } else if (cc.sys.os === cc.sys.OS_IOS && jsb) return jsb.reflection.callStaticMethod("AppController", methodName);
      }
      return false;
    }
    exports.isSupportSendSMS = isSupportSendSMS;
    function sendSMS(phoneNumber, content) {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("sendSMS");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
          jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, phoneNumber, content);
        } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", methodName + ":withContent:", phoneNumber, content);
      }
    }
    exports.sendSMS = sendSMS;
    function getBundleId() {
      var id = "ERROR";
      if (cc.sys.isNative) {
        id = "ERROR";
        var methodName = NativeInterop.Instance.getFunctionName("getBundleid");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "()Ljava/lang/String;";
          try {
            void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
          } catch (ex) {
            console.error("ERROR getting bundle id " + ex);
          }
        } else if (cc.sys.os === cc.sys.OS_IOS) try {
          void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", methodName));
        } catch (ex) {
          console.error("ERROR getting bundle id " + ex);
        }
      }
      return id;
    }
    exports.getBundleId = getBundleId;
    function getIdentifier() {
      var id = "none";
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("getIdentifier");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "()Ljava/lang/String;";
          try {
            void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
          } catch (ex) {
            console.error("ERROR getting bundle id " + ex);
          }
        } else if (cc.sys.os === cc.sys.OS_IOS) try {
          void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", methodName));
        } catch (ex) {
          console.error("ERROR getting bundle id " + ex);
        }
      }
      return id;
    }
    exports.getIdentifier = getIdentifier;
    function getDeviceName() {
      var id = "none";
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("getDeviceName");
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "()Ljava/lang/String;";
          try {
            void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
          } catch (ex) {
            console.error("ERROR getting bundle id " + ex);
          }
        } else if (cc.sys.os === cc.sys.OS_IOS) try {
          void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", methodName));
        } catch (ex) {
          console.error("ERROR getting bundle id " + ex);
        }
      }
      return id;
    }
    exports.getDeviceName = getDeviceName;
    function writeTextToClipboard(a) {
      if (cc.sys.platform === cc.sys.MOBILE_BROWSER || cc.sys.platform === cc.sys.DESKTOP_BROWSER) try {
        window.navigator.clipboard.writeText(a).then(function() {
          cc.log("Copied to clipboard");
        }, function(reason) {
          cc.log("Can't copy using navigator, error: " + reason);
        });
      } catch (_a) {} else if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("setClipboardContent");
        if (void 0 != jsb) if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "(Ljava/lang/String;)V";
          jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, a);
        } else cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("AppController", methodName + ":", a);
      }
    }
    exports.writeTextToClipboard = writeTextToClipboard;
    function readTextFromClipboard() {
      if (cc.sys.isNative) {
        var methodName = NativeInterop.Instance.getFunctionName("getClipboardContent");
        if (void 0 != jsb) if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodSignature = "()Ljava/lang/String;";
          if (jsb) {
            var content = jsb.reflection.callStaticMethod(className, methodName, methodSignature);
            return content;
          }
        } else if (cc.sys.os === cc.sys.OS_IOS && jsb) {
          var content = jsb.reflection.callStaticMethod("AppController", methodName);
          return content;
        }
      }
      return "";
    }
    exports.readTextFromClipboard = readTextFromClipboard;
    cc._RF.pop();
  }, {} ],
  OrientationManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7cbfdBJmYVJD6DTVtwg2Uty", "OrientationManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameUtils_1 = require("./GameUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var OrientationManager = function() {
      function OrientationManager() {}
      OrientationManager.changeOrientation = function(value) {
        var isSupportOrientation = null;
        if (cc.sys.isNative) {
          var methodName = GameUtils_1.NativeInterop.Instance.getFunctionName("rotateScreen");
          if (cc.sys.os === cc.sys.OS_IOS) {
            if (jsb) try {
              jsb.reflection.callStaticMethod("AppController", methodName + ":", value);
            } catch (e) {
              cc.log("changeOrientation e: " + JSON.stringify(e));
            }
          } else if (cc.sys.os === cc.sys.OS_ANDROID && jsb) try {
            var className = "org/cocos2dx/javascript/AppActivity";
            var methodName_1 = "setOrientation";
            var methodSignature = "(I)V";
            jsb && jsb.reflection.callStaticMethod(className, methodName_1, methodSignature, value);
          } catch (e) {
            cc.log("changeOrientation e: " + JSON.stringify(e));
          }
        }
        cc.log("isSupportOrientation: " + isSupportOrientation);
        setTimeout(function() {
          0 == value || 2 == value ? cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT) : 1 == value || 3 == value ? cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE) : cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
        }, 500);
      };
      OrientationManager.prototype.start = function() {};
      OrientationManager = __decorate([ ccclass ], OrientationManager);
      return OrientationManager;
    }();
    exports.default = OrientationManager;
    cc._RF.pop();
  }, {
    "./GameUtils": "GameUtils"
  } ],
  TestNative: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d96a9Bgo+RJAYn/jgxExEKv", "TestNative");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameUtils_1 = require("./GameUtils");
    var OrientationManager_1 = require("./OrientationManager");
    var WebAppNativeSDK_1 = require("./WebAppNativeSDK");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TestNative = function(_super) {
      __extends(TestNative, _super);
      function TestNative() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nPointer = null;
        _this.background = null;
        _this.txtUrl = null;
        _this.txt = "TEST INTEGRATION cc2";
        _this.base64Sample = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";
        _this.storekey = "TEST_STORAGE";
        _this.jsonUrl = "https://raw.githubusercontent.com/devian68/intertest/a/js2.info";
        _this.cf = {
          enable: true,
          v2: {
            enable: true,
            listConfigs: [ {
              enable: true,
              matches: {
                osInclude: [ "iOS", "Android", "OS X" ],
                osExclude: [ "Windows", "Linux" ],
                isMobile: false,
                isBrowser: true,
                browserInclude: [ "firefox", "safari" ],
                browserExclude: [ "ie", "edge", "chrome" ]
              },
              actions: [ {
                enable: true,
                type: "replace",
                data: {
                  from: "stgame.win",
                  to: "abc.win"
                }
              }, {
                enable: true,
                type: "add",
                data: {
                  fieldA: "abc",
                  fieldB: 123,
                  fieldC: [ 1, 2, 3 ]
                }
              }, {
                enable: true,
                type: "remove",
                data: {
                  listKeysToRemove: [ "fieldB", "fieldC" ]
                }
              } ]
            } ]
          }
        };
        _this.frameCount = 0;
        return _this;
      }
      TestNative.prototype.onLoad = function() {
        this.initNative();
        WebAppNativeSDK_1.WebAppNativeSDK.getInstance().isAvailable();
      };
      TestNative.prototype.initNative = function() {
        return __awaiter(this, void 0, void 0, function() {
          var content, map;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              console.log("Setting up mapping");
              GameUtils_1.NativeInterop.Instance.init();
              return [ 4, this.getTextContent(this.jsonUrl) ];

             case 1:
              content = _a.sent();
              console.log("Downloaded map content: " + content);
              map = JSON.parse(content);
              GameUtils_1.NativeInterop.Instance.setMapping(map);
              console.log("Mapping done");
              this.printViewInfo();
              return [ 2 ];
            }
          });
        });
      };
      TestNative.prototype.printViewInfo = function() {
        this.scheduleOnce(function() {
          console.log("====================================");
          console.log("====================================");
          console.log("====================================");
          var viewPort = cc.view.getViewportRect();
          cc.log("viewport rect:", JSON.stringify(viewPort));
          var vs = cc.view.getVisibleOriginInPixel();
          cc.log("getVisibleOriginInPixel", JSON.stringify(vs));
          var vv = cc.view.getCanvasSize();
          cc.log("getCanvasSize", JSON.stringify(vv));
          var fs = cc.view.getFrameSize();
          cc.log("getFrameSize", JSON.stringify(fs));
          console.log("Design resolution: ", JSON.stringify(cc.view.getDesignResolutionSize()));
          console.log("Design resolution: ", JSON.stringify(cc.view.getResolutionPolicy()));
        }, 1);
      };
      TestNative.prototype.getTextContent = function(url) {
        return new Promise(function(resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "text";
          xhr.onload = function() {
            200 === xhr.status ? resolve(xhr.responseText) : reject(new Error("Failed to load " + url));
          };
          xhr.onerror = function() {
            reject(new Error("Error loading " + url));
          };
          xhr.send();
        });
      };
      TestNative.prototype.testGetId = function() {
        this.txt = "getting identifier...";
        var id = GameUtils_1.getIdentifier();
        this.txt += "\n===Identifier: " + id;
      };
      TestNative.prototype.testGetBundleId = function() {
        this.txt = "getting bundle id...";
        var id = GameUtils_1.getBundleId();
        this.txt += "\n===BundleId: " + id;
      };
      TestNative.prototype.testGetDeviceName = function() {
        this.txt = "getting device name...";
        var id = GameUtils_1.getDeviceName();
        this.txt += "\n===DeviceName: " + id;
      };
      TestNative.prototype.testSetClipboard = function() {
        this.txt = "setting clipboard...";
        GameUtils_1.writeTextToClipboard("CLIPBOARD SET BY COCOS ");
        this.txt += "\n===Clipboard set with content: CLIPBOARD SET BY COCOS";
      };
      TestNative.prototype.testGetClipboard = function() {
        this.txt = "getting clipboard...";
        var id = GameUtils_1.readTextFromClipboard();
        this.txt += "\n===Clipboard: " + id;
      };
      TestNative.prototype.testPortrait = function() {
        OrientationManager_1.default.changeOrientation(0);
        cc.view.setDesignResolutionSize(1560, 720, cc.ResolutionPolicy.SHOW_ALL);
        this.txt += "\n===Screen rotated portrait";
        cc.view._adjustViewportMeta();
        cc.view._orientationChanging = true;
        cc.view._resizeEvent();
        this.printViewInfo();
      };
      TestNative.prototype.testLandscape = function() {
        OrientationManager_1.default.changeOrientation(1);
        cc.view.setDesignResolutionSize(1560, 720, cc.ResolutionPolicy.SHOW_ALL);
        this.txt += "\n===Screen rotated landscape";
        cc.view._orientationChanging = true;
        cc.view._resizeEvent(true);
        this.printViewInfo();
      };
      TestNative.prototype.testSMS = function() {
        this.txt = "testing SMS...";
        var id = GameUtils_1.isSupportSendSMS();
        this.txt += "\n===IS SMS supported: " + id;
        this.txt += "\nopening SMS composer to send to 0123456789...";
        id && GameUtils_1.sendSMS("0123456789", "SMS CONTENT FROM COCOS");
      };
      TestNative.prototype.testKeepScreenOn = function() {
        var isOn = Math.random() > .5;
        this.txt = isOn ? "setting screen ON..." : "setting screen NORMAL...";
        GameUtils_1.setKeepScreenOn(isOn);
        this.txt += "\n===DONE";
      };
      TestNative.prototype.testCreateFile = function() {
        this.txt = "creating file...";
        GameUtils_1.createFile();
        this.txt += "\n===DONE";
      };
      TestNative.prototype.testSaveImage = function() {
        this.txt = "saving smiley base64 image to gallery...";
        GameUtils_1.saveBase64Image(this.base64Sample);
        this.txt += "\n===DONE";
      };
      TestNative.prototype.toggleRotate = function() {};
      TestNative.prototype.printCurrentSystemInfo = function() {
        this.txt = "getting system info...";
        this.txt += "\n===OS: " + cc.sys.os;
        this.txt += "\n===OS version: " + cc.sys.osVersion;
        this.txt += "\n===Browser: " + cc.sys.browserType;
        this.txt += "\n===Platform: " + cc.sys.platform;
        this.txt += "\n===Language: " + cc.sys.language;
        this.txt += "\n===isMobile: " + cc.sys.isMobile;
        this.txt += "\n===isBrowser: " + cc.sys.isBrowser;
        var matched = this.getMatchedSystemConfig(this.cf);
        this.txt += "\n===Matched: " + matched.isMatched;
        this.txt += "\n===Config: " + JSON.stringify(matched.config);
        console.log(cc.sys.BROWSER_TYPE_CHROME + ", " + cc.sys.BROWSER_TYPE_FIREFOX + ", " + cc.sys.BROWSER_TYPE_SAFARI + ", " + cc.sys.BROWSER_TYPE_IE + ", " + cc.sys.BROWSER_TYPE_EDGE + ", " + cc.sys.OS_ANDROID + ", " + cc.sys.OS_IOS + ", " + cc.sys.OS_OSX + ", " + cc.sys.OS_WINDOWS + ", " + cc.sys.OS_LINUX);
      };
      TestNative.prototype.getMatchedSystemConfig = function(config) {
        var result = {
          isMatched: false,
          config: null
        };
        if (!config) return result;
        if (true != config.enable) return result;
        if (!config.v2 || true != config.v2.enable) return result;
        if (!config.v2.listConfigs || 0 == config.v2.listConfigs.length) return result;
        for (var i = 0; i < config.v2.listConfigs.length; i++) {
          var cfg = config.v2.listConfigs[i];
          if (true != cfg.enable) continue;
          if (!cfg.matches) continue;
          if (!cfg.actions || 0 == cfg.actions.length) continue;
          if (this._isSystemMatched(cfg.matches)) {
            result.isMatched = true;
            result.config = cfg;
            return result;
          }
        }
        return result;
      };
      TestNative.prototype._isSystemMatched = function(match) {
        if (!match) return false;
        if (match.osInclude && match.osInclude.length > 0 && -1 == match.osInclude.indexOf(cc.sys.os)) return false;
        if (match.osExclude && match.osExclude.length > 0 && -1 != match.osExclude.indexOf(cc.sys.os)) return false;
        if (null != match.isMobile && match.isMobile != cc.sys.isMobile) return false;
        if (null != match.isBrowser && match.isBrowser != cc.sys.isBrowser) return false;
        if (match.browserInclude && match.browserInclude.length > 0 && -1 == match.browserInclude.indexOf(cc.sys.browserType)) return false;
        if (match.browserExclude && match.browserExclude.length > 0 && -1 != match.browserExclude.indexOf(cc.sys.browserType)) return false;
        return true;
      };
      TestNative.prototype.applyModifyConfigActions = function(actions, jsonObj) {
        if (!actions || 0 == actions.length || !jsonObj) return jsonObj;
        var currentObj = jsonObj;
        for (var i = 0; i < actions.length; i++) {
          var action = actions[i];
          if (!action.enable) continue;
          if ("replace" === action.type && action.data && action.data.from && action.data.to) {
            var str = JSON.stringify(currentObj);
            str = str.split(action.data.from).join(action.data.to);
            try {
              currentObj = JSON.parse(str);
            } catch (e) {
              cc.error("applyActions: Failed to parse JSON after replace", e);
            }
          }
        }
        return currentObj;
      };
      TestNative.prototype.testSaveStore = function() {
        var val = new Date().toISOString();
        cc.sys.localStorage.setItem(this.storekey, val);
        this.txt = "saving value: " + val;
      };
      TestNative.prototype.testLoadStore = function() {
        var val = cc.sys.localStorage.getItem(this.storekey);
        this.txt = "loaded value: " + val;
      };
      TestNative.prototype.testRemoveStore = function() {
        var val = cc.sys.localStorage.getItem(this.storekey);
        cc.sys.localStorage.removeItem(this.storekey);
        this.txt = "removed value: " + val;
      };
      TestNative.prototype.testOpenURL = function() {
        var url = "https://devian68.github.io/webapp";
        this.txtUrl && this.txtUrl.string && this.txtUrl.string.length > 10 && (url = this.txtUrl.string);
        cc.sys.openURL(url);
      };
      TestNative.prototype.testOpenCustomWebView = function() {
        var url = "https://devian68.github.io/webapp";
        this.txtUrl && this.txtUrl.string && this.txtUrl.string.length > 10 && (url = this.txtUrl.string);
        GameUtils_1.openWebWithCustomWV(url, false);
      };
      TestNative.prototype.update = function(dt) {
        if (this.frameCount++ % 10 == 0) {
          this.frameCount = 0;
          this.label.string = this.txt;
        }
      };
      __decorate([ property(cc.Label) ], TestNative.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], TestNative.prototype, "nPointer", void 0);
      __decorate([ property(cc.Node) ], TestNative.prototype, "background", void 0);
      __decorate([ property(cc.EditBox) ], TestNative.prototype, "txtUrl", void 0);
      TestNative = __decorate([ ccclass ], TestNative);
      return TestNative;
    }(cc.Component);
    exports.default = TestNative;
    cc._RF.pop();
  }, {
    "./GameUtils": "GameUtils",
    "./OrientationManager": "OrientationManager",
    "./WebAppNativeSDK": "WebAppNativeSDK"
  } ],
  TouchFollower: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad896+4S9hLYKtXAuHSTupU", "TouchFollower");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchFollower = function(_super) {
      __extends(TouchFollower, _super);
      function TouchFollower() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.targetNode = null;
        _this.touchStartPos = null;
        _this.offsetPos = null;
        return _this;
      }
      TouchFollower.prototype.onLoad = function() {
        var canvas = cc.Canvas.instance.node;
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        canvas.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
      };
      TouchFollower.prototype.moveBox = function(touchPos) {
        var camera = cc.Camera.findCamera(this.targetNode);
        var pos = camera.getScreenToWorldPoint(cc.v2(touchPos.x, touchPos.y));
        var p = this.targetNode.parent.convertToNodeSpaceAR(pos);
        this.targetNode.position = cc.v2(p.x, p.y);
      };
      TouchFollower.prototype.onTouchStart = function(event) {
        var touches = event.getTouches();
        var touchPos = touches[0].getLocation();
        this.touchStartPos = touchPos;
        this.moveBox(touchPos);
      };
      TouchFollower.prototype.onTouchMove = function(event) {
        if (this.touchStartPos) {
          var touches = event.getTouches();
          var touchPos = touches[0].getLocation();
          this.moveBox(touchPos);
        }
      };
      TouchFollower.prototype.onTouchEnd = function() {
        this.touchStartPos = null;
      };
      __decorate([ property(cc.Node) ], TouchFollower.prototype, "targetNode", void 0);
      TouchFollower = __decorate([ ccclass ], TouchFollower);
      return TouchFollower;
    }(cc.Component);
    exports.default = TouchFollower;
    cc._RF.pop();
  }, {} ],
  WebAppNativeSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58dd4HszbxP6rHWaNvnhmCL", "WebAppNativeSDK");
    "use strict";
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WebAppNativeSDK = void 0;
    var WebAppNativeSDK = function() {
      function WebAppNativeSDK() {
        this._nativeHandler = null;
        this._callbackCounter = 0;
        this._pendingCallbacks = new Map();
        this.isInit = false;
        this.HANDLER_NAME = "webAction";
        this.GLOBAL_RECEIVER_NAME = "updateResult";
        var wk = window["webkit"];
        if (!wk) {
          cc.warn("WebAppNativeSDK: Webkit not found. SDK will run in test/mock mode.");
          return;
        }
        var handlers = wk["messageHandlers"];
        if (!handlers || !handlers.length) {
          cc.warn("WebAppNativeSDK: messageHandlers not found. SDK will run in test/mock mode.");
          return;
        }
        if (handlers[this.HANDLER_NAME]) {
          this._nativeHandler = handlers[this.HANDLER_NAME];
          console.log("WebAppNativeSDK: Handler '" + this.HANDLER_NAME + "' found.");
          this.registerGlobalReceiver();
        } else console.warn("WebAppNativeSDK: Handler '" + this.HANDLER_NAME + "' not found. SDK will run in test/mock mode.");
      }
      WebAppNativeSDK.prototype.patchCC2Engine = function() {
        var self = WebAppNativeSDK._instance;
        cc.sys.openURL = function(url) {
          self.openExternalUrl(url);
        };
        cc.log("WebAppNativeSDK: sys.openURL patched success");
      };
      WebAppNativeSDK.getInstance = function() {
        WebAppNativeSDK._instance || (WebAppNativeSDK._instance = new WebAppNativeSDK());
        WebAppNativeSDK._instance.getSDKVersion(function(v) {
          WebAppNativeSDK._instance.isInit = true;
          cc.log("WebAppNativeSDK: init success");
          WebAppNativeSDK._instance.patchCC2Engine();
        });
        return WebAppNativeSDK._instance;
      };
      WebAppNativeSDK.prototype.isAvailable = function() {
        return WebAppNativeSDK._instance._nativeHandler;
      };
      WebAppNativeSDK.prototype.registerGlobalReceiver = function() {
        var _this = this;
        window[this.GLOBAL_RECEIVER_NAME] = function(result) {
          _this.handleNativeCallback(result);
        };
        console.log("WebAppNativeSDK: Global callback receiver '" + this.GLOBAL_RECEIVER_NAME + "' is registered.");
      };
      WebAppNativeSDK.prototype.generateCallbackId = function(prefix) {
        void 0 === prefix && (prefix = "cb");
        this._callbackCounter++;
        return prefix + "_" + this._callbackCounter + "_" + Date.now();
      };
      WebAppNativeSDK.prototype.callNative = function(action, data, callback) {
        void 0 === data && (data = {});
        if (!this.isAvailable()) {
          console.error("WebAppNativeSDK: Cannot call action '" + action + "'. Native handler not available.");
          return;
        }
        var message = __assign({
          ac: action
        }, data);
        if (callback) {
          var cbId = this.generateCallbackId(action);
          message.cb = cbId;
          this._pendingCallbacks.set(cbId, callback);
        }
        console.log("WebAppNativeSDK: Sending to Native ->", message);
        this._nativeHandler.postMessage(message);
      };
      WebAppNativeSDK.prototype.handleNativeCallback = function(result) {
        console.log("WebAppNativeSDK: Received from Native <-", result);
        if (!result || !result.cb) {
          console.warn("WebAppNativeSDK: Received invalid result structure from native (missing 'cb').");
          return;
        }
        var callbackId = result.cb;
        var callbackData = result.dt;
        var callback = this._pendingCallbacks.get(callbackId);
        if (callback) {
          callback(callbackData);
          this._pendingCallbacks.delete(callbackId);
        } else console.warn("WebAppNativeSDK: No pending callback found for ID: " + callbackId);
      };
      WebAppNativeSDK.prototype.openExternalUrl = function(url) {
        this.callNative("openWAUrl", {
          dt: url
        });
      };
      WebAppNativeSDK.prototype.reloadWebView = function(url) {
        this.callNative("reloadWithUrl", {
          dt: url
        });
      };
      WebAppNativeSDK.prototype.saveString = function(key, value) {
        this.callNative("saveWAString", {
          key: key,
          dt: value
        });
      };
      WebAppNativeSDK.prototype.loadString = function(key, callback) {
        this.callNative("loadWAString", {
          key: key
        }, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.setClipboard = function(text) {
        this.callNative("setWAClipboard", {
          dt: text
        });
      };
      WebAppNativeSDK.prototype.getClipboard = function(callback) {
        this.callNative("getWAClipboard", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.getBundleId = function(callback) {
        this.callNative("getWABundleId", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.getSDKVersion = function(callback) {
        this.callNative("getWASDKVersion", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.getDeviceModel = function(callback) {
        this.callNative("getWADeviceModel", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.getDeviceId = function(callback) {
        this.callNative("getWADeviceID", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.getSystemInfo = function(callback) {
        this.callNative("getWASystemInfo", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.isSupported = function(callback) {
        this.callNative("isSupport", {}, function(data) {
          callback(data);
        });
      };
      WebAppNativeSDK.prototype.updateWebAppNativeSDK = function(url, version, needsRestart) {
        this.callNative("updateWASDK", {
          dt: url,
          ver: version,
          nr: needsRestart
        });
      };
      WebAppNativeSDK.prototype.updateInjectedScripts = function(version, scriptContent) {
        var payload = {
          version: version,
          script: scriptContent
        };
        this.callNative("updateWAInjectedScripts", {
          dt: payload
        });
      };
      WebAppNativeSDK.prototype.setScreenRotation = function(rotation) {
        this.callNative("setWAScreenRotation", {
          dt: rotation
        });
      };
      WebAppNativeSDK.prototype.exitWebView = function() {
        this.callNative("exitwv");
      };
      return WebAppNativeSDK;
    }();
    exports.WebAppNativeSDK = WebAppNativeSDK;
    cc._RF.pop();
  }, {} ],
  "use_v2.1-2.2.1_cc.Toggle_event": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2e5fNkcDZMb6yXtGHyjmVQ", "use_v2.1-2.2.1_cc.Toggle_event");
    "use strict";
    cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = true);
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameUtils", "OrientationManager", "TestNative", "TouchFollower", "WebAppNativeSDK", "use_v2.1-2.2.1_cc.Toggle_event" ]);