---
title: Git --assume-unchanged Problem When Switching Branches
Description: I had a problem switching to a different branch when using git --assume-unchanged. The solution is...
date: "2015-11-20"
tags: git,web development

---
# Git --assume-unchanged Problem When Switching Branches

I had a problem switching to a different branch when using [git --assume-unchanged](https://help.github.com/articles/ignoring-files/). I've been using this command as a lazy git ignore and found it quite useful.

However, I recently tried to switch a branch when I had marked a config file --assume-unchanged and had the following error:

> error: Your local changes to the following files would be overwritten by checkout:
    configuration.php
Please, commit your changes or stash them before you can switch branches.
Aborting

A bit of reaserch turned up this [Stackoverflow](http://stackoverflow.com/questions/13630849/git-difference-between-assume-unchanged-and-skip-worktree/13631525) article which suggested that *skip-worktree* would solve the problem:

> --assume-unchanged assumes that a developer shouldn’t change a file. This flag is meant for improving performance for not-changing folders like SDKs.

> --skip-worktree is useful when you instruct git not to touch a specific file ever because developers should change it. For example, if the main repository upstream hosts some production-ready configuration files and you don’t want to accidentally commit changes to those files, --skip-worktree is exactly what you want.

So I ran the command: git update-index ----skip-worktree config

I then tried to checkout my other branch and got the same message...

So I gave up being lazy and just put my config in .gitignore and removed it from the git cache.

I then tried to check out by other branch again and yet again had the same error message! Now I'm a bit worried about what's going on.

A quick git status showed me the config file deletion waiting to be commited. I did that and then was able to checkout my other branch.

I seem to have got myself down a little rabit hole here... 
