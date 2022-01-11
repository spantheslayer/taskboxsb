import React from "react";
import { Task } from "./Task";

export default {
  component: Task,
  title: "storybook",
  argTypes: {
    onArchiveTask: { action: "onArchiveTask" },
    onTogglePinTask: { action: "onTogglePinTask" },
    onEditTitle: { action: "onEditTitle" },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "firstpich rocks",
    state: "TASK_INBOX",
  },
};
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "2",
    title: "hello",
    state: "TASK_PINNED",
  },
};
export const Archive = Template.bind({});
Archive.args = {
  task: {
    id: "3",
    title: "mithun da",
    state: "TASK_ARCHIVED",
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});

LongTitle.args = {
  task: {
    id: "4",
    title: longTitleString,
    state: "TASK_INBOX",
  },
};
