---
layout: post
title: "Are Programmers Lazy?"
---
Programmers often say that they are lazy. When they say this, they mean that they would rather invent (or discover) a solution that cuts out grunt work than do the same tasks over and over.

I think there’s a clearer way to frame it. Good programmers are lazy with respect to *grunt* work, but marked by diligence when it comes to the *mental* work of refactoring and eliminating redundancy.

That said, there *is* some wisdom in championing the traditional “programmers are lazy” trope. It incentivizes *mental* work by highlighting that mental work can save you from *grunt* work.

So, after all that, I guess I’m refactoring my site’s project section because I’m lazy.

After updating this section with a few projects, I’ve been struck with how fragile the process of hard-coding each new project in HTML. What if I forget to update one of the links? What if I ruin the section by mixing up the container hierarchy?

I’ve been trying to think of a solution to simply feed data to… something… and have it render each project. I would already know how to do this if my site were using React. I *could* build this with vanilla JavaScript by iterating over an array of project data and appending each project card to the project section.

Or I could be even lazier and look for a pre-built solution in Jekyll. There’s gotta be something, right?

<div style="text-align: center; margin-bottom: 1.5rem;"><img src="https://media.giphy.com/media/3ohzAaRJ1e5SvhIWWY/giphy.gif"></div>


Yup! [This](https://jekyllrb.com/docs/datafiles/) article in the Jekyll documentation shows how to iterate over YAML, JSON, or CSV data files via Liquid. Now I can “avoid copy-pasting large chunks of code in [my] Jekyll [template].” (You read my mind, Jekyll Docs.) After scanning some Liquid documentation I figured out how to sort it, too.

Cheers to (not?) being lazy.🥂