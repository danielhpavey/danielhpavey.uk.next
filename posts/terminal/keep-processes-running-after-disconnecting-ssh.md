---
title: Keep Processes Running After Disconnecting SSH
Description: How to keep proceses / app running after ending an SSH session with the screen command.
date: "2019-12-05"
tags: terminal,ssh,tips

---

# Keep Processes Running After Disconnecting SSH

I use ssh **a lot**... I love it and am a big fan.

Sometimes when on ssh, you want to disconnect from the remote server, but leave things running (processes / vim / etc etc).

I have *only just* discovered that this is possible using [screen](https://www.google.com/search?q=screen+terminal&oq=screen+terminal&aqs=chrome..69i57j0l4j69i60.5884j0j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on).

I don't know why I haven't discovered it before...!

To use it, ssh to the remote server & type: **screen**

Then just carry on as normal...

Press Ctrl-A then Ctrl-D to **detach** your screen but leave the processes running.

You can now log out, get on with your life... then when you ssh back to the server later simply type **screen -r** to *resume* your screen session and you'll be back where you started!

For bonus points you can run multiple *screen* sessions on the same server by naming the session, eg. **screen -S 1**.
