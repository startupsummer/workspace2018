import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = ({ icon, fill, ...props }) => {
  // eslint-disable-next-line
  const svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} fill={fill} />;
};

Icon.defaultProps = {
  fill: 'black',
};
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

export default Icon;

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0;
  margin-right: ${props => props.marginRight};
  vertical-align: middle;
  fill: ${props => props.fill};
  svg {
    width: 100%;
    height: 100%;
    
    &:hover {
      fill: ${props => props.fillHover};
    }
  }
`;

Wrapper.defaultProps = {
  width: '25px',
  height: '25px',
  marginRight: '0',
  fill: 'black',
  fillHover: 'black',
};
