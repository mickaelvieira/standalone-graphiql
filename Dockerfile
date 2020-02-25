# build
FROM node:13.8.0-alpine3.10 as build

ENV NODE_ENV production

WORKDIR /srv

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY public public
COPY src src

RUN yarn build

# runtime
FROM gcr.io/distroless/nodejs

WORKDIR /srv

COPY --from=build /srv /srv

ENV PORT=8080

EXPOSE 8080

CMD ["node_modules/.bin/react-scripts", "start"]
