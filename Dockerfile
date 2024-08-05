# Build stage
FROM node:14 AS build
WORKDIR /app

COPY package.json ./

RUN npm i typescript

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
