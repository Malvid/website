# Website

The website of [Malvid](https://malvid.electerious.com) has been developed using Malvid itself. The project structure is based on a HTML5 Boilerplate called [Skeleton-Components](https://github.com/electerious/Skeleton-Components).

## Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [How to use](#how-to-use)
	- [Develop](#develop)
	- [Compile](#compile)
	- [UI](#ui)
- [Docker](#docker)
- [Troubleshooting](#troubleshooting)

## Requirements

The website dependents on …

- [Node.js](https://nodejs.org/en/) (v8.5.0 or newer)
- [yarn](https://yarnpkg.com/en/)

Make sure to install and update all dependencies before you fork and setup the website.

## Setup

Install all required dependencies with [yarn](https://yarnpkg.com/en/) before you start developing.

```sh
yarn install
```

## How to use

### Develop

Start developing using the following command. You browser will open, wait for code-changes and live-reload instantly when you update your files. JS, SASS and Nunjucks will be compiled on-the-fly.

```sh
yarn start
```

### Compile

Ready for prime time? Export all files, compiled and prepared for your audience. Simple upload the final `dist/` folder to your server and relax. Take a seat and enjoy a delicious burger from your favorite restaurant.

```sh
yarn run compile
```

### UI

This project includes [Malvid](https://github.com/Malvid/Malvid) to help you build and document web components. Start the [development server](#develop) and open `/index.html` in your browser. The path to the UI can be changed in `rosidfile.js`.

## Docker

The included Dockerfile lets you build an image which compiles your site. In this case only Docker needs to be installed on the system. No other dependencies are required.

### Build

Build an image from the Dockerfile. This has to be done each time you have modified the project. The new source will be copied into the image.

```sh
docker build -t malvid/website .
```

### Compile

Start a container to compile your site. The container will exit automatically when all tasks have been finished. The mounted volume will contain all compiled files.

```sh
docker run --rm -tv "$(pwd)/dist:/dist" malvid/website
```

## Troubleshooting

- Install the latest version of [Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/en/)
- Delete `node_modules` and [reinstall all dependencies](#setup)
- Check if all dependencies are up-to-date
- Try to compile the site using the included [Dockerfile](#docker)