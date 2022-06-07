---
title: Load A Joomla! Template File From A Separate View 
Description: Load Joomla! Template File From Separate View
date: "2016-02-10"
tags: joomla,web development,php

---
#Load A Joomla! Template File From A Separate View

I am working hard to improve the quality of my php code and one of significant technique is to use the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle.

However this can become a little harder to stick to when using a framework / CMS. I mostly work with [Joomla!](https://www.joomla.org/) and when building custom components for it, sometimes things get a little non-DRY!

However (although not that thoroughly documented) there are some things you can do to help keep your code DRY!

When building a Joomla! component you set up folders for each "view" or page of your component. You can set up multiple separate files within these template folders that get used / loaded when required.

Often you might wish to use an existing template file from one "view" in another "view".

You can use a template file from a separate view by loading the template path as follows:

$this ->addTemplatePath( JPATH_COMPONENT . '/views/[view name]/tmpl/' );

You can then load the file you need in the normal way:

echo $this->loadTemplate('[template file]');

More recent version of [Joomla! also have a new "Layouts"](https://docs.joomla.org/Layout_Overrides_in_Joomla) system for sharing code across multiple views. This is also very good and has some better [documentation](https://docs.joomla.org/Layout_Overrides_in_Joomla). 


