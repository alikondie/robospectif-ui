import React from 'react';
import { Styles } from './styles';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import { Children } from 'react';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <div>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

const Formikla = () => {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: '',
          email: '',
          acceptedTerms: false,
          specialPower: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 chars')
            .max(15, 'Must be 15 chars or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required(),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'you must accept terms and conditions'),
          specialPower: Yup.string()
            .oneOf(['flight', 'invisibility', 'other'])
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign up</h1>
            <CustomTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='Mike'
            ></CustomTextInput>
            <CustomTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='mike@mike.com'
            ></CustomTextInput>
            <CustomSelect label='special Power' name='Speical Power'>
              <option value=''>Select</option>
              <option value='flight'>flight</option>
              <option value='invisibility'>invisibility</option>
              <option value='other'>other</option>
            </CustomSelect>
            <CustomCheckbox name='acceptedTerms'>
              I accept Terms and conditions
            </CustomCheckbox>
            <button type='submit'>
              {props.isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default Formikla;
