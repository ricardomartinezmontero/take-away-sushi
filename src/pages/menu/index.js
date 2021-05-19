import Menu from "../../containers/Menu/Menu";
import { setMenu } from "../../store/menu";
import { initializeStore } from "../../store";
import db from "../../utils/db";

export async function getServerSideProps() {
    const reduxStore = initializeStore();
    try {
      const { dispatch } = reduxStore;
      const ref = db.ref("menu");
      const snapshot = await ref.get();
      const menu = JSON.parse(JSON.stringify(snapshot.val()));
      dispatch(setMenu(menu));
    } catch (error) {
        console.log(error);
    }

    return {
        props: { initialReduxState: reduxStore.getState() },
    };
}

const Home = () => {
    return <Menu />;
};

export default Home;
