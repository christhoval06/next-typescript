import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import BasicLayout from '@/layouts/Basic';
import { DocumentContext } from 'next/document';

const SectionStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    position: relative;
    color: white;
    font-size: 12em;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%auto;
    object-fit: cover;
  }
`;

/**
 * https://www.youtube.com/watch?v=dqzZ0SbSgHY
 */
export default function Parallax() {
  useEffect(() => {
    document.addEventListener('mousemove', parallax);
  }, [parallax]);

  function parallax(e: MouseEvent): void {
    this.querySelectorAll(`[data-speed]`).forEach((element: HTMLImageElement | HTMLHeadingElement) => {
      const speed = Number(element.getAttribute('data-speed'));

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  return (
    <BasicLayout>
      <Head>
        <title>Parallax</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SectionStyled>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((i: number) => (
          <img
            key={`img_${i}`}
            src={`/images/parallax/${i}.png`}
            alt={`${i}.png`}
            data-speed={(Math.floor(Math.random() * Math.floor(2)) ? -1 : 1) * (5 + Math.floor(Math.random() * Math.floor(10)))}
          />
        ))}
        <h2 data-speed='2'>Parallax</h2>
      </SectionStyled>
    </BasicLayout>
  );
}
