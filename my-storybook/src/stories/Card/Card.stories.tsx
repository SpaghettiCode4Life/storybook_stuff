import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardComponent from './Card';
import { cardItems, cardRating, coverCard } from '../../data/card';

export default {
  title: 'Example/Card',
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />;



export const Rating = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rating.args = {
  cardInfo: cardRating,  
};


export const ItemsList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ItemsList.args = {
  cardInfo: cardItems,  
};

export const CoverCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CoverCard.args = {
  cardInfo: coverCard,  
};



