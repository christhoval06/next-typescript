import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const List = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async function bootAsync() {
      const res = await axios.get('/api/entries');
      setEntries(res.data.entriesData);
    })();
  }, []);

  return (
    <div>
      <h1>Entries</h1>
      {entries.map(entry => (
        <>
          <Link href={`/admin/edit/${entry.id}`}>
            <a>{entry.title}</a>
          </Link>
          <br />
        </>
      ))}
    </div>
  );
};

export default List;
