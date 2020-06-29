import React from 'react';
import { useField } from 'formik';

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className='select' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};
