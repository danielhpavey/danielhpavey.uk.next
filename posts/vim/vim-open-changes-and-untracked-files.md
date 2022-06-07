---
title: Open all Changed and Unstaged Files from Git in Vim
Description: Terminal Alias to Open All Files Tracked as Changed and Untrcked files from Git in Vim
date: "2017-11-06"
tags: vim,web development,git,terminal,alias

---
# Open all Changed and Unstaged Files from Git in Vim

> function vdiff(){<br />
> 	&nbsp;&nbsp;&nbsp;&nbsp;vim $(git ls-files --others --exclude-standard && git diff --name-only)<br />
)<br />
> }

