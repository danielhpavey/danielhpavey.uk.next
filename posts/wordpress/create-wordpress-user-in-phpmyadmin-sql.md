---
title: Create Wordpress User in phpMyadmin SQL
Description: A simple bit of SQL will create a Wordpres User
date: "2017-02-16"
tags: wordpress,php,web dev

---
# Create Wordpress User in phpMyadmin SQL

This simple sql script will create a [Wordpress](http://www.wordpress.org) user.

You'll need access to the database via [phpMyadmin](https://www.phpmyadmin.net/) or another means..


> INSERT INTO `wp_users` (`user_login`, `user_pass`, `user_nicename`, `user_email`, `user_status`)
> VALUES ('username', MD5('password'), 'Firstname Lastname', 'email address', '0');
> 
> INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) 
> VALUES (NULL, (Select max(id) FROM wp_users), 'wp_capabilities', 'a:1:{s:13:"administrator";s:1:"1";}');
> 
> INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) 
> VALUES (NULL, (Select max(id) FROM wp_users), 'wp_user_level', '10');

This will give administrator level permissions.

