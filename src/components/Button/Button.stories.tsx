import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";

Button.Label.displayName = 'Button.Label';
Button.Counter.displayName = 'Button.Counter';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: {type: 'radio'},
      options: ['Label', 'Counter', 'LabeLAndCounter'],
      mapping: {
        Label: <Button.Label>Фронт стажировка</Button.Label>,
        Counter: <Button.Counter/>,
        LabeLAndCounter: [
          <Button.Label>Фронт стажировка</Button.Label>,
          <Button.Counter/>
        ],
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    children: 'Label'
  },
};

export const Counter: Story = {
  args: {
    children: 'Counter'
  },
};

export const LabelCounter: Story = {
  args: {
    children: 'LabeLAndCounter'
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Label'
  }
};

export const Secodary: Story = {
  args: {
    variant: 'secodary',
    children: 'Label'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Label'
  }
}

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Label'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Label'
  }
}

export const Enabled: Story = {
  args: {
    state: 'enabled',
    children: 'Label'
  }
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    children: 'Label'
  }
}

export const Loading: Story = {
  args: {
    state: 'loading',
    children: 'Label'
  }
}

export const Truncate: Story = {
  args: {
    style: {width: '200px'},
    children: 'LabeLAndCounter'
  }
}

export default meta;
