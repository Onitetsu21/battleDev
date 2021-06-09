<template>
  <div>

    <form method="post">
      <input type="text" id="firstName" v-model="user.firstName" placeholder="firstName" required >
      <input type="text" id="lastName" v-model="user.lastName" placeholder="lastName" required >
      <input type="email" id="email" v-model="user.email" placeholder="email" required >
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
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        gender: this.user.gender,
        dateOfBirth:this.user.dateOfBirth
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
</script>

<style scoped>
input,select,button{
  display: flex;
  margin:auto;
  margin-top:1%;
  border-radius: 0.7em;
  border-color: #6348FFFF;
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