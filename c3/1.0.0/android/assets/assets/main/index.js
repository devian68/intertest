System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class DebugViewRuntimeControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "compositeModeToggle", _descriptor, this);

          _initializerDefineProperty(this, "singleModeToggle", _descriptor2, this);

          _initializerDefineProperty(this, "EnableAllCompositeModeButton", _descriptor3, this);

          this._single = 0;
          this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          this.compositeModeToggleList = [];
          this.singleModeToggleList = [];
          this.miscModeToggleList = [];
          this.textComponentList = [];
          this.labelComponentList = [];
          this.textContentList = [];
          this.hideButtonLabel = void 0;
          this._currentColorIndex = 0;
          this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
        }

        start() {
          // get canvas resolution
          const canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          const uiTransform = this.node.parent.getComponent(UITransform);
          const halfScreenWidth = uiTransform.width * 0.5;
          const halfScreenHeight = uiTransform.height * 0.5;
          let x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          const width = 200,
                height = 20; // new nodes

          const miscNode = this.node.getChildByName('MiscMode');
          const buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          const titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (let i = 0; i < 2; i++) {
            const newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            const labelComponent = newLabel.getComponent(Label);
            labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            labelComponent.color = Color.WHITE;
            labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
          }

          y -= height; // single

          let currentRow = 0;

          for (let i = 0; i < this.strSingle.length; i++, currentRow++) {
            if (i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            const newNode = i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          let labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (let i = 0; i < this.strMisc.length; i++) {
            const newNode = instantiate(this.compositeModeToggle);
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = miscNode;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strMisc[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            const toggleComponent = newNode.getComponent(Toggle);
            toggleComponent.isChecked = i ? true : false;
            newNode.on(Toggle.EventType.TOGGLE, i ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[i] = newNode;
          } // composite


          y -= 150;

          for (let i = 0; i < this.strComposite.length; i++) {
            const newNode = i ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.compositeModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strComposite[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[i] = newNode;
          }
        }

        isTextMatched(textUI, textDescription) {
          let tempText = new String(textUI);
          const findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        }

        toggleSingleMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);

          for (let i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        }

        toggleCompositeMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);

          for (let i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        }

        toggleLightingWithAlbedo(toggle) {
          const debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        }

        toggleCSMColoration(toggle) {
          const debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        }

        enableAllCompositeMode(button) {
          const debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (let i = 0; i < this.compositeModeToggleList.length; i++) {
            const toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            toggleComponent.isChecked = true;
          }

          let toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        }

        hideUI(button) {
          const titleNode = this.node.getChildByName('Titles');
          const activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        }

        changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (let i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (let i = 0; i < this.labelComponentList.length; i++) {
            this.labelComponentList[i].color = this.color[this._currentColorIndex];
          }
        }

        onLoad() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameUtils.ts", ['cc'], function (exports) {
  var cclegacy, sys, native, log, view, macro;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      native = module.native;
      log = module.log;
      view = module.view;
      macro = module.macro;
    }],
    execute: function () {
      exports({
        changeOrientation: changeOrientation,
        createFile: createFile,
        getBundleId: getBundleId,
        getDeviceName: getDeviceName,
        getIdentifier: getIdentifier,
        isSupportSendSMS: isSupportSendSMS,
        readTextFromClipboard: readTextFromClipboard,
        saveBase64Image: saveBase64Image,
        sendSMS: sendSMS,
        setKeepScreenOn: setKeepScreenOn,
        writeTextToClipboard: writeTextToClipboard
      });

      cclegacy._RF.push({}, "bdcb4xusaVGWZIdrFOcIXq4", "GameUtils", undefined);

      function changeOrientation(value) {
        let isSupportOrientation = null;

        if (sys.isNative) {
          if (sys.os === sys.OS.IOS) {
            //@ts-expect-error
            isSupportOrientation = native.reflection.callStaticMethod("ViewController", "isSupportOrientation");

            try {
              native.reflection.callStaticMethod("ViewController", "rotateScreen:", value);
            } catch (e) {
              log("changeOrientation e: " + JSON.stringify(e));
            }
          } else if (sys.os === sys.OS.ANDROID) {
            if (native) {
              try {
                let className = "com/cocos/game/AppActivity";
                let methodName = "setOrientation";
                let methodSignature = "(I)V";

                if (native) {
                  isSupportOrientation = native.reflection.callStaticMethod(className, "isSupportOrientation", "()Z");
                  native.reflection.callStaticMethod(className, methodName, methodSignature, value);
                }
              } catch (e) {
                log("changeOrientation e: " + JSON.stringify(e));
              }
            }
          }
        }

        log("isSupportOrientation: " + isSupportOrientation);

        if (value == 0 || value == 2) {
          view.setOrientation(macro.ORIENTATION_PORTRAIT);
        } else if (value == 1 || value == 3) {
          view.setOrientation(macro.ORIENTATION_LANDSCAPE);
        } else {
          view.setOrientation(macro.ORIENTATION_AUTO);
        }
      }

      function setKeepScreenOn(value) {
        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "setKeepScreenOn";
            let methodSignature = "(Z)V";

            if (native) {
              native.reflection.callStaticMethod(className, methodName, methodSignature, value);
            }
          } else if (sys.os === sys.OS.IOS) {
            if (native) {
              //@ts-expect-error
              native.reflection.callStaticMethod("ViewController", "setKeepScreenOn:", value);
            }
          }
        }
      }

      function createFile() {
        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) ;else if (sys.os === sys.OS.IOS) {
            if (native) {
              //@ts-expect-error
              native.reflection.callStaticMethod("ViewController", "createFileeee");
            }
          }
        }
      }

      function saveBase64Image(base64) {
        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "saveImageToPhotoLibrary";
            let methodSignature = "(Ljava/lang/String;)V";

            if (native) {
              native.reflection.callStaticMethod(className, methodName, methodSignature, base64);
            }
          } else if (sys.os === sys.OS.IOS) {
            if (native) {
              native.reflection.callStaticMethod("ViewController", "saveImageToPhotoLibrary:", base64);
            }
          }
        }
      }

      function isSupportSendSMS() {
        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "isSupportSendSMS";
            let methodSignature = "()Z";

            if (native) {
              return native.reflection.callStaticMethod(className, methodName, methodSignature);
            }
          } else if (sys.os === sys.OS.IOS) {
            if (native) {
              //@ts-expect-error
              return native.reflection.callStaticMethod("ViewController", "isSupportSendSMS");
            }
          }
        }

        return false;
      }

      function sendSMS(phoneNumber, content) {
        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "sendSMS";
            let methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";

            if (native) {
              native.reflection.callStaticMethod(className, methodName, methodSignature, phoneNumber, content);
            }
          } else if (sys.os === sys.OS.IOS) {
            if (native) {
              native.reflection.callStaticMethod("ViewController", "sendSMS:withContent:", phoneNumber, content);
            }
          }
        }
      }

      function getBundleId() {
        let id = "ERROR";

        if (sys.isNative) {
          id = "ERROR";

          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "getBundleid";
            let methodSignature = "()Ljava/lang/String;";

            try {
              if (native != undefined) {
                id = native.reflection.callStaticMethod(className, methodName, methodSignature);
              }
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
            }
          } else if (sys.os === sys.OS.IOS) {
            try {
              if (native != undefined) {
                //@ts-expect-error
                id = native.reflection.callStaticMethod("ViewController", "getBundleid");
              }
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
            }
          }
        }

        return id;
      }

      function getIdentifier() {
        let id = "none";

        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "getIdentifier";
            let methodSignature = "()Ljava/lang/String;";

            try {
              if (native != undefined) {
                id = native.reflection.callStaticMethod(className, methodName, methodSignature);
              }
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
            }
          } else if (sys.os === sys.OS.IOS) {
            try {
              if (native != undefined) {
                //@ts-expect-error
                id = native.reflection.callStaticMethod("ViewController", "getIdentifier");
              }
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
            }
          }
        }

        return id;
      }

      function getDeviceName() {
        let id = "none";

        if (sys.isNative) {
          if (sys.os === sys.OS.ANDROID) {
            let className = "com/cocos/game/AppActivity";
            let methodName = "getDeviceName";
            let methodSignature = "()Ljava/lang/String;";

            try {
              if (native != undefined) {
                id = native.reflection.callStaticMethod(className, methodName, methodSignature);
              }
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
            }
          } else if (sys.os === sys.OS.IOS) {
            try {
              if (native != undefined) {
                //@ts-expect-error
                id = native.reflection.callStaticMethod("ViewController", "getDeviceName");
              }
            } catch (ex) {
              console.error("ERROR getting bundle id " + ex);
            }
          }
        }

        return id;
      } //0 = portrait
      //1 = landscape right
      //2 = upside down
      //3 = landscape right
      // export function setOrientation(orientation = 0) {
      // 	if (sys.isNative) {
      // 		if (sys.os === sys.OS.IOS) {
      // 			if (native) {
      // 				try {
      // 					//@ts-expect-error
      // 					native.reflection.callStaticMethod("ViewController", "rotateScreen:", orientation);
      // 				} catch (_) { }
      // 			}
      // 		}else if(sys.os === sys.OS.ANDROID){
      // 			if (native) {
      // 				try {
      // 					let className = "com/cocos/game/AppActivity";
      // 					let methodName = "setOrientation";
      // 					let methodSignature = "(I)V";
      // 					if (native) {
      // 						native.reflection.callStaticMethod(className, methodName, methodSignature, orientation);
      // 					}
      // 				} catch (_) { }
      // 			}
      // 		}
      // 	}
      // }


      function writeTextToClipboard(a) {
        if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
          try {
            window.navigator.clipboard.writeText(a).then(() => {
              log("Copied to clipboard");
            }, reason => {
              log("Can't copy using navigator, error: " + reason);
            });
          } catch {}
        } else if (sys.isNative) {
          if (native != undefined) {
            // native.copyTextToClipboard(a);
            if (sys.os === sys.OS.ANDROID) {
              let className = "com/cocos/game/AppActivity";
              let methodName = "setClipboardContent";
              let methodSignature = "(Ljava/lang/String;)V";

              if (native) {
                native.reflection.callStaticMethod(className, methodName, methodSignature, a);
              }
            } else if (sys.os === sys.OS.IOS) {
              native.reflection.callStaticMethod("ViewController", "setClipboardContent:", a);
            }
          }
        }
      }

      function readTextFromClipboard() {
        if (sys.isNative) {
          if (native != undefined) {
            // native.copyTextToClipboard(a);
            if (sys.os === sys.OS.ANDROID) {
              let className = "com/cocos/game/AppActivity";
              let methodName = "getClipboardContent";
              let methodSignature = "()Ljava/lang/String;";

              if (native) {
                let content = native.reflection.callStaticMethod(className, methodName, methodSignature);
                return content;
              }
            } else if (sys.os === sys.OS.IOS) {
              if (native) {
                //@ts-expect-error
                let content = native.reflection.callStaticMethod("ViewController", "getClipboardContent");
                return content;
              }
            }
          }
        }

        return "";
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./GameUtils.ts', './OrientationManager.ts', './TestNative.ts', './debug-view-runtime-control.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/OrientationManager.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // Learn TypeScript:
      cclegacy._RF.push({}, "f156eZv65VDrY7sRAp1Dz0x", "OrientationManager", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TestNative.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component, view, ResolutionPolicy, changeOrientation, getIdentifier, getBundleId, getDeviceName, writeTextToClipboard, readTextFromClipboard, isSupportSendSMS, sendSMS, setKeepScreenOn, createFile, saveBase64Image;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
    }, function (module) {
      changeOrientation = module.changeOrientation;
      getIdentifier = module.getIdentifier;
      getBundleId = module.getBundleId;
      getDeviceName = module.getDeviceName;
      writeTextToClipboard = module.writeTextToClipboard;
      readTextFromClipboard = module.readTextFromClipboard;
      isSupportSendSMS = module.isSupportSendSMS;
      sendSMS = module.sendSMS;
      setKeepScreenOn = module.setKeepScreenOn;
      createFile = module.createFile;
      saveBase64Image = module.saveBase64Image;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "6a073rHNKhEMJEySU9d017q", "TestNative", undefined); // import { OrientationManager } from './OrientationManager';


      const {
        ccclass,
        property
      } = _decorator;
      let TestNative = exports('TestNative', (_dec = ccclass('TestNative'), _dec2 = property(Label), _dec(_class = (_class2 = class TestNative extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          this.txt = "";
          this.base64Sample = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";
          this.frameCount = 0;
        }

        onLoad() {
          try {
            changeOrientation(1);
          } catch (_) {}
        }

        testGetId() {
          this.txt = "getting identifier...";
          let id = getIdentifier();
          this.txt += "\n===Identifier: " + id;
        }

        testGetBundleId() {
          this.txt = "getting bundle id...";
          let id = getBundleId();
          this.txt += "\n===BundleId: " + id;
        }

        testGetDeviceName() {
          this.txt = "getting device name...";
          let id = getDeviceName();
          this.txt += "\n===DeviceName: " + id;
        }

        testSetClipboard() {
          this.txt = "setting clipboard...";
          writeTextToClipboard("CLIPBOARD SET BY COCOS ");
          this.txt += "\n===Clipboard set with content: CLIPBOARD SET BY COCOS";
        }

        testGetClipboard() {
          this.txt = "getting clipboard...";
          let id = readTextFromClipboard();
          this.txt += "\n===Clipboard: " + id;
        }

        testPortrait() {
          changeOrientation(0);
          view.setDesignResolutionSize(720, 1560, ResolutionPolicy.SHOW_ALL);
          this.txt += "\n===Screen portrait";
        }

        testLandscape() {
          changeOrientation(1);
          view.setDesignResolutionSize(1560, 720, ResolutionPolicy.SHOW_ALL);
          this.txt += "\n===Screen landscape";
        }

        testSMS() {
          this.txt = "testing SMS...";
          let id = isSupportSendSMS();
          this.txt += "\n===IS SMS supported: " + id;
          this.txt += "\nopening SMS composer to send to 0123456789...";

          if (id) {
            sendSMS("0123456789", "SMS CONTENT FROM COCOS");
          }
        }

        testKeepScreenOn() {
          let isOn = Math.random() > 0.5;

          if (isOn) {
            this.txt = "setting screen ON...";
          } else {
            this.txt = "setting screen NORMAL...";
          }

          setKeepScreenOn(isOn);
          this.txt += "\n===DONE";
        }

        testCreateFile() {
          this.txt = "creating file...";
          createFile();
          this.txt += "\n===DONE";
        }

        testSaveImage() {
          this.txt = "saving smiley base64 image to gallery...";
          saveBase64Image(this.base64Sample);
          this.txt += "\n===DONE";
        }

        update() {
          if (this.frameCount++ % 10 == 0) {
            this.frameCount = 0;
            this.label.string = this.txt;
          }
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});