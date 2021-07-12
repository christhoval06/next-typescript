import { keyframes as KF } from 'styled-components';

import theme from './theme';

const pulsate = KF`
  0% {box-shadow: ${theme.colors['primary-transparent-200']} 0px 1px 1px 1px;}
  50% {box-shadow: ${theme.colors['primary-transparent-500']} 0px 1px 20px 1px;}
  100% {box-shadow: ${theme.colors['primary-transparent-200']} 0px 1px 1px 1px;}
`;

const pulsateMax = KF`
  0% {box-shadow: ${theme.colors['primary-transparent-600']} 0px 1px 2px 1px;}
  50% {box-shadow: ${theme.colors['primary-transparent-1000']} 0px 1px 30px 2px;}
  100% {box-shadow: ${theme.colors['primary-transparent-600']} 0px 1px 2px 1px;}
`;

const keyframes = {
    pulsate,
    pulsateMax
}

export default keyframes;