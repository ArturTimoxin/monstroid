export const API = (method, url, body, isFile = false) => {
  let options = {
    method: method,
    body: !isFile ? JSON.stringify(body) : body,
  };
  if (!isFile) {
    options = {
      ...options,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }

  return fetch(`http://localhost:3001${url}`, options).then(res => {
    return res.json();
  });
};
