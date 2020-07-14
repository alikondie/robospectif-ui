import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Input, StyledForm, Button } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { addDebate } from '../../../store/actions/debates';
import DebateItem from '../Debates/DebateItem';

const turnsValidation = Yup.object().shape({
  player: Yup.string().required('Champ requis'),
  automation: Yup.string().required('Champ requis'),
  dimension: Yup.string().required('Champ requis'),
  locomotion: Yup.string().required('Champ requis'),
  equipments: Yup.array().of(Yup.string().required('Champ requis')),
  debates: Yup.array().of(
    Yup.bool().oneOf(
      [true],
      'Les informations du débate doivent être remplises'
    )
  ),
});

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
          debates: relatedDebates.map((debate) => debate.filled),
        }}
        validationSchema={turnsValidation}
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
          {relatedDebates.map((debate, index) => (
            <React.Fragment key={debate.id}>
              <DebateItem {...debate} {...turn} isUpload={isUpload} />
              <Input
                label=''
                name={`debates[${index}]`}
                type='checkbox'
                checked={debate.filled}
                disabled
                hidden
              />
            </React.Fragment>
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
