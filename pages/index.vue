<template>

  <!-- Concept -->
  
  <section class="concept">
    
    <h2>Notre Concept</h2>
    
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
    
    <div class="menu menu-midi">
      
      <div class="container">
        <p>Viande +</p>
        <p>Garniture +</p>
        <p>Boisson <span>OU</span> Dessert</p>
        <div class="price">
          <p>16€</p>
        </div>
      </div>
      
      <div class="container">
        <p>Viande +</p>
        <p>Garniture +</p>
        <p>Boisson <span>ET</span> Dessert</p>
        <div class="price">
          <p>18€</p>
        </div>
      </div>
      
    </div>
    
    <div class="menu menu-soir">
    </div>

    <!-- Fin Concept -->
    
  </section>
  
</template>

<script>
  export default {
    name: 'IndexPage',
  }

</script>
<style>
  @import '@/css/style.css'

</style>
