import { fetchMenuStart, setMenu } from "../menu";

import { menu } from "../../shared/utils";

export const fetchMenu = () => {
  console.log("[Actions menu.js] Loading menu ...");
  return (dispatch) => {
    dispatch(fetchMenuStart());
    setTimeout(() => {
        dispatch(setMenu(menu));
    }, 3000);
  };
};
