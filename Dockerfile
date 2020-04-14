# build
FROM node:13.13.0-alpine3.10 as build

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

EXPOSE 8080

CMD ["node_modules/.bin/serve", "-s", "build", "-l", "8080"]
