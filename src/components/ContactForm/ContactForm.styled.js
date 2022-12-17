import styled from 'styled-components';
import { Form } from 'formik';

export const CreateContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

export const NameLable = styled.span``;

export const SubmitButton = styled.button`
  font-size: 20px;
  padding: 10px 0;
`;
