import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { StyledForm } from '../../common';
import { PageLayout, Button, Input } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { addTurn } from '../../../store/actions/turns';
import {
  uploadStats,
  uploadPlayers,
  uploadTurns,
  uploadDebates,
} from '../../../services/game';
import TurnItem from './TurnItem';
const turnsListValidation = Yup.object().shape({
  items: Yup.array().of(
    Yup.bool().oneOf([true], 'Les informations doivent être remplises')
  ),
});

const TurnsPage = (props) => {
  const turns = useSelector((state) => state.turns);
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  const gameStats = useSelector((state) => state.generalInfos);
  const gamePlayers = useSelector((state) => state.players);
  const gameDebates = useSelector((state) => state.debates);

  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      addTurn({
        no: (turns.length + 1).toString(),
        player: '',
        dimension: '',
        locomotion: '',
        automation: '',
        equipments: ['', '', ''],
      })
    );
    props.history.push('/create/turns');
  };
  const saveGame = async () => {
    // uploading the game to the server
    const game = await uploadStats(gameStats);
    const players = await uploadPlayers(game, gamePlayers);
    const uploadedTurns = await uploadTurns(game, players, turns);
    await uploadDebates(players, uploadedTurns, gameDebates);
    props.history.push('/');
  };
  //console.log(turns);
  return (
    <PageLayout>
      <h1>Tours</h1>
      <Formik
        initialValues={{ items: turns.map((turn) => turn.filled) }}
        validationSchema={turnsListValidation}
        onSubmit={(values) => saveGame()}
      >
        <StyledForm>
          {
            // I added a hidden input to check if the turns are filled
            turns.map((turn, index) => (
              <React.Fragment key={turn.no}>
                <TurnItem {...turn} isUpload={isUpload} indexInParent={index} />
                <Input
                  label=''
                  name={`items[${index}]`}
                  type='checkbox'
                  checked={turn.filled}
                  disabled
                  hidden
                />
              </React.Fragment>
            ))
          }

          {isUpload ? (
            ''
          ) : (
            <p style={{ cursor: 'pointer' }} onClick={addItem}>
              Ajouter un tour
            </p>
          )}
          <Button type='submit'>Valider</Button>
        </StyledForm>
      </Formik>
    </PageLayout>
  );
};

export default TurnsPage;
