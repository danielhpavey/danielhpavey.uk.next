---
title: Set User and Group Permissions Correctly in Linux (Ubuntu)
Description: I often struggle to get the file permissions set up correctly in Linux, especially in a web server setup.
date: "2017-11-20"
tags: web dev,ubuntu,terminal

---
# Set User and Group Permissions Correctly in Linux (Ubuntu)

I often struggle to get the file permissions set up correctly in Linux, especially in a web server setup.

However I think I've finally stumbled upon the magic incantations to make it all work...

## Set the group / owner of a directory recursively:

> chown -R [group]:[group] /path/to/folder

## Set permissions to the group for directory:

> chmod -R g+rwx /path/to/folder


[Source](https://unix.stackexchange.com/questions/241512/allowed-group-cant-access-a-folder)


