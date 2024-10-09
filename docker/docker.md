# Docker CLI commands

## Pulling a image
```bash
docker pull nginx
```

## Running a image
```bash
docker run -d nginx:latest
```

## check the running containers
```bash
docker ps
```

## check the help command
```bash
docker ps --help
```

## Stopping a container
```bash
docker stop nginx:latest
# or the id/name of the container
```

## Starting a container
```bash
docker start nginx:latest #name/id
```

## Removing a container
```bash
docker rm #id/name
```

## Removing a running container with force
```bash
docker rm -f #id/name
```

## See all running and stopped containers
```bash
docker ps -a
```

## See all running and stopped containers in quite mode to see only the ids
```bash
docker ps -aq
```

## Remove all running and stopped containers in quite mode to see only the ids
```bash
docker rm -f $(docker ps -aq)
```

## Assign a port to local:image
```bash
docker run -d -p 8080:80 nginx:latest
```

## Assign multiple ports to local:image
```bash
docker run -d -p 8080:80 -p 3000:80 nginx:latest
```

## Assign a default name to local:image
```bash
docker run -d --name NewName -p 8080:80  nginx:latest
```

## Formatting ps command
```bash
export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"

docker ps --format=$FORMAT
```

## Assigning Volumes with a readonly mode
```bash
docker run -d --name NewName -p 8080:80 -v $(pwd):/usr/share/nginx/html:ro  nginx:latest
```

## Inter into a docker image
```bash
docker exec -it nginx:latest bash
# then to exit
exit
```

## Check all the pulled images
```bash
docker images
```

## Remove a image from the machine
```bash
docker rmi #name/id
```

## Remove all unused (only the untagged) image from the machine
```bash
docker image prune
```

## Remove all unused image with confirmation from the machine
```bash
docker image prune -f
```

## Remove all unused image, and tagged with confirmation from the machine
```bash
docker image prune -a
```

## Remove all unused, used, untagged and tagged images
```bash
docker rmi $(docker images -q)
```

## Build from the docker-compose.yml
```bash
docker-compose build
```

## Build from other file name
```bash
docker compose -f docker-new-file-name.yml build
```

## Deploy the build
```bash
docker-compose up -d
```

## Deploy the build from other file name
```bash
docker compose -f docker-new-file-name.yml up -d
```

## check the images from other file name
```bash
docker compose -f docker-new-file-name.yml ps
```

## check the service logs from other file name
```bash
docker compose -f docker-new-file-name.yml logs -f userService
```

## Restarting a service from other file name
```bash
docker compose -f docker-new-file-name.yml restart userService
```

