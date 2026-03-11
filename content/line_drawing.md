---
title: Making a line drawing from a photo in GIMP
date: 2024-12-02
draft: false
categories:
  - Laser
tags:
  - laser
  - graphics
  - gimp
cover:
  image: /images/line_drawing/cover.png
params:
  summary_max_length: 5
  summary: How to convert an image to a line drawing.
---

How to convert an image to a line drawing. 

From [this Redit post](https://www.reddit.com/r/GIMP/comments/edjrzn/making_a_line_drawing_from_a_photo/)


- Original image
![original image](/images/line_drawing/step_1.png)

- Color > Desaturate
![Desaturated image](/images/line_drawing/step_2.png)

- Filter > Edge Detect > Edge
![Edge Detected image](/images/line_drawing/step_3.png)

- Color > Invert
![Inverted image](/images/line_drawing/step_4.png)

Later in the thread

- colour > desaturate

- filter > edge detect > edge (feel free to mess with settings to your liking; I found colour erase mode worked best)

- colour > desaturate (again)

- colour > linear invert If outline not dark enough, use colour > levels to increase darkness

- filter > enhance > noise reduction (in case there are unwanted dots all over the image)

right click image > layer > transparency > colour to alpha
