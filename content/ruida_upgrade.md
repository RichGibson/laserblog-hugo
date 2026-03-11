---
title: Upgrading to Ruida Controller
date: 2024-08-08
draft: false
categories:
  - Laser
tags:
  - laser
  - upgrade
cover:
  image: /images/tooling/electronics_cover.jpg
---



Upgrade from the Leetro MPC6515 controller to Ruida RDC6445S

These are raw notes.

Things that I need to know:

Homing / Reset Origin
TopRight - is where there are limit switches

Work Area Size (eg 700x500mm)
1200 x 900 mm

Ultimate Air Assist
Yes / No
I don't know

Automatic Z Axis (Controlled by Controller)
No

Limit Switches
Lever



## List for replacing controller

- I may need to run wire for water protection
- leave laser in middle of table
- use small cable tie to seperate x and y wires.
- Document all findable settings for old controller. Look at control panel, LasterCut5.3, maybe coreldraw
- document and label all wires
- control panel-need to make the hole larger
- unmount old controller, but leave wires connected
- move wires, except laser control, over and test

Old Controller

Machine Options
Company Jinan King Rabbit Technology Development Co, Ltd
hxlaser.com

Motion Card
Mpc6515
IO-Level lower level
Limit Level Lower Level
Laser Model Analog signals
Max Power 100

Worktable - photo

20:37 - I sat down about 17:30, and I methodically went through each step, except for water protect.

I had one wire break, but I took one of my many crimp terminals and trimmed it to be small enough
to fit into the connector, so yay!

The dremel work went as well as I could have expected. There is a benefit in that the laser does not
move much, so I am not so worried about things being securely mounted.

I turned the laser on. I hit escape, like my friendly guide said to, and then I got cheeky (before 
configuring or setting it to english) and tried the wireless 'Handle' What I would call a pendant.

And holy guacamole, the head moved!

I just hit pulse on the remote, and the laser pulsed! 

That is spectacular, because I believed that I could get water protect connected, but it was going
to require a bit more thinking than I was ready for.

I think the water sensor goes to the laser power supply, I have a picture of a wire that looks
like it does that and so the power supply just cuts out if you don't have water.

Also, the 'handle' talks to a wireless rs232 receiver...I looked for my Flipper to try and look at
the signals...but I think it means I am much closer to a laser etch a sketch than I ever thought!

Now lets walk through the control panel configuration work.


Notes:

MANUFACTORY SETTINGS are called Vendor setting in my controller.

Jump off speed is take off speed

A Breadth is now table size 1200

Max Acc may be acc of key? was 4500, change to 3000

Pagination Puls is tickle width

...
21:40 And most things work, or work pretty well.

- setting reset tries to home it to the top left, not top right
- Going right in X it stops a significant ways before it should
- I don't understand all of the handle buttons, and they don't all
  seem to do anything.

The awesome!
- It is so much nicer.
- The magnetic base on the handle lets you stick it to the laser cutter.
  When I realized that I literally LoLed with pleasure.
- using the handle is nicer than the control panel. The control panel is
  much nicer than the Leetro panel.
- I managed to connect and cut from Lightburn on my mac with literally near 
  zero effort. Amazing.

I need to go through the calibration.

    The days that I keep my gratitude higher than
    my expectations, Well, I have really good days.
    Ray Wylie Hubbard, from song Mother Blue's


Sat Aug 10, 2024 Next Steps

done - Print a 100mm x 100mm calibration square
fixed - why won't it go all the way to the right?
not sure - why does it reset to top left?
- experiment more with the handle
- Try a LightBurn Material test pattern
- Don't have limit switches. Whoops.
