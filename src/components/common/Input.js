import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  margin: auto;
  margin-bottom: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  width: auto;
`;

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StyledInput className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </>
  );
};
