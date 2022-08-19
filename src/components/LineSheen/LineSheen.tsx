import React from 'react'
import './LineSheen.scss'

interface LineSheenProps {
	lineHeight?: string
	sheenHeight?: string
	color?: string
	animDuration?: string
	style?: {}
	[x: string]: any
}

function LineSheen({ lineHeight = '2px', sheenHeight = '4px', color = 'black', animDuration = '1s', style = {}, ...rest }: LineSheenProps) {
	return (
		<div
			id='ai-line-sheen-line'
			style={
				{
					'--ai-line-sheen-line-height': lineHeight,
					'--ai-line-sheen-sheen-height': sheenHeight,
					'--ai-line-sheen-color': color,
					'--ai-line-sheen-tr-sec': animDuration,
					...style,
				} as React.CSSProperties
			}
			{...rest}
		></div>
	)
}

export default LineSheen
