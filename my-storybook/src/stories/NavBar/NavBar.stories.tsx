import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';
import { mainMenu } from '../../data/menu';

export default {
  title: 'Example/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;



export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  menu: mainMenu,
   
};


