---
title: Laser Electronics and Software
date: 2024-08-05
draft: false
categories:
  - Laser
tags:
  - laser
---

The laser originally  LaserCut 5.3 and a plugin to Corel Draw.

It had the Leetro MPC6515 controller

<hr>

Pictures from Aug 5, 2024


![](images/laser_innards/PXL_20240806_030749361.MP.jpg)
![](images/laser_innards/PXL_20240806_030834037.MP.jpg)
![](images/laser_innards/PXL_20240806_030900710.MP.jpg)
![](images/laser_innards/PXL_20240806_030907861.MP.jpg)
![](images/laser_innards/PXL_20240806_030940051.MP.jpg)
![](images/laser_innards/PXL_20240806_030943434.MP.jpg)
![](images/laser_innards/PXL_20240806_031046649.MP.jpg)
![](images/laser_innards/PXL_20240806_031051880.MP.jpg)
![](images/laser_innards/PXL_20240806_031059531.MP.jpg)
![](images/laser_innards/PXL_20240806_031117985.MP-EDIT.jpg)
![](images/laser_innards/PXL_20240806_031117985.MP.jpg)
![](images/laser_innards/PXL_20240806_031250114.MP.jpg)
![](images/laser_innards/PXL_20240806_031252661.MP-EDIT.jpg)
![](images/laser_innards/PXL_20240806_031252661.MP.jpg)
![](images/laser_innards/PXL_20240806_031255742.MP.jpg)
![](images/laser_innards/PXL_20240806_034504172.MP.jpg)
![](images/laser_innards/PXL_20240806_034508236.MP.jpg)
![](images/laser_innards/PXL_20240806_034601054.MP.jpg)

![](images/laser_innards/PXL_20240806_034500982.MP.jpg)
The full controller. Rotated to match the block diagram.


![](images/laser_innards/PXL_20240806_034454387.MP.jpg)
![](images/laser_innards/PXL_20240806_034606882.MP.jpg)

two Stepper drivers. Not sure where the third driver is.

Switches set the same. I rotated the image
01111010

The four wire conenctor with three wires on the left:
Blue
Green
Red

![](images/laser_innards/mpc6515_block_diagram.png)
![](images/laser_innards/mpc6515_hardware_interfaces.png)
![](images/laser_innards/PXL_20240806_034500982.MP.jpg)
The full controller. Rotated to match the block diagram.
![](images/laser_innards/mpc6515_25_wiring_diagram.jpg)

[69 page manual!](https://issuu.com/setinova/docs/manual_software_mpc6515_v1.6)
<hr>

[another useful set of posts](https://msraynsford.blogspot.com/search?q=ruida)
Talks about where to wire in the water protection line.

[A useful post](https://forum.lightburnsoftware.com/t/desperate-please-help-leetro-mpc6515-to-ruida-rdc6445-upgrade/74336)

Includes this iinformation.
"Ruida controllers need a water protection circuit. I don’t see one hooked to the WP1 on the CN5 connector."

[I think this is the right controller](https://www.cloudraylaser.com/collections/co2-laser-controller/products/cloudray-ruida-controller-rdc6442g-6442s?variant=12906003857459)

[I ordered this: Cloudray Ruida RDC6445S Laser Controller × 1](https://www.cloudraylaser.com/collections/co2-laser-controller/products/cloudray-ruida-rdc6445g-s-laser-controller?variant=42968657166497)
China Warehouse / RDC6445S / Set D: Controller+ Wireless Handle

[The new controller documentation?](https://www.ruidacontroller.com/wp-content/uploads/2021/10/RDC6445GT5-Laser-cutting-system-hardware-user-manualV1.1.pdf) I have RDC6445S, this is RDC6445GT5

[Page for the RDC6445G/S](https://www.ruidacontroller.com/rdc6445s/)


Oh my, UPS says the new controller should arrive Friday!

## List for replacing controller

- use small cable tie to seperate x and y wires.
- label the double x dir and step together, they don't need seperate labels
- Document all findable settings for old controller. Look at control panel, LasterCut5.3, maybe coreldraw
- document and label all wires
- control panel-need to make the whole larger
- unmount old controller, but leave wires connected
- move wires, except laser control, over and test
