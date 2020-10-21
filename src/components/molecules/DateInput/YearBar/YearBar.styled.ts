import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const StyledYearBar = styled.div`
  width: 328px;
  height: 55px;
`;

export const StyledWrapper = styled.div`
  display: inline-block;
  overflow: auto;
  padding: 0 128px;
  width: 100%;
  height: 55px;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  &.active {
    cursor: grabbing;
  }
`;

export const StyledYear = styled.div`
  ${typography.body.L}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 55px;
  color: ${colors.background.Neutral60};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &.center {
    color: ${colors.background.Neutral20};
  }

  &.first {
    color: ${colors.background.Neutral40};
  }

  &.second {
    color: ${colors.background.Neutral60};
  }
`;

export const StyledGradient = styled.span`
  position: absolute;
  z-index: 999;
  width: 39px;
  height: 50px;
  pointer-events: none;
  &.left {
    border-left: 2px solid ${colors.background.Neutral80};
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 22.92%, rgba(255, 255, 255, 0) 100%);
  }
  &.right {
    right: -2px;
    border-right: 2px solid ${colors.background.Neutral80};
    background: linear-gradient(-90deg, #ffffff 0%, #ffffff 22.92%, rgba(255, 255, 255, 0) 100%);
  }
`;
