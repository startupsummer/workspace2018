import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${props => props.width || '25px'};
  height: ${props => props.height || '25px'};
  margin: 0;
  margin-right: ${props => props.marginRight || '0px'};
  vertical-align: middle;
  fill: ${props => props.fill || 'black'};
  svg {
    width: 100%;
    height: 100%;
    
      &:hover {
      fill: ${props => props.fillHover || 'black'};
      }
  }
`;

const defaultProps = {
  fill: 'black',
};

const propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

const Icon = ({ icon, fill, ...props }) => {
  // eslint-disable-next-line
  const svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} fill={fill} />;
};

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;

export default Icon;
