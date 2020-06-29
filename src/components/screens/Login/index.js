import React from 'react';
import { Formik } from 'formik';
import { Input, StyledForm, Button } from '../../common';
import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Le champ doit être une adresse mail')
    .required('Champ requis'),
  password: Yup.string()
    .min(8, 'Le mot de passe est trop court')
    .required('Champ requis'),
});

export default () => {
  return (
    <div>
      <h1>Robospectif</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginValidation}
        onSubmit={(values) => {
          console.log('submitted');
        }}
      >
        <StyledForm>
          <Input label='Email' name='email' type='text' placeholder='Email' />
          <Input
            label='Mot de passe'
            name='password'
            type='password'
            placeholder='Mot de passe'
          />
          <Button type='submit'>Submit</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
