---
title: gzip log files
Description: How to gzip a number of log files, putting a number in the file extention
date: "2020-09-28T09:00:00+01:00"
tags: terminal, gzip

---
# Gzip Log Files

    gzip -S ".[NUMBER].gz" *.log

E.g.

    gzip -S ".3.gz" *.log

The -S is to set your own suffix on the filename.
