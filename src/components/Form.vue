<template>
  <div>

    <form method="post">
      <div class="form">
        <div class="formInput">
          <label>Prénom</label>
          <input type="text" id="firstname" v-model="user.firstname" placeholder="prénom" required >
        </div>
        <div class="formInput">
          <label>Nom</label>
          <input type="text" id="lastname" v-model="user.lastname" placeholder="Nom" required >
        </div>
        <div class="formInput">
          <label>Email</label>
          <input type="email" id="email" v-model="user.email" placeholder="email" required >
        </div>
        <div class="formInput">
          <label>Genre</label>
          <div class="select">
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
        </div>
        <div class="formInput">
          <label>Date de naissance</label>
          <input type="date" v-model="user.dateOfBirth">
        </div>
        <button type="button" @click="verifyData"><strong>ENVOYER</strong></button>
      </div>
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
    verifyData(){
      if (this.user.firstname && this.user.lastname && this.user.email && this.user.gender && this.user.dateOfBirth) {
        this.saveUser()
      } else {
        alert("Tous les champs ne sont pas remplis il faut obligatoirement les remplir si vous voulez jouer")
      }
    },

    saveUser(){
      let data = {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        gender: this.user.gender,
        dateOfBirth:this.user.dateOfBirth,
      }
      localStorage.setItem("userData", JSON.stringify(data))
      console.log(data)
      UserDataService.create(data)
          .then(response=>{
            console.log(response)
            localStorage.setItem("userId", response.data.id);
            this.$router.push("game")
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
.formInput{
  text-align: left;
  margin-bottom: 30px;
}

.form{
  padding: 0 20px;
}

label{
  color: white;
  font-weight: 600;
}

form{
  background: #00A5E7;
  max-width: 300px;
  margin: auto;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.4); 
  box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.4);
}
input,select,button{
  background: none;
  display: flex;
  margin:auto;
  margin-top:1%;
  border-bottom: 2px solid white !important;
  border: none;
  text-align: center;
  color: white;
}

input, select{
  padding: 10px;
  width: 92%;
  text-decoration: none;
  outline-style: none;
  text-align: left;
}

input:focus, select:focus{
   border-bottom: 2px solid rgb(0,113,251) !important;
   transition: 0.5s;
}

button {
    background: rgb(0,113,251);
    background: linear-gradient(43deg, rgba(0,113,251,1) 0%, rgba(0,217,255,1) 100%); 
    color: white;
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    margin-bottom: 10px;
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.2); 
    box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.2);
}

button:active{
  background: rgb(0,113,251);
  border: 2px white solid;
  -webkit-box-shadow: none; 
  box-shadow: none;
}
</style>