FROM node:12.12.0-alpine

WORKDIR /usr/app

ENV WAITFORIT_VERSION="v2.4.1"
RUN wget -q -O /usr/local/bin/waitforit https://github.com/maxcnunes/waitforit/releases/download/$WAITFORIT_VERSION/waitforit-linux_amd64 \
    && chmod +x /usr/local/bin/waitforit

COPY package.json .
RUN npm install --quiet

COPY . .
