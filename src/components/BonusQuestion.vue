<template>
  <div>
    <h2 class="centerTitle" v-if="validate">Merci d'avoir répondu, Votre budget est doublé !</h2>

    <div v-if="type == 'select'">
      <div v-if="!validate">
        <h3 class="centerTitle">{{title }}</h3>
        <select v-model="user.questionLabel" required>
          <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
        <button type="button" @click="updateUser">Envoyer</button>
      </div>
    </div>

    <div v-else>
      <div v-if="!validate">
        <h3 class="centerTitle">{{ title }}</h3>
        <input
            type="text"
            v-model="user.questionLabel"
            :placeholder="placeholder"
        />
        <button type="button" @click="updateUser">Envoyer</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  name: "BonusQuestion",
  data() {
    return {
      user: [],
      validate: false,
    };
  },
  props: {
    title: String,
    placeholder: String,
    options: Array,
    questionLabel: String,
    type: String
  },
  methods: {
    updateUser() {
      let ql = this.questionLabel

      let res = this.user.questionLabel
      let data = {
        [ql]: res
      }
      let question = {
        [this.title]: res
      }
      let questions = JSON.parse(localStorage.getItem("questions"));
      let allQuestions = Object.assign({}, question, questions);
      let userId = parseInt(localStorage.getItem("userId"));
      this.validate = true;
      let userData = JSON.parse(localStorage.getItem("userData"))
      let allUserData = Object.assign({}, data, userData)
      localStorage.setItem("questions", JSON.stringify(allQuestions))
      localStorage.setItem("userData", JSON.stringify(allUserData))
      localStorage.setItem("bonusActive", true);
      UserDataService.update(userId, allUserData)
          .then((response) => console.log(response))
          .catch((errors) => console.log(errors));
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserDataService,
  },
};
</script>

<style>
.fpm--modal-content {
  min-height: 60vh;
  max-height: 90%;
  background: rgb(0, 113, 251);
  background: linear-gradient(43deg, rgba(0, 113, 251, 1) 0%, #00A5E7 100%);
  color: white;
}
</style>
