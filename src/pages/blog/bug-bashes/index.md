---
title:  "Ensuring Robust Code and Teams with Bug Bashes"
date: "2018-09-01T22:12:03.284Z"
---

Let's talk about the thing you just made with your team. It's probably not the best. It's got lots of bugs, but you're not sure of what all the bugs are, and you're not sure whether the team is on the same page about the importance of the bugs you see. You can't afford a dedicated QA team. What you need is something that you work with any development team, and that will only take this team about 2 hours.

_Well good news, I have something for you..._

<iframe src="https://giphy.com/embed/mP94uHyKvY1nq" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxadhd-cute-dog-fox-mP94uHyKvY1nq">via GIPHY</a></p>

## Introducing: The Bug Bash

In my last job over at @careerjsm, there was a technique we used before a major feature or during a maintenance cycle we called a _Bug Bash_. As a small (but nimble) team of developers, we did not have any QA specialists. While our server-side testing was easy in terms of the tests built and the responses given, there are many things that our tests didn't cover. But we didn't despair: This bug bash was a tool that allowed us both to figure out both bugs and UI shortcomings, order them in terms of priority, and offer both team cohesion and a roadmap that ensures a robust product for a given customer.

<iframe src="https://giphy.com/embed/3ov9jTeFRZpGrYAQJa" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/topshelfrecords-people-like-you-variations-on-an-aria-3ov9jTeFRZpGrYAQJa">via GIPHY</a></p>

## How to Bash those Bugs

First off, I have bad news for all you antisocial developers out there: _This is a meeting_. But it's also a competition. Block off at least two 40-minute blocks, if this is your first attempt. You're going to need a boardroom, and at least one projector or television screen which you can plug into with your laptop. You're going to want a whiteboard as well. Everyone who plays will need to have a laptop.

![This is a decent meeting room](https://cdn.brianbancroft.io/images/brianbancroftio/blog-articles/meeting-room.jpg)

### Set the table

#### Make a Kanban Board

There's many ways you can capture the bugs which are discovered. Kanban boards are the best, but if you use Github, I suggest you check out their _Issues_ and _Projects_ features. You can have a kanban board of Github issues as well as cards, and you can turn any card in a team-based project board into a github issue for any repo within that team. Start a project board, and open up only **one** column called _"New Bugs"_.

#### Build the Motivation

You're also going to want to get a gift card or some cash, _because this is actually a competition_... See if you can get the C-suite of the superbosses to donate to the cause if you're in a smaller organization. Usually one of them, upon figuring out what this is for, will just expense it and tell you to buy a $75 CAD gift card to your favorite place and pass the receipt to the finance guy.

#### Grab the Senior on Deck

Ensure that there's one senior person in attendance. You should have someone boss enough to ensure team-wide buy-in.

#### Set a Staging Environment

Finally, ensure that you have a staging server set up, and not a development environment, so that you can test under realistic conditions. This is also good if you want to bring in non-technical team-members into this exercise. Maybe a customer service rep wants to help out more, but doesn't know how. Maybe this could also be a good time to show off to a sales person what the team has accomplished since last cycle. But only if your sales team knows that things _will_ have bugs before they're released, and that they won't panic at the sight of one.

### Explain the rules

One of the great motivators is the prospect of a competition. I've often been told that one of the best motivators of small teams is the competition, something I've seen to great effect when training soldiers in years past. This is where the gift card comes in: _It goes to the person who finds the most new-and-severe undiscovered bugs or flaws_. Here's a basic set of rules I've used in the past which works to that effect:

- Everyone makes cards for new issues.
- The first person to capture the issue gets the points.
- Existing and captured issues prior to the bash are worth zero.
- At the end of 30 minutes, people finish the last card they're working on, and _pencils down_.
- At the end, people vote on each issue:
  - No priority: 0 points
  - Low Priority: 1 point
  - High Priority: 2 points
  - Mustfix ASAP: 3 points

In addition, encourage everyone to explain what they see as clearly as possible. If people can't understand the bug, then it will hurt their score in the vote. Show them techniques such as [taking screenshots on a Mac](https://www.google.ca/search?q=screenshot+mac&oq=screenshot+mac&aqs=chrome..69i57.3766j0j7&sourceid=chrome&ie=UTF-8), [Snipping Tool in Windows](https://support.microsoft.com/en-ca/help/13776/windows-use-snipping-tool-to-capture-screenshots), [Screenshots and Screencasts in Ubuntu](https://help.ubuntu.com/stable/ubuntu-help/screen-shot-record.html), or my personal favorite, [Loom for taking screencasts quickly](https://useloom.com). These tools are great for communicating the issue, where words alone wouldn't suffice...

### Set the Clock

On the big screen, try to have a counter run down. 30 minutes. Try to get one of the team members to grab some tunes to help everybody get in the mood. Once the time has run out, it's time to move to the next part...

### Sort and Vote on the Bugs

This is a vote. In your kanban board, make a few new columns:

- Wontfix
- Low Priority
- High Priority
- Mustfix

Then go through the kanban board of bugs. For each bug, have the author of the card talk about the bug for a few moments. Once she or he has said their piece, take it to a vote by a show of hands, or something more intracite if you have a polling solution that can take just as fast on hand. Once the cards are all done, tally them up by points on a whiteboard. The member with the most points walks with the card, and the game is over. But the actual work just begins.

### Go Forth, and Fight the Bugs!

What you come out of this is a series of bugs that you need to fight. Maybe it belongs in the next cycle. Maybe it should be taken care of in some other manner in accordance with your style of management. That's up to you.

What you get out of this event are two things:

- A list of deficiencies from your product; and
- Team buy-in that these are deficiencies which must be resolved.

The rest is up to you and your team. Go forth and make your things robust!

<iframe src="https://giphy.com/embed/zdffjd0BKYcAU" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-corgi-snugglehug-zdffjd0BKYcAU">via GIPHY</a></p>
