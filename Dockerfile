FROM node:16.13.2-alpine3.15 AS base 

WORKDIR /base 

COPY package.json ./

RUN npm install 

COPY src ./src

EXPOSE 8000

CMD ["npm", "start"]


