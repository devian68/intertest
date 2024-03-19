window.__require = function t(e, c, o) {
function i(s, r) {
if (!c[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
}
var p = c[s] = {
exports: {}
};
e[s][0].call(p.exports, function(t) {
return i(e[s][1][t] || t);
}, p, p.exports, t, e, c, o);
}
return c[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
return i;
}({
GameUtils: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "35420ytYi5As4CVSJjKd3RD", "GameUtils");
Object.defineProperty(c, "__esModule", {
value: !0
});
c.setKeepScreenOn = function(t) {
cc.sys.isNative && (cc.sys.os === cc.sys.OS_ANDROID ? jsb && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setKeepScreenOn", "(Z)V", t) : cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "setKeepScreenOn:", t));
};
c.createFile = function() {
cc.sys.isNative && (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "createFileeee"));
};
c.saveBase64Image = function(t) {
cc.sys.isNative && (cc.sys.os === cc.sys.OS_ANDROID ? jsb && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "saveImageToPhotoLibrary", "(Ljava/lang/String;)V", t) : cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "saveImageToPhotoLibrary:", t));
};
c.isSupportSendSMS = function() {
if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) {
if (jsb) return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isSupportSendSMS", "()Z");
} else if (cc.sys.os === cc.sys.OS_IOS && jsb) return jsb.reflection.callStaticMethod("AppController", "isSupportSendSMS");
return !1;
};
c.sendSMS = function(t, e) {
cc.sys.isNative && (cc.sys.os === cc.sys.OS_ANDROID ? jsb && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "sendSMS", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : cc.sys.os === cc.sys.OS_IOS && jsb && jsb.reflection.callStaticMethod("AppController", "sendSMS:withContent:", t, e));
};
c.getBundleId = function() {
var t = "ERROR";
if (cc.sys.isNative) {
t = "ERROR";
if (cc.sys.os === cc.sys.OS_ANDROID) try {
void 0 != jsb && (t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getBundleid", "()Ljava/lang/String;"));
} catch (t) {
console.error("ERROR getting bundle id " + t);
} else if (cc.sys.os === cc.sys.OS_IOS) try {
void 0 != jsb && (t = jsb.reflection.callStaticMethod("AppController", "getBundleid"));
} catch (t) {
console.error("ERROR getting bundle id " + t);
}
}
return t;
};
c.getIdentifier = function() {
var t = "none";
if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) try {
void 0 != jsb && (t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getIdentifier", "()Ljava/lang/String;"));
} catch (t) {
console.error("ERROR getting bundle id " + t);
} else if (cc.sys.os === cc.sys.OS_IOS) try {
void 0 != jsb && (t = jsb.reflection.callStaticMethod("AppController", "getIdentifier"));
} catch (t) {
console.error("ERROR getting bundle id " + t);
}
return t;
};
c.getDeviceName = function() {
var t = "none";
if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_ANDROID) try {
void 0 != jsb && (t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getDeviceName", "()Ljava/lang/String;"));
} catch (t) {
console.error("ERROR getting bundle id " + t);
} else if (cc.sys.os === cc.sys.OS_IOS) try {
void 0 != jsb && (t = jsb.reflection.callStaticMethod("AppController", "getDeviceName"));
} catch (t) {
console.error("ERROR getting bundle id " + t);
}
return t;
};
c.writeTextToClipboard = function(t) {
if (cc.sys.platform === cc.sys.MOBILE_BROWSER || cc.sys.platform === cc.sys.DESKTOP_BROWSER) try {
window.navigator.clipboard.writeText(t).then(function() {
cc.log("Copied to clipboard");
}, function(t) {
cc.log("Can't copy using navigator, error: " + t);
});
} catch (t) {} else cc.sys.isNative && void 0 != jsb && (cc.sys.os === cc.sys.OS_ANDROID ? jsb && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setClipboardContent", "(Ljava/lang/String;)V", t) : cc.sys.os === cc.sys.OS_IOS && jsb.reflection.callStaticMethod("AppController", "setClipboardContent:", t));
};
c.readTextFromClipboard = function() {
if (cc.sys.isNative && void 0 != jsb) if (cc.sys.os === cc.sys.OS_ANDROID) {
if (jsb) return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getClipboardContent", "()Ljava/lang/String;");
} else if (cc.sys.os === cc.sys.OS_IOS && jsb) return jsb.reflection.callStaticMethod("AppController", "getClipboardContent");
return "";
};
cc._RF.pop();
}, {} ],
OrientationManager: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "7cbfdBJmYVJD6DTVtwg2Uty", "OrientationManager");
Object.defineProperty(c, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, n = (o.property, function() {
function t() {}
t.changeOrientation = function(t) {
var e = null;
if (cc.sys.isNative) if (cc.sys.os === cc.sys.OS_IOS) {
if (jsb) {
e = jsb.reflection.callStaticMethod("AppController", "isSupportOrientation");
try {
jsb.reflection.callStaticMethod("AppController", "rotateScreen:", t);
} catch (t) {
cc.log("changeOrientation e: " + JSON.stringify(t));
}
}
} else if (cc.sys.os === cc.sys.OS_ANDROID && jsb) try {
var c = "org/cocos2dx/javascript/AppActivity";
if (jsb) {
e = jsb.reflection.callStaticMethod(c, "isSupportOrientation", "()Z");
jsb.reflection.callStaticMethod(c, "setOrientation", "(I)V", t);
}
} catch (t) {
cc.log("changeOrientation e: " + JSON.stringify(t));
}
cc.log("isSupportOrientation: " + e);
0 == t || 2 == t ? cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT) : 1 == t || 3 == t ? cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE) : cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
};
t.prototype.start = function() {};
return t = __decorate([ i ], t);
}());
c.default = n;
cc._RF.pop();
}, {} ],
TestNative: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "d96a9Bgo+RJAYn/jgxExEKv", "TestNative");
Object.defineProperty(c, "__esModule", {
value: !0
});
var o = t("./GameUtils"), i = t("./OrientationManager"), n = cc._decorator, s = n.ccclass, r = n.property, a = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.nPointer = null;
e.txt = "TEST INTEGRATION cc2";
e.base64Sample = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";
e.frameCount = 0;
return e;
}
e.prototype.onLoad = function() {
i.default.changeOrientation(1);
};
e.prototype.testGetId = function() {
this.txt = "getting identifier...";
var t = o.getIdentifier();
this.txt += "\n===Identifier: " + t;
};
e.prototype.testGetBundleId = function() {
this.txt = "getting bundle id...";
var t = o.getBundleId();
this.txt += "\n===BundleId: " + t;
};
e.prototype.testGetDeviceName = function() {
this.txt = "getting device name...";
var t = o.getDeviceName();
this.txt += "\n===DeviceName: " + t;
};
e.prototype.testSetClipboard = function() {
this.txt = "setting clipboard...";
o.writeTextToClipboard("CLIPBOARD SET BY COCOS ");
this.txt += "\n===Clipboard set with content: CLIPBOARD SET BY COCOS";
};
e.prototype.testGetClipboard = function() {
this.txt = "getting clipboard...";
var t = o.readTextFromClipboard();
this.txt += "\n===Clipboard: " + t;
};
e.prototype.testPortrait = function() {
i.default.changeOrientation(0);
this.txt += "\n===Screen rotated";
};
e.prototype.testLandscape = function() {
i.default.changeOrientation(1);
this.txt += "\n===Screen rotated";
};
e.prototype.testSMS = function() {
this.txt = "testing SMS...";
var t = o.isSupportSendSMS();
this.txt += "\n===IS SMS supported: " + t;
this.txt += "\nopening SMS composer to send to 0123456789...";
t && o.sendSMS("0123456789", "SMS CONTENT FROM COCOS");
};
e.prototype.testKeepScreenOn = function() {
var t = cc.view.getViewportRect();
cc.log(JSON.stringify(t));
var e = cc.view.getVisibleOriginInPixel();
cc.log(JSON.stringify(e));
var c = cc.view.getCanvasSize();
cc.log(JSON.stringify(c));
var i = cc.view.getFrameSize();
cc.log(JSON.stringify(i));
var n = Math.random() > .5;
this.txt = n ? "setting screen ON..." : "setting screen NORMAL...";
o.setKeepScreenOn(n);
this.txt += "\n===DONE";
};
e.prototype.testCreateFile = function() {
this.txt = "creating file...";
o.createFile();
this.txt += "\n===DONE";
};
e.prototype.testSaveImage = function() {
this.txt = "saving smiley base64 image to gallery...";
o.saveBase64Image(this.base64Sample);
this.txt += "\n===DONE";
};
e.prototype.toggleRotate = function() {};
e.prototype.update = function(t) {
if (this.frameCount++ % 10 == 0) {
this.frameCount = 0;
this.label.string = this.txt;
}
};
__decorate([ r(cc.Label) ], e.prototype, "label", void 0);
__decorate([ r(cc.Node) ], e.prototype, "nPointer", void 0);
return e = __decorate([ s ], e);
}(cc.Component);
c.default = a;
cc._RF.pop();
}, {
"./GameUtils": "GameUtils",
"./OrientationManager": "OrientationManager"
} ],
TouchFollower: [ function(t, e, c) {
"use strict";
cc._RF.push(e, "ad896+4S9hLYKtXAuHSTupU", "TouchFollower");
Object.defineProperty(c, "__esModule", {
value: !0
});
var o = cc._decorator, i = o.ccclass, n = o.property, s = function(t) {
__extends(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.targetNode = null;
e.touchStartPos = null;
e.offsetPos = null;
return e;
}
e.prototype.onLoad = function() {
var t = cc.Canvas.instance.node;
t.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
t.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
t.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
t.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
e.prototype.moveBox = function(t) {
var e = cc.Camera.findCamera(this.targetNode).getScreenToWorldPoint(cc.v2(t.x, t.y)), c = this.targetNode.parent.convertToNodeSpaceAR(e);
this.targetNode.position = cc.v2(c.x, c.y);
};
e.prototype.onTouchStart = function(t) {
var e = t.getTouches()[0].getLocation();
this.touchStartPos = e;
this.moveBox(e);
};
e.prototype.onTouchMove = function(t) {
if (this.touchStartPos) {
var e = t.getTouches()[0].getLocation();
this.moveBox(e);
}
};
e.prototype.onTouchEnd = function() {
this.touchStartPos = null;
};
__decorate([ n(cc.Node) ], e.prototype, "targetNode", void 0);
return e = __decorate([ i ], e);
}(cc.Component);
c.default = s;
cc._RF.pop();
}, {} ]
}, {}, [ "GameUtils", "OrientationManager", "TestNative", "TouchFollower" ]);