import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditPlayerForm from './EditPlayerForm';
import { editPlayer } from '../../../store/actions/players';
import { PageLayout } from '../../common';

const EditPlayerPage = ({ match, history }) => {
  const player = useSelector((state) => {
    return state.players.find((player) => player.id === match.params.id);
  });
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  const dispatch = useDispatch();
  return (
    <PageLayout>
      <h1>{player.name}</h1>
      <EditPlayerForm
        player={player}
        onSubmit={(updates) => {
          dispatch(editPlayer(updates, player.id));
          isUpload
            ? history.push('/upload/players')
            : history.push('/create/players');
        }}
        isUpload={isUpload}
      />
    </PageLayout>
  );
};

export default EditPlayerPage;
