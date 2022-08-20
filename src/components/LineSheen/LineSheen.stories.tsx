import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { within, userEvent } from '@storybook/testing-library'
import LineSheen from './LineSheen'
import ColorSwitch from '../ColorSwitch'

export default {
	title: 'LineSheen',
	component: LineSheen,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof LineSheen>

const TestingTemplate: ComponentStory<typeof LineSheen> = args => {
	const [i, setI] = React.useState(0)
	const colors = ['blue', 'red', 'black']
	const sheenColors = ['purple', 'orange', 'grey']

	return (
		<div>
			<ColorSwitch
				colors={colors}
				currentColorIndex={i}
				onClick={() => setI((i + 1) % colors.length)}
			/>
			<LineSheen
				{...args}
				lineColor={colors[i]}
				sheenColor={sheenColors[i]}
			/>
		</div>
	)
}

export const Testing = TestingTemplate.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Button.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button')
// 	await userEvent.click(loginButton)
// }
