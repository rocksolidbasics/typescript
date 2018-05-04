import { WindowManagerC, WindowMode } from "./window";

export class DialogC extends WindowManagerC {

    //Multiple constructor implemenations are not allowed
    constructor(mode: WindowMode) {
        super(0x01);
        this.w_windowMode = mode;
    }

    render(): void {
        console.log("Rendering dialog");
    }
}