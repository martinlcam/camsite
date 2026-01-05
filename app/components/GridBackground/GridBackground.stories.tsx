import type { Meta, StoryObj } from '@storybook/react';
import GridBackground from './GridBackground';

const meta: Meta<typeof GridBackground> = {
  title: 'Components/GridBackground',
  component: GridBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GridBackground>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-white">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-palette-white p-8 rounded-[12px] shadow-lg">
          <h2 className="text-2xl font-bold text-palette-gray-100">
            Grid Background Example
          </h2>
          <p className="text-palette-gray-70 mt-4">
            This is content on top of the grid background.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-gradient-to-br from-palette-blue-10 to-palette-purple-10">
      <GridBackground />
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-palette-gray-100 mb-4">
          Page Title
        </h1>
        <p className="text-lg text-palette-gray-70">
          The grid background provides a subtle texture to the page.
        </p>
      </div>
    </div>
  ),
};

