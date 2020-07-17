import React, { useState, useEffect } from "react";
import GameItem from "./GameItem";
import { PageLayout, Button } from "../../common";
import { getGames } from "../../../services/gameFetch";
const GamesPage = (props) => {
  const [isFetching, setFetching] = useState(false);
  const [games, setGames] = useState([]);

  //dispatch(setGames(gamesFromApi.games));

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
        games.map((game) => <GameItem key={game._id} {...game} />)
      )}
      <Button type="submit">Plus de parties</Button>
    </PageLayout>
  );
};

export default GamesPage;
