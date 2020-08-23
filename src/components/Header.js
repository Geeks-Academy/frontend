import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../styles/devices';
import typography from '../styles/typography';
import colors from '../styles/colors';

const Title = styled.h1`
  color: ${colors.text.NeutralBlack};
  ${typography.header.bold.L}

  ${device.mobile} {
    ${typography.header.bold.S}
  }
`;

function Header({ title }) {
  return <Title>{title}</Title>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
