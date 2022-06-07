---
title: Joomla! Template Equals Component
Description: Did you know that that you could do this to override the Joomla! view still further...?
date: "2016-02-01"
tags: joomla, web development

---
# Joomla! Template Equals Component

I knew that you can modify the output of [Joomla!](https://www.joomla.org/) still further by tagging "tmpl=component" onto the end the url.

This should then output the content of whatever component you are viewing without the template.

You might need to create a component.php file in the root of your template folder for this to work. You can then modify that file and put whatever you want in it and as long as it has:

	<jdoc:include type="component" /> 

<br />in it, the components content will also be output.

However... I've just found out that you can put anything after the "tmpl=" and as long as there is a correspondingly named file in the template folder, Joomla! will use that file to create your output...

For example, pop "tmpl=fishface" on the end of the url and Joomla! will use the file fishface.php in your template folder.


