import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { imageData } from '../../data/gallery';
import Slider from './Slider';


export default {
  title: 'Example/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;



export const Pagination = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pagination.args = {
  slides: imageData,
  pagination: true 
};
