import { authHeader } from "./auth";
//import { store } from "../../src/App";

//import { setGames } from "../store/actions/games";
export const getGames = async () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const response = await fetch(
    "https://robospectif-api.herokuapp.com/games?limit=3&sortBy=date:desc",
    requestOptions
  );
  const data = await response.json();

  //store.dispatch(setGames(data.games));
  return data;
};

export const getStats = async (gameId) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const response = await fetch(
    "https://robospectif-api.herokuapp.com/games/" + gameId,
    requestOptions
  );

  const data = await response.json();
  return data.game;
};

export const getPlayers = async (gameId) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const response = await fetch(
    "https://robospectif-api.herokuapp.com/players?game=" + gameId,
    requestOptions
  );

  const data = await response.json();

  return data.players;
};

export const getTurns = async (gameId) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const response = await fetch(
    "https://robospectif-api.herokuapp.com/turns?game=" + gameId,
    requestOptions
  );

  const data = await response.json();

  return data.turns;
};

export const getDebates = async (turnId, debates) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  try {
    const response = await fetch(
      "https://robospectif-api.herokuapp.com/debates?turn=" + turnId,
      requestOptions
    );

    const data = await response.json();

    data.debates.forEach((debate) => {
      debates.push(debate);
    });
  } catch (error) {
    console.log(error);
  }
};
