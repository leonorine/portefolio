<template>
  <section :class="['sidebar',{'sidebar--open':open}]">
    <div id ="close" @click="onCroixClick">
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="20" x2="30" y2="30" stroke="black" stroke-width="2" />
      <line x1="30" y1="20" x2="20" y2="30" stroke="black" stroke-width="2" />
    </svg>
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
  top:64px;
  left: -200px;
  background-color: #2a303f;
  width: 160px;
  height: 100%;
  z-index: 1;
  transition:left 0.3s;



  &--open{
    left: 0;
    transition:
        left 0.5s
  }
}
#close{
  position: absolute;
  right: -60px;
  top: -10px;
  cursor: pointer;

  &:hover {
    svg {
      zoom: 1.5;
    }
  }
}

#choix{
  position: absolute;
  top: 20px;
  left: -30px;
}

#choix li{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  a {
    text-decoration: none;
    color: unset;
  }

  a:visited {
    color: unset;
    text-decoration: none;
  }
}

#choix li:hover{
  text-decoration: underline;
}

#choix ul{
  list-style-type: none;
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