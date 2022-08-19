import './LineSheen.scss';
interface LineSheenProps {
    lineHeight?: string;
    sheenHeight?: string;
    color?: string;
    animDuration?: string;
    style?: {};
    [x: string]: any;
}
declare function LineSheen({ lineHeight, sheenHeight, color, animDuration, style, ...rest }: LineSheenProps): JSX.Element;
export default LineSheen;
