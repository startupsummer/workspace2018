FROM node

RUN mkdir -p /src/app
COPY . /src/app
WORKDIR /src/app
RUN npm install
EXPOSE 3000

CMD node /src/app/app.js
