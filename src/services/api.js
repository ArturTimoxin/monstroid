export const API = (method, url, body) => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return fetch(`http://localhost:3001${url}`, options).then(res => {
    console.log(res);
    return res.json();
  });
};
