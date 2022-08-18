import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { within, userEvent } from '@storybook/testing-library'
import ColorSwitch from './ColorSwitch'

export default {
	title: 'ColorSwitch',
	component: ColorSwitch,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ColorSwitch>

const Template: ComponentStory<typeof ColorSwitch> = (colors, ...args) => (
	<ColorSwitch
		colors={['blue', 'red']}
		{...args}
	/>
)

export const Button = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Button.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button')
// 	await userEvent.click(loginButton)
// }
