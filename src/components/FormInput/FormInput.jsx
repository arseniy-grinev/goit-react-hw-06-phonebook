import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { FormLabel } from './FormInput.styled';

const Input = styled(Field)`
  border: 1px solid lightgray;
  margin: 20px;
  margin-top: 5px;
  font-size: 16px;
  width: 360px;
  outline: none;
  border-radius: 2px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const FormInput = ({ type, name, label, title }) => {
  return (
    <FormLabel htmlFor={name}>
      {label}
      <Input type={type} name={name} />
      <ErrorMessage name={name} component="div">
        {title}
      </ErrorMessage>
    </FormLabel>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormInput;
