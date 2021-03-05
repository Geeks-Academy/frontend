import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  max-width: 328px;
`;

export const Input = styled.input<{ value: number }>`
  -webkit-appearance: none;
  margin: 0;
  width: 328px;
  height: 6px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    ${colors.background.Primary40} ${({ value }) => `${value}%`},
    ${colors.background.Neutral80} ${({ value }) => `${value}%`}
  );
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    border: 2px solid ${colors.background.Primary20};
    border-radius: 50%;
    background: ${colors.background.NeutralWhite};
    cursor: pointer;
  }
  ::-moz-range-thumb {
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    border: 2px solid ${colors.background.Primary20};
    border-radius: 50%;
    background: ${colors.background.NeutralWhite};
    cursor: pointer;
  }
`;
