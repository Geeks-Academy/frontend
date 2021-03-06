FROM node:16.0-buster-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY . /usr/src/app/
RUN npm i
RUN npm run build
ENTRYPOINT ["npm", "start"]
