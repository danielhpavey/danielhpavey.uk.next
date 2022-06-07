---
title: Count number of words in text using MySQL
Description: I was trying to count the number of words in some MySQL results today. This is easy enough with PHP using str_word_count However there is no simple command
date: "2012-09-10"
tags: mysql,tips,web development

---
# Count number of words in text using MySQL

I was trying to count the number of words in some MySQL results today.

This is easy enough with PHP using [str_word_count](http://php.net/manual/en/function.str-word-count.php)

However there is no simple command to do it in MySQL

However I found [this](http://www.mwasif.com/2008/12/count-number-of-words-in-a-mysql-column/) great post that give a nifty little trick for counting words with MySQL:

> SELECT SUM(LENGTH(name) – LENGTH(REPLACE(name, ‘ ‘, ”))+1)
>
> FROM table

Nifty!

<img src = "/images/mysql-logo.jpg" />
