import React from 'react';
import { Formik } from 'formik';
import { Input, StyledForm } from '../../common';
import { useSelector } from 'react-redux';
import DebateItem from '../Debates/DebateItem';
const EditTurnForm = ({ turn, onSubmit, isUpload }) => {
  //const rejectedCards = {};
  let debates = useSelector((state) =>
    state.debates.filter((debate) => debate.turn === turn.no)
  );

  return (
    <div>
      <Formik
        initialValues={{
          conceptor: turn.conceptor,
          automation: turn.description,
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
            name='conceptor'
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
          {debates.map((debate) => (
            <DebateItem
              key={debate.id}
              {...debate}
              {...turn}
              isUpload={isUpload}
            />
          ))}
        </StyledForm>
      </Formik>
    </div>
  );
};

export default EditTurnForm;
