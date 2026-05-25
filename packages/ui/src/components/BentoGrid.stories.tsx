import type { Meta, StoryObj } from '@storybook/react';
import { BentoGrid, BentoCard } from './BentoGrid';

const meta: Meta<typeof BentoGrid> = {
  title: 'Layout/BentoGrid',
  component: BentoGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BentoGrid>;

export const Default: Story = {
  render: () => (
    <BentoGrid columns={4} gap="lg">
      <BentoCard variant="feature" span={{ cols: 2, rows: 2 }}>
        <div className="h-full flex items-end">
          <div>
            <h3 className="font-heading text-h3 text-charcoal">Community Groups</h3>
            <p className="text-body text-charcoal/70">Find your circle</p>
          </div>
        </div>
      </BentoCard>
      <BentoCard variant="stat">
        <div className="text-h2 text-accent-gold font-heading">12K+</div>
        <div className="text-caption text-medium-gray">Members</div>
      </BentoCard>
      <BentoCard variant="action">
        <div className="text-center">Job Board</div>
      </BentoCard>
      <BentoCard variant="story" span={{ cols: 2 }}>
        <blockquote className="font-heading text-h4 italic">"Haven changed my life."</blockquote>
      </BentoCard>
      <BentoCard variant="affirmation">
        <div className="text-center italic">"I am strong."</div>
      </BentoCard>
    </BentoGrid>
  ),
};
