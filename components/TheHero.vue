<template>
  <section>
  <div class="filter">
    <div class="titledeco">
      <h1>AUBRAC CORNER</h1>
      <div class="orangeLine"></div>
      <div class="whiteLine"></div>
    </div>
    <div class="herotext">
      <p><span>"</span>De la<br><span>BIERE,</span><br><span class="rotate">de la</span><span>VIANDE,</span> et des<br><span>COPAINS"</span></p>
      <img src="~/assets/aubrac_out_typo.png" alt="">
    </div>
    <div class="footHero">
      <p>en savoir plus ↓</p>
    </div>


  </div>
  </section>
</template>

<script>
export default {
  name: "TheHero"
}
</script>

<style lang="scss" scoped>
section {
  height: 85vh;
  background-image: url("./assets/stand_aubrac.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  .filter {
    background-color: rgba(51, 50, 48, 0.84);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .titledeco{
      align-self: end;
      display: flex;
      flex-direction: column;
      h1 {
        letter-spacing: 12px;
        color: #FBFBFB;
        font-size: 40px;
        align-self: end;
        margin-right: 20px;
        margin-bottom: 20px;
      }
      .orangeLine {
        background-color: #C64E1C;
        height: 10px;
        border-radius: 100px 0 0 100px;
        width: 80%;
        align-self: end;
        margin-bottom: 10px;
      }
      .whiteLine {
        background-color: #FBFBFB;
        height: 8px;
        border-radius: 100px 0 0 100px;
        width: 65%;
        align-self: end;
      }
    }
  }
  .herotext {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin-top: -50px;
    p {
      color: #FBFBFB;
      font-size: 36px;
      span {
        color: #FBFBFB;
        font-size: 55px;
        letter-spacing: 5px;
        font-weight: 800;
      }
      .rotate {
        color: #FBFBFB;
        font-size: 36px;
        transform: rotate(-90deg);
      }
    }
    img {

    }
  }
  .footHero {
    text-align: center;
    p {
      color: #FBFBFB;
    }
  }
}
</style>
