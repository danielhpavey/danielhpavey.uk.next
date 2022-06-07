---
title: Open All Files Staged in Git in Vim
Description: Terminal command to open all files that are staged in Git in Vim. 
date: "2017-02-09"
tags: vim,web dev,git

---
# Open All Files Staged in Git in Vim

> vim `git status --porcelain | sed -E -e 's/^M|^A//g'`

This is working for me in iTerm on my Mac...



