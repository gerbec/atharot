const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
    const link = document.createElement('link');
    link.href =
        'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap&subset=latin-ext';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const roboto = new FontFaceObserver('Lato');

    roboto.load().then(() => {
        document.documentElement.classList.add('lato');
    });
};

export default Fonts;
