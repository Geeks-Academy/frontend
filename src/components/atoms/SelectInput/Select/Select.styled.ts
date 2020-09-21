import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';

export const StyledWrapper = styled.div`
  border: 1px solid ${colors.background.Neutral80};
  background: ${colors.background.NeutralWhite};
  border-radius: 4px;
  width: 328px;
  max-height: 267px;
`;

export const StyledSelectCaption = styled.span`
  ${typography.body.L};
  color: ${colors.background.Neutral40};
  margin: 14px 0 14px 24px;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledArrowImage = styled.img<{ isSelectOpened: boolean }>`
  pointer-events: none;
  transform: ${({ isSelectOpened }) => (isSelectOpened ? `rotateX(180deg)` : `rotateX(0)`)};
  margin: 14px;
`;

export const StyledSelect = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin-top: 23px;
  padding: 0 24px;
  height: 168px;
  overflow-y: scroll;
`;
