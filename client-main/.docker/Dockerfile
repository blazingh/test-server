FROM node:18-alpine

WORKDIR /var/www/client

COPY package.json *.lock ./

RUN yarn install --frozen-lockfile

CMD ["yarn", "dev"]