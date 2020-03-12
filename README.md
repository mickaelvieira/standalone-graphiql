A standalone [GraphiQL](https://github.com/graphql/graphiql) application

Demo: https://graphql.mickaelvieira.com/

## Available Scripts

The project was built with [create react app](https://github.com/facebook/create-react-app), the following scripts  therefore are available:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

## Docker

You can also run the app in a [Docker](https://www.docker.com/) container:

### `docker build --rm --tag graphiql .`

Builds the Docker image

### `docker run --tty -p 8080:8080 graphiql`

Run the app within the container.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
