import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { within, userEvent } from '@storybook/testing-library'
import TextTypeDelete from './TextTypeDelete'

export default {
	title: 'TextTypeDelete',
	component: TextTypeDelete,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof TextTypeDelete>

var constArgs = {
	typeText: ['a developer.', 'a student.', ' Arth.'],
	constText: "Hi! I'm ",
	style: { marginTop: '1em' },
	fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
}

const TestingTemplate: ComponentStory<typeof TextTypeDelete> = args => (
	<TextTypeDelete
		{...args}
		{...constArgs}
	/>
)

export const Testing = TestingTemplate.bind({})

const NoLoopTemplate: ComponentStory<typeof TextTypeDelete> = args => (
	<TextTypeDelete
		{...args}
		{...constArgs}
		loop={false}
	/>
)

export const NoLoop = NoLoopTemplate.bind({})

const LoopTemplate: ComponentStory<typeof TextTypeDelete> = args => (
	<TextTypeDelete
		{...args}
		{...constArgs}
		loop={true}
	/>
)

export const Loop = LoopTemplate.bind({})

const ColorfulTemplate: ComponentStory<typeof TextTypeDelete> = args => (
	<TextTypeDelete
		{...args}
		{...constArgs}
		constTextColor='black'
		typeTextColor='purple'
		loop={true}
	/>
)

export const Colorful = ColorfulTemplate.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// Button.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
// 	const loginButton = await canvas.getByRole('button')
// 	await userEvent.click(loginButton)
// }
