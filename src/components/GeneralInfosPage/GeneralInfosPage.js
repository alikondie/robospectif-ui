import React from 'react';
import GeneralInfosForm from '../GeneralInfosForm/GeneralInfosForm';
const GeneralInfosPage = () => {
  const infos = {};
  return (
    <div>
      <h1>Informations générales sur la partie</h1>
      <GeneralInfosForm infos={infos} />
    </div>
  );
};

export default GeneralInfosPage;
