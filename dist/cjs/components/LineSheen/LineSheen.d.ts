import './LineSheen.scss';
interface LineSheenProps {
    lineWidth?: string;
    lineHeight?: string;
    lineColor?: string;
    sheenColor?: string;
    animDuration?: number;
    className?: string;
    style?: {};
    [x: string]: any;
}
declare function LineSheen({ lineWidth, lineHeight, lineColor, animDuration, sheenColor, className, style, ...rest }: LineSheenProps): JSX.Element;
export default LineSheen;
