import React from 'react';
import { PageLayout, Button } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { addTurn } from '../../../store/actions/turns';
import {
  uploadStats,
  uploadPlayers,
  uploadTurns,
  uploadDebates,
} from '../../../services/game';
import TurnItem from './TurnItem';

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
        conceptor: '',
        dimension: '',
        locomotion: '',
        automation: '',
        equipments: ['', '', ''],
      })
    );
    props.history.push('/create/turns');
  };
  const saveGame = async () => {
    const game = await uploadStats(gameStats);
    const players = await uploadPlayers(game, gamePlayers);
    const uploadedTurns = await uploadTurns(game, players, turns);
    const debates = await uploadDebates(players, uploadedTurns, gameDebates);
    props.history.push('/');
  };
  return (
    <PageLayout>
      <h1>Tours</h1>
      {turns.map((turn) => (
        <TurnItem key={turn.no} {...turn} isUpload={isUpload} />
      ))}
      {isUpload ? (
        ''
      ) : (
        <p style={{ cursor: 'pointer' }} onClick={addItem}>
          Ajouter un tour
        </p>
      )}

      <Button onClick={saveGame}>Valider</Button>
    </PageLayout>
  );
};

export default TurnsPage;
