import React, { useState } from 'react'
import './ColorSwitch.scss'

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

function ColorSwitch({ currentColorIndex, colors, onClick = () => {}, size = 40, animDuration = '.4s', className = '', style = {}, ...rest }: ColorSwitchProps) {
	const [_currentColorIndex, set_currentColorIndex] = useState<number>(currentColorIndex || 0)
	const [_selectNum, set_selectNum] = useState<number>(0)
	const _colorIndex: number = currentColorIndex || _currentColorIndex

	const childOnClick: () => void = () => {
		onClick()
		set_currentColorIndex((_currentColorIndex + 1) % colors.length)
		set_selectNum((_selectNum + 1) % 2)
	}

	return (
		<button
			className={'ai-color-switch ' + className}
			onClick={childOnClick}
			style={
				{
					width: size,
					height: size,
					'--ai-color-switch-color': colors[_colorIndex],
					'--ai-color-switch-tr-sec': animDuration,
					'--ai-color-switch-size': `${size * 0.558}px`,
					...style,
				} as React.CSSProperties
			}
			{...rest}
		>
			<div
				aria-hidden={true}
				className={`ai-color-targ ai-color-targ-${_selectNum}`}
			></div>
		</button>
	)
}

export default ColorSwitch
