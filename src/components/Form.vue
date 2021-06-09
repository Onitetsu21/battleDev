<template>
  <div>

    <form method="post">
      <input type="text" id="firstname" v-model="user.firstname" placeholder="Prénom" required >
      <input type="text" id="lastname" v-model="user.lastname" placeholder="Nom" required >
      <input type="email" id="email" v-model="user.email" placeholder="Email" required >
      <select v-model="user.gender" id="gender" required>
          <option value="">--Please choose an option--
        </option>
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
      </select>
      <input type="date" v-model="user.dateOfBirth">
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
        dateOfBirth:this.user.dateOfBirth
      }
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