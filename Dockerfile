FROM node:6.3
EXPOSE 80

RUN apt-get update && apt-get install -y nano

LABEL maintainer="lmssrinivas@gmail.com"
MAINTAINER Mani shankar srinivas lingolu <lmssrinivas@gmail.com>

RUN mkdir -p /usr/src/job-board

WORKDIR /usr/src/job-board


COPY package.json /usr/src/job-board
VOLUME /usr/src/job-board

RUN npm install

CMD ["npm","start"]

#VOLUME /usr/src/job-board