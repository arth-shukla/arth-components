import React, { useEffect, useState } from 'react'
import './LineSheen.scss'

interface LineSheenProps {
	lineWidth?: string
	lineHeight?: string
	lineColor?: string
	sheenColor?: string
	animDuration?: number
	onClick?: () => void
	className?: string
	style?: {}
	[x: string]: any
}

function LineSheen({ lineWidth = '100%', lineHeight = '2px', lineColor = 'gray', animDuration = 2, sheenColor = 'black', className = '', style = {}, ...rest }: LineSheenProps) {
	const [activateSheen, setActivateSheen] = useState<boolean>(false)
	const [lastLineColor, setLastLineColor] = useState<string>('')
	const [lastTimeout, setLastTimeout] = useState<NodeJS.Timeout>()

	useEffect(() => {
		if (lineColor !== lastLineColor) {
			clearTimeout(lastTimeout)

			setActivateSheen(true)

			setLastLineColor(lineColor)

			setLastTimeout(
				setTimeout(() => {
					setActivateSheen(false)
				}, animDuration * 1000),
			)
		}
	}, [lineColor])

	return (
		<div
			id='ai-line-sheen-container'
			className={(activateSheen ? 'ai-line-sheen-animate ' : ' ') + className}
			style={
				{
					'--ai-line-sheen-line-width': lineWidth,
					'--ai-line-sheen-line-height': lineHeight,
					'--ai-line-sheen-line-color': lineColor,
					'--ai-line-sheen-sheen-color': sheenColor,
					'--ai-line-sheen-tr-sec': `${animDuration}s`,
					...style,
				} as React.CSSProperties
			}
			{...rest}
			aria-hidden={true}
			tabIndex={-1}
		>
			<div id='ai-line-sheen-lines'>
				<div id='ai-line-sheen-line'></div>
			</div>
		</div>
	)
}

export default LineSheen
