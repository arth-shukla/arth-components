import './DarkModeSwitch.scss'
interface DarkModeSwitchProps {
	darkMode?: boolean
	onClick?: () => void
	size?: number
	animDuration?: string
	lightModeColor?: string
	darkModeColor?: string
	className?: string
	style?: {}
	[x: string]: any
}
declare function DarkModeSwitch({ darkMode, onClick, size, className, style, animDuration, lightModeColor, darkModeColor, ...rest }: DarkModeSwitchProps): JSX.Element
export default DarkModeSwitch
