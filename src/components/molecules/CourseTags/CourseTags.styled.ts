import styled from 'styled-components';
import colors from 'styles/colors';
import typography from 'styles/typography';

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: base-line;
  width: 400px;
`;

export const TagsLabel = styled.div`
  ${typography.body.M};
  color: ${colors.text.Neutral20};
`;

export const Tags = styled.div`
  min-width: 300px;
`;
export const TagsEndCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: base-line;
  ${typography.body.S};
  color: ${colors.text.Neutral20};
`;
