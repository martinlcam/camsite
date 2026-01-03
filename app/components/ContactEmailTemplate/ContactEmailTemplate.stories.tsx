import type { Meta, StoryObj } from '@storybook/react';
import { ContactEmailTemplate } from './ContactEmailTemplate';

const meta: Meta<typeof ContactEmailTemplate> = {
  title: 'Components/ContactEmailTemplate',
  component: ContactEmailTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the person submitting the form',
    },
    email: {
      control: 'text',
      description: 'Email address of the submitter',
    },
    message: {
      control: 'text',
      description: 'Message content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactEmailTemplate>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Hello! I would like to discuss a potential project with you.',
  },
};

export const LongMessage: Story = {
  args: {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    message: `I'm reaching out regarding a web development project I'm working on. 

I've been impressed with your portfolio and would love to discuss how we might collaborate. The project involves building a modern, responsive website with interactive features.

Please let me know if you're available for a consultation.`,
  },
};

export const ShortMessage: Story = {
  args: {
    name: 'Bob Johnson',
    email: 'bob@example.com',
    message: 'Quick question about your services.',
  },
};

