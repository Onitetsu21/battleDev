<template lang="">
    <div>
        <h2 class="centerTitle" v-if="validate">
            Merci d'avoir répondu, Votre budget est doublé !
        </h2>
        <div v-if="!validate">
            <h3 class="centerTitle">{{ title }}</h3>
            <input
                type="text"
                v-model="questionLabel"
                :placeholder="placeholder"
            />
            <button type="button" @click="updateUser">submit</button>
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
    },
    methods: {
        updateUser() {
            let data = {
                questionLabel: this.user.questionLabel,
            };
            let userId = localStorage.getItem("userId");
            this.validate = true;
            localStorage.setItem("bonusActive", true);
            console.log(
                " dans le bonus question updateUser",
                localStorage.getItem("bonusActive")
            );
            UserDataService.update(userId, data)
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
    height: 60vh;
    max-height: 90%;
}
</style>
