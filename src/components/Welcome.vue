<template>
  <div class="container">
    <h1 class="gradient-text">Bienvenue sur AliPay tes Radis !!!</h1>
    <p class="gradient-text">Veuillez remplir ce petit formulaire pour accéder au jeu :</p>
    <p class="gradient-text"><strong>Investissez des Radis avec AliPay et gagnez l'EURO2020 !!!</strong></p>
    <div class="images">
      <img class="logo-euro" src="../assets/euro2020.webp" alt="logo de l'EURO2020">
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
.container {
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.images {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo-euro {
  height: 75px;
}

.dark-blue {
  color: #0071FB
}

.gradient-text {
  background: white;
  color: black;
  display: inline-block;
  position: relative;
}

.gradient-text::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: -webkit-linear-gradient(left, #0071FB, #00D9FF);
  background: linear-gradient(to right, #0071FB, #00D9FF);
  content: '';
  display: block;
  mix-blend-mode: screen;
}
</style>