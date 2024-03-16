<template>
  <section :class="['sidebar',{'sidebar--open':open}]">
    <div id ="close" @click="onCroixClick">
      <img src="../../public/croix.png" alt="">
    </div>

    <div id = "choix">
      <ul>
      <li> <RouterLink to="/">Accueil</RouterLink> </li>
      <li> <RouterLink to="/projects">Projets</RouterLink> </li>
      <li><RouterLink to="/postBac">Parcours post bac </RouterLink></li>
      <li> <RouterLink to="/pro">Parcours professionnel </RouterLink></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.sidebar{
  color:white;
  position: absolute;
  top:-450px;
  left: 0px;
  background-color: #231a15;
  width: 160px;
  height: 330px;
  transition:top 0.4s;
  border-bottom-right-radius: 15%;




  &--open{
    top: 64px;
    transition:
        top 0.6s
  }
}
.sidebar #close{
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  &:hover {
    img {
      height: 35px;
      transition:
          height 0.1s
    }
  }
  img{
    height: 30px;
    transition:
        height 0.1s
  }
}

.sidebar #choix{
  position: absolute;
  top: 20px;
  left: -45px;

}

.sidebar #choix li{

  text-decoration: none;

  /*&:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }*/

  a {
    text-decoration: none;
    color: unset;
  }

  a:visited {
    color: unset;
    text-decoration: none;
  }
}

.sidebar #choix li:hover{
  text-decoration: underline;
}

.sidebar #choix ul{
  list-style-type: none;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 3px;

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


ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

</style>

<script lang="ts" setup>
  import {RouterLink} from "vue-router";

  const props = defineProps({
    open: Boolean
  });
  const emit = defineEmits(["on-croix-click"]);
  function onCroixClick (){
    emit("on-croix-click");
  }
</script>