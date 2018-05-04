import { WindowManagerC, WindowMode } from "./window";
import { DialogC } from "./dialog";

let wMgr : WindowManagerC = new WindowManagerC(0x02);
console.log(wMgr.getWidth());

let wd : WindowManagerC = new DialogC(WindowMode.WINDOW_INACTIVE);
wd.render();
wMgr.render();

let wd1: DialogC = new DialogC(WindowMode.WINDOW_ACTIVE);
console.log(wd.getWindowMode());
console.log(wd1.getWindowMode());

//Member accessors 'get' and 'set' methods acting as variables, 
//with support for operator assignement
wd1.setHidden = true;
console.log("Is hidden => " + wd1.isHidden);
wd1.setHidden = false;
console.log("Check is hidden now => " + wd1.isHidden);