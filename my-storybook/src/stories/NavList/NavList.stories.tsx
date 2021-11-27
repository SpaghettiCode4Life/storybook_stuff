import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavList } from './NavList';
import { mainMenu } from '../../data/menu';

export default {
  title: 'Example/NavBar',
  component: NavList,
} as ComponentMeta<typeof NavList>;

const Template: ComponentStory<typeof NavList> = (args) => <NavList {...args} />;



export const Mobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mobile.args = {
  menu: mainMenu,
   
};


