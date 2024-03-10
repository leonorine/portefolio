<template>
  <section class="bandeau">
    <button @click="onMenuClick" >
      <img src="../../public/menu.png" alt="">
      Menu
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
  .bandeau{
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#130e05;
  }

  #contact{
    margin-right: 2%;
  }

  #contact a{
    text-decoration: none;
    color: white;
    border: solid 2px #B39031;
    padding: 10px;
    border-radius: 25px;
    background-color: #B39031;
  }
  #contact a:hover{
    border: solid 2px #130e05;
  }

  .milieu img{
    height: 64px;

  }

  .milieu{
    display: flex;
    align-items: center;

  }

  button{
    text-align: center;
    border: none;
    background-color: white;
    font-size: larger;
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  button img{
    height: 15px;
    margin: 0 3px ;
  }
  button:hover{
    text-decoration: underline;
  }
</style>