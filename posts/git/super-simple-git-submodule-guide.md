---
title: Super Simple Git Submodule Guide
Description: Git Submodules can seem a bit daunting, but can be really useful. This is my super simple guide to using them.
date: "2015-10-06"
tags: git,web development

---
# Super Simple Git Submodule Guide

Hopefully you already have some idea what a git submodule is, but if not:

> It often happens that while working on one project, you need to use another project from within it. Perhaps it’s a library that a third party developed or that you’re developing separately and using in multiple parent projects. A common issue arises in these scenarios: you want to be able to treat the two projects as separate yet still be able to use one from within the other.

> [Source: git-scm.com](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

I had a project which was a stand alone php system, that was held in a folder of an existing website. The existing website was already in a git repository, so I concluded that it would make good sense to have the stand alone project as a git submodule. This would maintain separation between the two project and just improve the organisation of everything and make the maintenance and updating of each part easier.

The basic commands needed to get everthing set up are:

To list any existing git submodules:

$ git submodule

To add a submodule:

$ git submodule add [path to repo] 

(It's best if the path to repo is public so if sharing the parent project others can easily update the submodule)]

If you clone a project with submodules you won't get the submodule content, you get the config file and the folder. To get the actual content use the following *two* commands:

$ git submodule init

$ git submodule update

Then to update a submodule:

$ git submodule update --remote [submodule name]

More info here: <https://git-scm.com/book/en/v2/Git-Tools-Submodules>

If for any reason you need to change the remote address of the submodule there are a few steps involved:

1) Edit the .gitmodules file, and change the URL for the submodules which changed.

2) Run:

$ git submodule sync

3) Then run git init to update the project’s repository configuration with the new URLs:

$ git submodule init

[Source](https://jtrancas.wordpress.com/2011/02/06/git-submodule-location/)



