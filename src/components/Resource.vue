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
    .resources {
    background: rgb(255, 217, 0);
    padding: 10px;
}
.resourcesContent {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 5px;
    align-items: center;
}
</style>