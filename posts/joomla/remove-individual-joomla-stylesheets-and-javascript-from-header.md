---
title: Remove Individual Stylesheets or Javascript Files from Joomla! Head
Description: How to easily remove specific CSS Stylesheets or Javascript files form the Joomla! header.
date: "2015-06-17"
tags: joomla,web development

---
# Remove Individual Stylesheets or Javascript Files from Joomla! Head

I have worked with [Joomla!](http://joomla.org) for a number of years and whilst in many ways it is an excellent content management system, it does still suffer from a common problem. A lot of CMSs get very bloated with extra (sometimes) unnessary code. 

This bloating is often made worse when plugins or modules or components are installed.

One of my main objectives when working with Joomla! at the moment is to do as much as I can to remove some of this bloat.

To this end here is some simple code you can pop into the top of your main Joomla! template index.php file  that will remove individual CSS and Javascript files:

>
>$doc= JFactory::getDocument();
>
>// Remove a CSS File
>
>unset($doc->_styleSheets['http://'.$_SERVER[HTTP_HOST].$this->baseurl.'/media/path/to/cssfile.css']);
>
>// Remove a Javascript File
>
>unset($doc->_scripts['http://'.$_SERVER[HTTP_HOST].$this->baseurl.'/media/path/to/javascriptfile.js']);


I've only tested this in Joomla! 3 (which you should be using now anyway...)
