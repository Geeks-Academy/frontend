import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: tomato;
  ${({ size }: {size: string}) =>
    size === 'small' &&
    css`
      width: 80px;
      height: 30px;
      :hover {
        background-color: white;
      }
    `}
  ${({ size }: {size: string}) =>
    size === 'large' &&
    css`
      width: 140px;
      height: 50px;
    `}
`;
