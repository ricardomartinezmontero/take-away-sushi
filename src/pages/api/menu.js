import db from '../../utils/db';

const handler = async (req, res) => {
    try {
        const ref = db.ref("menu");
        const snapshot = await ref.get();
        res.status(200).json(snapshot.val());
    } catch (error) {
        res.status(500).json(error);
    }
    
}

export default handler;