import './TextTypeDelete.scss';
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
declare function TextTypeDelete({ typeText, loop, blinkGap, constText, constTextColor, typeTextColor, cursorColor, pauseMSec, typeMSec, deleteMSec, fontSize, cursorHeight, cursorWidth, style, ...rest }: TextTypeDeleteProps): JSX.Element;
export default TextTypeDelete;
