import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddContactBtn, FormLabel, Error } from './FormAddContact.styled';

const messeges = {
  name: 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan',
  number:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContact = styled(Form)`
  margin-left: 50px;
  margin-top: 20px;
  width: 400px;
  padding: 20px;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);
`;

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

const ErrorName = () => {
  return <Error> {messeges.name} </Error>;
};

const ErrorNumber = () => {
  return <Error> {messeges.number} </Error>;
};

const FormAddContact = ({ onAddFormSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddFormSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
      msg={messeges.name}
    >
      <FormContact>
        <FormLabel htmlFor="name">
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name" component={ErrorName} />
        </FormLabel>
        <FormLabel htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component={ErrorNumber} />
          {/* {messeges.number} */}
          {/* </ErrorMessage> */}
        </FormLabel>
        <AddContactBtn type="submit">Add contanct</AddContactBtn>
      </FormContact>
    </Formik>
  );
};

export default FormAddContact;

FormAddContact.propTypes = {
  onAddFormSubmit: PropTypes.func,
};
