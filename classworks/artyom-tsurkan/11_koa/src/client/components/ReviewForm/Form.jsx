import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import Button from '../common/Button';

const Form = ({
  handleSubmit,
  submitting,
  error,
}) => (
  <form onSubmit={handleSubmit}>
    <StyledField
      name="name"
      type="text"
      component="input"
      placeholder="Name"
    />

    <StyledField
      name="surname"
      type="text"
      component="input"
      placeholder="Surname"
    />

    <StyledField
      name="description"
      type="text"
      component="textarea"
      placeholder="Description"
    />

    <div>
      <StyledField name="rating" component="select">
        <option />
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </StyledField>
    </div>

    <Button
      primary
      type="submit"
      disabled={submitting}
    >
      Add review
    </Button>

    {
      error ?
        <p>{error}</p> :
        null
    }

  </form>
);

Form.defaultProps = {
  error: null,
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default reduxForm({
  form: 'reviewForm',
})(Form);

const StyledField = styled(Field)`
  display: block;
  width: 300px;
  height: 40px;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 1em;
  margin-top: 5px;
  margin-bottom: 20px;
`;
