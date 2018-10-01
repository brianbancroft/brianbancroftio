---
title:  "My Toolkit"
date: "2018-09-30T22:12:03.284Z"
---

It's been about two years since I retooled as a web-developer from working in the mapping field, in the field. Since then, I've been finding myself bouncing between front-end client-side development (making things connect on web pages, and making them look pretty), back-end development (Building the interaction between web pages and small servers, designing and kitting up the databases), and some orchestration (which I'm still awful at). This is the list of tools that I use. Expect this article to be constantly refreshed as my tastes change!

## Hardware

My main piece of kit is a 2015 Macbook Pro (MBP) 15". As a rough field-working type, it's _vitally_ important that the device can do all my coding and map work. While Apple has continued to build better keyboards, and I've heard that the 2018 MBP's have protection for their keyboards, I want to wait a couple more years before I take a risk in acquiring grabbing a new mac. In addition, I have the following:

* An LG 42" Monitor,
* A Magic Trackpad (V2),
* A Magic Mouse (V1),
* Blue-light filtering glasses,
* An oldschool Mac USB Keyboard with the numeric input; and,
* A series of cross-section cuts of a fir tree that I use for a stand.

## Software

I only get to make great things when I step on the shoulders of giants. When I build new software, it's because of the contributions of dozens who came before me, and decided that a particular project was worth their time. The following is a list and explanation of the things which I use to make good stuff, now:

### Command Line and its Plugins

#### Iterm 2

Iterm is a command line program for MacOS known for its customizability. I especially like it for it's toggle show/hide shortcut, which is directly linked to my workflow. It also allows split screens through a keyboard shortcut, which is tremendously useful.

#### OH-MY-ZSH

Most command lines in MacOS run on Bash, which is fine. There is also something called Zsh which is another flavour of command line. It's my preference, at this time.

#### Powerlevel9k

Powerlevel9k is my preferred plugin that deals with the visualizations in the command line. It's highly extensible and once you get over how to build it, it will help you turn your plain command line into something like this:

![command line prompt](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/tooling/command-line.jpg)

#### Version Management in Ruby and Node

I use RVM and NVM. Truth is many software platforms I work on or experiment with use different versions of Ruby or Node, and being able to switch between versions seamlessly is very important.

#### ... And in Python

Anaconda. Get it, figure it out, love it. There are so many dark and twisting paths in Python package management, and this seems to be the best solution on the block. If you're reading this, and are having problems or qualms with it, then the geo community's very own @spara can help in that she can point you in the right direction, or help effect change in the event that structural issues prevent you from going forward.

#### Package Management in Node

I still use NPM. I don't have a strong argument for using either NPM or Yarn, and think that a competition between the two services is the best thing ever for the other.

### Code Management

You'll want to skip this section if you don't code or script at all. Most of what I do all day either falls into coding, documenting, or mocking up. For the code management side of the house, I use Git, which is version control. It's hard to understand what it is until you get into it or learn it, and when you learn it, it becomes a bit like breathing. A good place to start is [here](https://try.github.io) if you haven't run into this sort of thing before.

### Text Editors

There was once a day where the fully-featured _Integrated Development Environment_ (IDE) was king. But a lot of beginners found it to be too many things to too many people. Eventually, people started once again to prefer applications that were just plain ascii text editors. Then they added _plugins_ that resulted in a stone-soup of IDE's where the community brought the functionality to the table of a plain text editor. Some of the more popular ones I've run into in my career have been Sublime Text, Atom, Notepad++ and a few others...

...In my work, I use a combination of VIM and VSCode. Eventually, it's my intent to become vim-only, but that's going to be sometime in the future.

#### VSCode

Microsoft recently built this thing. It has plugins. It's completely open-source and free and the best.

The following is a list of my plugins:

##### Theme

* Cobalt2
  This is a theme that was built by Wes Bos, and works for my purposes.

##### Code Smells

* Pylint
* Rubocop
* ESLint
* Pretiter
* Markdownlint
* Import Cost

The last one is fantastic, and offers me an early warning on the package size of any dependency I'm about to add.

##### Organization of Schtuff

* Better Comments
* Rainbow CSV

As geo people, we deal with CSV a lot more than we want to. When we look at it raw, it can be hard to tell which column a cell belongs to. This plugin helps by colouring the text of each column the same.

* vscode-input-sequence

Sometimes as a developer, you're going to have to make write multiple lines of the same thing, but with different numbers. This helps by allowing you to select multiple things and add a sequential number of _any_ geometric series. It's a decent time-saver.

* Better TOML

This is just syntax-highlighting for TOML files. Useful if you're going to be getting into Tegola, which uses TOML as its standard for configuration...

* DotENV

Syntax highlighting of dotenv files. Useful.

##### Version Control

* GitLens

Essential. This helps me observe who changed what when, all from the comfort of my text editor. Great if I need to ask people how they did that thing they just did.

##### Snippetry

* HTML Snippets
* ES6 Code Snippets

#### VIM. Why?

Truth is that Vim is intimidating at first, but the more you use it, the more it becomes essential if you obsess over efficiency. Vim is the thing you want if you don't want to move your hands from the keyboards while you type. It will get you from one end of the bracket to the next, and it is littered with shortcuts that can turn you from a decent developer into a _something else_... Or so the promise goes...

I personally use it for dotfile configuration, as well as git branch management. Eventually I hope to go beyond.

The following is a list of my plugins:

* Pathogen
  Pathogen is a VIM package manager that allows you to add or remove packages to vim. This is great if you want to pimp Vim up with themes, linting, or other helpful trucks.

### GIS Analysis

#### QGIS

Sometimes, it helps to have a GUI GIS analysis tool to help inspect features on a Database, or muck around with maps and cartography. This is the GIS client I _should_ be using, and I'm still not even close to pro at it.

But as a tool, it continues to improve and amaze.

#### ArcGIS Desktop 10.3

This is something I earned as part of a scholarship in 2013, and I kick its tires every once in awhile to build something new.

### Design

#### Sketch

A note: I am horrible at design. I enjoy brutalism, and believe that speed is better than looks. That being said, I still endorse Sketch as a tool for mocking up my sites.

#### Affinity Photo and Designer.

`Much easier to deal with than a subscription for the time being, and the price was decent when I purchased them. When I become more advanced, I might look at Adobe. Not now.
