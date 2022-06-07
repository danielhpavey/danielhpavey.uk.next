---
title: My GNU Screen Cheetsheet
Description: Some quick references for managing GNU Sreen
date: "2020-06-10"
tags: terminal,screen,command line

---
# My GNU Screen Cheetsheet

[GNU Screen](https://www.gnu.org/software/screen/) has recently become one of my favourite tools.

> Screen is a full-screen window manager that multiplexes a physical terminal between several processes, typically interactive shells.

Here's how you can simply use it to [Keep Processes Running After Disconnecting SSH](https://danielhpavey.uk/terminal/keep-processes-running-after-disconnecting-ssh/).

Here's a few more commands to get a bit more funcitionality:

### Split the screen vertically

> CTRL-a SHIFT-\ (CTRL-a |)

### Start a command prompt in the blank pane

> CTRL-a TAB, then CTRL-a c 

### Split a pane horizontally

> CTRL-a SHIFT-s (CTRL-a S) 

### Close the pane that has focus

> CTRL-a SHIFT-x (CTRL-a X)

## Save layout so that you get all your splits back again after detach and reattach

> Ctrl-a
> :layout save default

