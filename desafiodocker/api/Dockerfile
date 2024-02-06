# Definicao da imagem do node.js para ser usado no Docker-Compose
FROM node:16-slim
WORKDIR /home/node/app

COPY package.json .
COPY src/index.js .
RUN npm install


EXPOSE 3000
CMD npm start