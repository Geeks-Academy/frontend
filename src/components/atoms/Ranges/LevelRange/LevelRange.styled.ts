import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 328px;
  height: 72px;
`;
export const Label = styled.label`
  position: relative;
  margin-top: -10px;
`;

export const ThumbWrapper = styled.div<{ value: number }>`
  position: absolute;
  bottom: -6px;
  left: ${({ value }) => `${value}%`};
  z-index: 2;
  width: 24px;
  height: 24px;
  transform: translateX(-50%);
`;

export const ThumbSlider = styled.span<{ value: number }>`
  position: absolute;
  top: 0;
  width: 22px;
  height: 22px;
  border: 2px solid ${colors.background.Primary20};
  border-radius: 50%;
  background: ${colors.background.NeutralWhite};
  cursor: pointer;
  ::before {
    content: '${({ value }) => value}';
    position: absolute;
    top: -25px;
    display: block;
    width: 100%;
    color: ${colors.background.Primary20};
    text-align: center;
    ${typography.body.L}
    cursor: pointer;
  }
`;

export const Input = styled.input<{ value: number }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  z-index: 5;
  margin: 0;
  width: 328px;
  height: 6px;
  border-radius: 50px;
  background: transparent;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    z-index: 5;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    z-index: 5;
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Datalist = styled.datalist`
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  width: 100%;
  height: 6px;
  background: transparent;
  @supports (-moz-appearance: none) {
    top: 12px;
  }
`;

export const Option = styled.option`
  display: block;
  padding-top: 18px;
  width: calc(328px / 4);
  height: 6px;
  background-color: transparent;
  ::before {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(328px / 4);
    height: 6px;
    content: '';
  }
  ::after {
    content: attr(aria-label);
    display: block;
    ${typography.body.L}
    text-align: center;
  }
  :nth-of-type(1) {
    ::before {
      left: 0;
      border-radius: 50px 0 0 50px;
      background-color: ${colors.background.addons.Blue10};
    }
    ::after {
      color: ${colors.text.addons.Blue10};
    }
  }
  :nth-of-type(2) {
    ::before {
      left: 25%;
      background-color: ${colors.background.addons.Blue20};
    }
    ::after {
      color: ${colors.text.addons.Blue20};
    }
  }
  :nth-of-type(3) {
    ::before {
      left: 50%;
      background-color: ${colors.background.addons.Blue30};
    }
    ::after {
      color: ${colors.text.addons.Blue30};
    }
  }
  :nth-of-type(4) {
    ::before {
      left: 75%;
      border-radius: 0 50px 50px 0;
      background-color: ${colors.background.addons.Blue40};
    }
    ::after {
      color: ${colors.text.addons.Blue40};
    }
  }
`;
