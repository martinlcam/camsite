import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-palette-white">
      <Header />
      <div className="pt-32 p-8">
        <h1 className="text-4xl font-bold text-palette-gray-100 mb-4">
          Header Component
        </h1>
        <p className="text-palette-gray-70 text-lg">
          The header is fixed at the top. It includes navigation links and
          social media icons.
        </p>
      </div>
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-gradient-to-br from-palette-blue-10 to-palette-purple-10">
      <Header />
      <div className="pt-32 p-8">
        <h1 className="text-4xl font-bold text-palette-gray-100 mb-4">
          Header with Background
        </h1>
        <p className="text-palette-gray-70 text-lg">
          The header works well on colored backgrounds too.
        </p>
      </div>
    </div>
  ),
};

