import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableData } from './TableData';
import { mainMenu } from '../../data/menu';
import { dataTable } from '../../data/table';

export default {
  title: 'Example/TableData',
  component: TableData,
} as ComponentMeta<typeof TableData>;

const Template: ComponentStory<typeof TableData> = (args) => <TableData {...args} />;



export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
 table: dataTable
};


