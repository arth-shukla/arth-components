interface ColorSwitchProps {
	colors: Array<string>
	currentColorIndex?: number
	onClick?: () => void
	size?: number
	animDuration?: string
	className?: string
	style?: {}
	[x: string]: any
}
declare function ColorSwitch({ currentColorIndex, colors, onClick, size, animDuration, className, style, ...rest }: ColorSwitchProps): JSX.Element

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

export { ColorSwitch, DarkModeSwitch }
