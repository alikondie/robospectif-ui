import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pie, Line } from "react-chartjs-2";
import styled from "styled-components";
import { PageLayout } from "../../common";

import {
  mostUsedDimensions,
  mostUsedCharacters,
  debateFrequency,
} from "./Charts";

const Chart = styled.div`
  height: 45%;
  width: 45%;
  margin: 10px 5px;
  border: 1px solid white;
  padding: 10px;
`;

const Charts = styled.div`
  display: flex;
  margin: 5%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export default () => {
  const user = useSelector((state) => state.auth.user);
  const [dimensions, setDimensions] = useState({});
  const [chars, setChars] = useState({});
  const [debates, setDebates] = useState({});
  useEffect(() => {
    setDimensions(mostUsedDimensions);
    setChars(mostUsedCharacters);
    setDebates(debateFrequency);
  });
  return (
    <PageLayout>
      <h1>Bonjour {user.firstName} !</h1>
      <h3>Voici les dernières statistiques </h3>
      <Charts>
        <Chart>
          <Pie
            data={dimensions}
            options={{
              responsive: true,
              title: {
                display: true,
                text: "Les dimensions les plus utilisés",
              },
            }}
          />
        </Chart>
        <Chart>
          <Pie
            data={chars}
            options={{
              responsive: true,
              title: {
                display: true,
                text: "Les personnages les plus choisis",
              },
            }}
          />
        </Chart>
        <Chart>
          <Line
            data={debates}
            options={{
              responsive: true,
              title: {
                display: true,
                text: "Fréquence de débats par rapport au nombre de joueurs",
              },
            }}
          />
        </Chart>
      </Charts>
    </PageLayout>
  );
};
