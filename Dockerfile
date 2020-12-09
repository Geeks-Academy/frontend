FROM node:14-alpine
COPY . /
RUN npm install --production
RUN npm install serve -g
RUN npm run build
ENTRYPOINT ["serve", "-s", "build"]