---
title: Batch Rename File Extensions in Terminal for Mac
date: "2012-09-17"
tags: mac,apple,terminal

---

# Batch Rename File Extensions in Terminal for Mac

for f in *.JPG; do base='basename $f .JPG'; mv $f $base.jpg; done



https://discussions.apple.com/thread/1667375?start=0&tstart=0
