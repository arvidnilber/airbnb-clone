FROM node
WORKDIR  /airbnb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN npm i -g yarn
RUN yarn install --production

COPY ./packages/server/dist .packages/server/
COPY ./packages/common/dist .packages/server/
COPY ./packages/server/.env.prod ./packages/server/
COPY ./ormconfig.json .