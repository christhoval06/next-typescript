import { NextApiRequest, NextApiResponse } from 'next';

import db from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      const entries = await db.collection('entries').orderBy('created', 'desc').get();
      const entriesData = entries.docs.map(entry => ({ id: entry.id, ...entry.data() }));

      res.status(200).json({ entriesData });
      return;
    }
    res.status(200).end();
  } catch (_) {
    console.log(_);
    res.status(400).end();
  }
};
