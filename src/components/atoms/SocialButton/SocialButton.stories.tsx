import SocialButton from './SocialButton';

export default {
  title: 'atoms/SocialButton',
  component: SocialButton,
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
};

export const GoogleButton = (): JSX.Element => (
  <SocialButton logo="google" userRole="non-developer" />
);

export const GithubButton = (): JSX.Element => <SocialButton logo="github" userRole="developer" />;
