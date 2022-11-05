# DISTEDAVIM SERVER

before you clone the repository make sure you have **docker desktop** or **docker** and **docker compose** installed on your system. see how in [get docker](https://docs.docker.com/get-docker/)

run `docker -v` and `docker-compose -v` to make sure you have them installed

<br><br>

## SETUP

1. Clone the repository

```bash
git clone https://github.com/distedavim/distedavim_server.git
```

2. go inside the repository directory

```bash
cd distedavim_server
```

3. Build the docker-compose container

```bash
docker-compose build
```

4. start the docker-compose container in detached mode

```bash
docker-compose up --detach
```

<br>**" NOTES : "**

to stop the container

```bash
docker-compose down
```

to start it again in detached mode

```bash
docker-compose up --detach
```

to start only one service

```bash
docker-compose up --detach "service-name"
```

to stop only one service

```bash
docker-compose stop "service-name"
```

<br><br>

## where are the source files ?

each service has its own source folder in the root directory with the name scheme of **./[service-name]**

examples :

- a service named **client-main** will have its source files in **./client-main**

- a service named **service-auth** will have its source files in **./service-auth**

<br><br>

## where are the environment variables ?

each service has its .env file in the env_files directory

examples:

- a service named **client-main** will have its own environment variables in **./env_files/client-main.env**

- a service named **service-auth** will have its own environment variables in **./env_files/service-auth.env**

<br><br>

## How to access a service from another service ?

each service has its own host (ip address)

the host address can be found in servicehosts.env in the root directory **./servicehosts.env**

all services can access these environments variables

to send a request to a service simple assign the host's evn key to the request url

examples :

- **service_auth** has it's host key as **SERVICE_AUTH** in the **servicehosts.env** file

&ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;to a send a login request to **service_auth**

```javascript
fetch(`${SERVICE_AUTH}/login`);
```

<br><br>

## How to connect to redis and mysql database ?

the credentials can be found in the route .env file **./.env**

the host _(ip address)_ is the service name

examples _( in the [service-name].env )_ :

- MYSQL_HOST=mysql

- REDIS_HOST=redis

<br><br>

## how to run a executable command in a service ?

to run a commmand in a service you can use **docker compose exec** follwed by the service name and the command

```bash
docker compose exec "service-name" "command"
```

examples:

- runing a `php artisan migrate` command in **service-auth**

```bash
docker compose exec service-auth php artisan migrate
```
