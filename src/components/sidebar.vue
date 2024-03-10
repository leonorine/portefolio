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
  top:64px;
  left: -200px;
  background-color: #231a15;
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

#choix{
  position: absolute;
  top: 20px;
  left: -30px;

}

#choix li{

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

#choix li:hover{
  text-decoration: underline;
}

#choix ul{
  list-style-type: none;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
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