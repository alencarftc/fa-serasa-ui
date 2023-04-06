FROM node:16.14.0-alpine3.14 AS base

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

RUN npm run build


FROM nginx:1.21-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]