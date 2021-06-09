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
      localStorage.setItem("userData", JSON.stringify(data))
      console.log(data)
      UserDataService.create(data)
          .then(response=>{
            console.log(response)
            localStorage.setItem("userId", response.data.id);
          } )
          .catch(errors=>console.log(errors))
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserDataService
  }
}


</script>

<style>
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

input, select{
  padding: 10px;
  width: 80%;
}
/*body {*/
/*    background-color: #663399FF;*/
/*}*/
button {
    background-color: #6348FFFF;
    color: white;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
}

button:active{
  background-color: rgb(59, 24, 255);
  border: 2px white solid;
}
</style>