import React from 'react';

const PlayersPage = () => {
  return (
    <div>
      <h1>Joueurs</h1>
      <GeneralInfosForm
        player={props.player}
        onSubmit={(player) => {
          props.dispatch(EditGeneralInfos(infos));
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default PlayersPage;
