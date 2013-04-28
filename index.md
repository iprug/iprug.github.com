---
layout: page
title: IPRUG
tagline: The source of all things Ruby in Suffolk
---
{% include JB/setup %}

{% for post in site.posts limit: 5 %}
  {% include post_detail.html %}
  ----
{% endfor %}
