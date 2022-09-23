<template>
  <main>
    <TheHeader/>
    <div class="mainContent">
      <TheProducts/>
      <TheFaqSection/>
    </div>
    <TheFooter/>
  </main>
</template>

<script>
export default {
    name: "IndexPage",
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: $black;
    font-family: "Rubik";
    font-size: 13px;
  }
  main {
    width: 100%;
    height: 100%;
  }
  .mainContent {
    padding: 2em;
  }
  section {
    max-width: 1000px;
    margin-bottom: 50px;
  }
</style>
