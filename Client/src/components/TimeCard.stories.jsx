
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
    id: 0,
      name: "Alexis Lust",
      time_one_start: "9:00",
      time_one_end: "9:30",
      time_two_start: "12:00",
      time_two_end: "14:00",
      time_three_start: "15:00",
      time_three_end: "17:00",
  },
};



