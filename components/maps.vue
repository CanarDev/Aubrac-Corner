<template>
  <section>
    <div class="informations">
      <h1>L'aubrac Corner</h1>
      <p>De la <span>bière</span>,<br>de la <span>viande</span><br>et des <span>copains</span></p>
      <div class="container-button">
        <a class="button" href="https://linktr.ee/aubraccorner" target="_blank">
          Reserver ou privatiser l'aubrac ? cliquez ici
        </a>
      </div>

    </div>
    <div class="maps">
      <div class="mapouter"><div class="gmap_canvas"><iframe width="699" height="709" id="gmap_canvas" src="https://maps.google.com/maps?q=36%20bd%20de%20pesaro&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:709px;width:699px;}</style><a href="https://www.embedgooglemap.net">embedding google maps into website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:50vh;width:100%;}</style></div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "maps"
}
</script>

<style lang="scss" scoped>

section {
  display: flex;
  justify-content: space-between;
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  margin: 0 auto;
  font-family: "Rubik", sans-serif;

  .informations {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 40px;
      border-bottom: 2px solid #C64E1C;
      width: 80%;
    }
    p {
      color: #333230;
      font-size: 24px;
      span {
        color: #c64e1c;
      }
    }
    .container-button {
      display: flex;

      .button {
        width: fit-content;
        gap: 5px;
        text-decoration: none;
        padding: 1rem 2rem;
        display: flex;
        background-color: whitesmoke;
        color: black;
        border-right: 10px solid transparent;
        border-left: 10px solid #c64e1c;
        font-family: "Rubik", sans-serif;
        margin-right: 5%;
        transition: ease-in-out 0.1s;
      }
      .button:hover {
        background-color: #c64e1c;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        color: whitesmoke;
        transition: ease-in-out 0.2s;
        transform: translateX(20px);
      }
    }
  }
  .maps {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 60%;
    height: 100%;
    .mapouter {
      height: unset;
      width: unset;
    }
  }
}
</style>
