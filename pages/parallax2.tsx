import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import BasicLayout from '@/layouts/Basic';

const SectionStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 25;
  }

  h1 {
    position: absolute;
    z-index: 30;
    line-height: 4rem;
    top: calc(50% - 2rem);
    width: 100%;
    text-align: center;
    font-size: 5rem;
    font-weight: 600;
    color: #fff;
  }
`;

const Mountain1 = styled.img`
  position: absolute;
  bottom: -59px;
  width: 1500px;
  right: 0;
  z-index: 19;
`;

const Person = styled.img`
  position: absolute;
  width: 650px;
  bottom: -100px;
  left: -70px;
  z-index: 20;
`;

const Mountain2 = styled.img`
  position: absolute;
  width: 1349px;
  bottom: -125px;
  left: 0;
  z-index: 18;
`;

const Mountain3 = styled.img`
  position: absolute;
  width: 920px;
  bottom: 186px;
  right: 0;
  z-index: 17;
`;

const Sky = styled.img`
  position: absolute;
  width: 2100px;
  /* bottom: 250px; */
  right: 0;
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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <title>Parallax Scrolling Effect</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SectionStyled>
        <h1 data-speed='2'>Discover.</h1>

        <Person src='/images/mountain/person.png' data-translate data-speed='-0.5' alt='' />
        <Mountain1 src='/images/mountain/mountain1.png' data-translate data-speed='-0.6' alt='' />
        <Mountain2 src='/images/mountain/mountain2.png' data-speed='-0.2' alt='' />
        <Mountain3 src='/images/mountain/mountain3.png' data-speed='0.7' alt='' />
        <Sky src='/images/mountain/sky.png' data-speed='0.9' alt='' />
      </SectionStyled>
    </BasicLayout>
  );
}
