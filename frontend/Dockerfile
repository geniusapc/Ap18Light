FROM node:18-alpine
WORKDIR /usr/app

COPY package*.json .
RUN npm i 
COPY . .
RUN npm run build
RUN npm i -g serve
CMD [ "serve", "-s", "out", "-p", "3000" ]
EXPOSE 3000