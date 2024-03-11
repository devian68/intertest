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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function setKeepScreenOn(value) {
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "setKeepScreenOn";
        var methodSignature = "(Z)V";
        jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, value);
      } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "setKeepScreenOn:", value);
    }
    exports.setKeepScreenOn = setKeepScreenOn;
    function createFile() {
      cc.sys.isNative && (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "createFileeee"));
    }
    exports.createFile = createFile;
    function saveBase64Image(base64) {
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "saveImageToPhotoLibrary";
        var methodSignature = "(Ljava/lang/String;)V";
        jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, base64);
      } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "saveImageToPhotoLibrary:", base64);
    }
    exports.saveBase64Image = saveBase64Image;
    function isSupportSendSMS() {
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "isSupportSendSMS";
        var methodSignature = "()Z";
        if (jsb) return jsb.reflection.callStaticMethod(className, methodName, methodSignature);
      } else if (cc.sys.os === cc.sys.OS_IOS && jsb) return jsb.reflection.callStaticMethod("AppController", "isSupportSendSMS");
      return false;
    }
    exports.isSupportSendSMS = isSupportSendSMS;
    function sendSMS(phoneNumber, content) {
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "sendSMS";
        var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
        jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, phoneNumber, content);
      } else cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "sendSMS:withContent:", phoneNumber, content);
    }
    exports.sendSMS = sendSMS;
    function getBundleId() {
      var id = "ERROR";
      if (cc.sys.isNative) {
        id = "ERROR";
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          var className = "org/cocos2dx/javascript/AppActivity";
          var methodName = "getBundleid";
          var methodSignature = "()Ljava/lang/String;";
          try {
            void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
          } catch (ex) {
            console.error("ERROR getting bundle id " + ex);
          }
        } else if (cc.sys.os === cc.sys.OS_IOS) try {
          void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", "getBundleid"));
        } catch (ex) {
          console.error("ERROR getting bundle id " + ex);
        }
      }
      return id;
    }
    exports.getBundleId = getBundleId;
    function getIdentifier() {
      var id = "none";
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "getIdentifier";
        var methodSignature = "()Ljava/lang/String;";
        try {
          void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
        } catch (ex) {
          console.error("ERROR getting bundle id " + ex);
        }
      } else if (cc.sys.os === cc.sys.OS_IOS) try {
        void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", "getIdentifier"));
      } catch (ex) {
        console.error("ERROR getting bundle id " + ex);
      }
      return id;
    }
    exports.getIdentifier = getIdentifier;
    function getDeviceName() {
      var id = "none";
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "getDeviceName";
        var methodSignature = "()Ljava/lang/String;";
        try {
          void 0 != jsb && (id = jsb.reflection.callStaticMethod(className, methodName, methodSignature));
        } catch (ex) {
          console.error("ERROR getting bundle id " + ex);
        }
      } else if (cc.sys.os === cc.sys.OS_IOS) try {
        void 0 != jsb && (id = jsb.reflection.callStaticMethod("AppController", "getDeviceName"));
      } catch (ex) {
        console.error("ERROR getting bundle id " + ex);
      }
      return id;
    }
    exports.getDeviceName = getDeviceName;
    function setOrientation(orientation) {
      void 0 === orientation && (orientation = 0);
      if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_IOS) {
        if (jsb) try {
          jsb.reflection.callStaticMethod("AppController", "rotateScreen:", orientation);
        } catch (_) {}
      } else if (cc.sys.os === cc.sys.OS_ANDROID && jsb) try {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "setOrientation";
        var methodSignature = "(I)V";
        jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, orientation);
      } catch (_) {}
    }
    exports.setOrientation = setOrientation;
    function writeTextToClipboard(a) {
      if (cc.sys.platform === cc.sys.MOBILE_BROWSER || cc.sys.platform === cc.sys.DESKTOP_BROWSER) try {
        window.navigator.clipboard.writeText(a).then(function() {
          cc.log("Copied to clipboard");
        }, function(reason) {
          cc.log("Can't copy using navigator, error: " + reason);
        });
      } catch (_a) {} else if (cc.sys.isNative && void 0 != jsb) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "setClipboardContent";
        var methodSignature = "(Ljava/lang/String;)V";
        jsb && jsb.reflection.callStaticMethod(className, methodName, methodSignature, a);
      } else cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("AppController", "setClipboardContent:", a);
    }
    exports.writeTextToClipboard = writeTextToClipboard;
    function readTextFromClipboard() {
      if (cc.sys.isNative && void 0 != jsb) if (cc.sys.os === cc.sys.OS_ANDROID) {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "getClipboardContent";
        var methodSignature = "()Ljava/lang/String;";
        if (jsb) {
          var content = jsb.reflection.callStaticMethod(className, methodName, methodSignature);
          return content;
        }
      } else if (cc.sys.os === cc.sys.OS_IOS && jsb) {
        var content = jsb.reflection.callStaticMethod("AppController", "getClipboardContent");
        return content;
      }
      return "";
    }
    exports.readTextFromClipboard = readTextFromClipboard;
    cc._RF.pop();
  }, {} ],
  TestNative: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d96a9Bgo+RJAYn/jgxExEKv", "TestNative");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameUtils_1 = require("./GameUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nPointer = null;
        _this.txt = "TEST INTEGRATION cc2";
        _this.base64Sample = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";
        _this.frameCount = 0;
        return _this;
      }
      NewClass.prototype.testGetId = function() {
        this.txt = "getting identifier...";
        var id = GameUtils_1.getIdentifier();
        this.txt += "\n===Identifier: " + id;
      };
      NewClass.prototype.testGetBundleId = function() {
        this.txt = "getting bundle id...";
        var id = GameUtils_1.getBundleId();
        this.txt += "\n===BundleId: " + id;
      };
      NewClass.prototype.testGetDeviceName = function() {
        this.txt = "getting device name...";
        var id = GameUtils_1.getDeviceName();
        this.txt += "\n===DeviceName: " + id;
      };
      NewClass.prototype.testSetClipboard = function() {
        this.txt = "setting clipboard...";
        GameUtils_1.writeTextToClipboard("CLIPBOARD SET BY COCOS ");
        this.txt += "\n===Clipboard set with content: CLIPBOARD SET BY COCOS";
      };
      NewClass.prototype.testGetClipboard = function() {
        this.txt = "getting clipboard...";
        var id = GameUtils_1.readTextFromClipboard();
        this.txt += "\n===Clipboard: " + id;
      };
      NewClass.prototype.testRotateScreen = function() {
        var isPortrait = Math.random() > .5;
        this.txt = isPortrait ? "rotating screen to PORTRAIT..." : "rotating screen to LANDSCAPE...";
        GameUtils_1.setOrientation(isPortrait ? 0 : 3);
        cc.view.setOrientation(isPortrait ? cc.macro.ORIENTATION_PORTRAIT : cc.macro.ORIENTATION_LANDSCAPE);
        setTimeout(function() {
          var vv = cc.view.getCanvasSize();
          var x = 0, y = 0, w = vv.width, h = vv.height;
          cc.view.setViewportInPoints(x, y, w, h);
        });
        this.txt += "\n===Screen rotated";
      };
      NewClass.prototype.testSMS = function() {
        this.txt = "testing SMS...";
        var id = GameUtils_1.isSupportSendSMS();
        this.txt += "\n===IS SMS supported: " + id;
        this.txt += "\nopening SMS composer to send to 0123456789...";
        id && GameUtils_1.sendSMS("0123456789", "SMS CONTENT FROM COCOS");
      };
      NewClass.prototype.testKeepScreenOn = function() {
        var viewPort = cc.view.getViewportRect();
        cc.log(JSON.stringify(viewPort));
        var vs = cc.view.getVisibleOriginInPixel();
        cc.log(JSON.stringify(vs));
        var vv = cc.view.getCanvasSize();
        cc.log(JSON.stringify(vv));
        var fs = cc.view.getFrameSize();
        cc.log(JSON.stringify(fs));
        var ff = cc.view.getScissorRect();
        cc.log(JSON.stringify(ff));
        var isOn = Math.random() > .5;
        this.txt = isOn ? "setting screen ON..." : "setting screen NORMAL...";
        GameUtils_1.setKeepScreenOn(isOn);
        this.txt += "\n===DONE";
      };
      NewClass.prototype.testCreateFile = function() {
        this.txt = "creating file...";
        GameUtils_1.createFile();
        this.txt += "\n===DONE";
      };
      NewClass.prototype.testSaveImage = function() {
        this.txt = "saving smiley base64 image to gallery...";
        GameUtils_1.saveBase64Image(this.base64Sample);
        this.txt += "\n===DONE";
      };
      NewClass.prototype.toggleRotate = function() {};
      NewClass.prototype.update = function() {
        if (this.frameCount++ % 10 == 0) {
          this.frameCount = 0;
          this.label.string = this.txt;
        }
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nPointer", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./GameUtils": "GameUtils"
  } ],
  TouchFollower: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad896+4S9hLYKtXAuHSTupU", "TouchFollower");
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
  }, {} ]
}, {}, [ "GameUtils", "TestNative", "TouchFollower" ]);