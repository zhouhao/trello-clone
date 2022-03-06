import { AppState } from "./state/AppStateReducer";
export const save = (payload: AppState) => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("Error while saving the state.");
    }
  });
};

export const load = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
    (resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Error while loading the state.");
      }
    }
  );
};
