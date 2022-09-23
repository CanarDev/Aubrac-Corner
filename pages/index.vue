<template>

  <!-- Concept -->

  <section class="concept">

    <div class="left">
      <img src="../images/biere_concept.png" alt="">
      <div class="separation">
        <div class="white"></div>
        <div class="orange"></div>
        <div class="black"></div>
      </div>
    </div>

    <div class="right">
      <div class="title">
        <div>
          <h2>Notre Concept</h2>
          <hr>
        </div>

        <div class="global">

          <div class="color translate"></div>

          <div class="text">
            <a class="midi">
              <p>Le Midi</p>
            </a>
            <a class="soir">
              <p>Le Soir</p>
            </a>
          </div>

        </div>
      </div>

      <div class="all-menu">
        <div class="menu menu-midi">

          <div class="container">
            <p>Viande</p>
            <p>+</p>
            <p>Garniture</p>
            <p>+</p>
            <p>Boisson <span>OU</span> Dessert</p>
            <div class="price">
              <p>16€</p>
            </div>
          </div>

          <div class="container">
            <p>Viande</p>
            <p>+</p>
            <p>Garniture</p>
            <p>+</p>
            <p>Boisson <span>ET</span> Dessert</p>
            <div class="price">
              <p>18€</p>
            </div>
          </div>

        </div>

        <div class="menu menu-soir">

          <div class="container">
            <p>Viande =======<br>+</p>
            <p>Garniture <br>+</p>
            <p>Boisson <span>OU</span> Dessert</p>
            <div class="price">
              <p>16€</p>
            </div>
          </div>

          <div class="container">
            <p>Viande <br>+</p>
            <p>Garniture <br>+</p>
            <p>Boisson <span>ET</span> Dessert</p>
            <div class="price">
              <p>18€</p>
            </div>
          </div>

        </div>
      </div>


      <hr class="hr">

    </div>
  </section>
  <!-- Fin Concept -->

</template>

<script>
  export default {
    name: 'IndexPage',
    mounted() {
      let midi = document.querySelector('.midi')
      let soir = document.querySelector('.soir')
      let menus = document.querySelectorAll('.menu')

      midi.addEventListener('click', e => {
        menus.forEach(menu => {
          menu.style.animationName = "menu-soir-off"
        })
        if (document.querySelector('.translate').style.animationName == "") {
          document.querySelector('.menu-midi').style.display = "flex"
        } else {
          document.querySelector('.menu-midi').style.animationName = "menu-midi-on"
          document.querySelector('.midi').style.color = "white"
          document.querySelector('.soir').style.color = "black"
          document.querySelector('.translate').style.animationName = "btn-soir"
        }
      })
      soir.addEventListener('click', e => {
        menus.forEach(menu => {
          menu.style.animationName = "menu-midi-off"
        })
        document.querySelector('.menu-soir').style.animationName = "menu-soir-on"
        document.querySelector('.soir').style.color = "white"
        document.querySelector('.midi').style.color = "black"
        document.querySelector('.translate').style.animationName = "btn-midi"

      })
    }
  }

</script>
<style>
  @import '@/css/style.css'

</style>
