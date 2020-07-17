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
