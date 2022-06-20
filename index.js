"use strict";
function submitData(_name_, _email_) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((_response_) => {
      return _response_.json();
    })
    .then((_object_) => {
      document.body.innerHTML = _object_["id"];
    })
    .catch((_error_) => {
      document.body.innerHTML = _error_.message;
    });
};
submitData("Victor", "anonymous@gmail.com");