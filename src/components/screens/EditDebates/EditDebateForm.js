import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input, StyledForm, TextArea, Button } from '../../common';
import { editDebate } from '../../../store/actions/debates';
import { useDispatch } from 'react-redux';
const EditDebateForm = ({ debate, onSubmit, isUpload }) => {
  const dispatch = useDispatch();
  const [argLength, setArgLength] = useState(0);
  const addArgument = () => {
    dispatch(
      editDebate(debate.id, {
        ReceivedArguments: debate.ReceivedArguments.push({
          player: '',
          token: '',
          debate: '',
        }),
      })
    );
    const length = argLength + 1;
    setArgLength(length);
  };
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
                name={`ReceivedArguments[${index}].player`}
                type='text'
                placeholder='Joueur'
                disabled={isUpload ? 'disabled' : ''}
              />
              <Input
                name={`ReceivedArguments[${index}].token`}
                type='text'
                placeholder='Jeton'
                disabled={isUpload ? 'disabled' : ''}
              />
              <TextArea
                name={`ReceivedArguments[${index}].debate`}
                type='text'
                placeholder='Débat'
              />
            </React.Fragment>
          ))}
          {!isUpload ? (
            <p style={{ cursor: 'pointer' }} onClick={addArgument}>
              Ajouter un argument
            </p>
          ) : (
            ''
          )}
          <Button type='submit'>Valider</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};

export default EditDebateForm;
