# stage 1
FROM node:16.13.2-alpine3.15 AS base 

WORKDIR /base 

COPY package.json ./

RUN npm install 

# stage 2

FROM gcr.io/distroless/nodejs:16

WORKDIR /app

COPY src ./src

COPY --from=base /base/node_modules ./node_modules

EXPOSE 8000

CMD ["src/server.js"]


