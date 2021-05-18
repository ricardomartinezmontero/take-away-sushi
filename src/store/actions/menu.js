import { fetchMenuStart, setMenu } from "../menu";

export const fetchMenu = () => {
  return async (dispatch) => {
    dispatch(fetchMenuStart());
    const respose = await fetch ('api/menu');
    const menu = await respose.json();
    dispatch(setMenu(menu));
  };
};
