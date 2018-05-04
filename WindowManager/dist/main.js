"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var window_1 = require("./window");
var dialog_1 = require("./dialog");
var wMgr = new window_1.WindowManagerC(0x02);
console.log(wMgr.getWidth());
var wd = new dialog_1.DialogC(window_1.WindowMode.WINDOW_INACTIVE);
wd.render();
wMgr.render();
var wd1 = new dialog_1.DialogC(window_1.WindowMode.WINDOW_ACTIVE);
console.log(wd.getWindowMode());
console.log(wd1.getWindowMode());
//Member accessors 'get' and 'set' methods acting as variables, 
//with support for operator assignement
wd1.setHidden = true;
console.log("Is hidden => " + wd1.isHidden);
wd1.setHidden = false;
console.log("Is not hidden => " + wd1.isHidden);
