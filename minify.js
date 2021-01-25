// Only for node version >= 10
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  await imagemin(['desktopEdited/*.{jpg,png}'], {
    destination: 'desktopTiny/',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  await imagemin(['printEdited/*.{jpg,png}'], {
    destination: 'printTiny/',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

})();
