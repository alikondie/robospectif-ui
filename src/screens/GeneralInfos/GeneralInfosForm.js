import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import * as Yup from 'yup';

// bug in yup fix it!!
const generalInfosValidation = Yup.object().shape({
  animator: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  context: Yup.string().required('Required'),
  observations: Yup.string().required('Required'),
  setup: Yup.string().required('Required'),
  acceptanceOftheGame: Yup.string().required('Required'),
  attitudes: Yup.string().required('Required'),
  ludicAspects: Yup.string().required('Required'),
  exchanges: Yup.string().required('Required'),
  vaProblematics: Yup.string().required('Required'),
});
const GeneralInfosForm = ({ infos, onSubmit }) => {
  return (
    <div>
      <h2>Date de la partie {infos.date}</h2>
      <h2>Nombre de joueurs : {infos.players}</h2>

      <Formik
        initialValues={{
          animator: infos.animator,
          context: infos.context,
          observations: infos.observations,
          setup: infos.gameObservations.setup,
          acceptanceOftheGame: infos.gameObservations.acceptanceOftheGame,
          attitudes: infos.gameObservations.attitudes,
          ludicAspects: infos.gameObservations.ludicAspects,
          exchanges: infos.gameObservations.exchanges,
          vaProblematics: infos.gameObservations.vaProblematics,
        }}
        validationSchema={generalInfosValidation}
        onSubmit={(values) => {
          onSubmit({ ...values });
        }}
      >
        <Form>
          <Input
            label='Animateur'
            name='animator'
            type='text'
            placeholder='animateur'
          />
          <TextArea
            label='Contexte de la partie'
            name='context'
            type='text'
            placeholder='Contexte de la partie'
          />
          <TextArea
            label='Observations'
            name='observations'
            type='text'
            placeholder='Observations'
          />
          <h2>Remarques générales</h2>
          <TextArea
            label='Mise en place'
            name='setup'
            type='text'
            placeholder='Mise en place'
          />
          <TextArea
            label='Rapport aux règles de jeu'
            name='acceptanceOftheGame'
            type='text'
            placeholder='Rapport aux règles de jeu'
          />
          <TextArea
            label='Attitude individuelle face au jeu'
            name='attitudes'
            type='text'
            placeholder='Attitude individuelle face au jeu'
          />
          <TextArea
            label='Aspect ludique de la partie'
            name='ludicAspects'
            type='text'
            placeholder='Aspect ludique de la partie'
          />
          <TextArea
            label='Richesse des échanges'
            name='exchanges'
            type='text'
            placeholder='Richesse des échanges'
          />
          <TextArea
            label='Problématiques du VA soulevées dans les débats'
            name='vaProblematics'
            type='text'
            placeholder='Problématiques du VA soulevées dans les débats'
          />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default GeneralInfosForm;

// const [infos, setInfos] = useState(props.infos);

// const onSubmit = (e) => {
//   e.preventDefault();
//   props.onSubmit({
//     ...infos,
//   });
// };
// const onAnimatorChange = (e) => {
//   const animator = e.target.value;
//   setInfos({ ...infos, animator });
// };
// const onContextChange = (e) => {
//   const context = e.target.value;
//   setInfos({ ...infos, context });
// };
// const onObservationsChange = (e) => {
//   const observations = e.target.value;
//   setInfos({ ...infos, observations });
// };
// const onSetupChange = (e) => {
//   const setup = e.target.value;
//   setInfos({
//     ...infos,
//     gameObservations: { ...infos.gameObservations, setup },
//   });
// };
// const onAcceptanceChange = (e) => {
//   const acceptanceOftheGame = e.target.value;
//   setInfos({
//     ...infos,
//     gameObservations: { ...infos.gameObservations, acceptanceOftheGame },
//   });
// };
// const onAttitudesChange = (e) => {
//   const attitudes = e.target.value;
//   setInfos({
//     ...infos,
//     gameObservations: { ...infos.gameObservations, attitudes },
//   });
// };
// const onLudicAspectsChange = (e) => {
//   const ludicAspects = e.target.value;
//   setInfos({
//     ...infos,
//     gameObservations: { ...infos.gameObservations, ludicAspects },
//   });
// };
// const onExchangesChange = (e) => {
//   const exchanges = e.target.value;
//   setInfos({
//     ...infos,
//     gameObservations: { ...infos.gameObservations, exchanges },
//   });
// };
// const onvaProblematicsChange = (e) => {
//   const vaProblematics = e.target.value;
//   setInfos({
//     ...infos,
//     gameObservations: { ...infos.gameObservations, vaProblematics },
//   });
// };

// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <h2>Date de la partie {infos.date}</h2>

//       <h2>Nombre de joueurs : {infos.players}</h2>

//       <label>Animateur</label>
//       <input
//         type='text'
//         placeholder='Animateur'
//         autoFocus
//         value={infos.animator}
//         onChange={onAnimatorChange}
//       ></input>

//       <br />

//       <label>Contexte de la partie</label>
//       <textarea value={infos.context} onChange={onContextChange}></textarea>

//       <br />

//       <label>Observations</label>
//       <textarea
//         value={infos.observations}
//         onChange={onObservationsChange}
//       ></textarea>

//       <br />

//       <h2>Remarques générales</h2>
//       <label>Mise en place</label>
//       <textarea
//         value={infos.gameObservations.setup}
//         onChange={onSetupChange}
//       ></textarea>

//       <br />

//       <label>Rapport aux règles de jeu</label>
//       <textarea
//         value={infos.gameObservations.acceptanceOftheGame}
//         onChange={onAcceptanceChange}
//       ></textarea>

//       <br />

//       <label>Attitude individuelle face au jeu</label>
//       <textarea
//         value={infos.gameObservations.attitudes}
//         onChange={onAttitudesChange}
//       ></textarea>

//       <br />

//       <label>Aspect ludique de la partie</label>
//       <textarea
//         value={infos.gameObservations.ludicAspects}
//         onChange={onLudicAspectsChange}
//       ></textarea>

//       <br />

//       <label>Richesse des échanges</label>
//       <textarea
//         value={infos.gameObservations.exchanges}
//         onChange={onExchangesChange}
//       ></textarea>

//       <br />

//       <label>Problématiques du VA soulevées dans les débats</label>
//       <textarea
//         value={infos.gameObservations.vaProblematics}
//         onChange={onvaProblematicsChange}
//       ></textarea>

//       <br />

//       <button>Valider</button>
//     </form>
//   </div>
// );
