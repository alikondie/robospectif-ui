import React from 'react';
import { useSelector } from 'react-redux';
import PlayerItem from './PlayerItem';
import { PageLayout } from '../../common';

const PlayersPage = (props) => {
  const players = useSelector((state) => state.players);
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  return (
    <PageLayout>
      <h1>Joueurs</h1>
      {players.map((player) => (
        <PlayerItem key={player.id} {...player} isUpload={isUpload} />
      ))}
    </PageLayout>
  );
};

export default PlayersPage;
