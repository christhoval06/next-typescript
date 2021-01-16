import { NextApiRequest, NextApiResponse } from 'next';

import db from '../../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
      await db
        .collection('entries')
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString(),
        });
    } else if (req.method === 'GET') {
      const doc = await db.collection('entries').doc(id).get();
      res.status(200).json(doc.data());
    } else if (req.method === 'DELETE') {
      await db.collection('entries').doc(id).delete();
    }
    console.log('OK');
    res.status(200).end();
  } catch (_) {
    res.status(400).end();
  }
};
