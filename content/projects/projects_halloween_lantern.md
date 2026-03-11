---
title: "Halloween Lanterns!"
date: 2024-10-29
draft: false
categories:
  - Laser
tags:
  - laser
  - art
  - lantern
  - halloween projects
cover:
  image: /images/halloween_lantern/lanterns_cover.jpg
---


I've been enjoying videos by The Louisiana Hobby Guy. He does lots of nice
tutorials on Lightburn, and he has a calming presence.

He did a video in 2023 on [Creating a Halloween Tea Light with nothing but text and shapes in Lightburn!](https://www.youtube.com/watch?v=n5WQE9MG1DY) and I followed along with the design.

He called it a ten minute design, and I can see that for a subsequent project...


-[Lightburn file](/images/halloween_lantern/halloween_lantern_2024-11-04.lbrn2)


-![Lanterns on the laser](/images/halloween_lantern/PXL_20241025_033815401.MP.jpg)
-![First assembly](/images/halloween_lantern/PXL_20241025_032718087.MP.jpg)
-![Flickering lantern](/images/halloween_lantern/PXL_20241026_071029311.MP.jpg)

The steps:

- Create a rectangle 3"x5" (or whatever you want), this is the frame.
- Create the inner part with Tools->offset shapes
    - direction inward
    - Offset difference ~0.47"
- Select the inner and outer rectangles and group them. Arrange->Group
-![Offset Rectangle](/images/halloween_lantern/offset_rect.png)

- Download a halloween font. I used [Freaky Halloween](https://www.dafont.com/)
- Create text in Lightburn. Select your font. In the Freaky Halloween font the
letter 'J' creates a bat. But many other options exist!

- Now you can duplicate the bat, resize it, rotate it, do what you want!
-![Bats and Rectangle](/images/halloween_lantern/bats.png)

- Put the bats into the center part of your rectangle. Move and resize them 
to make yourself happy! You do need to make sure you have overlap with the 
frame. 

-![Bats in the frame](/images/halloween_lantern/bat_lantern.png)

- Select all of the shapes, frame and bats, and do a union. 

-![Bats in the frame, union](/images/halloween_lantern/bat_lantern_union.png)

- Cut the rest of the pieces. They are in the -[Lightburn file](/images/halloween_lantern/halloween_lantern_2024-11-04.lbrn2)
and in the video.

I used LED Tea lights.
