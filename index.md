---
layout: default
title: Home
---
<!-- Carousel -->
<div class="main-carousel">
  <div class="carousel-cell">
    <img class="" src="/assets/img/u2.jpg" alt="Show U2">
  </div>
  <div class="carousel-cell">
    <img class="" src="/assets/img/helloween.jpg" alt="Show Halloween">
  </div>
  <div class="carousel-cell">
    <img class="" src="/assets/img/lolla2018.jpg" alt="Lolla 2018">
  </div>
</div>

<div class="wrap-content">
  <!-- Aqui são as últimas matérias -->
  <section class="materias">
    <div class="card main-materia">
      <header>
        <h1>Matéria Principal</h1>
      </header>
      <ul>
        {% for post in site.posts limit:1 %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
    <div class="card last-materias">
      <header>
        <h1>Últimas Matérias</h1>
      </header>
      <ul>
        {% for post in site.posts limit:5 %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
    <div class="card interviews">
      <header>
        <h1>Entrevistas</h1>
      </header>
      <ul>
        {% for interview in site.interviews limit:3 %}
          <li><a href="{{ interview.url }}">{{ interview.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </section>


  <!-- Aqui sempre vai vir o último post em aberto -->
  <section class="card schedule">
    <header>
      <h1>Agenda</h1>
    </header>
    <ul>
      {% for schedule in site.schedules limit:1 offset:1 %}
        {{ schedule.content }}
      {% endfor %}
    </ul>
  </section>
</div>
