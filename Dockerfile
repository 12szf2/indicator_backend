FROM node:22.15.1-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install

ARG DATABASE_URL
ARG JWT_SECRET
ARG SESSION_SECRET

ENV NODE_ENV=production
ENV PORT=5300
ENV DATABASE_URL=$DATABASE_URL
ENV JWT_SECRET=$JWT_SECRET
ENV SESSION_SECRET=$SESSION_SECRET

COPY --chown=node:node . .

RUN npx prisma generate
RUN npm ci --only=production

EXPOSE 5300

CMD [ "node", "index.js" ]