# 1. Table Content

- [1. Table Content](#1-table-content)
- [2. node-apps](#2-node-apps)
  - [2.1. Prerequisites](#21-prerequisites)
  - [2.2. Installation](#22-installation)
    - [2.2.1. web-server app](#221-web-server-app)
  - [2.3. Dependencies](#23-dependencies)
  - [2.4. Build](#24-build)
  - [2.5. Running unit tests](#25-running-unit-tests)
  - [2.6. Contributing](#26-contributing)
  - [2.7. Further Reading / Useful Links](#27-further-reading--useful-links)

# 2. node-apps

[![node](https://img.shields.io/badge/node-v14.16.1-yellow.svg)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-v6.14.12-red.svg)](https://www.npmjs.com/)

---

## 2.1. Prerequisites

You will need the following things properly installed on your computer.

- [Git](http://git-scm.com/)
- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## 2.2. Installation

### 2.2.1. web-server app

```sh
# Adding heroku key
heroku keys:add C:\Users/godxv/.ssh/{key_name}.pub

# moving to web-server project folder and run
# the app name should be unique across all heroku apps.
heroku create -a godxvincent-weatherapp

# If for some reason the project doesn't create the remote run this command
heroku git:remote -a godxvincent-weatherapp




```

## 2.3. Dependencies

Run `npm install` to install project dependencies.

## 2.4. Build

Run `npm run build` to build the project. The build artifact (a .zip file containing your package and its dependencies) will be stored in the `dist/` directory.

## 2.5. Running unit tests

Run `npm test` to execute the unit tests via [Mocha](https://mochajs.org/).

## 2.6. Contributing

If you find this repo useful here's how you can help:

## 2.7. Further Reading / Useful Links

- [NodeJs](https://nodejs.org/en/about/)
- [NPM](https://www.npmjs.com/)
- [Heroku](https://www.heroku.com/)
