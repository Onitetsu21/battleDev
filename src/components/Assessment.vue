<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Pour pouvoir jouer, vous nous avez donné les informations suivantes : </p>
    <ul>
      <li>Prénom : {{ userData.firstname }}</li>
      <li>Nom : {{ userData.lastname }}</li>
      <li>Adresse mail : {{ userData.email }}</li>
      <li>Genre : {{ userData.gender }}</li>
      <li>Date de naissance : {{ userData.dateOfBirth }}</li>
    </ul>

    <p>Pour obtenir des Radis supplémentaires, vous nous avez fourni les informations suivantes : </p>
    <ul>
      <li v-for="(answer, question) in questions" :key="answer">{{ question }} : {{ answer}}</li>
    </ul>

    <p>Ces données ont de la valeur, beaucoup de valeur pour nous ! </p>
    <p>Avec celles-ci, n'importe quel aggrégateur peut, en recoupant d'autres jeux de données, fournir une liste extrêmement précise d'informations vous concernant à n'importe quelle entreprise souhaitant les acheter.</p>
    <p>Que penseriez-vous si votre banquier vous refusait un prêt parce que les informations dont il dispose vous concernant vous classe comme personne à risque ?</p>
    <p>Et si votre potentiel employeur refusait de vous embaucher à cause d'une opinion footballistique différente ?</p>
    <p>Pour en savoir plus sur la protection de vos données, nous vous invitons à vous rendre sur <a href="https://www.quechoisir.org/nos-combats-donnees-personnelles-nos-combats-et-conseils-pour-les-proteger-n63115/">cet article</a> de l'assocation Que Choisir.</p>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  name: "Assessment",
  data() {
    return {
      userData: {},
      questions: {}
    };
  },
  props: { msg: String },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      let userId = localStorage.getItem("userId");
      this.questions = JSON.parse(localStorage.getItem("questions"))
      UserDataService.get(userId)
          // eslint-disable-next-line no-undef
          .then((response) => {
            this.userData = response.data
            console.log("userData : ", this.userData)
          })
          .catch((errors) => console.log(errors))
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserDataService,
  }
}
</script>

<style scoped>

</style>