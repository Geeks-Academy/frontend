import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';
import { VectorIcon } from 'assets/index';

export const StyledWrapper = styled.div`
  position: relative;
  &::before {
    content: url(${VectorIcon});
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    right: 0%;
    pointer-events: none;
    transform: translate(0%, -50%);
    overflow: hidden;
  }
`;

export const StyledMultiSelect = styled.select`
  ${typography.body.L};
  width: 328px;
  height: auto;
  border: 1px solid ${colors.background.Neutral80};
  background: ${colors.background.NeutralWhite};
  border-radius: 4px;
  color: ${colors.background.Neutral40};
  outline: none;
  padding: 14px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  box-shadow: none;
  overflow: hidden;
  /* opacity: 0; */
`;

export const StyledOption = styled.option`
  /* display: none; */
  height: 30px;
`;
