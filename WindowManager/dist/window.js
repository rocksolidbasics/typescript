"use strict";
//Using 'export' is optional - it makes it accessible from other modules
Object.defineProperty(exports, "__esModule", { value: true });
var WindowManagerC = /** @class */ (function () {
    //Parameter property and readonly/ immutable variable definition
    function WindowManagerC(wId) {
        this.wId = wId;
        this.w_isHidden = false;
        this.w_width = 100;
        this.w_height = 200;
        this.w_windowTitle = "Title: ${w_Name}";
        //Tuple usage - an array of tuples
        this.w_configs = [["font-size", 12], ["is-modal", 0]];
        //Enumeration of window modes - Starts with zero
        this.w_windowMode = WindowMode.WINDOW_ACTIVE;
        //Usage of Any type
        this.w_DummyCache = [1, true, "free"];
    }
    WindowManagerC.prototype.setWidth = function (w) {
        this.w_width = w;
    };
    WindowManagerC.prototype.getWidth = function () {
        return this.w_width;
    };
    WindowManagerC.prototype.getWindowMode = function () {
        return this.w_windowMode;
    };
    //Each member (properties and functions) are public by default, unless
    //a 'private' or 'protected' keyword is used
    WindowManagerC.prototype.render = function () {
        this._render();
    };
    WindowManagerC.prototype._render = function () {
        console.log("Rendering window");
    };
    Object.defineProperty(WindowManagerC.prototype, "setHidden", {
        set: function (flag) {
            if (this.w_windowMode != WindowMode.WINDOW_ACTIVE)
                return;
            this.w_isHidden = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowManagerC.prototype, "isHidden", {
        get: function () {
            return this.w_isHidden;
        },
        enumerable: true,
        configurable: true
    });
    return WindowManagerC;
}());
exports.WindowManagerC = WindowManagerC;
//enum not allowed inside a class
var WindowMode;
(function (WindowMode) {
    WindowMode[WindowMode["WINDOW_ACTIVE"] = 0] = "WINDOW_ACTIVE";
    WindowMode[WindowMode["WINDOW_INACTIVE"] = 1] = "WINDOW_INACTIVE";
    WindowMode[WindowMode["WINDOW_MIN"] = 2] = "WINDOW_MIN";
    WindowMode[WindowMode["WINDOW_MAX"] = 3] = "WINDOW_MAX";
})(WindowMode = exports.WindowMode || (exports.WindowMode = {}));
;
