---
title: JCH Optimize Joomla Plugin for Non-Logged in Users
Description: JCH Optimize Joomla Plugin for Non-Logged in Users
date: "2014-08-22"
tags: joomla,web development

---
# JCH Optimize Joomla Plugin for Non-Logged in Users

I have recently found a fantastic Joomla plugin that addresses a number of issues I was having with Joomla.

<a href="#thechase">Click here to Cut to the chase</a>

The [JCH Optimize](http://www.jch-optimize.net/index.php) can:

> automatically optimize external resources like CSS and JavaScript, which can reduce both the size and number of requests made to your website and also compress HTML output for optimized download. GZip generated CSS and JavaScript files to about 1/4 of the original size. These optimizations may reduce server load, bandwidth requirements, and page loading times.

I have been spending a log of time optimising the sites I’ve been building with Joomla lately. This is primarily in an attempt to make them as responsive and performant as possible.

One of my primary goals with with sites that I build these days is to apply responsive design techniques to ensure the site works well across as many devices as possible. This can be somewhat challenging when using a content management system as that system (and any plugins/components/modules you might install) may not utilise or indeed be able to utilise the most efficient techniques.

This primarily manifests itself in Joomla and any many plugins / components throwing tonnes of separate css and javascript files into the header of the site. These result in separate http requests, which is not ideal when optimising the performance of a website.

The [JCH Optimize](http://www.jch-optimize.net/index.php) plugin does what can be achieved with a lot of manual work. It combines and minifies all the css and all the javascript into single files. And even gives you the option of having it link to these files in the footer of the site rather than the head! There are a few options it provides that gives you granular control over what it is doing and it seems to work really well.

However I was having an issue where when a user was logged into the front end of Joomla things were not working as they should, primarily some javascript functionality. Despite fiddling with the JCH Optimize plugin settings I couldn’t get things to behave properly, so decided that the best action to take would be to disable it one a user was logged into the site.

It took me a little bit of digging to clarify how exactly to achieve this, but the easiest solution was to use the permissions on the plugin settings:

<h2 id="thechase">To cut to the chase:</h2>

In Joomla! 3 to make the JCH Optimize plugin only operate when users <strong>are not</strong> logged in simply set the <strong>Access</strong> in the plugin to <strong>Guest</strong>

<img src="/images/jch-optimize-joomla-plugin-settings.jpg" alt="JCH Optimize Pluging Setting" />
