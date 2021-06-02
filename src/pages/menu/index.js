import Menu from "../../components/Menu/Menu";
import db from "../../utils/db";

const Home = (pageProps) => {
    return <Menu {...pageProps} />;
};

export async function getServerSideProps() {
    let menu;
    try {
      const ref = db.ref("menu");
      const snapshot = await ref.get();
      menu = JSON.parse(JSON.stringify(snapshot.val()));
    } catch (error) {
        console.log(error);
    }

    return {
        props: { menu: menu },
    };
}

export default Home;
