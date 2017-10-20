---
layout: page
title: Agenda
---

<p>Aqui você vai ficar atualizado sobre tudo o que vai rolar de Rock n'Roll na semana.</p>

<ul>
  {% for schedule in site.schedules %}
    <li><a href="{{ schedule.url }}">{{ schedule.title }}</a></li>
  {% endfor %}
</ul>