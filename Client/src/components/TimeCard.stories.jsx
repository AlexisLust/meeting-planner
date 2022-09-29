
import React from 'react';

import TimeCard from './TimeCard';

export default {
  component: TimeCard,
  name: 'TimeCard',
};

const Template = args => <TimeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  timecard: {
    id: '1',
    name: 'Alexis Lust',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
    timecard: {
    ...Default.args.timecard,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
    timecard: {
    ...Default.args.timecard,
    state: 'TASK_ARCHIVED',
  },
};