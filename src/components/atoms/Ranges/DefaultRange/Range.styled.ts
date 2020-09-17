import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  max-width: 328px;
`;

export const Input = styled.input<{ value: number }>`
  -webkit-appearance: none;
  width: 328px;
  height: 6px;
  margin: 0;
  background: linear-gradient(
    90deg,
    ${colors.background.Primary40} ${({ value }) => `${value}%`},
    ${colors.background.Neutral80} ${({ value }) => `${value}%`}
  );
  border-radius: 50px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    background: ${colors.background.NeutralWhite};
    border-radius: 50%;
    border: 2px solid ${colors.background.Primary20};
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    background: ${colors.background.NeutralWhite};
    border-radius: 50%;
    border: 2px solid ${colors.background.Primary20};
    cursor: pointer;
  }
`;
