FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

# add app
COPY . .

EXPOSE 80

# start app
CMD ["npm", "start"]