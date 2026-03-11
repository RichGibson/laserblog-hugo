---
title: Upgrading Laser tube and power supplyto Ruida Controller
date: 2025-04-30
draft: false
categories:
  - Laser
tags:
  - laser
  - upgrade
cover:
  image: /images/tooling/laser_power.png
---


Current Tasks

Yay - Ground the power supply to the chassis
Yay - Try and mount the power supply. Need to drill and tap two holes (two screws, on top of power supply. Seems good enough)

Current Questions

- Why have I needed to add so much water to the chiller, where is it going?

- What does the wire between chiller and laser do? Where does it go?

- Where do the two yellow wires from P (water protect) and Ground on the power
supply go? I think do a water flow meter that is hard to see. Can I remove the back panel?
    ans: they do go to what appears to be a water flow meter. It has wires that appear to also
    go to the water chiller.

- Should the 'P' light on the power supply be lit when we have water protect, or when we don't have water protect?

- Is the controller doing anything? 
    - Power supply 'L' (Switch laser control active low) should be at 5 volts, measure it when I pulse laser from handle or control panel
    - Power supply 'IN' (input control) should be 0-5 volts, measure it when I pulse laser from handle or control panel
    - And/Or measure CN5 on the controller





## Meter

If the meter is connected then it appears that the power supply test button
does not work. This appears to be true of the 'new' power supplies from Cloudray

## Ruida Controller

Ruida Manual
files/Ruida-RDC6445SRDC6445G-Laser-Controller.pdf

CN5 - Connector 5

1 Gnd - Black Wire
2 L-On 1 (laser 1 on) - Blue
3 LPWM1 (laser 1 pulse width modulated) - Green
4 WP1 (water protect laser 1) - NC
5 L-AN1 (laser 1 analog?) - NC

LEDs

LED14 - Run Normal running status
LED15 - +5V

LED14 is blinking.

"LED14 (Blinking Red) Can indicate that the water protection is active and needs to be addressed."
Counterpoint:
But maybe 'LED 14 blinks because the controller is working, this is NORMAL'


## Power Supply

![back of power supply](images/tooling/laser_power.png)

Six connectors 

H L P G IN 5V

H - Switch the laser, active high.
L - Switch the laser, active low. (laser On) - Blue
P - Water protection - yellow
G - Signal ground - yellow
IN - Input control 0-5V (the PWM from CN5) - Green
5V - Output Power 5V (power something?)


## Laser Tube - all installed, and it fires from the power supply or meter test buttons

- need to position the tube and align the mirrors. But it fires when the control systems
will let it fire.
