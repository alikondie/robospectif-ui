import React from 'react';
import { connect } from 'react-redux';
import PlayerItem from './PlayerItem';
import { PageLayout } from '../../common';

const PlayersPage = (props) => {
  /*console.log(
    props.players.map((player) => <PlayerItem key={player.id} {...player} />)
  );*/
  return (
    <PageLayout>
      <h1>Joueurs</h1>
      {props.players.map((player) => (
        <PlayerItem key={player.id} {...player} />
      ))}
    </PageLayout>
  );
};

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps)(PlayersPage);
