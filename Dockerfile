# Choose the Image which has Node installed already
FROM node:lts-alpine

# make the 'client' folder the current working directory
WORKDIR /calculator

# copies package.json to cache the np latter on
COPY package.json .

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .


# giving permission to start ssh
RUN chmod +x start.sh

# start ssh
RUN apk add openssh-server && ssh-keygen -A

# install project dependencies
RUN npm install


CMD /calculator/start.sh

EXPOSE 8080
