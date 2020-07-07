import React from 'react';
import { Formik } from 'formik';
import { Input, TextArea, StyledForm, Button } from '../../common';
import * as Yup from 'yup';

// bug in yup fix it!!
const generalInfosValidation = Yup.object().shape({
  players: Yup.number()
    .min(4, 'Le nombre doit être entre 4 et 6')
    .max(6, 'Le nombre doit être entre 4 et 6')
    .required('Champ requis'),
  animator: Yup.string()
    .max(20, '20 caractères maximum est permis')
    .required('Champ requis'),
  context: Yup.string().required('Champ requis'),
  observations: Yup.string().required('Champ requis'),
  setup: Yup.string().required('Champ requis'),
  acceptanceOftheGame: Yup.string().required('Champ requis'),
  attitudes: Yup.string().required('Champ requis'),
  ludicAspects: Yup.string().required('Champ requis'),
  exchanges: Yup.string().required('Champ requis'),
  vaProblematics: Yup.string().required('Champ requis'),
});
const GeneralInfosForm = ({ infos, onSubmit, isUpload }) => {
  return (
    <div>
      <Formik
        initialValues={{
          date: infos.date,
          players: infos.players,
          animator: infos.animator,
          context: infos.context,
          observations: infos.observations,
          setup: infos.gameObservations.setup,
          acceptanceOftheGame: infos.gameObservations.acceptanceOftheGame,
          attitudes: infos.gameObservations.attitudes,
          ludicAspects: infos.gameObservations.ludicAspects,
          exchanges: infos.gameObservations.exchanges,
          vaProblematics: infos.gameObservations.vaProblematics,
        }}
        validationSchema={generalInfosValidation}
        onSubmit={(values) => {
          onSubmit({ ...values });
        }}
      >
        <StyledForm>
          <Input
            disabled={isUpload ? 'disabled' : ''}
            label='Date'
            name='date'
            type='text'
            placeholder='Date'
          />
          <Input
            disabled={isUpload ? 'disabled' : ''}
            label='Nombre de joueurs'
            name='players'
            type='text'
            placeholder='Nombre de joueurs'
          />
          <Input
            label='Animateur'
            name='animator'
            type='text'
            placeholder='animateur'
          />
          <TextArea
            label='Contexte de la partie'
            name='context'
            type='text'
            placeholder='Contexte de la partie'
          />
          <TextArea
            label='Observations'
            name='observations'
            type='text'
            placeholder='Observations'
          />
          <h2>Remarques générales</h2>
          <TextArea
            label='Mise en place'
            name='setup'
            type='text'
            placeholder='Mise en place'
          />
          <TextArea
            label='Rapport aux règles de jeu'
            name='acceptanceOftheGame'
            type='text'
            placeholder='Rapport aux règles de jeu'
          />
          <TextArea
            label='Attitude individuelle face au jeu'
            name='attitudes'
            type='text'
            placeholder='Attitude individuelle face au jeu'
          />
          <TextArea
            label='Aspect ludique de la partie'
            name='ludicAspects'
            type='text'
            placeholder='Aspect ludique de la partie'
          />
          <TextArea
            label='Richesse des échanges'
            name='exchanges'
            type='text'
            placeholder='Richesse des échanges'
          />
          <TextArea
            label='Problématiques du VA soulevées dans les débats'
            name='vaProblematics'
            type='text'
            placeholder='Problématiques du VA soulevées dans les débats'
          />
          <Button type='submit'>Suivant</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default GeneralInfosForm;
