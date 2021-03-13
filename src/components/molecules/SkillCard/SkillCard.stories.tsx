import { Meta, Story } from '@storybook/react/types-6-0';
import SkillCard from './SkillCard';
import { ISkillCard } from './SkillCard.model';

export default {
  title: 'molecules/SkillCard',
  component: SkillCard,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ISkillCard> = (props: ISkillCard): JSX.Element => <SkillCard {...props} />;

export const Default = Template.bind({});
Default.args = {
  title: 'WordPress',
  content: "What's your skill level?",
};
