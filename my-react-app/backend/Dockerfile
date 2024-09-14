
FROM node:20


WORKDIR /my-react-app/backend


COPY package*.json ./


RUN npm install

COPY . /my-react-app/backend/.

EXPOSE 5000

CMD ["npm", "start"]
