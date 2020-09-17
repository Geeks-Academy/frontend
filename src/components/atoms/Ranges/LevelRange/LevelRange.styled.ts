import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const Container = styled.div`
  max-width: 328px;
`;
export const Label = styled.label`
  position: relative;
`;

export const ThumbWrapper = styled.div<{ value: number }>`
  height: 24px;
  width: 24px;
  position: absolute;
  bottom: -6px;
  left: ${({ value }) => `${value}%`};
  transform: translateX(-50%);
  z-index: 2;
`;

export const ThumbSlider = styled.span<{ value: number }>`
  position: absolute;
  top: 0;
  width: 22px;
  height: 22px;
  background: ${colors.background.NeutralWhite};
  border-radius: 50%;
  border: 2px solid ${colors.background.Primary20};
  cursor: pointer;
  ::before {
    content: '${({ value }) => value}';
    position: absolute;
    top: -25px;
    display: block;
    text-align: center;
    width: 100%;
    ${typography.body.L}
    cursor: pointer;
    text-align: center;
    color: ${colors.background.Primary20};
  }
`;

export const Input = styled.input<{ value: number }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
  width: 328px;
  height: 6px;
  border-radius: 50px;
  background: transparent;
  position: relative;
  z-index: 5;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    z-index: 5;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 22px;
    height: 22px;
    background: ${colors.background.NeutralWhite};
    background-color: transparent;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 5;
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
  width: calc(328px / 4);
  height: 6px;
  display: block;
  padding-top: 18px;
  background-color: transparent;
  ::before {
    content: '';
    height: 6px;
    width: calc(328px / 4);
    position: absolute;
    top: 0;
    right: 0;
  }
  :nth-of-type(1) {
    ::before {
      background-color: ${colors.background.Primary60};
      border-radius: 50px 0 0 50px;
      left: 0;
    }
  }
  :nth-of-type(2) {
    ::before {
      background-color: #4694f0;
      left: 25%;
    }
  }
  :nth-of-type(3) {
    ::before {
      background-color: ${colors.background.Primary40};
      left: 50%;
    }
  }
  :nth-of-type(4) {
    ::before {
      background-color: ${colors.background.Primary20};
      border-radius: 0 50px 50px 0;
      left: 75%;
    }
  }
  ::after {
    content: attr(aria-label);
    display: block;
    ${typography.body.L}
    text-align: center;
  }
  :nth-of-type(1) {
    ::after {
      color: ${colors.background.Primary60};
    }
  }
  :nth-of-type(2) {
    ::after {
      color: #4694f0;
    }
  }
  :nth-of-type(3) {
    ::after {
      color: ${colors.background.Primary40};
    }
  }
  :nth-of-type(4) {
    ::after {
      color: ${colors.background.Primary20};
    }
  }
`;
