# Harmonode





scripts on package.json on dev as of monday, Aug 7

  "scripts": {
    "build": "tsc",
    "start": "NODE_ENV=development electron .",
    "dev": "run-p tsc-dev copy-images electron-dev webpack-dev",
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack-dev": "cross-env NODE_ENV=development webpack serve --no-open",
    "electron-dev": "nodemon --watch tsCompiled/backend --exec \"npx cross-env NODE_ENV=development electron .\"",
    "tsc-dev": "tsc --watch",
    "copy-images": "cp server/*.png tsCompiled/server"
  },

  new testing scripts local with electron-forge installed on the 7th

    "scripts": {
    "build": "tsc",
    "start": "electron-forge start",
    "dev": "run-p tsc-dev copy-images electron-dev webpack-dev",
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack-dev": "cross-env NODE_ENV=development webpack serve --no-open",
    "electron-dev": "nodemon --watch tsCompiled/backend --exec \"npx cross-env NODE_ENV=development electron .\"",
    "tsc-dev": "tsc --watch",
    "copy-images": "cp server/*.png tsCompiled/server",
    "package": "electron-forge package",
    "make": "electron-forge make"
  },

"start": "npm run dev & wait-on http://localhost:8080/ && electron-forge start",
  "dev": "run-p tsc-dev copy-images electron-dev webpack-dev",