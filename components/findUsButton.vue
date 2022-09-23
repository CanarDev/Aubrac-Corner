<template>
<div class="container-button">
  <nuxt-link class="button" to="/nous-retrouver">
    <span>📍</span>
    <span>Où nous retrouver ?</span>
  </nuxt-link>
</div>
</template>

<script>
export default {
  name: "findUsButton"
}
</script>

<style lang="scss" scoped>
.container-button {
  display: flex;
  justify-content: end;
  transform: translateY(-30px);

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

</style>
