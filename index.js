const app = require('./app');

const config = {
  paths: {
    imagesPath: __dirname + '/images/',

    printOutput: __dirname + "/printEdited/",
    desktopOutput: __dirname + "/desktopEdited/"
  },

}


app(config);
