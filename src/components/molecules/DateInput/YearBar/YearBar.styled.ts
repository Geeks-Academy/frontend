import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const StyledYearBar = styled.div`
  position: relative;
  width: 328px;
  height: 55px;
`;

export const StyledCenterBox = styled.div`
  width: 40px;
  height: 100%;
  border: 1px dashed black;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;

  &:first-of-type {
    z-index: 999;
    display: inline-block;
    overflow-x: scroll;
    overflow-y: hidden;
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
  }
`;

export const StyledYear = styled.div`
  ${typography.body.L}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  width: 40px;
  height: 55px;
  color: ${colors.background.Neutral20};
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
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
  height: 22px;
  &.left {
    left: 0;
    background: linear-gradient(90deg, #ffffff 0%, #ffffff 22.92%, rgba(255, 255, 255, 0) 100%);
  }
  &.right {
    right: 0;
    background: linear-gradient(-90deg, #ffffff 0%, #ffffff 22.92%, rgba(255, 255, 255, 0) 100%);
  }
`;
