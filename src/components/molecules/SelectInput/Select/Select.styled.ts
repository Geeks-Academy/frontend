import styled from 'styled-components';
import typography from 'styles/typography';
import colors from 'styles/colors';
import Input from 'components/atoms/Input';

export const StyledWrapper = styled.div`
  max-height: 267px;
  width: 328px;
  border: 1px solid ${colors.background.Neutral80};
  border-radius: 4px;
  background: ${colors.background.NeutralWhite};
`;

export const StyledSelectCaption = styled.span`
  margin: 14px 0 14px 24px;
  ${typography.body.L};
  color: ${colors.background.Neutral40};
  pointer-events: none;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledArrowImage = styled.img<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? `rotateX(180deg)` : `rotateX(0)`)};
  margin: 14px;
`;

export const StyledSelect = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 23px;
  padding: 0 24px;
  width: 100%;
  height: 168px;
  list-style: none;
  overflow-y: scroll;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  div {
    border: none;
    input {
      padding: 0;
      ${typography.body.L};
      color: ${colors.background.Neutral40};
    }
  }
`;
