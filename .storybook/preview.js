import '../src/styles/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThumbsUp, faThumbsDown, faComment, faMessage, faRankingStar, faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { MemoryRouter } from 'react-router-dom';
    
library.add(faThumbsUp, faThumbsDown, faComment, faMessage, faRankingStar, faUser);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];


