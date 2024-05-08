FROM node:18-alpine

LABEL maintainer="LifeScape Project Website"
LABEL version="1.0"
LABEL description="Docker Image for LifeScape Project Website"

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY . .

RUN npm install --production
RUN npm run build

CMD ["npm","run"]



