# Stage - Build Dev Packages
FROM node:20.5.1-alpine As development

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn ci --only=development
COPY . .
RUN yarn build

FROM node:20.5.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn ci --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["yarn", "start"]