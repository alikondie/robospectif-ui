import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GeneralInfosForm from './GeneralInfosForm';
import { editGeneralInfos } from '../../../store/actions/generalInfos';
import { addStep } from '../../../store/actions/gameUpload';
import { PageLayout } from '../../common';
import { addPlayer } from '../../../store/actions/players';
const GeneralInfosPage = (props) => {
  const dispatch = useDispatch();
  const generalInfos = useSelector((state) => state.generalInfos);
  const isUpload = useSelector((state) => state.gameUpload.isUploaded);
  return (
    <PageLayout>
      <h1>Informations générales sur la partie</h1>
      <GeneralInfosForm
        infos={generalInfos}
        isUpload={isUpload}
        onSubmit={(infos) => {
          dispatch(editGeneralInfos(infos));
          dispatch(addStep());
          // players are already added to store
          if (isUpload) props.history.push('/upload/players');
          // create players templates according to their numbers
          else {
            for (let i = 0; i < infos.numberOfPlayers; i++)
              dispatch(
                addPlayer({
                  id: '' + (i + 1),
                  description: '',
                  name: 'Joueur ' + (i + 1),
                  rejectedCards: {
                    dimension: [''],
                    locomotion: [''],
                    equipments: ['', '', ''],
                  },
                })
              );
            props.history.push('/create/players');
          }
        }}
      />
    </PageLayout>
  );
};

export default GeneralInfosPage;
