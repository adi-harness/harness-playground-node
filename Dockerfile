FROM node:16 as base

WORKDIR /usr/src/app

COPY package*.json ./

FROM base as test
RUN npm install
COPY . .
CMD ["npm", "test"]

FROM base as build
RUN npm install
COPY . .
CMD ["node", "server.js"]