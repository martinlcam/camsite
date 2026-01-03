import type { Meta, StoryObj } from '@storybook/react';
import ScrollIndicator from './ScrollIndicator';

const meta: Meta<typeof ScrollIndicator> = {
  title: 'Components/ScrollIndicator',
  component: ScrollIndicator,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollIndicator>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-gradient-to-br from-palette-blue-100 to-palette-purple-100 overflow-y-auto">
      <div className="h-[200vh] p-8">
        <div className="sticky top-0 pt-20">
          <h1 className="text-4xl font-bold text-white mb-4">
            Scroll Indicator Example
          </h1>
          <p className="text-white/80 text-lg">
            Scroll down to see the indicator disappear after 200px.
          </p>
        </div>
        <div className="mt-96 space-y-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">
                Section {i + 1}
              </h2>
              <p className="text-white/70">
                This is section content. Keep scrolling to see the indicator
                behavior.
              </p>
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </div>
  ),
};

