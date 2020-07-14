import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import PlayerItem from './PlayerItem';
import { PageLayout, Button, StyledForm, Input } from '../../common';
import { addStep } from '../../../store/actions/gameUpload';

const playersListValidation = Yup.object().shape({
  items: Yup.array().of(
    Yup.bool().oneOf([true], 'Les informations doivent être remplises')
  ),
});

const PlayersPage = (props) => {
  const dispatch = useDispatch();
  const validateForm = () => {
    dispatch(addStep());

    if (isUpload) props.history.push('/upload/turns');
    else props.history.push('/create/turns');
  };

  const players = useSelector((state) => state.players);
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  return (
    <PageLayout>
      <h1>Joueurs</h1>
      <Formik
        initialValues={{ items: players.map((player) => player.filled) }}
        validationSchema={playersListValidation}
        onSubmit={() => validateForm()}
      >
        <StyledForm>
          {players.map((player, index) => (
            <React.Fragment key={player.id}>
              <PlayerItem {...player} isUpload={isUpload} />{' '}
              <Input
                label=''
                name={`items[${index}]`}
                type='checkbox'
                checked={player.filled}
                disabled
                hidden
              />
            </React.Fragment>
          ))}

          <Button type='submit'>Suivant</Button>
        </StyledForm>
      </Formik>
    </PageLayout>
  );
};

export default PlayersPage;
