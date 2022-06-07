---
title: Joomla From Validation
date: "2013-02-25"
tags: joomla,web design

---

# Joomla! Form Validation

Do you need to add some JavaScript form validation to your [Joomla!](https://www.danielhpavey.uk/tag/joomla/) module or component?

Of course you do!

Add this to your [php](https://www.danielhpavey.uk/tag/php/)  page:

`
JHTML::_('behavior.mootools');
JHTML::_('behavior.formvalidation');
`

Then add this to the form:

`
class="form-validate" onSubmit="return myValidate(this);"
`

Then add these classes to the form inputs: 

`
class="required"
`

or

`
class="required validate-email"
`

Bob’s you're auntie..!
