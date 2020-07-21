// here we'll be fetching from the api
export const mostUsedDimensions = {
  datasets: [
    {
      label: "Les dimensions les plus utilisés",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
      data: [5, 12, 10, 20],
    },
  ],
  labels: ["Petite", "Grande", "Très petites", "Autres"],
};

export const mostUsedCharacters = {
  datasets: [
    {
      label: "Les personnages les plus choisis",
      backgroundColor: ["#34ebd5", "#47de4a", "#de4790", "#f5ea25"],
      data: [6, 8, 20, 10],
    },
  ],
  labels: ["Jean", "Elodie", "Etienne", "Autres"],
};

export const debateFrequency = {
  labels: ["4", "5", "6"],
  datasets: [
    {
      label: "Fréquence des débats",
      data: [4, 8, 14],
      backgroundColor: ["#4f3f96"],
      borderWidth: 4,
    },
  ],
};
