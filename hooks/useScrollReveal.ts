// const sr = (function () {
//     const isSSR = typeof window === 'undefined';
//     if (isSSR) {
//         return null;
//     }
//     const ScrollReveal = require('scrollreveal');
//     return ScrollReveal();
// })()
// console.log({sr});

// export default sr;


export default function useScrollReveal() {
    return require('scrollreveal').default();
}