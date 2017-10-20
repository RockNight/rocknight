---
layout: page
title: Entrevistas
---

<p>Quer saber mais sobre musicos e pessoas que fazem as noites de Rock n'Roll acontecer? Aqui é o lugar. Sempre estaremos trazendo entrevistas esxclusivas.</p>

<ul>
  {% for interview in site.interviews %}
    <li><a href="{{ interview.url }}">{{ interview.title }}</a></li>
  {% endfor %}
</ul>