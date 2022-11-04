# DISTEDAVIM SERVER

before you clone the repository make sure you have **docker desktop** or **docker** and **docker compose** installed on your system. see how in [get docker](https://docs.docker.com/get-docker/)

## SETUP

1. Clone the repository

> &ensp;&thinsp; `git clone https://github.com/distedavim/distedavim_server.git`

2. go inside the repository directory

> &ensp;&thinsp; `cd distedavim_server`

3. Build the docker-compose container

> &ensp;&thinsp; `docker-compose build`

4. start the docker-compose container in detached mode

> &ensp;&thinsp; `docker-compose up --detach`

<br>**"note:"**

- to stop the container : `docker-compose down`

- to start it again in detached mode : `docker-compose up --detach`

## where are the source files ?

each service has its own source folder in the root directory with the name scheme of **[service-name].env**

examples :

- a service named **client-main** will have its source files in **./client-main**

- a service named **service-auth** will have its source files in **./service-auth**

## where are the environment variables ?

each service has its .env file in the env_files directory

examples:

- a service named **client-main** will have its own environment variables in **./env_files/client-main.env**

- a service named **service-auth** will have its own environment variables in **./env_files/service-auth.env**

## How to connect to redis and mysql database ?

the credentials can be found in the route .env file **./.env**

the host _(ip address)_ is the service name

examples _( in the [service-name].env )_ :

- MYSQL_HOST=mysql

- REDIS_HOST=redis
