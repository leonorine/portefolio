<template>
  <section class = "proj">
  <div>
    <h1 class = "titre"> Projets </h1>
    <h3 class = "titre">Ceux qui m'ont le plus marqués ...</h3>
    <div class = "projets">
      <div>
        <h4 class = "titreProjet">Mon premier projet</h4>
        <p class = "description">
          Voici mon premier projet, un jeu de Dame en Python et avec une interface graphique (Tkinter).
          C'est un projet dont je suis très fière, c'est ce qui m'a fait réaliser à quel point le code allait être une partie importante de ma vie.
        </p>
      </div>
      <img src="../../public/ProjetTerminal.jpeg" alt="Projet de terminal">
    </div>

    <div class = "projets">
      <div>
        <h4 class = "titreProjet">Projet Interaction Homme-Machine</h4>
        <p class = "description">
          Ce projet consistait à inventer un prototype d'une application, en groupe de 4, j'ai profité de cette occasion afin de modéliser une maquette en 3D en lien avec notre application.
          Nous avons proposé une application de gestion des courses et des stocks par immeuble et non individuellement pour réduire les coûts et le gaspillage, les stocks étant conservés au sous-sol (voir image).
        </p>
      </div>
      <img src="../../public/ProjetIHM.jpeg" alt="Image maquette">
    </div>

    <div class = "projets">
      <div>
        <h4 class = "titreProjet">Projet "Find your restaurant"</h4>
        <p class = "description">
          C'est un site WEB que j'ai développé dans le but de noter des restaurants une fois que je les ai faits, et que le site puisse m'indiquer quels restaurants ont des similitudes avec ceux qui ont obtenu 4 étoiles ou plus.
          Cela m'a permis de faire un projet extrascolaire, et de donner libre cours à mon imagination, tout en réutilisant des éléments vu en cours comme React, par exemple.
        </p>
      </div>
      <img src="../../public/ProjetResto.jpeg" alt="Site restaurants">
    </div>

    <div class = "projets">
      <div>
        <h4 class = "titreProjet">Projet enchères</h4>
        <p class = "description">
          Fait dans le cadre de l'option Javascript Full Stack, ce site est une vente aux enchères entre plusieurs onglets ouverts. Ce projet m'a fait apercevoir le web d'une nouvelle façon, cela a été un projet très enrichissant à faire.
        </p>
      </div>
      <img src="../../public/Projet1JSFS.jpeg" alt="Site encheres">
    </div>
  </div>
  </section>
</template>

<style>
.projets img{
  width: 280px;
  height: 200px;
  margin-top: 10px;

}

.projets{
  border : 1px solid #fff7e3;
  margin : 10px 3%;
  padding: 10px;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  width: 570px;
  height: 325px;

}

.projets p{
  color: #fff7e3;
  text-align: center;
}

.projets h4{
  text-align: center;
}

.titre{
  margin-left: 15px;
  color: white;
}
.proj{
  position: absolute;
  left :20px;
}
</style>
<script setup lang="ts">
</script>