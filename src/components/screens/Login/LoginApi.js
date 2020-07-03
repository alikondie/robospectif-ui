export const startLogin = (userFrom) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userFrom),
  };

  return fetch(
    'https://robospectif-api.herokuapp.com/users/login',
    requestOptions
  ).then((response) =>
    response.json().then((data) => {
      console.log(data);
      return data;
    })
  );
};
