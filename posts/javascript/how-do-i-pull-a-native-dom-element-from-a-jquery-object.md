---
title: How do I pull a native DOM element from a jQuery object?
Description: How do I pull a native DOM element from a jQuery object?
date: "2017-02-17"
tags: web development,javascript,jquery

---
# How do I pull a native DOM element from a jQuery object?

Ruthless plagiarised from the [jQuery website](https://learn.jquery.com/using-jquery-core/faq/how-do-i-pull-a-native-dom-element-from-a-jquery-object/)

> A jQuery object is an array-like wrapper around one or more DOM elements. To get a reference to the actual DOM elements (instead of the jQuery object), you have two options. The first (and fastest) method is to use array notation:

> $( "#foo" )[ 0 ]; // Equivalent to document.getElementById( "foo" )
