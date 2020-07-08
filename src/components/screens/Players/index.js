import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlayerItem from './PlayerItem';
import { PageLayout, Button } from '../../common';
import { addStep } from '../../../store/actions/gameUpload';
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
      {players.map((player) => (
        <PlayerItem key={player.id} {...player} isUpload={isUpload} />
      ))}

      <Button onClick={validateForm}>Suivant</Button>
    </PageLayout>
  );
};

export default PlayersPage;
