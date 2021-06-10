<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Pour obtenir des Radis, vous nous avez fourni les informations suivantes : </p>
    <ul>
      <li v-for="item in userData" :key="item">{{ item }}</li>
    </ul>

  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  name: "Assessment",
  data() {
    return {
      userData: {}
    };
  },
  props: { msg: String },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
      let userId = localStorage.getItem("userId");
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