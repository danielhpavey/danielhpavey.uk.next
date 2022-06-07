---
title: Sharing Docker Volumes
date: "2020-02-25"
tags: docker,dev-ops
Description: I got confused seeing &volume and *volume in a docker-compose.yml file...

---

# Sharing Docker Volumes

I got confused seeing &volume and *volume in a docker-compose.yml file...

This is what that does:

docker-compose files use YAML syntax. Those characters are YAML syntax for "anchors" and "aliaes", which are basically ways of referring to one section of the YAML document from another section of the document. For example, consider this example:

```
example:
  list1: &foo
    - one
    - two
  list2: *foo
```

That defines an anchor named foo referring to the list in the list1 key. Elsewhere in the document we can use *foo to refer to that same list. ([source](https://stackoverflow.com/questions/46896382/docker-composer-volumes-and-networks-have-or-in-declaration))

This is then really great for setting up shared volumes in your docker-compose.yml file.

For example:

```
services:
    nginx:
        volumes:&appvolumes
            - ./appdata:/appdata
    php:
        volumes:*appvolumes
```

In this example I'm using the inbuilt docker appdata volume.

I could go on to add addtional volumes to the nginx container which would then also be shared to the php container!
