import './TextTypeDelete.scss';
interface TextTypeDeleteProps {
    typeText: string[];
    play?: boolean;
    onComplete?: () => void;
    loop?: boolean;
    blinkGap?: string;
    textAlign?: string;
    constText?: any;
    constTextColor?: string;
    typeTextColor?: string;
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
declare function TextTypeDelete({ typeText, play, onComplete, loop, textAlign, blinkGap, constText, constTextColor, typeTextColor, cursorColor, pauseMSec, typeMSec, deleteMSec, fontSize, cursorHeight, cursorWidth, fontFamily, constTextStyles, typeTextStyles, style, ...rest }: TextTypeDeleteProps): JSX.Element;
export default TextTypeDelete;
