import styled from 'styled-components';
import colors from 'styles/colors';

export const Courses = styled.div`
  position: relative;
  margin: 64px 0;
  max-width: 1016px;
  &::after {
    content: '';
    position: absolute;
    margin: 32px 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.background.Neutral80};
  }
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:last-child::after {
    display: none;
  }
`;
