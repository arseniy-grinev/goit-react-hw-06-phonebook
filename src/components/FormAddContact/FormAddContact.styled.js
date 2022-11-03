import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactBtn = styled.button`
  margin: 0 auto;
  display: block;
  border: 1px solid lightgray;
  border-radius: 2px;
  text-transform: capitalize;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.2);
  &:hover,
  &:focus {
    scale: 1.08;
  }
`;
export const FormLabel = styled.label`
  font-size: 16px;
  margin-left: 25px;
  margin-top: 20px;
  text-transform: capitalize;
  /* display: block; */
  /* position: relative; */
`;

export const Error = styled.p`
  color: red;
  /* position: absolute; */
  font-size: 0.5rem;
`;

export const FormContact = styled(Form)`
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

export const Input = styled(Field)`
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
