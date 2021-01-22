const fs = require('fs');
const gm = require('gm');

const paths = {
  desktop: __dirname + "/desktop/",
  print: __dirname + "/print/",

  printEdited: __dirname + "/print-edited/",
  desktopEdited: __dirname + "/desktop-edited/",
};

function handlePaths({desktop, print}) {
  processDesktopImage(desktop + '', '');
  processPrintImage(print + '', '')
}

function processDesktopImage(sourceDir, outputDir) {
  fs.readdir(sourceDir, function (err, items) {

    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }

  });
}

function processPrintImage(sourceDir, outputDir) {
  fs.readdir(sourceDir, function (err, items) {

    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
    }

  });
}

handlePaths(paths);
