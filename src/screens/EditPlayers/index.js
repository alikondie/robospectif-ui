import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditPlayerForm from './EditPlayerForm';
import { editPlayer } from '../../store/actions/players';

const EditPlayerPage = ({ match, history }) => {
  const player = useSelector((state) => {
    return state.players.find((player) => player.id == match.params.id);
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{player.name}</h1>
      <EditPlayerForm
        player={player}
        onSubmit={(player) => {
          dispatch(editPlayer(player, player.id));
          history.push('/players');
        }}
      />
    </div>
  );
};

export default EditPlayerPage;
// // const mapStatetoToProps = (state, props) => {
// //   console.log('this is state', state);
// //   console.log('this is props', props.match.params.id);
// //   console.log(
// //     state.players.find((player) => player.id == props.match.params.id)
// //   );
// //   console.log(state.players.map((player) => player.id));
// //   return {
// //     player: state.players.find((player) => player.id == props.match.params.id),
// //   };
// // };

// // const ConnectedExpenseList = connect(mapStatetoToProps)(EditPlayerPage);

// export default ConnectedExpenseList;
