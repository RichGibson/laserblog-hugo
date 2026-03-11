---
title: LaserCut5.3 documentation
date: 2016-11-06
draft: false
categories:
  - Laser
tags:
  - documentation
  - lasercut53
---

Apparently I wrote this in 2016.



## Lasercut Software

The controls on the right side allow you to configure details about the different objects to be cut and engraved, and also allow you to control the laser directly.



The Layer Section gives you options for each 'layer' in your project. Layers are defined by the colors. You are limited to the colors which the Lasercut software recognizes.
 
The options for each layer are:
Mode: Cut, Engrave, GradeEngrave, and Hole
Speed
Power
(you need to scroll to the right to see the final two options)
Output - only the layers which are enabled here with a check mark will be Downloaded to the laser.
Times - You can run the same layer multiple times. Running a pattern faster, but multiple times, will often work better than a single slow pass.

Up/Down - Allow you to control the order in which layers are run. Select a layer and hit up or down to move it up or down in the cutting order.
All - 'Selects' all layers. If you download with a layer selected, only that layer will be Downloaded. 
Calculate - Does something...

Y+/Y-  Moves laser in Y. The lower left is 0,0
X-/X+   Moves laser in X.
Datum - moves laser to home.

Slow Step Length - Don't appear to be implemented

Laser - don't yet know.
Power and Times - don't appear to be controllable here.

Run Box: Moves the laser through the bounding box of the current project. Same as the 'Test' button on the laser panel.

Clip Box: Brings up the 'cut frame options' dialog box. Enter a speed, power, and 'blank' and it will cut out the bounding box of the current project.
I don't know what 'blank' does.

IMPORTANT! Immdiate If checked the laser will use the origin set on the laser panel with 'SET LOGIC ORG.' If 'immediate' is not checked it assumes
that the orgin is the same as the machine home in the Datum.

Start: Starts the laser on the currently downloaded job. Click again to pause, click when paused to restart at the current spot.
Pause: Appears to do the same as Stop, can't unpause
Stop: Stops, same as pause.

Machine - drop down if you have multiple machines.

Download : Download your job.


Using OpenSCAD
-you can create OpenSCAD, as long as you only create 2D geometries. You can then Export as a DXF. 




An OpenSCAD curve is going to be made up of lots of line segments. One trick is to select the object in Lasercut and then select Tools->Unite Lines




Here is the same shape after Tools->Unite lines.


Auto Cover! Automatic part layout.

Let's say you have a design, and you would like to make many of them. Just right click on any object and select Set array output options.







Enter the number of columns you want in the X 'times' cell, with the spacing, and the number of rows in the Y cells. Or select 'Auto-cover Calculation' to fill an area as best as it can.

 



Misc Notes
- You can not cut and paste between Lasercut sessions. That is, you can't select part of your work, cut it, select file->new and paste. It appears that
Lasercut does not save the clipboard on File->New.
