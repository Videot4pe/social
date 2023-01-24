# develop stage
FROM node:16.6.0-alpine as base

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app

COPY package*.json /app/

RUN yarn global add @quasar/cli

COPY ./ /app

RUN yarn
RUN quasar build

# production stage
FROM nginx:alpine as production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=base /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
