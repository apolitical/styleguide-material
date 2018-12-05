FROM node:10-alpine

LABEL maintainer="engineering@apolitical.co"

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN apk add --no-cache --virtual .gyp \
    git \
    make \
    g++ \
 && npm install \
 && apk del .gyp
