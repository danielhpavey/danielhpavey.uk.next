---
title: Elasticsearch Docker Container Keeps Crashing
Description: How to stop Elascticsearch container from repeatedly crashing due to memory issues
date: "2020-01-30"
tags: magento,web development,php

---
# Elasticsearch Docker Container Keeps Crashing

I am running my Magento 2 dev environment in Docker, largely but not entirely based on [Mark Shusts Magento Docker setup](https://github.com/markshust/docker-magento).

However my Elasticsearch container started to misbehave, and would not stay up...

Looking at the Docker logs I was able to see this message:

> max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]

However I was struggling to find how to configure this successfully in Docker, until our old friend [stack overflow](https://stackoverflow.com/questions/41064572/docker-elk-vm-max-map-count) came to the rescue.

You need to set the memory value on the host machine, not the Docker container..!

From stackoverflow:

> You can do that in 2 ways:
> 1. Temporary set max_map_count:
> - sudo sysctl -w vm.max_map_count=262144
> - but this will only last till you restart your system.
> 2. Permament
> - In your host machine
> - vi /etc/sysctl.conf
> - make entry vm.max_map_count=262144
> - restart
