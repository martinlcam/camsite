import type { Meta, StoryObj } from '@storybook/react';
import BallPit from './BallPit';

const meta: Meta<typeof BallPit> = {
  title: 'Components/BallPit',
  component: BallPit,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    followCursor: {
      control: 'boolean',
      description: 'Whether the first sphere follows the cursor',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BallPit>;

export const Default: Story = {
  args: {
    followCursor: true,
    className: 'h-full w-full',
  },
  render: (args) => (
    <div className="relative h-screen w-full bg-palette-gray-100">
      <BallPit {...args} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-palette-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-palette-gray-100 mb-2">
            3D Ball Pit
          </h2>
          <p className="text-palette-gray-70">
            Move your mouse to interact with the spheres.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const WithoutCursorFollow: Story = {
  args: {
    followCursor: false,
    className: 'h-full w-full',
  },
  render: (args) => (
    <div className="relative h-screen w-full bg-palette-purple-100">
      <BallPit {...args} />
    </div>
  ),
};

