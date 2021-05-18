import db from '../../utils/db'

const handler = async (req, res) => {
    const ref = db.ref("menu");
    const snapshot = await ref.get();
    res.status(200).json(snapshot.val());
}

export default handler;