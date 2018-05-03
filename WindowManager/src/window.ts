//Using 'export' is optional - it makes it accessible from other modules

export class WindowManagerC {
    //'let' declarations not allowed inside the class
    w_Name : string;
    w_isHidden: boolean = false;
    w_width: number = 100;
    w_height: number = 200;

    w_windowTitle: string = "Title: ${w_Name}";
    w_components: string[];
    
    //Tuple usage - an array of tuples
    w_configs: [string, number][] = [["font-size", 12],["is-modal", 0]];
    //Enumeration of window modes - Starts with zero
    w_windowMode: WindowMode = WindowMode.WINDOW_ACTIVE;

    //Usage of Any type
    w_DummyCache: any[] = [1, true, "free"];

    setWidth(w: number): void {
        this.w_width = w;
    }

    getWidth(): number {
        return this.w_width;
    }

    getWindowMode(): WindowMode {
        return this.w_windowMode;
    }

    //Each member (properties and functions) are public by default, unless
    //a 'private' or 'protected' keyword is used
    public render(): void {
        this._render();
    }

    private _render(): void {
        console.log("Rendering window");
    }
}

//enum not allowed inside a class
export enum WindowMode {WINDOW_ACTIVE, WINDOW_INACTIVE, WINDOW_MIN, WINDOW_MAX};
