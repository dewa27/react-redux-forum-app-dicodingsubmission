/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ActionButton from '../components/ActionButton';

const stories = {
  title: 'ActionButton',
  component: ActionButton,
};

export default stories;
function TemplateActionButton(args) {
  return <ActionButton {...args} />;
}
const WithThumbsUpIcon = TemplateActionButton.bind({});
const WithThumbsDownIcon = TemplateActionButton.bind({});

WithThumbsUpIcon.args = {
  icon: 'thumbs-up',
  onClick: () => {},
  additionalClass: '',
};
WithThumbsDownIcon.args = {
  icon: 'thumbs-down',
  onClick: () => {},
  additionalClass: '',
};

export { WithThumbsUpIcon, WithThumbsDownIcon };
