import React, { useState } from 'react';
import Files from 'react-files';
import { PageLayout, Button } from '../../common';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setGeneralInfos } from '../../../store/actions/generalInfos';
import { setPlayers } from '../../../store/actions/players';
import { setTurns } from '../../../store/actions/turns';
import { setDebates } from '../../../store/actions/debates';
import { activateUpload } from '../../../store/actions/gameUpload';
export default (props) => {
  const dispatch = useDispatch();
  const [jsonFile, setJsonFile] = useState({
    stats: {},
    players: {},
    turns: {},
  });
  const [isUploaded, setUploaded] = useState(false);

  const fileReader = new FileReader();
  let error = false;

  fileReader.onload = (e) => {
    const result = JSON.parse(e.target.result);
    if (!verifyFile(result)) return alert('Fichier invalide!');
    setJsonFile({
      stats: result.stats,
      player: result.players,
      turns: result.turns,
      debates: result.debates,
    });
    setUploaded(true);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    if (!isUploaded) return alert('Veuillez ajouter un fichier!');
    dispatchToStore(jsonFile);
  };

  const dispatchToStore = (jsonFile) => {
    dispatch(setGeneralInfos(jsonFile.stats));
    dispatch(setPlayers(jsonFile.player));
    dispatch(setPlayers(jsonFile.player));
    dispatch(setTurns(jsonFile.turns));
    dispatch(setDebates(jsonFile.debates));
    dispatch(activateUpload());
    props.history.push('/upload/general-infos');
  };

  fileReader.onerror = (e) => {
    fileReader.abort();
  };

  const verifyFile = (result) => {
    if (
      result.players === undefined ||
      result.stats === undefined ||
      result.turns === undefined
    )
      return false;
    return true;
  };

  const errorHandler = (code = 0) => {
    let message = "Erreur d'import!";
    switch (code) {
      case 1:
        message = 'Type de fichier invalide!';
        break;
      case 2:
        message = 'Fichier trop large!';
        break;
      case 3:
        message = 'Fichier trop court!';
        break;
      case 4:
        message = 'Trop de fichiers importés à la fois!';
        break;
      default:
        message = "Erreur d'import!";
    }

    alert(message);
  };

  const FileUpload = styled(Files)`
    border: 2px dashed rgba(28, 110, 164, 0.19);
    border-radius: 17px;
    cursor: pointer;
    padding: 50px;
    margin-bottom: 20px;
  `;

  return (
    <PageLayout>
      <form onSubmit={uploadFile}>
        <FileUpload
          className='files-dropzone'
          onChange={(file) => {
            if (!error) fileReader.readAsText(file[0]);
          }}
          onError={(err) => {
            errorHandler(err.code);
            error = true;
          }}
          accepts={['.json']}
          multiple
          maxFiles={1}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          <h4>Glissez ou clickez pour transférer le fichier</h4>
        </FileUpload>
        <Button type='submit'>Transférer</Button>
      </form>
    </PageLayout>
  );
};
