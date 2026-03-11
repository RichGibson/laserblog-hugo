---
title: Using gitwatch to back up Lightburn files
date: 2026-03-01
draft: false
categories:
  - Laser
tags:
  - projects
  - software
  - lightburn
  - git
cover:
  image: /images/projects/gitwatch_cover.jpg
---

As a software engineer I believe in version control. As a laser cutter and 3d printing Maker I am traditionally horifically lax in file management.

This has consequences.

They are not good.

The two problems which have hit me in the face in the last week are the classic naming problem (‘final.doc’, ‘final_really.doc’, ‘final_really_really.doc’) and an inability to revert to a prior known good state while working in LightBurn.

I just worked on a project in LightBurn and realized that I wished that I
could go back a bit because I had made things worse.

This is <sarcasm>oddly not the first time that this has happened</sarcasm>.

I do regularly save my work, but in a way that just makes it worse because I frequently write over the last good state-there is
little room to roll back.

I thought that I should (finally) put my LightBurn files under version control, and wouldn’t it be cool if I had a tool to automatically commit files when they changed?

So I googled ‘git file watcher commit on file change’ and found [gitwatch](https://github.com/gitwatch/gitwatch), which does exactly what I want.

It is a program that watches for file changes and then automatically does a git commit when a file has changed.

I did a git init in my projects directory where I have LightBurn, CNC, and 3d printer projects.

I am not yet going to save these files to github, bit gitwatch can also push to another repository (ie. github).

Then in your project directory run:

gitwatch -v .

(The v is for verbose, I like seeing what is happening)

Gitwatch is serious about its job! I thought I needed to add files to the repository, and that it was doing something like `git commit -a`, but no, if a file changes it is added.

There is probably a way to adjust this. But OTOH, it doesn’t cost much to just have everything under git control.

To test this:

After you start gitwatch -v .

Go to the command line and do a `git log`, then save a project from LightBurn and repeat the
`git log`. You should see a new entry.

It might just be me, but I think most Makers, even those of us who know better, have a lot to learn about version control and file management from software developers!

(As I went to publish this, and add topics I was sad to see that ‘lightburn’ has four stories. That is not enough stories, so I endeavor to up that number!).



