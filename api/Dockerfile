# Use a versão oficial do Node.js como imagem base
FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000

CMD ["node", "index.js"]