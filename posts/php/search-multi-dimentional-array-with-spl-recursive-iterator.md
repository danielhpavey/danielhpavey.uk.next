---
title: Search a Multi-Dimensional PHP Array with Standard PHP Library Recursive Iterator
date: "2015-11-04"
tags: php,web development

---
# Search a Multi-Dimensional PHP Array with Standard PHP Library Recursive Iterator

(That's definitely the best blog post title I've ever come up with...)

Messing with php arrays often messes with my head...

So I needed to search a multi-dimensional array and return the results in an easily accessible format.

A bit of research uncovered my new favourite friend, the [Standard PHP Library (SPL)](http://php.net/manual/en/book.spl.php) and specifically its [RecursiveIteratorIterator class](http://php.net/manual/en/class.recursiveiteratoriterator.php). 

Basically to search through a multi-dimensional array and return *one* array with results in do the following:

$Iterator = new RecursiveIteratorIterator( new RecursiveArrayIterator( $multidimentionalarray ) );

foreach ( $Iterator as $i ){
$i_array = $Iterator ->getSubIterator();
if ( $i_array["id"] == [value you're searching for] ){
$outputArray[] = iterator_to_array( $i_array );
}
} 

var_dump( $outputArray ) // will output an array with your results.

This syntax was a bit confusing to me at first, but I gave it a try and it did exactly what it wanted...




