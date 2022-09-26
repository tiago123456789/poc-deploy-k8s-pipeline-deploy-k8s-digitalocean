FROM node:18-alpine3.15

COPY package.json /app/

WORKDIR /app/

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "start"]