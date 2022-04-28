---
layout: post
title: Development Writings
permalink: /dev/
---

{% for post in site.posts %}
<h2 class="post__blurb-title"><a href="{{post.url}}">{{post.title}}</a></h2>
<p class="post__blurb-date">{{post.date | date_to_long_string}}</p>

<p class="post__blurb-copy">{{ post.content | strip_html | truncatewords: 50 }}</p>

{% endfor %}