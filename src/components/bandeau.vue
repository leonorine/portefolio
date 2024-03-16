<template>
  <section class="bandeau">
    <button @click="onMenuClick" >
      <img src="../../public/menu.png" alt="">
      <p>Menu</p>
    </button>
    <div class = "milieu">
      <h2>Portefolio</h2>
      <img src="../../public/logo.png" alt="logo">
      <h2>Léonorine Tibere</h2>
    </div>

    <div id = "contact">
      <a href="mailto:leonorine.tibere@gmail.com">Me contacter</a>
    </div>
  </section>
</template>
<script lang="ts" setup>
 import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
 const emit = defineEmits(["on-menu-click"]);
 function onMenuClick (){
   emit("on-menu-click");
 }
</script>
<style>
@media screen and (max-width: 625px){
  .milieu h2{
    display: none;
  }
  button p{
    display: none;
  }
}
  .bandeau{
    background-color: #ffffff;
    box-sizing: border-box;
    min-width: 100%;
    height: 64px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#130e05;
  }

  .bandeau #contact{
    margin-right: 2%;
    min-width: 116px;
  }

  .bandeau #contact a{
    text-decoration: none;
    color: white;
    border: solid 2px #B39031;
    padding: 10px;
    border-radius: 25px;
    background-color: #B39031;

  }
  .bandeau #contact a:hover{
    border: solid 2px #130e05;
  }

  .bandeau .milieu img{
    height: 64px;

  }

  .bandeau .milieu{
    display: flex;
    align-items: center;

  }

  .bandeau button{
    text-align: center;
    border: none;
    background-color: white;
    font-size: larger;
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-right: 10%;
  }

  .bandeau button img{
    height: 15px;
    margin: 0 3px ;
  }
  .bandeau button:hover{
    text-decoration: underline;
  }
</style>