import React from 'react';
import { Formik } from 'formik';
import { Input, StyledForm, Button } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { addDebate } from '../../../store/actions/debates';
import DebateItem from '../Debates/DebateItem';
const EditTurnForm = ({ turn, onSubmit, isUpload }) => {
  //const rejectedCards = {};
  let relatedDebates = useSelector((state) =>
    state.debates.filter((debate) => debate.turn === turn.no)
  );
  const numberOfDebates = useSelector((state) => state.debates.length);
  const dispatch = useDispatch();
  const addDebateFromLink = () => {
    dispatch(
      addDebate({
        id: (numberOfDebates + 1).toString(),
        turn: turn.no,
        player: '',
        character: '',
        environment: '',
        proposedUsage: '',
        ReceivedArguments: [],
      })
    );
  };

  return (
    <div>
      <Formik
        initialValues={{
          player: turn.player,
          automation: turn.automation,
          dimension: turn.dimension,
          locomotion: turn.locomotion,
          equipments: turn.equipments,
        }}
        onSubmit={(values) => {
          onSubmit({ ...values });
        }}
      >
        <StyledForm>
          <Input
            label='Concepteur'
            name='player'
            type='text'
            placeholder='Concepteur'
            disabled={isUpload ? 'disabled' : ''}
          />
          <Input
            label='Automation'
            name='automation'
            type='text'
            placeholder='Automation'
            disabled={isUpload ? 'disabled' : ''}
          />
          <Input
            label='Dimension'
            name='dimension'
            type='text'
            placeholder='Dimension'
            disabled={isUpload ? 'disabled' : ''}
          />
          <Input
            label='Locomotion'
            name='locomotion'
            type='text'
            placeholder='Locomotion'
            disabled={isUpload ? 'disabled' : ''}
          />
          <p>Equipements</p>
          {turn.equipments.map((card, index) => (
            <Input
              key={`${index}`}
              name={`equipments[${index}]`}
              type='text'
              placeholder='Equipement'
              disabled={isUpload ? 'disabled' : ''}
            />
          ))}
          <p>Conceptions</p>
          {relatedDebates.map((debate) => (
            <DebateItem
              key={debate.id}
              {...debate}
              {...turn}
              isUpload={isUpload}
            />
          ))}
          {!isUpload ? (
            <p style={{ cursor: 'pointer' }} onClick={addDebateFromLink}>
              Ajouter un débat
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

export default EditTurnForm;
