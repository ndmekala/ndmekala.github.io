---
layout: post
title: How to Create a Powerful, Streamlined Build Process in LabVIEW
categories: dev
---

It can be easy to forget to manage version numbers in NI LabVIEW.

1. The version number is often the only thing you need to regularly change in the (fourteen-section!) application properties dialogue. It is cumbersome to access and easy to ignore.
2. LabVIEW gives you the option to bypass the application properties dialogue and create a build with the pre-existing specifications.
2. The application properties dialogue provides an option to automatically iterate just the *build* number, further reducing the frequency with which one would enter the dialogue.

**It’s easy, given these facts, to slip into a situation where you are neglecting to manage your build version numbers properly.**

Lets say you create ten consecutive builds, all of which only need to have the final digit of the version number—the *build* version number—incremented, and you configure LabVIEW to increment these version numbers automatically. In this case, you would likey bypass the application properties dialogue. An eleventh build needs to have one of the other version numbers iterated, and therefore needs to be changed in the application properties dialogue. What are the odds that, having created these ten builds one way, you remember the other way to create the build? Or even that you *need* to use another way to create it? The 10x developer on your team will always remember; many of the rest of us won’t.

But there is good news. **You can create a powerful, streamlined build process in LabVIEW that will encourage consistent management of build version numbers.**

## Implementation

LabVIEW has the ability to *create pre- and post-build actions* and a number of [*application builder VIs*](https://www.ni.com/docs/en-US/bundle/labview-2020/page/glang/application_builder_vis.html) that you can use, including `Build`, `Clean`, `Deploy`, `Get Build Specification Version`, and `Set Build Specification Version` VIs.

When I first thought through this problem, I imagined a simple solution: add some functionality to the build method’s pre-build action that allowed users to set the version with `Get Build Specification Version` VI. However this approach did not work. The problem is that when you launch a build you are using a pre-set build specification. Altering the version number in the build specification as part of a pre-build action will change the build specification for the *next* build, but it will not affect the build being created at that time.

A better solution is to *create your own build VI* (not to be confused with LabVIEW’s built-in `Build` VI) that first allows developers to set the version number with the `Set Build Specification` VI and then, second, runs the built-in `Build` VI. The result will be that the build is initiated *after* the build version is actually changed. The final result will follow the general form of the VI below:

<div style="text-align: center; margin-bottom: 1.5rem;"><img src="https://i.imgur.com/nN9tc9I.jpg"></div>

I’ve implemented this strategy successfully, and the result is more consistent builds across the whole team regardless of how we need to manipulate version numbers when creating the new build. LabVIEW’s default functionality makes it easy to get into bad development habits, but it also contains tools that, if implemented properly, can create a powerful and streamlined build process.

And the strategy I’ve outlined is just one piece of the puzzle. When and how you trigger your build VI and what you do after building (whether through the post-build VI or another way) are other areas where you can optimize your LabVIEW build process.

## Further Reading

Justin Goeres’s [article](https://www.jki.net/blog/jki/can-you-build-your-application-in-one-click) about configuring a one-click build method in LabVIEW is worth a read if you are interested on this topic.
