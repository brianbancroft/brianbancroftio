---
title: Election District Map
date: "2018-10-05T10:12:03.284Z"
preview: https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/ridingmap/ridingmap.jpg
---

This is a quick stylistic redo of the Elections Canada riding map for the Mississauga-Lakeshroe EDA. I initially saw the original map as useful, but not aesthetically pleasing.

[![Original](https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/ridingmap/elections-canada-map.jpg)](http://www.elections.ca/res/cir/maps2/images/atlas/35061.pdf)

There are a few details here I dislike. First, there are the colour choices. The use of red overrides everything else in precidence. You're not paying attention to the labels, or the street names. Just the boundaries of the ridings. All of them, as opposed to the one we're interested in -- namely that of Mississauga-Lakeshore. Next, the labelling. There are parts where the riding name labels are being obscured by other lines such as roads. This is bad. The scale is also insufficient for all the space one could have a scale. There is no excuse to limit a scalebar to a single kilometer divided in half when there is an _entire Great Lake_ to the right of the scale, lying there unused. This is the same as the North Arrow, which is over some roads when it could be chilling over some unused blank space on the map.

The style reminds me a lot of the bare-bones Canvec style used in the Canadian topographic maps, with just a few special overlays. For Mississauga-Lakeshore, we can do better...

## So What Did I Do?

[![mine](https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/ridingmap/mississauga-lakeshore-eda.jpg)](https://cdn.brianbancroft.io/images/brianbancroftio/portfolio/ridingmap/mississauga-lakeshore-eda.jpg)

So I made a few key decisions. First, I removed many of the labels. Unless you are dealing with arteries that feed into the riding, within the riding, or bordering the riding, labelling such roads is of no importance to the reader. Same goes for the rivers. While one creek shares the border with the riding on the east, I believe leaving it unannotated is justified, as no residential suburb branches cross the creek at all.

Take a look at the roads as well. I try to use negative space here (white on grey), as it allows me a lot more flexibility with my labels. Nowhere are any of the characters in the adjacent ridings or the roads obscured by roads or river. This is the way it should be, as this is a riding map. Not a road map...

Colour is also important for me. I only use it for Lake Ontario, and sparingly, lest it take away from the ridings. Everything else is in grayscale: No black. Just varying shades of grey. These shades help denote the visual hierarchy of the map so that it's clear that the most important thing is the riding's label, followed by the area where the riding occupies, followed by the labels of the surrounding ridings. A map is a message, and you need to communicate any message in the right order, whether it is an essay, a lecture, or a design.

Last, but not least is the details: The projection, the scale, the authour. A scale bar you can use to compare long distances, and a north arrow obscured by _nothing_. This map didn't take long to complete. The data of the riding boundaries was offered for free by elections Canada, while everything else was provided by Openstreetmap. The GIS program used was QGIS3, which is free and open source meaning you could build this on your own.
