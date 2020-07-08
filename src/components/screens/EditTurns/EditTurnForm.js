import React from 'react';
import { Formik } from 'formik';
import { Input, StyledForm } from '../../common';
const EditTurnForm = ({ turn, onSubmit, isUpload }) => {
  //const rejectedCards = {};
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
        </StyledForm>
      </Formik>
    </div>
  );
};

export default EditTurnForm;
