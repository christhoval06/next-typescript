import Link from 'next/link';

import db from '../../utils/db';

const Posts = props => {
  const { entriesData } = props;
  return (
    <div>
      <h1>Posts</h1>
      {entriesData.map(entry => (
        <>
          <Link href={`/posts/${entry.slug}`}>
            <a>{entry.title}</a>
          </Link>
          <br />
        </>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('entries').orderBy('created', 'desc').get();
  const entriesData = entries.docs.map(entry => ({
    ...entry.data(),
  }));

  return {
    props: { entriesData },
    revalidate: 10,
  };
};

export default Posts;
