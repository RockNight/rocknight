---
layout: default
title: Home
---

<!-- Aqui sempre vai vir o último post em aberto -->
<section class="card schedule">
  <header>
    <h1>Agenda</h1>
  </header>
  <ul>
    {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</section>

<!-- Aqui as 5 últimas matérias -->
<section class="materias">
  <div class="card main-materia">
    <header>
      <h1>Matéria Principal</h1>
    </header>
    <ul>
      {% for post in site.posts limit:1 %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="card last-materias">
    <header>
      <h1>Últimas Matérias</h1>
    </header>
    <ul>
      {% for post in site.posts limit:5 %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>

</section>
