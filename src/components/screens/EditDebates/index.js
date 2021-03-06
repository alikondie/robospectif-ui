import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditDebateForm from './EditDebateForm';
import { editDebate } from '../../../store/actions/debates';
import { PageLayout } from '../../common';

const EditDebatePage = ({ match, history }) => {
  const debate = useSelector((state) => {
    return state.debates.find((debate) => debate.id === match.params.id);
  });
  const turn = useSelector((state) => {
    return state.turns.find((turn) => turn.no === debate.turn);
  });
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  const dispatch = useDispatch();
  return (
    <PageLayout>
      <h1>Conception du joueur {turn.player}</h1>
      <EditDebateForm
        debate={debate}
        turn={turn}
        isUpload={isUpload}
        onSubmit={(update) => {
          dispatch(editDebate(update, debate.id));
          isUpload
            ? history.push('/upload/edit-turn/' + turn.no)
            : history.push('/create/edit-turn/' + turn.no);
        }}
      />
    </PageLayout>
  );
};

export default EditDebatePage;
