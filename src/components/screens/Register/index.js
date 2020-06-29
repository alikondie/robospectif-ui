import React from 'react';
import { Formik } from 'formik';
import { Input, StyledForm, Button } from '../../common';
import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  firstName: Yup.string().required('Champ requis'),
  lastName: Yup.string().required('Champ requis'),
  establishment: Yup.string().required('Champ requis'),
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
          firstName: '',
          lastName: '',
          establishment: '',
          email: '',
          password: '',
        }}
        validationSchema={loginValidation}
        onSubmit={(values) => {
          console.log('submitted');
        }}
      >
        <StyledForm>
          <Input label='Nom' name='firstName' type='text' placeholder='Nom' />
          <Input
            label='Prénom'
            name='lastName'
            type='text'
            placeholder='Prénom'
          />
          <Input
            label='Etablissement'
            name='establishment'
            type='text'
            placeholder='Etablissement'
          />
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
