# Choose the Image which has Node installed already
FROM node:lts-alpine

# make the 'client' folder the current working directory
WORKDIR /calculator

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install project dependencies
RUN npm install


CMD npm run serve

EXPOSE 8080
