import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GeneralInfosForm from './GeneralInfosForm';
import { editGeneralInfos } from '../../../store/actions/generalInfos';
import { addStep } from '../../../store/actions/fileUpload';
import { PageLayout } from '../../common';
const GeneralInfosPage = (props) => {
  const dispatch = useDispatch();
  const generalInfos = useSelector((state) => state.generalInfos);

  return (
    <PageLayout>
      <h1>Informations générales sur la partie</h1>
      <GeneralInfosForm
        infos={generalInfos}
        onSubmit={(infos) => {
          dispatch(editGeneralInfos(infos));
          dispatch(addStep());
          props.history.push('/upload/players');
        }}
      />
    </PageLayout>
  );
};

export default GeneralInfosPage;
