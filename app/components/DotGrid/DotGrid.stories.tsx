import type { Meta, StoryObj } from '@storybook/react';
import DotGrid from './DotGrid';

const meta: Meta<typeof DotGrid> = {
  title: 'Components/DotGrid',
  component: DotGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    dotSize: {
      control: { type: 'range', min: 4, max: 32, step: 2 },
      description: 'Size of each dot in pixels',
    },
    gap: {
      control: { type: 'range', min: 8, max: 64, step: 4 },
      description: 'Gap between dots in pixels',
    },
    baseColor: {
      control: 'color',
      description: 'Base color of the dots',
    },
    activeColor: {
      control: 'color',
      description: 'Color when mouse is near',
    },
    proximity: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
      description: 'Proximity distance for color change',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DotGrid>;

export const Default: Story = {
  args: {
    dotSize: 16,
    gap: 32,
    baseColor: '#5227FF',
    activeColor: '#5227FF',
    proximity: 150,
  },
  render: (args) => (
    <div className="relative h-screen w-full bg-palette-white">
      <DotGrid {...args} className="h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-palette-white/80 backdrop-blur-sm p-8 rounded-[12px] shadow-lg">
          <h2 className="text-2xl font-bold text-palette-gray-100 mb-2">
            Interactive Dot Grid
          </h2>
          <p className="text-palette-gray-70">
            Move your mouse over the dots to see them react.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    dotSize: 12,
    gap: 24,
    baseColor: '#6E1FD6',
    activeColor: '#843BE3',
    proximity: 120,
  },
  render: (args) => (
    <div className="relative h-screen w-full bg-palette-purple-10">
      <DotGrid {...args} className="h-full w-full" />
    </div>
  ),
};

export const DenseGrid: Story = {
  args: {
    dotSize: 8,
    gap: 16,
    baseColor: '#0A2761',
    activeColor: '#4A73C5',
    proximity: 100,
  },
  render: (args) => (
    <div className="relative h-screen w-full bg-palette-blue-10">
      <DotGrid {...args} className="h-full w-full" />
    </div>
  ),
};

