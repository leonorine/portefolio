<template>
  <section class = "section">
    <h1 class = "titre">Mon parcours professionnel</h1>
    <section class = "pro-section">
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
  </section>

</template>

<style>
@media screen and (min-width: 601px) {
  .pro{
    min-height: 100px;
    min-width: 450px;
  }
  .section .titre{
    margin-left: 15px;
  }

}
@media screen and (max-width: 600px){
  .pro{
    margin : 0;
    padding: 0;
    width: 80%;
  }
  .section{
    width: 90%;
    padding: 0;
    p{
      font-size: 13px;
    }
  }
  .section .titre{
    margin-left: 10px ;
  }


}
.section .date{
  color: #FF9F1C;
  text-align: center;
  margin : 0;
  padding: 0;
  font-size: small;
  font-weight: lighter;
}

.section .pro{
  border : 1px solid #fff7e3;
  margin : 30px 8%;
  padding: 10px;

  font-family: "Poppins", sans-serif;
}

.section .pro-section{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.section .description{
  color: #fff7e3;
  text-align: center;
  margin: 5px 25px;
}

.section .pro h4{
  text-align: center;
}

.section .titre{

  color: white;
  font-size: 20px;
  font-weight: bolder;
}



.section .titreXP{
  margin-bottom: 3px;
}

</style>

<script setup lang="ts">
</script>