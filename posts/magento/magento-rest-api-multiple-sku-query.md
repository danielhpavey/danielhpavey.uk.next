---
title: Magento 1 Rest Api Multiple SKU Query
Description: It took me a long time to track down this solution to get multiple products out of the Magento Rest API... But here's the solution.
date: "2017-02-10"
tags: magento,web development,php

---
# Magento 1 Rest Api Multiple SKU Query

It took me a long time to track down this solution to get multiple products by SKU out of the Magento Rest API... But here's the solution I've found:

> http://[magento host]/api/rest/products?filter[1][attribute]=sku&filter[1][in][0]=sku1&filter[1][in][1]=sku2


