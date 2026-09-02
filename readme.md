# Countdown Timer (demo application)

This repository contains a simple [React](https://react.dev/)-based countdown timer application built with [Vite](https://vite.dev/). The initial purpose of the application is to demonstrate how to use Git branches and merging in a practical exercise. Later, the same application is used as a basis for Docker related exercises.


## Running the app in development mode

To run the app in development mode, you need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. Alternatively, you can use [Docker](https://www.docker.com/) to run the app in a containerized environment.

```bash
# install dependencies from package.json
npm install

# start the development server
npm run dev
```

The `npm run dev` command will print the URL where you can access the app. Open your browser and navigate to that URL to verify that the initial state of the app is working.


## Building the app for production

To build the app for production, run the following command:

```bash
npm run build
```

This will create a `dist` folder containing the production-ready files. You can serve these files using any static file server or deploy them to a web hosting service. Note that the built app will not require a Node.js server to run, as it is a frontend-only application.


## Licenses

[React](https://github.com/facebook/react) is licensed under the MIT license: https://github.com/facebook/react/blob/main/LICENSE

[Vite](https://github.com/vitejs/vite) is licensed under the MIT license: https://github.com/vitejs/vite/blob/main/LICENSE

[Pico CSS Framework](https://github.com/picocss/pico) is licensed under the MIT license: https://github.com/picocss/pico/blob/main/LICENSE.md


## About this execise

This exercise has been created by Teemu Havulinna and it is licensed under a [Creative Commons BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/4.0/).

AI tools, including ChatGPT and GitHub copilot, have been used to implement the exercise.
