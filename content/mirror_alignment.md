---
title: Mirror Alignment
date: 2026-11-08T19:50:00-08:00
draft: false
categories:
  - Laser
tags:
  - laser
  - alignment
  - maintenance
cover:
  image: /images/alignment/m1_pulses_ruler.jpg
---

Notes from aligning the mirrors on my laser, written mostly so future me
doesn't have to relearn this. It covers all three mirrors.

## The machine

A generic Chinese CO2 laser with a 1200 x 900 mm bed (just under 3 x 4 feet).
I replaced the original Leetro controller with a Ruida RDC6445S, and in 2025 I
replaced the tube and power supply. I think the new tube is 80 W. The tube swap
is what knocked the alignment out.

## The symptom

Cuts were great in some parts of the bed and weak or missing in others. To see
the pattern I cut the same small grid of 2.5 mm circles at five spots on the bed:
upper left, lower left, center, upper right and lower right.

[![Five-position test](/images/alignment/thumbs/five_position_test.jpg)](/images/alignment/five_position_test.jpg)

Left side cut through, the center cut with a "ghost" circle next to each real
one, and the right side barely marked. The ghosts are the beam partly clipping
an edge somewhere and splitting. (I chased ghosts once before, in
[Ghost/Shadow Lines](/tooling/ghost_lines/).)

## How the beam gets to the material

tube -> mirror 1 (fixed, at the end of the tube) -> mirror 2 (on the end of the
gantry, moves front to back) -> mirror 3 (in the head, moves left to right) ->
lens -> material.

The rules that finally made sense to me:

- **Work in beam order.** Each mirror only fixes the leg after it. Changing an
  earlier mirror moves everything after it.
- **Move the far dot onto the near dot.** Pulse with the moving part close to
  the mirror you're adjusting, then far from it. Adjust until the far dot lands
  on the near dot. Don't try to make the near dot perfect: the mirror barely
  moves it, so chasing it takes a big tilt that throws the far dot way off.
- **Tilting fixes angles, not offsets.** If the near and far dots overlap but
  the beam is off to one side, no screw on that mirror fixes it. Something has
  to physically move (the tube or a mount).
- **Log every turn.** "M1 top +1/8" on a scrap of paper. I nudged mirror 1
  without writing it down and had to redo everything.

## Tools

**Low-power pulses.** Set the Ruida's Laser button to a short fixed pulse. See
[Setting Manual Pulse Power](/setting_manual_pulse_power/). 10 ms marks tape and
paper without burning big holes, and small marks are easier to read.

**Paper targets.** I made a sheet of targets to tape over the beam entrance on
the laser head: [head_targets.pdf](/head_targets.pdf). Each one is 38.2 x 45 mm
with a 19 mm circle and a 5 mm grid. There are 25 on a letter page. Print at
100% and check the 50 mm scale bar at the bottom.

Caveat: the printed circle only tells you where the hole is if the target is
lined up with the hole. Mine usually wasn't. What you can always trust is how
two pulses on the same target relate to each other. If you want the absolute
position, do a pencil rubbing of the opening first and tape the target to match.

## Mirror 1

Mirror 1's mount has three screws in a reverse L: one on top, two on the
bottom. The screw at the corner of the L is the pivot, so leave it alone.

- **Top screw:** tilts up and down.
- **The other bottom screw** (end of the L's foot): tilts left and right.

There's no frame on mirror 1 to tape over, and you shouldn't put tape on the
mirror itself (burned residue can damage the coating). So I measured on mirror 2
and on the head instead.

### Tube height first

With the gantry as close to the tube as it goes, I taped over mirror 2 and
pulsed. At that short distance mirror 1's tilt barely matters, so the dot shows
the tube's height. Mine was almost exactly on the vertical center, so the tube
height was fine and I left it alone. It was a few mm to one side, which is OK.
My tube mounts can go up and down but not sideways.

### Tilt

With the gantry far from the tube, the dot on mirror 2 was higher than the near
dot. Mirror 1 was tilted up. I fixed it with the top screw, 1/8 turn at a time,
pulsing far after each turn.

### Closing the last 2 mm

The tape on mirror 2 looked good, but a finer test showed a 2 mm difference. I
taped a paper target on the head, put the head at x=0, and pulsed at upper left
(gantry near the tube), then lower left (gantry far from the tube) on the same
target. The lower-left dot was 2 mm off, so I adjusted mirror 1 to move it onto
the upper-left dot.

Upper left alone:

[![Upper left pulse](/images/alignment/thumbs/m1_upper_left_pulse.jpg)](/images/alignment/m1_upper_left_pulse.jpg)

Lower left added on the same target. Still one mark, a little bigger:

[![Both pulses](/images/alignment/thumbs/m1_both_pulses.jpg)](/images/alignment/m1_both_pulses.jpg)

With a ruler for scale (the grid is 5 mm), the combined mark is about 3 mm
across and the two pulses are within about half a millimeter of each other:

[![Both pulses with a ruler](/images/alignment/thumbs/m1_pulses_ruler.jpg)](/images/alignment/m1_pulses_ruler.jpg)

Mirror 1 is done.

## Mirror 2

Mirror 2 sits on the end of the gantry and sends the beam along the gantry to
the head. Its mount has three knurled adjustment screws at 2, 6 and 10 o'clock.
The Phillips screws next to them are probably lock screws.

- **6 o'clock screw:** tilts up and down. On my machine, counterclockwise moves
  the far dot up and clockwise moves it down.
- **2 and 10 o'clock together:** turn them the same amount in opposite
  directions (one in, one out) to tilt left and right.

The test: a paper target on the head, y held at one position the whole time.
Pulse at x=0 (near mirror 2), then at x=max (far), on the same target.

My far dot started about 0.5 mm left and 5 mm low. I ignored the half
millimeter and worked on height with the 6 o'clock screw. My first guess,
clockwise, moved the dot the wrong way, so I went counterclockwise until the
far dot landed on the near one:

[![Mirror 2 near and far pulses](/images/alignment/thumbs/m2_pulses.jpg)](/images/alignment/m2_pulses.jpg)

One mark, only a little stretched where the two pulses overlap.

Mirror 2 is done.

One mistake from an earlier round, so I don't repeat it: I tried to use
mirror 2 to center the x=0 dot in the hole. Mirror 2 does move the near dot,
but only a little, because at x=0 the head is about 10 cm from mirror 2 versus
more than a meter at x=max. Centering the near dot took a big tilt, and that
sent the far dot way off. Let the near dot land where it lands and chase the far
dot onto it.

## Mirror 3

Mirror 3 is in the head. It turns the beam straight down through the lens and
out the nozzle. Its mount has the same style of screws as mirror 2: three
knurled adjustment screws with Phillips lock screws between them.

[![Mirror 3 mount on top of the head](/images/alignment/thumbs/m3_mount.jpg)](/images/alignment/m3_mount.jpg)

The clue that mirror 3 was the problem: taking the air nozzle off made the
ghosting go away. The beam was coming down off-center, grazing the inside wall
of the nozzle, and part of it bounced off the wall and came out at an angle.
That's the ghost.

**The test:** tape over the nozzle tip, a scrap of wood underneath, one pulse.
I got two holes about 4 mm apart from a single pulse, the same at the left and
right of the bed. Same everywhere means the problem is in the head, not
mirrors 1 and 2.

**Finding the beam:** with the nozzle off, tape over the bottom of the head
where the nozzle screws on, one pulse. I had to turn the power up to mark the
tape. That's expected: without the nozzle the tape sits higher, farther from
the focus, so the beam is wider. One hole, at about 4:30, off-center.

**Adjusting:** turn one mirror 3 screw 1/8 turn, fresh tape, pulse, see which
way the hole moved. I overdid it at first. Even with the nozzle off I got a
partial curve burned into the wood, which meant the beam was catching the side
of the tube. I backed off until the hole was at about 11:30, closer to the edge
than the center.

**Why it can't be perfect:** mirror 3 can only tilt. My beam enters the head a
few mm off-center (it showed up on every head target), so it hits mirror 3
off-center too. Tilting far enough to put the hole dead center sends the beam
down at an angle into the side of the tube. Fully centering it would mean
physically moving the beam (a mount or the tube), not tilting. Good enough is
good enough.

**Checking:** nozzle back on, tape on the tip, one pulse. One hole.

## Result

Same five-position test as at the top, 11:37 pm on November 8:

[![Five-position test after alignment](/images/alignment/thumbs/five_position_after.jpg)](/images/alignment/five_position_after.jpg)

Every position looks the same, and there's no ghosting anywhere. Compare that to
the first photo, where the right side barely marked.

None of these circles cut all the way through, at any position. That turned
out to be the settings: this test was speed 25, power 75 on 1/4" plywood, and
my earlier tests were slower, stronger and on 1/8".

Mirror alignment is done.

## After alignment: the near corner still cuts weaker

With slower settings on 1/4" plywood, the lower right corner (farthest from the
tube) cut through and the upper left corner (nearest the tube) didn't, on the
same sheet with the same focus gauge setting:

[![Material test, upper left](/images/alignment/thumbs/material_upper_left.jpg)](/images/alignment/material_upper_left.jpg)

[![Material test, lower right](/images/alignment/thumbs/material_lower_right.jpg)](/images/alignment/material_lower_right.jpg)

### Focus moves with beam distance

To find where the beam actually focuses, I did a ramp test. I propped a strip
of plywood at an angle (41 mm above the bed at one end, 7 mm at the other),
set the nozzle almost touching the high end, and cut a 250 mm line along it at
each corner. Where the line is thinnest is where the beam is in focus.

[![Ramp test, four corners](/images/alignment/thumbs/ramp_test.jpg)](/images/alignment/ramp_test.jpg)

| Spot | Focus below the nozzle |
|---|---|
| Upper left (nearest the tube) | ~17 mm |
| Lower left | ~22 mm |
| Upper right | ~22 mm |
| Lower right (farthest) | ~26 mm |

The farther the beam travels, the lower the focus. My 1" focus gauge is right
for lower right and about 9 mm off at upper left.

The raw beam changes size too. Tape on mirror 2, one pulse with the gantry near
the tube and one far: the near mark was bigger and ring-shaped, the far one
smaller and solid.

[![Beam on mirror 2, near (left) and far (right)](/images/alignment/thumbs/m2_beam_size.jpg)](/images/alignment/m2_beam_size.jpg)

But refocusing didn't fix it. Upper left at 17 mm still didn't cut through. My
best guess is the beam is uneven close to the tube and evens out as it travels,
which is common with generic tubes. Cleaning the tube's output window and the
mirrors didn't change it.

### I was overdriving the tube

While checking, I read the milliamp meter: 17 mA at 50% power, 33 mA at 90%,
34 mA at 100%. The tube's spec sheet says the working current is **25 mA**,
which is about 70% power on my machine. I'd been cutting at 75-95%.

LightBurn can cap it: Laser Tools -> Machine Settings -> Max power. Anything
above the cap runs at the cap. At 80% the meter reads 29 mA; 70% should be
about 25 mA.

### What I'm doing about it

Nothing fancy. I cut 1/4" in the lower and lower right part of the bed, where
it works and where it's easier for me to reach anyway. At lower right, 1/4"
plywood cut through at 6.8 mm/s even at 70%.
