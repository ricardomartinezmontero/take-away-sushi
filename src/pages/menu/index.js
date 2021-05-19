import Menu from "../../containers/Menu/Menu";
import { setMenu } from '../../store/menu';
import { initializeStore } from '../../store';
import db from '../../utils/db';

export async function getStaticProps(context) {

  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const ref = db.ref("menu");
  const snapshot = await ref.get();
  const menu = JSON.parse(JSON.stringify(snapshot.val()));

  dispatch(setMenu(menu));

  return {
    // Set the timeout for generating to 1 second
    // This timeout could be longer depending on how often data changes
    revalidate: 10,
    props: {initialReduxState: reduxStore.getState()}
  };
};

const Home = () => {
  return <Menu />;
};

export default Home;
