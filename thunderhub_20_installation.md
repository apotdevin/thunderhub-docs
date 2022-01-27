---
layout: default
title: Installation
permalink: /installation/
nav_order: 3
---

# Installation

---

To run ThunderHub you first need to clone this repository.

```js
git clone https://github.com/apotdevin/thunderhub.git
```

The following commands will install all the necessary modules, build and run the app:

```javascript
npm install
npm run build
npm start
```

This will start the server on port 3000, so just go to `localhost:3000` to see the app running.

If you want to specify a different port (for example port `4000`) add this env variable:

```bash
PORT=4000
```

For **PRODUCTION**, if you want to reduce the space taken up by ThunderHub you can run `npm prune --production` after the build is completed.

---

## Updating

There are multiple ways to update ThunderHub to it's latest version.

_Commands have to be called inside the thunderhub repository folder._

**1. Script Shortcut**

```sh
npm run update
```

**2. Script**

```sh
sh ./scripts/updateToLatest.sh
```

**3. Step by Step**

```sh
git pull
npm install
npm run build
```

**Then you can start your server:**

```sh
npm run start
```

---

## Development

If you want to develop on ThunderHub and want hot reloading when you do changes, use the following commands:

```js
npm run dev
```

---

## Docker

ThunderHub also provides docker images for easier deployment. [Docker Hub](https://hub.docker.com/repository/docker/apotdevin/thunderhub)

To get ThunderHub running with docker follow these steps:

1. `docker pull apotdevin/thunderhub:v0.11.1` (Or the latest version you find)
2. `docker run --rm -it -p 3000:3000/tcp apotdevin/thunderhub:v0.5.5`

You can now go to `localhost:3000` to see your running instance of ThunderHub
