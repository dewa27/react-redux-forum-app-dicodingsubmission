/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Toast from '../components/Toast';

const stories = {
  title: 'Toast',
  component: Toast,
};
export default stories;

function TemplateToast(args) {
  return <Toast {...args} />;
}
const SuccesToast = TemplateToast.bind({});
const FailedToast = TemplateToast.bind({});
SuccesToast.args = {
  title: 'Login Berhasil!',
  body: 'Anda berhasil login!',
  isShown: true,
  type: 'success',
};
FailedToast.args = {
  title: 'Login Gagal!',
  body: 'Anda gagal login!',
  isShown: true,
  type: 'error',
};
export { SuccesToast, FailedToast };
