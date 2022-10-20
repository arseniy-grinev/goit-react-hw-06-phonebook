import styled from 'styled-components';

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
