# stage1 as builder
FROM node:14-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .

# Build the project and copy the files
RUN npm run start


# FROM nginx:alpine
# #!/bin/sh
# COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

#  ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=builder /react-ui/build /usr/share/nginx/html

# EXPOSE 3000 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
