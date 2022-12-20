import { ComponentStory } from "@storybook/react";
import CodersButton, { CodersButtonProps } from "../components/CodersButton";


export default {
  title: 'Components/CodersButton',
  component: CodersButton
}


const Template: ComponentStory<typeof CodersButton> = (args) => <CodersButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
  label: 'XPTO'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'XYZ'
}

export const WithIcon = Template.bind({});