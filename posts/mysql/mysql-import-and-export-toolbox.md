---
title: MySql Import and Export Toolbox
Description: A collection of basic mysql db import and export commands
date: "2020-06-04"
tags: mysql,databases,db

---
# MySql Import and Export Toolbox

## Dump a database

```
mysqldump -f  -h [HOST] -u [USER] -p[PASSWORD] [DB_NAME] > db.sql
```

## Dump a database and gzip it

```
mysqldump -f  -h [HOST] -u [USER] -p[PASSWORD] [DB_NAME] | gzip > db.sql.gz
```

## Import a sql file

```
mysql -h [host] -u [USER] -p[PASSWORD] [DB_NAME] < db.sql
```

## Import a gzip sql file

```
zcat db.sql.gz | mysql -u [USER] -p[PASSWORD] [DB_NAME]
```
