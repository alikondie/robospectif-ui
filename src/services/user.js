import { authHeader } from "./auth";

export const getUsers = async () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const response = await fetch(
    "https://robospectif-api.herokuapp.com/users?limit=10&sortBy=date:desc",
    requestOptions
  );
  const data = await response.json();

  //store.dispatch(setGames(data.games));
  return data;
};
