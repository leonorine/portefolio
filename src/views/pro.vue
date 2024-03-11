<template>
  <section class = "pro-section">
    <h1 class = "titre">Mon parcours professionnel</h1>
    <div class = "pro">
      <div>
        <h4 class = "titreXP"> Téléconseillère ARBS</h4>
        <h6 class = "date"> Été 2023 </h6>
        <p class = "description">
          Travail d'été en tant que téléconseillère, je répondais aux parents afin de les aider pour la commande des livres de leurs enfants et pour la revente de leurs livres à l'ARBS.
          J'ai décidé de travailler à l'ARBS afin de découvrir le monde du travail et de m'initier au travail d'équipe dans le monde professionnel.
        </p>
      </div>
    </div>

    <div class = "pro">
      <div>
        <h4 class = "titreXP"> Stage de développement </h4>
        <h6 class = "date"> Avril 2024 - Juillet 2024 </h6>
        <p class = "description">
          Dès le mois d'avril 2024, je commencerai mon stage à E-Mothep dans le développement d’une application permettant de gérer toutes les tâches administratives et opérationnelles nécessaires au suivi d’une entreprise.
        </p>
      </div>
    </div>

  </section>

</template>

<style>
.date{
  color: #FF9F1C;
  text-align: center;
  margin : 0;
  padding: 0;
  font-size: small;
  font-weight: lighter;
}

.pro{
  border : 1px solid #fff7e3;
  margin : 30px 8%;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 200px;
  width: 450px;
}

pro p{
  color: #fff7e3;
  text-align: center;
}

.pro h4{
  text-align: center;
}

.titre{
  margin-left: 15px;
  color: white;
}

.titreXP{
  margin-bottom: 3px;
}

</style>

<script setup lang="ts">
</script>