---
title: Open all files from a specific Git Commit in Vim
Description: Terminal Alias to Open All Files from a Specific Commit in Vim
date: "2017-10-31"
tags: vim,web development,git

---
# Open all files from a specific Git Commit in Vim

I occasionally find myself needing to open all files from a specific [Git](http://www.danielhpavey.uk/tag/git) commit. I use [vim](https://www.danielhpavey.uk/tag/vim) as my editor.

Soooo....

I created a little alias to get all the names of files modified in the specific commit and open them all in [vim](https://www.danielhpavey.uk/tag/vim):

> function vcommit(){<br />
> 	&nbsp;&nbsp;&nbsp;&nbsp;vim $(git diff-tree --no-commit-id --name-only -r $1)<br />
> }

I hope you find this useful.


