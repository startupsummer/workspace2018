import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createIssue } from '../../resources/issues/issues.actions';

import Container from '../common/Container';
import Icon from '../common/Icon';
import Button from '../common/Button';

function IssuesSearch(props) {
  const { createIssue } = props;
  return (
    <FormContainer marginBottom="20px">
      <Form>
        <Input type="text" placeholder="Search" />
        <IconContainer>
          <Icon icon="search" width="16px" height="16px" fill="#c6cbd1" fillHover="yellow" />
        </IconContainer>
      </Form>
      <Button onClick={createIssue} primary type="button">New issue</Button>
    </FormContainer>
  );
}

IssuesSearch.propTypes = {
  createIssue: PropTypes.PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    createIssue: bindActionCreators(createIssue, dispatch),
  }),
)(IssuesSearch);

const IconContainer = Container.extend`
  width: auto;
  height: auto;
  position: absolute;
  top: 9px;
  left: 8px;
  display: block;
  color: rgb(198, 203, 209);
  text-align: center;
  pointer-events: none;
`;

const FormContainer = Container.extend`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Form = styled.form`
  position: relative;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-family: inherit;
  width: 320px;
  color: rgb(88, 96, 105);
  background-color: rgb(250, 251, 252);
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  box-shadow: rgba(27, 31, 35, 0.075) 0px 1px 2px inset;
  padding: 6px 8px;
  padding-left: 30px;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(209, 213, 218);
  border-image: initial;
  border-radius: 3px;
  outline: none;
`;
