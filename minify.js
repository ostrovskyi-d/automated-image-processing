// Only for node version >= 10
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  await imagemin(['{desktopEdited,printEdited}/*.{jpg,png}'], {
    destination: 'minified/',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

})();
