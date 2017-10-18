---
layout: page
title: Agenda
---

<ul>
  {% for schedule in site.schedules %}
    <li><a href="{{ schedule.url }}">{{ schedule.title }}</a></li>
  {% endfor %}
</ul>