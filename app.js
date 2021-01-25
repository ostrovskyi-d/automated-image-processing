/* todo: для сортировки большого кол-ва файлов по папкам попробовать использовать алгоритм:
   делать акцент на сложность алгоритма и стараться не использовать вложенные циклы - они возводят сложность в степень
*/

const fs = require('fs');
const gm = require('gm');

function processImage(paths) {
  return new Promise((resolve, reject) => {

    fs.readdir(paths.imagesPath, function (err, items) {
      let lastItem = Number(items.length - 1);

      if (err) {
        console.error(err);
        reject(() => '321');
      } else {
        for (let i = 0; i <= items.length; i++) {
          if (i > lastItem) resolve(true)
          else if (items[i].indexOf('_UI_') > -1) {
            processDesktopImage(items[i], paths);
          } else if (items[i].indexOf('_Print_') > -1) {
            processPrintImage(items[i], paths);
          }
        }

      }
    })
    console.log(1)
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
      .quality(100)
      // write file to dir (in this case ./desktop-edited/[Lang]_[Tutorial #]_UI_[Model]_Step[#].jpg)
      .write(desktopOutput + image, function (err) {
        if (err) {
          console.error(err);
        }
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
      .dither(true)
      .antialias(true)
      // .out('-define')
      // .out('PNG:24:')
      // write file to dir (in this case ./desktop-edited/[Lang]_[Tutorial #]_Print_[Model]_Step[#].png)
      .write(printOutput + image, function (err) {
        if (err) {
          console.error(err);
        }
      })

}


async function start(config) {
  const {paths} = config;

  await processImage(paths);
}

module.exports = start;
