import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: 0 auto;
  padding: ${props => props.paddingHeight || '0'} ${props => props.paddingWidth || '0'};
  margin-bottom: ${props => props.marginBottom || '0'}};
  background-color: ${props => props.backgroundColor || 'none'};
`;

export default Container;
