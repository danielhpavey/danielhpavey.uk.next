---
title: Vim Keymapping for Changing a CSS Property Value
Description: I'm quite pleased with my nifty Vim key mapping for editing CSS
date: "2015-05-20"
tags: vim,css,web

---
# Vim Key Mapping for Changing a CSS Property Value

I'm quite pleased with this one.

I love [Vim](http://en.wikipedia.org/wiki/Vim_%28text_editor%29) and work with CSS *a lot*!

I've finally got around to setting up a key mapping to quickly edit a css property value. This is something I do a lot and have felt for a while there should be a way to speed up the editing with Vim.

So yer this:

`
nnoremap <Leader>css 0f:<right>vf;<left>c
` 

My leader key is set to ,

So I now (when on the line I want to edit) hit ,css and the existing css property values will be removed and I can replace with the new!

<img src = "/images/vim-css-key-mapping.gif" alt = "Vim CSS Key Mapping Animated Gif" />

