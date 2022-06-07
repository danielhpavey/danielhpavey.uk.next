---
title: How to get your public IP address in the terminal
Description: A few options of how to get your public IP address in the terminal
date: "2021-12-07"
tags: terminal,command line,networking,ip

---

# How to get your public IP address in the terminal

There are few different ways, some may or may not working depending on your specific environment.

```
dig +short myip.opendns.com @resolver1.opendns.com
```

```
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com
```

```
host myip.opendns.com resolver1.opendns.com
```

```
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | awk -F'"' '{ print $2}'
```
