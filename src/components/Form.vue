<template>
  <div>

    <form method="post">
      <input type="text" id="firstname" v-model="user.firstname" placeholder="prénom" required >
      <input type="text" id="lastname" v-model="user.lastname" placeholder="Nom" required >
      <input type="email" id="email" v-model="user.email" placeholder="email" required >
      <div class="select">
        <label>sexe:</label>
        <select v-model="user.gender" id="gender" required>
            <option disabled value="">Choisissez</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Agenre">Agenre</option>
            <option value="Cis-Femme">Cis-Femme</option>
            <option value="Cis-Homme">Cis-Homme</option>
            <option value="FTM">FTM</option>
            <option value="MTF">MTF</option>
          <option value="Transgenre">Transgenre</option>
          <option value="Genderfluid">Genderfluid</option>
          <option value="Intersexe">Intersexe</option>
          <option value="Personne Non-binaire">Personne Non-binaire</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <input type="date" v-model="user.dateOfBirth">
      <input type="text" v-model="user.nationality" placeholder="nationalité">
      <input type="number" v-model="user.zipCode" placeholder="code postal">
      <input type="text" v-model="user.city" placeholder="ville">
      <input type="text" v-model="user.street" placeholder="rue">
      <button type="button" @click="saveUser">submit</button>
    </form>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";
export default {
  name: "Form",
  // props: {},
  data() {
    return {
      user:[]
    }

  },
  methods: {
    saveUser(){
      let data = {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        gender: this.user.gender,
        dateOfBirth:this.user.dateOfBirth,
        zipCode:this.user.zipCode,
        nationality:this.user.nationality,
        city:this.user.city,
        street:this.user.street
      }
      UserDataService.create(data)
          .then(response=>console.log(response) )
          .catch(errors=>console.log(errors))
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserDataService
  }
}
// eslint-disable-next-line no-unused-vars
let allQuestions = [
  {
      title: "avez-vous une maison",
      options: [
          "oui",
          "non"
      ],
      questionLabel: "housing"
  },
  {
    title:"combien de voiture avez-vous",
    options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ],
    questionLabel: "numberOfVehicles"
  },
  {
    title: "Quel est le fournisseur de votre accee internet",
    textera:"",
    questionLabel:"internetServiceProvider"
  },
  {
    title: "Quel est le fournisseur de votre forfait mobile",
    textera:"",
    questionLabel:"mobileOperator"
  },
  {
    title:"Quel est chaine de sport étent vous abonner",
    textera:"",
    questionLabel:"subscribesToSportChannels"
  },
  {
    title:"Comment se nomme votre religion",
    textera:"",
    questionLabel:"religions"
  },
  {
    title:"Combien avez-vous de frère et soeur",
    options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ],
    questionLabel:"numberOfSiblings"
  },
  {
    title:"Quel est votre status civil",
    options:[
        "célib",
        "union libre",
        "pacs",
        "marier",
        "polyamour",
        "trouple",
        "autre"
    ],
    questionLabel:"civilStatus"
  },
  {
    title:"Quel est votre orientation sexule",
    options:[
        "bi",
        "hétérosexuel",
        "hommosexuel"
    ],
    questionLabel:"sexualOrientation"
  },
  {
    title:"Combien avez-vous d'enfant",
    options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ],
    questionLabel:"numberOfChildren"
  },
  {
    title:"combien avez-vous d'animeau de compagnie",
    options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ],
    questionLabel:"numberOfPets"
  },
  {
    title:"Avez-vous étais vacciné du covid 19",
    options: [
        "Oui",
        "Non"
    ],
    questionLabel:"covidVaccinated"
  },
  {
    title: "Buvez-vous de l'alcool ?",
    options: [
      "oui",
      "non"
    ],
    questionLabel: "drinklAlcool"
  },
  {
    title:"Fumez-vous du tabac",
    options: [
        "Oui",
        "Non"
    ],
    questionLabel:"smokesTobacco"
  },
  {
    title:"lisez-vous des revus sportif",
    options: [
        "Oui",
        "Non"
    ],
    questionLabel:"readsSportPress"
  },
  {
    title:"regardez-vous des émission sportif",
    options: ["oui", "Non"],
    questionLabel:"watchSportShow"
  },
  {
    title:"Faites-vous du sport",
    options: ["Oui","Non"],
    questionLabel:"doesSport"
  },
  {
    title:"Est-ce que vous jouez au foot",
    options: ["Oui","Non"],
    questionLabel:"playsFootball"
  },
  {
    title: "Allez-vous au stade regerder des match",
    options: ["oui","Non"],
    questionLabel:"goesToFootballStadium"
  },
  {
    title:"Quel est votre Club de foot préférée",
    textera: "",
    questionLabel:"favouriteFootballClub",
  },
  {
    title:"Quel est votre équipe de foot préférée",
    textera:"",
    questionLabel:"favouriteFootballTeam"
  },
  {
    title:"Vous étes plutôt Rugby ou Foot",
    options: ["Rugby","Foot"],
    questionLabel:"prefersFootballOverRugby"
  },
  {
    title:"regardez-vous des match sur votre TV",
    options: ["oui","Non"],
    questionLabel:"watchesFootballOnTV"
  },
  {
    title:"regardez-vous des match sur votre Mobile",
    options: ["oui","Non"],
    questionLabel:"watchesFootballOnMobilePhone"
  },
  {
    title:"regardez-vous des match via un navigateur web",
    options: ["oui","Non"],
    questionLabel:"watchesFootballOnline"
  }
]

</script>

<style scoped>
input,select,button{
  display: flex;
  margin:auto;
  margin-top:1%;
  border-radius: 0.7em;
  border-color: #6348FFFF;
  text-align: center;
}
label{
  /*margin-top: 1%;*/
  margin: auto;
}
input{
  width: 16%;
}
div.select {
    display: inline-flex;
    margin-top: 1%;
}
div.select select {
  width: 8rem;
}
/*body {*/
/*    background-color: #663399FF;*/
/*}*/
button {
    background-color: #6348FFFF;
    color: white;
    padding: 10px;
    border: none;
}
</style>