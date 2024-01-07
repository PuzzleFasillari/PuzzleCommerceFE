FROM node:latest

WORKDIR /puzzle/app

COPY package.json /puzzle/app

RUN npm install

RUN npm run build

COPY . /puzzle/app

EXPOSE 3000

CMD ["npm", "start"]
