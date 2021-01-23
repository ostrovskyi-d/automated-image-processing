/* todo: для сортировки большого кол-ва файлов по папкам попробовать использовать алгоритм:
   делать акцент на сложность алгоритма и стараться не использовать вложенные циклы - они возводят сложность в степень
*/

const fs = require('fs');
const gm = require('gm');

// Only for node version >= 10
/*
 const imagemin = require('imagemin');
 const imageminPngquant = require('imagemin-pngquant');
*/

const paths = {
  imagesPath: __dirname + '/images/',

  printOutput: __dirname + "./printEdited/",
  desktopOutput: __dirname + "./desktopEdited/"
};

function processImage(paths) {

  fs.readdir(paths.imagesPath, function (err, items) {
    if (err) {
      console.log(err)
      return;
    } else {

      for (let i = 0; i < items.length; i++) {

        if (items[i].indexOf('_UI_') > -1) {
          processDesktopImage(items[i], paths);

        } else if (items[i].indexOf('_Print_') > -1) {
          processPrintImage(items[i], paths);

        }
      }

    }
  })
}

function processDesktopImage(image, paths) {
  const {imagesPath, desktopOutput} = paths;

  gm(imagesPath + image)
      // unnecessary pipe - get info about current processing image - items[i]
      // .identify(function (err, value) {
      //   if (err) console.log(err);
      // })

      // move the starting point to the center of the image.
      .gravity('Center')

      // set image size - with: 200, height: 348
      .resize(478, 1010, "!")

      // write file to dir (in this case ./desktop-edited/[Lang]_[Tutorial #]_UI_[Model]_Step[#].jpg)
      .write(desktopOutput + image, function (err) {
        if (err) console.log(err)
      })

}


function processPrintImage(image, paths) {
  const {imagesPath, printOutput} = paths;

  gm(imagesPath + image)
      // unnecessary pipe - get info about current processing image - items[i]
      // .identify(function (err, value) {
      //   if (err) console.log(err);
      // })

      // move the starting point to the center of the image.
      .gravity('Center')

      // set background transparent for png
      .background('transparent')

      // set canvas size - width: 1550, height: 2700
      .extent(1550, 2700)

      // set image size - with: 200, height: 348
      .resize(200, 348, "!")

      // write file to dir (in this case ./desktop-edited/[Lang]_[Tutorial #]_Print_[Model]_Step[#].png)
      .write(printOutput + image, function (err) {
        if (err) console.log(err)
      })
}


function start() {
  processImage(paths)
}

start();
