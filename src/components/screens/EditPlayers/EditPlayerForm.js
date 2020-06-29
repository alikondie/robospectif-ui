import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Input, TextArea, StyledForm, Button } from '../../common';
const playersValidation = null;
const EditPlayerForm = ({ player, onSubmit }) => {
  const rejectedCards = {};
  return (
    <div>
      <Formik
        initialValues={{
          name: player.name,
          description: player.description,
        }}
        onSubmit={(values) => {
          onSubmit({ ...values });
        }}
      >
        <StyledForm>
          <Input
            label='Nom/Prénom'
            name='name'
            type='text'
            placeholder='Nom/Prénom'
            disabled
          />
          <TextArea
            label='Description'
            name='description'
            placeholder='Description'
          />
          <h2>Carte rejetées</h2>
          <p>Dimension</p>
          {player.rejectedCards.dimension.map((card) => (
            <p key={card[0]}>{card}</p>
          ))}
          <p>Locomotion</p>
          {player.rejectedCards.locomotion.map((card) => (
            <p key={card[0]}>{card}</p>
          ))}
          <p>Equipements</p>
          {player.rejectedCards.dimension.map((card) => (
            <p key={card[0]}>{card}</p>
          ))}
        </StyledForm>
      </Formik>
    </div>
  );
};

export default EditPlayerForm;

// console.log(props);
// const [player, setPlayer] = useState(props.player);
// const onSubmit = (e) => {
//   e.preventDefault();
//   props.onSubmit({
//     ...player,
//   });
// };

// const onNameChange = (e) => {
//   const name = e.target.value;
//   setPlayer({ ...player, name });
// };
// const onDescriptionChange = (e) => {
//   const description = e.target.value;
//   setPlayer({ ...player, description });
// };

// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <p>Nom/Prénom</p>
//       <input
//         disabled
//         value={player.name}
//         placeholder='Nom ou/et prénom'
//         onChange={onNameChange}
//       ></input>
//       <p>Description</p>
//       <textarea
//         value={props.description}
//         placeholder='Description du joueur'
//         onChange={onDescriptionChange}
//       ></textarea>
//       <h2>Carte rejetées</h2>
//       <p>Dimension</p>
//       {player.rejectedCards.dimension.map((card) => (
//         <p key={card[0]}>{card}</p>
//       ))}
//       <p>Locomotion</p>
//       {player.rejectedCards.locomotion.map((card) => (
//         <p key={card[0]}>{card}</p>
//       ))}
//       <p>Equipements</p>
//       {player.rejectedCards.dimension.map((card) => (
//         <p key={card[0]}>{card}</p>
//       ))}

//       <button>Valider</button>
//     </form>
//   </div>
// );
