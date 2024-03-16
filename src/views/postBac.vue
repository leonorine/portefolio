<template>
  <h1 class = "titre">Mon parcours post bac</h1>
  <section class = "post">

  <ul>
    <li style="--accent-color:#582F0E">
      <div class="date">2021</div>
      <div class="title">Obtention du baccaleauréat général</div>
      <div class="descr"> Mention Numérique et Sciences Informatiques, Mathématiques et Physique Chimie.
      </div>
    </li>
    <li style="--accent-color:rgba(179,144,49,0.71)">
      <div class="date">2021-2022</div>
      <div class="title">Licence 1</div>
      <div class="descr"> Première année de licence, portail Sciences Exactes et Sciences de l'ingénieur, mention physique, mathématiques et informatique.

      </div>
    </li>
    <li style="--accent-color:#403d39">
      <div class="date">2022-2023</div>
      <div class="title">Licence 2</div>
      <div class="descr"> Deuxième année de licence, parcours informatique obtenue avec mention.</div>
    </li>
    <li style="--accent-color:#5e3f18">
      <div class="date">2023-2024</div>
      <div class="title">Licence 3</div>
      <div class="descr">Troisième année de licence, parcours et mention informatique, avec javascript full stack, génie logiciel, programmation des systèmes, langages algébriques et machine learning comme options. </div>
    </li>
  </ul>
  </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

.titre{
  margin-left: 15px;
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 25px;

}

.post {
  --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  z-index: -1;

}

.post h1 {
  color: rgba(245, 245, 245);
  text-align: left;

}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);

  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
ul li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
}
ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 25%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {

  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  ul li:nth-child(odd) {
    grid-column: 1;
  }
  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}




</style>

<script setup lang="ts">
</script>