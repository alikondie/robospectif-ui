import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  margin: auto;
  margin-bottom: 8px;
  width: 60%;
  box-sizing: border-box;
  height: 100px;
  resize: vertical;
  overflow: auto;
`;

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledTextArea className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </>
  );
};
