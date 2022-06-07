---
title: Find Magento Layout Handle for Current Controller/Action
Description: Debugging technique to find which layout handle you need to add or edit in layout xml file.
date: "2017-02-03"
tags: magento,web development,php

---
# Find Magento Layout Handle for Current Controller/Action

I is still getting the hang of the whole Magento layout functionality but have just found a couple of tips that have helped me greatly.

As I understand it the *layout handle* of and xml file is the *node* that is called when a particular page is loaded by [Magento](http://www.magento.com).

Eg. in a layout xml file your might find a section marked as <mysite_forms_contact_success>

This would correspond to the webpage /forms/contact/success.

You would then configure the layout element for that page within that section of that xml file.

However if you are working on a custom module ore something similar and are unsure which layout your controller is trying to load you can use the following code to dubug:


> $this->loadLayout();<br />
> $this->renderLayout();<br />
> Zend_Debug::dump($this->getLayout()->getUpdate()->getHandles());<br />


If you pop that in your controller it will output some info which will tell your which layout is or should be getting loaded.


