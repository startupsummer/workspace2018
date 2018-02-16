import styled, { css } from 'styled-components';

const Button = styled.button`
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-size: 110% 110%;
  -webkit-appearance: none;
  padding: 6px 12px;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(27, 31, 35, 0.2);
  border-image: initial;
  border-radius: 0.25em;
  color: rgb(36, 41, 46);
  background-color: rgb(239, 243, 246);
  background-image: linear-gradient(-180deg, rgb(250, 251, 252) 0%, rgb(239, 243, 246) 90%);
  ${props => props.primary && css`
    color: rgb(255, 255, 255);
    background-color: rgb(40, 167, 69);
    background-image: linear-gradient(-180deg, rgb(52, 208, 88) 0%, rgb(40, 167, 69) 90%);
  `}
  ${props => props.link && css`
    display: inline-block;
    padding-top: 13px;
    padding-bottom: 13px;
    font-weight: normal;
    background-color: transparent;
    border: 0;
    font-size: 14px;
  `}
  ${props => props.selected === true && css`
    font-weight: 600;
  `}
`;

Button.defaultProps = {
  primary: false,
  link: false,
  selected: false,
};

export default Button;
