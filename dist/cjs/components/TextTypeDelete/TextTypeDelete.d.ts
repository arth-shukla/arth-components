import './TextTypeDelete.scss';
interface TextTypeDeleteProps {
    typeText: string[];
    loop?: boolean;
    blinkGap?: string;
    constText?: any;
    constTextColor?: string;
    constTextAlign?: 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start';
    typeTextColor?: string;
    typeTextAlign?: 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start';
    cursorColor?: string;
    pauseMSec?: number;
    typeMSec?: number;
    deleteMSec?: number;
    fontSize?: string;
    cursorHeight?: string;
    cursorWidth?: string;
    constTextStyles?: {};
    typeTextStyles?: {};
    style?: {};
    [x: string]: any;
}
declare function TextTypeDelete({ typeText, loop, blinkGap, constText, constTextColor, constTextAlign, typeTextColor, typeTextAlign, cursorColor, pauseMSec, typeMSec, deleteMSec, fontSize, cursorHeight, cursorWidth, fontFamily, constTextStyles, typeTextStyles, style, ...rest }: TextTypeDeleteProps): JSX.Element;
export default TextTypeDelete;
