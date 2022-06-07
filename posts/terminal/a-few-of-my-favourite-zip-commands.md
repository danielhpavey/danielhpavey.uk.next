---
title: A Few of my Favourite Zip Commands
Description: Just a few example zip / gzip / bzip commands for reference.
date: "2021-03-31"
tags: terminal,command line,zip,gzip,bzip2

---

# A Few of my Favourite Zip Commands

Just a few examples for reference:

To compress

```   
 tar -jcvf archive_name.tar.bz2 folder_to_compress
```

```
 zip -r archive_name.zip folder_to_compress
```

To extract

```
 tar -jxvf archive_name.tar.bz2
```

   or

```
 tar -xvf file.tar
```

   or

```
 tar -xvf file.tar --strip-components=1 // to remove a container folder
 ```

   or

```
 bzip2 -d [filename]
```

```
 gzip -d file.gz
```
```
 unzip file.zip -d destination_folder
```

