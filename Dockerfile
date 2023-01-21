FROM node:16 as base

WORKDIR /usr/src/app
COPY package*.json ./

FROM base as test
RUN npm install
COPY . .
RUN npm test

FROM base as dev
RUN npm install
COPY . .

EXPOSE 8080
CMD ["node", "server.js"]