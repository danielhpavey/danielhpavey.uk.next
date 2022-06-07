---
title: Find the last system shutdown or reboot times on Ubuntu
Description: Quick and easy terminal command "last"
date: "2022-01-12"
tags: terminal,command line,ubuntu

---

# Find the last system shutdown or reboot times on Ubuntu

Needed this the other day:

Use the [last](http://unixhelp.ed.ac.uk/CGI/man-cgi?last) commands

```
last -x | grep shutdown
last -x | grep reboot
```

[Source](https://askubuntu.com/questions/37132/how-do-i-find-the-last-logged-system-boot-and-shutdown-times)`

