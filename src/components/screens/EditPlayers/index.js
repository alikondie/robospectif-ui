import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditPlayerForm from './EditPlayerForm';
import { editPlayer } from '../../../store/actions/players';
import { PageLayout } from '../../common';

const EditPlayerPage = ({ match, history }) => {
  const player = useSelector((state) => {
    return state.players.find((player) => player.id == match.params.id);
  });
  const dispatch = useDispatch();
  return (
    <PageLayout>
      <h1>{player.name}</h1>
      <EditPlayerForm
        player={player}
        onSubmit={(player) => {
          dispatch(editPlayer(player, player.id));
          history.push('/players');
        }}
      />
    </PageLayout>
  );
};

export default EditPlayerPage;
