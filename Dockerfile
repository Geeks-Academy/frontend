FROM node:14
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
COPY . /usr/src/app/
RUN npm i
RUN npm run build
ENTRYPOINT ["npm", "start"]