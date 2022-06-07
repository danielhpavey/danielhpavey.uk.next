---
title: sed Command to search and replace in multiple files
Description: One-liner sed / ack command to search for a string in miltiple files then replace it.
date: "2022-05-25"
tags: terminal,ack,command line,sed

---
# sed Command to search and replace in multiple files

> for file in $(ack -l testing@ cypress/integration); do echo $file && gsed -i 's/testing/web-testing/g' $file; done
