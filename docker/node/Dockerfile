##########################
## Builder Container
##########################
FROM node:17.6.0-alpine3.14 as builder

WORKDIR /sample-aspida

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:17.6.0-alpine3.14

WORKDIR /sample-aspida

COPY --from=builder /noname-client ./

CMD ["npm", "run", "start"]
