import React, { useEffect, useState } from 'react'
import './TextTypeDelete.scss'

interface TextTypeDeleteProps {
	typeText: string[]
	play?: boolean
	onComplete?: () => void
	loop?: boolean
	blinkGap?: string
	textAlign?: string
	constText?: any
	constTextColor?: string
	typeTextColor?: string
	cursorColor?: string
	pauseMSec?: number
	typeMSec?: number
	deleteMSec?: number
	fontSize?: string
	cursorHeight?: string
	cursorWidth?: string
	constTextStyles?: {}
	typeTextStyles?: {}
	style?: {}
	[x: string]: any
}

function TextTypeDelete({
	typeText,
	play = true,
	onComplete = () => {},
	loop = false,
	textAlign = 'center',
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
	fontFamily = "'Courier New', Courier, monospace",
	constTextStyles = {},
	typeTextStyles = {},
	style = {},
	...rest
}: TextTypeDeleteProps) {
	const [text, setText] = useState<string>('')
	const [tc, setTc] = useState<number[]>([0, -1])
	const [nextTimeout, setNextTimeout] = useState<number>(pauseMSec)
	const [lastTimeoutID, setLastTimeoutID] = useState<NodeJS.Timeout>()

	const getTextContent: (arg: any) => string = (elem: any) => {
		if (!elem) {
			return ''
		}
		if (typeof elem === 'string') {
			return elem
		} else if (elem instanceof Array) {
			let retVal = ''

			elem.forEach(v => {
				if (typeof v === 'string') retVal += v
				else retVal += ' ' + getTextContent(v)
			})
			return retVal
		}
		const children = elem.props?.children
		if (children instanceof Array) {
			return children.map(child => getTextContent(child)).join(' ')
		}
		return getTextContent(children)
	}

	const replaceAllDoubleSpaces: (arg: string) => string = (str: string) => {
		while (str.includes('  ')) str = str.replace('  ', ' ')

		return str
	}

	useEffect(() => {
		if (play) {
			setLastTimeoutID(
				setTimeout(() => {
					let temp: number[] = tc[0] == typeText.length ? [0, -1] : tc
					let deleting: boolean = temp[1] == typeText[temp[0]].length - 1

					if (deleting) {
						if (!loop && tc[0] == typeText.length - 1) {
							onComplete()
							return
						}

						if (text.length == 1) {
							if (tc[0] == typeText.length - 1) onComplete()
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
				}, nextTimeout),
			)
		} else if (lastTimeoutID) {
			clearTimeout(lastTimeoutID)
		}
	}, [text, play])

	return (
		<div
			tabIndex={0}
			id='ai-text-type-delete-container'
			style={
				{
					'--ai-text-type-delete-cursor-blink': blinkGap,
					'--ai-text-type-delete-cursor-color': cursorColor,
					'--ai-text-type-delete-cursor-height': cursorHeight,
					'--ai-text-type-delete-cursor-width': cursorWidth,
					'--ai-text-type-delete-font-size': fontSize,
					'--ai-text-type-delete-font-family': fontFamily,
					'--ai-text-type-delete-text-align': textAlign,
					...style,
				} as React.CSSProperties
			}
			aria-label={
				`An animation with constant text "${replaceAllDoubleSpaces(getTextContent(constText))}" and dynamic text which changes from "${typeText.join('" to "')}".` +
				(loop ? ' It continually loops through the dynamic text.' : '')
			}
			{...rest}
		>
			<div
				id='ai-text-type-delete-text'
				aria-hidden={true}
			>
				<span style={{ color: constTextColor, ...constTextStyles }}>{constText}</span>
				<span style={{ color: typeTextColor, ...typeTextStyles }}>{text.slice(0, -1)}</span>
				<span style={{ whiteSpace: 'nowrap' }}>
					<span style={{ color: typeTextColor, ...typeTextStyles }}>{text.slice(-1)}</span>
					<div
						id='ai-text-type-delete-cursor'
						aria-hidden={true}
					></div>
				</span>
			</div>
		</div>
	)
}

export default TextTypeDelete
