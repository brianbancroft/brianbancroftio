---
title: Resume Builder
date: "2016-12-24T22:12:03.284Z"
preview: https://s3.amazonaws.com/cdn.brianbancroft.io/images/brianbancroftio/portfolio/resume-builder/resume-builder-icon.jpg
---

![](https://s3.amazonaws.com/cdn.brianbancroft.io/images/brianbancroftio/portfolio/resume-builder/resume-builder-view1.jpg)

## Why?

One of my first projects at CareerJSM was to build a Resume Builder, so that customers who weren't expert with Office, or at building Resumes could build their resumes from scratch. Thanks to step-by-step on-screen guidance explaining what the job-seeker should expect as they build their resumes as they construct their work history, as well as other resources, the resume builder was successful in diverting career coach time away from the basics of "how to build a resume" and technical problems with Word or an equivalent word processor, and more on the soft-coaching!

## How

* Use a JS library to insert content directly into XML docs for Word, Word 2003+
* Use a rails library and 3rd party api to feed HTML and Style directly into a PDF view
* Use jsonresume's agreed syntax as a starting point for the data structure for a job-seeker's resume
* Build on that.

### The Stack:

* Json Resume
* Ruby on Rails
* Ember JS
* A really-awesome UX/UI/Designer ( TODO: Get link for Charles Wu)

![](https://s3.amazonaws.com/cdn.brianbancroft.io/images/brianbancroftio/portfolio/resume-builder/resume-builder-view2.jpg)

### The Procedure

While the UX/UI chief was determinging how the featureset would feel like, and how it would taste, I set off to build the API, frequently checking back to ensure that my colleague's concept of operations didn't change often (and adjusting whenever it was likely to happen).

One of the guiding philosophies of Ember is that "Your app is not a special snowflake". A resume builder is a Create-Read-Update-Delete (CRUD) app, just like most others... With that in mind, I built CRUD endpoints. The models were straightforward as well. Because this is literally being used as a document store, most of the columns were writen as Postgres JSONB datatypes, to give Mongo-like document store abilities to the app, something I found to be important when trying to build iteratable sections, such as education or job history.

The second step was to build a sample page for loading, creating, and deleting resumes. Something to prove the connection of the application.

The next step involved a selector page for switching resume styles. This was just a series of icons that would update one text column in the resume record when clicked.

Following that, the fourth step was another sample page for the non-iterable resume content: Introductions, names, summary data and other miscellany of the job-seeker.

Finally the last challenge was in the form of modifying iterable data in the context of Ember models. This was for jobs, education, awards, and anything iterable...

Once all that was done, the remainder fell into building the actual views. In this time, UX/UI was gracious enough to have prototypes. I took all that content, and built that into reality.

## Sample Outputs

While you can find my real resume in my contact page, the following are sample resumes generated from this resume builder with about five minutes of effort:

* [PDF](https://s3.amazonaws.com/cdn.brianbancroft.io/images/brianbancroftio/portfolio/resume-builder/sample-resume-1.pdf)
* [DocX](https://s3.amazonaws.com/cdn.brianbancroft.io/images/brianbancroftio/portfolio/resume-builder/sample-resume-2.docx)
