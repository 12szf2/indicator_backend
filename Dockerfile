FROM node:22.15.1-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm install

COPY --chown=node:node . .

# Set environment variables for runtime
ENV NODE_ENV=production
ENV PORT=5300

# Generate Prisma client (this doesn't need DATABASE_URL at build time)
RUN npx prisma generate
RUN npm ci --only=production

EXPOSE 5300

CMD [ "node", "index.js" ]