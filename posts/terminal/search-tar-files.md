---
title: Search in multiple tar files for specific string
Description: Search in multiple tar files (not gzipped) for a specific string
date: "2021-11-12"
tags: terminal,command line

---

# Search in multiple tar files for specific string

So my scenario was, I had a bunch of tar files (not gzipped), each one containing a csv file.

I wanted to grep the csv files for a string, but only in the tar files that matched a name pattern.

This was what I came up with:

```
for file in $(ls -l | awk '{print $9}' | grep [filename pattern]); do tar xf $file --to-command "grep [search string]"; done
```

