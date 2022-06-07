---
title: Change Last Character in String to Uppercase in MySQL
Description: This is how I changed the last character of some data in a database from lowercase to uppercase
date: "2016-02-11"
tags: mysql,webdev

---
# How to Change the Last Character in a String to Uppercase in MySQL

I have been working on a project that required the importing of some nasty old, badly formatted data in a nice new MySQL database.

I ended up data in a firstname field with titles and initials, for example; Mr p, Mrs t, Mr A d, Mr & Mrs q. 

I wanted to tidy this up and make those initials into uppercase. There where a few thousand records.

I planned to do this using MySQL. MySQL and the SQL are great, but sometimes its string manipulation stuff isn't quite as capable and some of the crazy stuff you can do with PHP!

So I ended up with this query:

`
update [tablename]
set firstname = concat(left( firstname, length(firstname)-1), upper(substring( firstname, length(firstname))))
where firstname REGEXP BINARY '([" "]+[a-z])'
`

So, I'm using regex in the where part to only select records where the firstname has a lower case last letter with a space in front of it.

I'm then rebuilding the firstname by concatenating the first name without the last letter and the last letter changed to uppercase...

As a wise man once said, it seemed like a good idea at the time...
