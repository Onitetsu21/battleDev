<template lang="">
    <div>
        <h1>vous avez cliquez : {{nbrClic}} fois</h1>
        <button @click="clic">cliquez ici</button>
    </div>
</template>

<script>
export default {
    name:"ClicContainer",

    data() {
        return {
            nbrClic : 0
        }
    },

    methods: {
        clic(){
            this.nbrClic ++
        }
    },

}
</script>

<style lang="">
    
</style>