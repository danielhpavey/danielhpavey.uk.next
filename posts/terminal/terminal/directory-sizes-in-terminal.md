---
title: Getting Directory Sizes in Terminal
Description: I always struggle to remember these commands
date: "2020-07-23T00:00:00+01:00"
tags: terminal

---
# Getting Directory Sizes in Terminal

du -hs * | sort -h

If you are using a sort that does not support -h, you can install GNU Coreutils. E.g. on an older Mac OS X:

brew install coreutils

du -hs * | gsort -h
