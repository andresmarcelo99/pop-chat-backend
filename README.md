# PopChat Backend

# Environment vars

This project uses the following environment variables:

| Name | Description                                  | Default Value |
| ---- | -------------------------------------------- | ------------- |
| PORT | port in which project is going to bes served | "eg:8080"     |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 8.0.0

# Getting started

- Clone the repository

```
git clone  https://github.com/andresmarcelo99/pop-chat-backend.git
```

- Install dependencies

```
cd pop-chat-backend
npm install
```

- Build and run the project

```
npm start
```

Navigate to `http://localhost:8080`

## Getting TypeScript

Add Typescript to project `npm`.

```
npm install -D typescript
```

## Project Structure

The folder structure of this app is explained below:

| Name                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
|                     |
| **node_modules**    | Contains all npm dependencies                                 |
| **src**             | Contains source code that will be compiled to the dist dir    |
| **src/controllers** | Controllers define functions to serve various express routes. |

| **src/middlewares** | Express middlewares which process the incoming requests before handling them down to the routes |
| **src/routes** | Contain all express routes, separated by module/area of application |
| **src/models** | Models define schemas that will be used in storing and retrieving data from Application database |
| **src**/server.ts | Entry point to express app |
| package.json | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) | tsconfig.json | Config settings for compiling source code only written in TypeScript |
| tslint.json | Config settings for TSLint code style checking |

## Building the project

### Configuring TypeScript compilation

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true
  },

  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts", "test", "node_modules"]
}
```

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script   | Description                                                                      |
| ------------ | -------------------------------------------------------------------------------- |
| `start`      | Runs full build and runs node on dist/server.js. Can be invoked with `npm start` |
| `serve`      | Runs existing build of the project                                               |
| `build`      | Runs `npm clean` and then runs `build-ts` to compile typescript code             |
| `watch-node` | Runs project with nodemen for hot-reload                                         |
| `test`       | Runs test suite                                                                  |
