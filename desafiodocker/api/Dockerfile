FROM node:16-slim
WORKDIR /home/node/app

COPY . .
COPY src/index.js .
RUN npm install


EXPOSE 3000
CMD npm start