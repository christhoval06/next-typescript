import Head from 'next/head';

import BasicLayout from '@/layouts/Basic';
import SectionTitle from '@/components/molecules/SectionTitle';
import Service from '@/components/molecules/Service';
import Testimonial from '@/components/molecules/Testimonial';
import Blog from '@/components/molecules/Blog';
import Link from '@/components/molecules/Link';

/**
 * https://preview.themeforest.net/item/chester-react-personal-portfolio-template/full_screen_preview/24952954?_ga=2.225250140.770554104.1609720141-263687130.1605886971
 */
export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h4>
        <Link href='https://envoy.com/products/protect-employee-safety/'>Envoy Protect</Link>
      </h4>
      <SectionTitle>About Me</SectionTitle>
      <SectionTitle>Services</SectionTitle>
      <SectionTitle>Reviews</SectionTitle>
      <Service title='Web Desing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</Service>
      <Testimonial author='Joe Doe' company='Web Developer, Abc Company'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.
      </Testimonial>
      <Blog
        image='https://tf-react-chester.now.sh/images/blog-image-1.jpg'
        url='/blogs/blog-details/1/markdown-html-supported-blog'
        day={20}
        month='Feb'
      >
        Markdown &amp; Html supported blog.
      </Blog>
    </BasicLayout>
  );
}
