<template>
  <div>
    <form method="post">
      <input type="text" id="name" v-model="user.name" value="name" required >
<!--      <input v-model="message" placeholder="edit me">-->
      <div @click="saveUser">submit</div>
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
        name: this.user.name,
      }
      UserDataService.create(data)
          .then(response=>console.log(response) )
          .catch(errors=>console.log(errors))
    }
  },
  components: {
    UserDataService
  }
}
</script>

<style scoped>

</style>