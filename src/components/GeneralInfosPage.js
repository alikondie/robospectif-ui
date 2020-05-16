import React from 'react';
import { connect } from 'react-redux';
import GeneralInfosForm from './GeneralInfosForm';
import { editGeneralInfos } from '../actions/general-infos';

const GeneralInfosPage = (props) => {
  return (
    <div>
      <h1>Informations générales sur la partie</h1>
      <GeneralInfosForm
        infos={props.generalInfos}
        onSubmit={(infos) => {
          props.dispatch(editGeneralInfos(infos));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStatetoToProps = (state, props) => {
  return {
    generalInfos: state.generalInfos,
  };
};

const ConnectedExpenseList = connect(mapStatetoToProps)(GeneralInfosPage);

export default ConnectedExpenseList;
