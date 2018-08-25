---
title:  "Changing Culture - How to Fix that Thing"
date: "2018-05-14T22:12:03.284Z"
---

#### How I Solved that Problem and Changed the Culture… a little bit

![](https://cdn-images-1.medium.com/max/1600/1*hETjgutmoOXSlQMwF8D1kw.png)

A few months ago, I carried out one of my bigger to-do's in life: To fundamentally change one aspect of the culture of a technology company for the better. This is something that everyone aspires to do. You're working somewhere, and it's really mediocre. Or it's okay. Or it's horrible. Or, as in my case, it's really nice but something's got to change.

## The Problem

In this case, it was how our code was being deployed live to the end-user, and how we were pushing new features ( things which you create in an application, and sending them to their intended audience). We lumped everything together in large unmanageable clumps, and sent it all up. One clump per project. This was painful when you had multiple things on the go and it set the codebase up for conflict. It also made peer-review more difficult as our methods rewarded larger changes rather than smaller. The review of larger changes wasn't great as it meant that more things slipped by your peers during QA and by being the red team.

![](https://cdn-images-1.medium.com/max/1600/1*IkpfVpfcBa2i8REVJ7RL7A.png)

After talking to a colleague about this over beers, he suggested a solution known as "[Feature Toggles](https://medium.com/r/?url=https%3A%2F%2Fmartinfowler.com%2Farticles%2Ffeature-toggles.html)", which allows you to control what the end-user sees by flipping a switch, rather than changing the code. I studied it, and I quickly saw this as a likely solution to one of the problems which ailed the team. I then pitched it, prototyped it, pursued buy-in, pursued its completion, then pushed it home.

## Here's how I did it:

![](https://cdn-images-1.medium.com/max/1600/1*IOZ_l-J1fpq7tkpZhjruIg.png)
_Whiteboards Help._

## Pitching it.

The truth is that all bosses worth their salt will always seek improvement and efficiency in their operation, and will be glad to accept help by any established team member. But it's also true that all bosses worth their salt don't have a lot of time to give between the fires one must put out as a boss, and the near-endless review of the work presented by the team. So when I pitched this wonderful salve, I kept it to five minutes under the following structure:

> *What:* _What is the problem?_

> *So What:* _What are the consequences of this problem?_

> *Now What:* _What can we do to solve the problem which is dragging us down?_

Like any good interview, 5 minutes of pitch quickly turned to 40 minutes of questions and answers. At this stage, I was in. Now I had to show someplace where it could work…

![](https://cdn-images-1.medium.com/max/1600/1*ixBFnImJKhGL8viVZYL52w.png)

## Prototyping It

For me, this was the second-hardest part. Take some of the codebase, and show how it could work in an applied fashion. To make the prototype, I had to carry it out under the following criteria:

### It had to be easy to implement

Doing something the first time can be tricky. Doing it the second time should be easier. The level of difficulty of any major change should be manageable by everyone.

### It had to be slim and quick

There are other problems I have to solve in my day-to-day. This prototype had to be lean enough to show that it solved the one problem and not a project onto itself (yet)

### It has to solve the problem

While being slim, the prototype built had to be enough to demonstrate that this thing could solve what ails us.

### The problems created by this solution had to be better than the problems this solution 'solve'

One of the greatest truths is that problems are like energy: You can't destroy problems or create problems. You can only convert one type of problem into another. My feature toggle project was going to solve 2–3 problems, and one big problem we didn't know we had. The prototype that I built had to demonstrate that the resulting problems were also preferable.

![](https://cdn-images-1.medium.com/max/1600/1*NyikbR6HMGcfmfd8exmCxA.png)

## Pursue buy-in

Human attention spans are tricky things, and sometimes you have a message to sell. At this point I've built a prototype, and I've achieved buy-in from my CTO whom I initially pitched the topic to. Now I have to sell it to the rest of the team. I had to explain, and present a workshop, and the team had to buy in. Here's what I did:

_First_, I held a 40-minute discussion. I had the CEO, head of customer operations, CTO and the dev team in the audience. Here, I offered the high-level overview over 20 minutes, and sat through 20 minutes of questions. I tried to keep the technical jargon out of the lecture and focused more on 'how this will work' and 'what the outcomes are' at a high level. This was especially useful as the CEO found one more problem my proposed solution would solve. This wouldn't be possible if I glazed his eyes over with jargon, or went on for too long. I find that 40 minutes is that magical number: Go longer and people will look the exits, no matter the topic.

_Second_, I did a one-hour workshop for the dev team. I had everyone for the front-end portion, then I let the front-end only dev's off and spend the other 30-minutes on the back end implementation. All of this was technical, and hands-on, using my favourite EDI method of instruction:

> *Explain:* _This is the thing we're about to do. This is why we're doing it and this is how we do it. All using spoken word_

> *Demonstrate:* _This is how I am doing the thing. Notice how I am doing this particular bit_

> *Imitate:* _Have them do the thing while you speak. Have them try to do it again, with you paying attention to how they do it._

The workshop was a success. People were energized that there was a solution to a problem which many people were experiencing, but this story is not over. Now I had to build all of this thing…

![](https://cdn-images-1.medium.com/max/1600/1*noU7NEodzK5me_Nf4zKIQw.png)
## Perform its completion

At this stage, the prototype worked, and the buy-in was a success. Now I had to build it out across the entire company codebase. This wasn't the hardest part, but the most frustrating. Some of my ideas on under-the-hood implementation had to be sent back to the drawing board. There were also a handful of conventions that required tweaking. But after a few trial runs after building new features, I had something that I could share with the rest of the team which they could use across all of their works. Now comes the hardest part…

![](https://cdn-images-1.medium.com/max/1600/1*NmBAYpPRqg59Od4Cs9vr_A.png)
## Push it Home

This is where you have to implement, supervise and see the project to its end. It's built, the team knows how to use this at an academic level, and everyone knows it's coming. Now it's time to change habits.

In addition to my normal projects. I kept a close eye on what the rest of the team was doing. Every opportunity for peer-review, I came in and showed them how they could implement my solution. First there was the confusion: It took a little more convincing that you can push something live to production and still have that thing not be seen by the end-users. Eventually my peers would ask more questions. Questions are the best because it proves their willingness to try as well as their curiosity. Questions are good. Gripes are good because there are opportunities to improve on your solution. At this stage, silence is bad. Silence is a death rattle.
My biggest take-home in pursuing this and other projects is that in managing people, the new thing you are trying to implement will almost certainly go wrong the first time you attempt it. Actors and soldiers rehearse before they do their things, athletes practice endlessly. Most employees don't get that big an opportunity - there are other things to do, after all!
If you are going to implement that change you've been talking about, take the time to let people know: Give them a day or two to sink it in. And accept that it's not going to work the first (or second time). Patience and assistance will go a long way into solving that thing.
Hopefully after some time, you've solved the thing. If so, congratulations! If it failed, no worries. Learn. Increment. Grow. Then succeed. Failure is part of the learning.

---

## Afterword
I've since moved onto work that's closer to my heart in the geospatial sector, but the thing (feature toggles) that I solved is still being used by the company, both as a process and a selling feature to smaller clients.
I was lucky to have a boss who encouraged these changes, and a CEO who was willing to adopt it to his own ends. Remember: Things can be solved, and if you can do it, people will remember you for it.
