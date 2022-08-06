import './ColorSwitch.scss';
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
export default ColorSwitch;
