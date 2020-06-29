import React from 'react';
import { connect } from 'react-redux';
import GeneralInfosForm from './GeneralInfosForm';
import { editGeneralInfos } from '../../../store/actions/generalInfos';
import { PageLayout } from '../../common';
const GeneralInfosPage = (props) => {
  return (
    <PageLayout>
      <h1>Informations générales sur la partie</h1>
      <GeneralInfosForm
        infos={props.generalInfos}
        onSubmit={(infos) => {
          props.dispatch(editGeneralInfos(infos));
          props.history.push('/');
        }}
      />
    </PageLayout>
  );
};

const mapStatetoToProps = (state, props) => {
  return {
    generalInfos: state.generalInfos,
  };
};

const ConnectedExpenseList = connect(mapStatetoToProps)(GeneralInfosPage);

export default ConnectedExpenseList;
