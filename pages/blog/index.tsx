import Head from 'next/head';

import BasicLayout from '@/layouts/Basic';
import Blog from '@/components/organisms/Blog';

/**
 * https://storyhub-personal-lite.redq.now.sh
 */
export default function BlogEntries() {
  return (
    <BasicLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>Blog Entries</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <Blog
          day={27}
          month='May'
          url='/blog/a-peek-into/'
          title="A Peek Into Scandinavia's Origin"
          tags={['react', 'js', 'markdown']}
          image='https://storyhub-personal-lite.redq.now.sh/static/c192e547baa4020498d0c858f4095837/c5f1a/preview.jpg'
        >
          Steve Holt! No, I did not kill Kitty. However, I am going to oblige and answer the nice officer’s questions because I am an honest
          man with no secrets to hide. I don’t criticize you! And if you’re worried about criticism, sometimes a diet is the best defense.
        </Blog>

        <Blog
          day={26}
          month='May'
          url='/blog/a-peek-into/'
          title='React-Live &amp; Code example'
          tags={['react', 'js', 'code']}
          image='https://storyhub-personal-lite.redq.now.sh/static/3e847a9fc7f6032d2a3276bda0f5f6d2/40917/preview.jpg'
        >
          There are a few cases where it might make sense to modify the “back” button’s behavior. For example, if you build a page where you
          choose something, then see an “are you sure?” page to make sure it’s what you really wanted, and finally see a confirmation page,
          it may be desirable to skip the “are…
        </Blog>
        <Blog
          day={26}
          month='May'
          url='/blog/a-peek-into/'
          title='Code blocks are very useful for developers'
          tags={['react', 'js']}
          image='https://storyhub-personal-lite.redq.now.sh/static/f7c4f09ffd2499f59c9be482ccab97dc/3c0b6/preview.jpg'
        >
          Steve Holt! No, I did not kill Kitty. However, I am going to oblige and answer the nice officer’s questions because I am an honest
          man with no secrets to hide. I don’t criticize you! And if you’re worried about criticism, sometimes a diet is the best defense.
          Army had half a day. Marry me. We just…
        </Blog>
      </section>
    </BasicLayout>
  );
}
