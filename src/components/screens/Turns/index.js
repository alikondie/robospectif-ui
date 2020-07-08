import React from 'react';
import { PageLayout, Button } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { addTurn } from '../../../store/actions/turns';
import TurnItem from './TurnItem';

const TurnsPage = (props) => {
  const turns = useSelector((state) => state.turns);
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  const dispatch = useDispatch();
  const AddItem = () => {
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
  return (
    <PageLayout>
      <h1>Tours</h1>
      {turns.map((turn) => (
        <TurnItem key={turn.no} {...turn} isUpload={isUpload} />
      ))}
      {isUpload ? (
        ''
      ) : (
        <p style={{ cursor: 'pointer' }} onClick={AddItem}>
          Ajouter un tour
        </p>
      )}

      <Button>Suivant</Button>
    </PageLayout>
  );
};

export default TurnsPage;
