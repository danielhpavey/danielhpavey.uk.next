---
title: PHP DateTime Class - Or why it pays to read the documentation (sometimes!)
Description: PHP DateTime Class - Or why it pays to read the documentation (sometimes!)
date: "2015-09-18"
tags: php,web development

---
# PHP DateTime Class - Or why it pays to read the documentation (sometimes!)

I've always struggled with dates in PHP, more specifically writing dates submitted by a PHP form to a database correctly formatted.

I've done a few weird and wacky things to get the dates into the database as proper datetime data!

However, I'm currently working on a project that I'm trying to do *proper* so actually spend a bit of time on [php.net](http://php.net) looking at the documentation.

I'd run into the [DateTime class](http://php.net/manual/en/class.datetime.php) before and used it quite successfully (and then obviously forgot about it). So was very please to discover a method that does exactly what I wanted!

My usual scenario is that my form has a nice friendly date format, eg 12-09-2015, or even 12 September 2015, which I then have to jump through hoops to submit to the db as 2015-09-12 so that MySQL recognizes it as a proper date format.

However using the php [DateTime createFromFormat method](http://php.net/manual/en/datetime.createfromformat.php) you can very simply reformat the date as required.

In object oriented style (which we of course prefer!):

<?php<br />
$date = DateTime::createFromFormat('d-m-Y', '12-09-2015');<br />
echo $date->format('Y-m-d');<br />
?>


So you just tell DateTime what format the date you're giving it is, and then can get that date out in whatever format you want!

So documentation can be useful after all!
