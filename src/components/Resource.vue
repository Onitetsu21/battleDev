<template lang="">
    <div>
        <div class="resourcesContent">
                <div class="buyButton resources"> Coût : {{cost}} radis</div>
                <div class="player resources" ><strong>Acheter {{name}}</strong>  |  +{{addToClic}} par clic</div>
                <div class="resources">X{{obtained}}</div>

        </div>
    </div>
</template>
<script>
export default {
    name:"resource",
    props: {
        cost: String,
        name: String,
        addToClic: String,
        obtained: Number
    },
    data() {
        return {
            resourceDisplay : false
        }
    },
    methods: {

    },

    
}
</script>
<style >
    .resourcesContent > *{
        margin: 5px;
    }
</style>