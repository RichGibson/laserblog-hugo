---
title: Limit Switch Project
date: 2024-08-10
draft: false
categories:
  - Laser
tags:
  - laser
  - upgrades
  - tooling
cover:
  image: /images/tooling/no_limit_cover.jpg
---

Project in progress...


I just installed my new Ruida 4445S controller, and I dug in and 
while I have wires that were connected to the limit switch inputs on the
previous controller I don't actually appear to have limit switches. 

Needs further investigation. But I can cut if I just hit 'stop' when I power on the laser, so
it doesn't crash in its attempt to find home, and set local origins.

[Blog entry talking about Ruida limit switches](https://softsolder.com/2023/01/11/ruida-controller-home-limit-switch-configuration/)


![A limit switch that doesn't do anything](/images/tooling/no_limit.jpg)

This little guy, on the left, is a powered up limit switch. If you put metal up to it
the little light comes on to show that it is activated. I tried moving x and y in both
directions and then triggering this switch and the laser did not stop.

Presumably I have it connected to the wrong place. But also, it can never trigger.


