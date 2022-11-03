import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  AddContactBtn,
  FormLabel,
  Error,
  FormContact,
  Input,
} from './FormAddContact.styled';

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
