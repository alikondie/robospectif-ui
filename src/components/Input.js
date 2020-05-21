import React from 'react';
import { useField } from 'formik';

export default ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='error'>{meta.error}</p>
      ) : null}
    </>
  );
};
