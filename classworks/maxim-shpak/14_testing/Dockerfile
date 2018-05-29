FROM node:8.2

EXPOSE 3001
COPY ["./package.json", "./package-lock.json", "/app/"]
WORKDIR /app
RUN npm i --quiet
COPY ./src /app/src

CMD npm start
