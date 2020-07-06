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
      return data;
    })
  );
};

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
};

export const checkAuth = (user) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(
    `https://robospectif-api.herokuapp.com/users/${user}`,
    requestOptions
  ).then((response) =>
    response.json().then((data) => {
      return data;
    })
  );
};

//export const checkAuth = ()
