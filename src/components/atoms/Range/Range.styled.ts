import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Input = styled.input<{ value: number }>`
  -webkit-appearance: none;
  width: 328px;
  height: 6px;
  background: linear-gradient(
    90deg,
    ${colors.background.Primary40} ${({ value }) => `${value}%`},
    ${colors.background.Neutral80} ${({ value }) => `${value}%`}
  );
  border-radius: 50px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: ${colors.background.NeutralWhite};
    border-radius: 50%;
    border: 2px solid ${colors.background.Primary20};
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: ${colors.background.NeutralWhite};
    border-radius: 50%;
    border: 2px solid ${colors.background.Primary20};
    cursor: pointer;
  }
`;

export const Label = styled.label``;
