import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';
import { satoshi } from '../lib/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={satoshi.variable} style={{ fontFamily: 'var(--font-satoshi), system-ui, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;

