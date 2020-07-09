import React from 'react';
import { Formik } from 'formik';
import { Input, StyledForm, TextArea } from '../../common';
const EditDebateForm = ({ debate, onSubmit, isUpload }) => {
  //const rejectedCards = {};
  return (
    <div>
      <Formik
        initialValues={{
          turn: debate.turn,
          player: debate.player,
          character: debate.character,
          environment: debate.environment,
          proposedUsage: debate.proposedUsage,
          ReceivedArguments: debate.ReceivedArguments,
        }}
        onSubmit={(values) => {
          onSubmit({ ...values });
        }}
      >
        <StyledForm>
          <Input
            label='Tour'
            name='turn'
            type='text'
            placeholder='Tour'
            disabled={isUpload ? 'disabled' : ''}
          />
          <Input
            label='Joueur'
            name='player'
            type='text'
            placeholder='Joueur'
            disabled={isUpload ? 'disabled' : ''}
          />
          <Input
            label='Caractère'
            name='character'
            type='text'
            placeholder='Caractère'
            disabled={isUpload ? 'disabled' : ''}
          />
          <Input
            label='Environnement'
            name='environment'
            type='text'
            placeholder='Environnement'
            disabled={isUpload ? 'disabled' : ''}
          />
          <TextArea
            label='Usage proposé'
            name='proposedUsage'
            type='text'
            placeholder='Usage proposé'
          />

          <p>Arguments</p>
          {debate.ReceivedArguments.map((argument, index) => (
            <React.Fragment key={`${index}`}>
              <Input
                name={`equipments[${index}].player`}
                type='text'
                placeholder='Joueur'
                disabled={isUpload ? 'disabled' : ''}
              />
              <Input
                name={`equipments[${index}].token`}
                type='text'
                placeholder='Jeton'
                disabled={isUpload ? 'disabled' : ''}
              />
              <TextArea
                name={`equipments[${index}].debate`}
                type='text'
                placeholder='Débat'
              />
            </React.Fragment>
          ))}
        </StyledForm>
      </Formik>
    </div>
  );
};

export default EditDebateForm;
