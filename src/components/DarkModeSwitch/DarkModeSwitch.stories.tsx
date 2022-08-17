import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { within, userEvent } from '@storybook/testing-library'
import DarkModeSwitch from './DarkModeSwitch'

export default {
	title: 'DarkModeSwitch',
	component: DarkModeSwitch,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof DarkModeSwitch>

const Template: ComponentStory<typeof DarkModeSwitch> = args => <DarkModeSwitch {...args} />

export const Button = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Button.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button')
// 	await userEvent.click(loginButton)
// }
