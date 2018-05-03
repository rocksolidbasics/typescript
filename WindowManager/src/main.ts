import { WindowManagerC, WindowMode } from "./window";
import { DialogC } from "./dialog";

let wMgr : WindowManagerC = new WindowManagerC();
console.log(wMgr.getWidth());

let wd : WindowManagerC = new DialogC(WindowMode.WINDOW_INACTIVE);
wd.render();
wMgr.render();

let wd1: DialogC = new DialogC(WindowMode.WINDOW_ACTIVE);
console.log(wd.getWindowMode());
console.log(wd1.getWindowMode());