import React, { useEffect, useState } from 'react'
import './TextTypeDelete.scss'

interface TextTypeDeleteProps {
	typeText: string[]
	loop?: boolean
	blinkGap?: string
	constText?: string
	constTextColor?: string
	typeTextColor?: string
	cursorColor?: string
	pauseMSec?: number
	typeMSec?: number
	deleteMSec?: number
	fontSize?: string
	cursorHeight?: string
	cursorWidth?: string
	[x: string]: any
}

function TextTypeDelete({
	typeText,
	loop = false,
	blinkGap = '1s',
	constText = '',
	constTextColor = 'black',
	typeTextColor = 'black',
	cursorColor = 'black',
	pauseMSec = 1000,
	typeMSec = 100,
	deleteMSec = 50,
	fontSize = '20px',
	cursorHeight = '22px',
	cursorWidth = '2px',
	style,
	...rest
}: TextTypeDeleteProps) {
	const [text, setText] = useState<string>('')
	const [tc, setTc] = useState<number[]>([0, -1])
	const [nextTimeout, setNextTimeout] = useState<number>(pauseMSec)

	useEffect(() => {
		setTimeout(() => {
			let temp: number[] = tc[0] == typeText.length ? [0, -1] : tc
			let deleting: boolean = temp[1] == typeText[temp[0]].length - 1

			console.log(text, tc, nextTimeout)
			// console.log(deleting, text.length)

			if (deleting) {
				if (!loop && tc[0] == typeText.length - 1) return

				if (text.length == 1) {
					temp = [temp[0] + 1, -1]
					setNextTimeout(pauseMSec)
				} else {
					setNextTimeout(deleteMSec)
				}
				setText(text.slice(0, -1))
			} else {
				temp = [temp[0], temp[1] + 1]
				setText(text + typeText[temp[0]][temp[1]])
				setNextTimeout(temp[1] == typeText[temp[0]].length - 1 ? pauseMSec : typeMSec)
			}

			setTc(temp)
		}, nextTimeout)
	}, [text])

	return (
		<div
			id='ai-text-type-delete-container'
			style={
				{
					'--ai-text-type-delete-cursor-blink': blinkGap,
					'--ai-text-type-delete-cursor-color': cursorColor,
					'--ai-text-type-delete-cursor-height': cursorHeight,
					'--ai-text-type-delete-cursor-width': cursorWidth,
					'--ai-text-type-delete-font-size': fontSize,
					...style,
				} as React.CSSProperties
			}
			aria-label={
				`An animation with constant text "${constText}" and dynamic text which changes from "${typeText.join('" to "')}".` + (loop ? ' It continually loops through the dynamic text.' : '')
			}
			{...rest}
		>
			<div
				id='ai-text-type-delete-text'
				aria-hidden={true}
			>
				<span style={{ color: constTextColor }}>{constText}</span>
				<span style={{ color: typeTextColor }}>{text}</span>
			</div>
			<div
				id='ai-text-type-delete-cursor'
				aria-hidden={true}
			></div>
		</div>
	)
}

export default TextTypeDelete
