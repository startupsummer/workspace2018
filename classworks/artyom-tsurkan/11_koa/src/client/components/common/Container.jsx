import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0 auto;
  padding: ${props => props.paddingHeight} ${props => props.paddingWidth};
  margin-bottom: ${props => props.marginBottom}};
  background-color: ${props => props.backgroundColor};
`;

Container.defaultProps = {
    width: '100%',
    height: '100%',
    paddingHeight: '0',
    paddingWidth: '0',
    marginBottom: '0',
    backgroundColor: 'none',
};

export default Container;