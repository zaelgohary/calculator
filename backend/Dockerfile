# Choose the Image which has Node installed already
FROM node:lts-alpine

RUN npm i -g nodemon

# make the 'client' folder the current working directory
WORKDIR /backend

# copies package.json to cache the np latter on
COPY package.json .


# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install project dependencies
RUN npm install


CMD npm run dev

EXPOSE 4000


