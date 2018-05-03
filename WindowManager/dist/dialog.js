"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var window_1 = require("./window");
var DialogC = /** @class */ (function (_super) {
    __extends(DialogC, _super);
    //Multiple constructor implemenations are not allowed
    function DialogC(mode) {
        var _this = _super.call(this) || this;
        _this.w_windowMode = mode;
        return _this;
    }
    DialogC.prototype.render = function () {
        console.log("Rendering dialog");
    };
    return DialogC;
}(window_1.WindowManagerC));
exports.DialogC = DialogC;
