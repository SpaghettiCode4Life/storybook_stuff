import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from './Carousel';
import { cardsHotel } from '../../data/card';


export default {
  title: 'Example/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;


export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
 cards: cardsHotel
};



