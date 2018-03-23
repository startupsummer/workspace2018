FROM node

RUN mkdir -p /usr/src/deploy-app

COPY . /usr/src/deploy-app/

WORKDIR /usr/src/deploy-app

RUN npm install

EXPOSE 3000

CMD node app.js
