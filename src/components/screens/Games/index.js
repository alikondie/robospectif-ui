import React, { useState, useEffect } from "react";
// import GameItem from "./GameItem";
// import { useDispatch } from "react-redux";
import { PageLayout, Button, Item } from "../../common";
// import { setGeneralInfos } from "../../../store/actions/generalInfos";
// import { setPlayers } from "../../../store/actions/players";
// import { setTurns } from "../../../store/actions/turns";
// import { setDebates } from "../../../store/actions/debates";
// import { activateUpload } from "../../../store/actions/gameUpload";
import {
  getGames,
  // getStats,
  // getPlayers,
  // getTurns,
  // getDebates,
} from "../../../services/gameFetch";
// import { statsToStore } from "../../../helpers/ApiToStore";
const GamesPage = (props) => {
  const [isFetching, setFetching] = useState(false);
  const [games, setGames] = useState([]);

  // const dispatch = useDispatch();

  const loadGame = async (gameId) => {
    // const game = await getStats(gameId);
    // const players = await getPlayers(gameId);
    // const turns = await getTurns(gameId);
    // let debates = [];
    // await Promise.all(
    //   turns.map(async (turn) => {
    //     await getDebates(turn._id, debates);
    //   })
    // );
    // dispatch(setGeneralInfos(statsToStore(game)));
    // dispatch(activateUpload());
    props.history.push("/upload/general-infos");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGames();
        setGames(data.games);
      } catch (error) {}

      setFetching(false);
    };
    fetchData();
  }, [isFetching]);
  return (
    <PageLayout>
      <h1>Parties</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        games.map((game) => (
          <Item disabled onClick={() => loadGame(game._id)} key={game._id}>
            <p>Partie crée au {game.createdAt}</p>
            <p>par {game.creator} </p>
          </Item>
        ))
      )}
      <Button type="submit">Plus de parties</Button>
    </PageLayout>
  );
};

export default GamesPage;
