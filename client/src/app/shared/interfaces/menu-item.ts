export interface MenuItem {
    textRight?: string;
    textLeft?: string;
    classes?: string;
    action?: (args?: any[]) => {};
}

