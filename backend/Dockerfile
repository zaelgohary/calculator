# parent image
FROM node:17-alpine


# Working dir
WORKDIR /app


# copy dependencies from the current working dir (relative path)
COPY . .


# install dependencies
RUN npm install


# specify a port for port mapping
EXPOSE 3000


# specify some commands to run once the image is installed
CMD ["node", "app.js"]