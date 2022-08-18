interface ColorSwitchProps {
    colors: Array<string>;
    currentColorIndex?: number;
    onClick?: () => void;
    size?: number;
    animDuration?: string;
    className?: string;
    style?: {};
    [x: string]: any;
}
declare function ColorSwitch({ currentColorIndex, colors, onClick, size, animDuration, className, style, ...rest }: ColorSwitchProps): JSX.Element;

interface DarkModeSwitchProps {
    darkMode?: boolean;
    onClick?: () => void;
    size?: number;
    animDuration?: string;
    lightModeColor?: string;
    darkModeColor?: string;
    className?: string;
    style?: {};
    [x: string]: any;
}
declare function DarkModeSwitch({ darkMode, onClick, size, className, style, animDuration, lightModeColor, darkModeColor, ...rest }: DarkModeSwitchProps): JSX.Element;

interface TextTypeDeleteProps {
    typeText: string[];
    loop?: boolean;
    blinkGap?: string;
    constText?: string;
    constTextColor?: string;
    typeTextColor?: string;
    cursorColor?: string;
    pauseMSec?: number;
    typeMSec?: number;
    deleteMSec?: number;
    fontSize?: string;
    cursorHeight?: string;
    cursorWidth?: string;
    [x: string]: any;
}
declare function TextTypeDelete({ typeText, loop, blinkGap, constText, constTextColor, typeTextColor, cursorColor, pauseMSec, typeMSec, deleteMSec, fontSize, cursorHeight, cursorWidth, fontFamily, style, ...rest }: TextTypeDeleteProps): JSX.Element;

export { ColorSwitch, DarkModeSwitch, TextTypeDelete };
