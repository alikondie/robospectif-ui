import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import { PageLayout, Button } from "../../common";
import { getUsers } from "../../../services/user";
const GamesPage = (props) => {
  const [isFetching, setFetching] = useState(false);
  const [users, setUsers] = useState([]);

  //dispatch(setGames(gamesFromApi.games));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data.users);
      } catch (error) {}

      setFetching(false);
    };
    fetchData();
  }, [isFetching]);
  return (
    <PageLayout>
      <h1>Utilisateurs</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <UserItem key={user._id} {...user} />)
      )}
      <Button type="submit">Plus de parties</Button>
    </PageLayout>
  );
};

export default GamesPage;
