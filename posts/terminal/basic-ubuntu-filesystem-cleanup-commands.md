---
title: Basic Ubuntu File System Cleanup Commands
Description: A handful of basic commands you can use to free up some space on an Ubuntu server
date: "2020-11-20"
tags: terminal,command line,ubuntu

---

# Basic Ubuntu File System Cleanup Commands

### Get rid of packages that are no longer used:

```
sudo apt-get autoremove
```

### Clean up APT cache in Ubuntu

This command tells you how much space is getting used by the Apt cache:

```
sudo du -sh /var/cache/apt
```

Then use this command to clean outdated packages:

```
sudo apt-get autoclean
```

Or this command to clean it entirely:

```
sudo apt-get clean
```

### Clear systemd journal logs 

This command tells you how much space is getting used by these logs:

```
journalctl --disk-usage
````

This command lets you renove them older than a specified number of days:

```
sudo journalctl --vacuum-time=3d
````
