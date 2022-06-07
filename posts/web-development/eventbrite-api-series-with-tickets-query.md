---
title: Eventbrite API Event Series Query with Ticket Data
Description: How to query a repeating Eventbrite event via the Eventbrite API and get available remaining tickets.
date: "2017-03-22"
tags: web developement,eventbrite,api,php

---
# Eventbrite API Event Series Query with Ticket Data

I needed to get some data from the [Eventbrite](https://www.eventbrite.co.uk/) API. It took a bit of effort to build the request URL that I needed.

The events I wanted the data fro where recurring. I also wanted to know how many tickets where available for each event.

I finally came up with this:

> https://www.eventbriteapi.com/v3/series/[Seried ID]/events/?token=[acess_token]&expand=ticket_classes
