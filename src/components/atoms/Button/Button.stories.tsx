import { ButtonIcon } from 'assets/svg';
import Button from './Button';
import { IButton } from './Button.model';

export default {
  title: 'atoms/Buttton',
  component: Button,
  args: {
    children: 'Click',
    icon: ButtonIcon,
    iconPos: null,
    fill: true,
    transparent: false,
    disabled: false,
    outline: false,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    iconPos: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', null],
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    fill: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    transparent: {
      control: {
        type: 'boolean',
      },
    },
    outline: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Default = ({
  children,
  iconPos,
  icon,
  filled,
  outline,
  disabled,
  transparent,
}: IButton): JSX.Element => (
  <Button
    icon={icon}
    iconPos={iconPos}
    filled={filled}
    outline={outline}
    disabled={disabled}
    transparent={transparent}
  >
    {children}
  </Button>
);

export const FillWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button filled icon={icon} iconPos="left">
    {children}
  </Button>
);

export const FillWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button filled icon={icon} iconPos="right">
    {children}
  </Button>
);

export const FillWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button filled icon={icon}>
    {children}
  </Button>
);

export const OutlineWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button outline icon={icon} iconPos="left">
    {children}
  </Button>
);

export const OutlineWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button outline icon={icon} iconPos="right">
    {children}
  </Button>
);

export const OutlineWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button outline icon={icon}>
    {children}
  </Button>
);

export const DisabledWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button disabled icon={icon} iconPos="left">
    {children}
  </Button>
);

export const DisabledWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button disabled icon={icon} iconPos="right">
    {children}
  </Button>
);

export const DisabledWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button disabled icon={icon}>
    {children}
  </Button>
);

export const TransparentWithIconLeft = ({ children, icon }: IButton): JSX.Element => (
  <Button transparent icon={icon} iconPos="left">
    {children}
  </Button>
);

export const TransparentWithIconRight = ({ children, icon }: IButton): JSX.Element => (
  <Button transparent icon={icon} iconPos="right">
    {children}
  </Button>
);

export const TransparentWithoutIcon = ({ children, icon }: IButton): JSX.Element => (
  <Button transparent icon={icon}>
    {children}
  </Button>
);
