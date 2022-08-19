import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { within, userEvent } from '@storybook/testing-library'
import LineSheen from './LineSheen'

export default {
	title: 'LineSheen',
	component: LineSheen,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof LineSheen>

const TestingTemplate: ComponentStory<typeof LineSheen> = args => (
	<div>
		<div>Some Text</div>
		<LineSheen {...args} />
	</div>
)

export const Testing = TestingTemplate.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Button.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button')
// 	await userEvent.click(loginButton)
// }
