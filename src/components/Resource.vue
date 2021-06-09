<template lang="">
    <div>
        <div class="resourcesContent">
            <div class="ressourceLeft">
                <div class="buyButton resources">Coût : {{ cost }} radis</div>
                <div class="player resources">
                    <strong>Acheter {{ name }}</strong> | +{{ addToClic }} par
                    clic
                </div>
            </div>
            <div class="resourcesRight">X{{ obtained }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "resource",
    props: {
        cost: String,
        name: String,
        addToClic: String,
        obtained: Number,
    },
    data() {
        return {
            resourceDisplay: false,
        };
    },
    methods: {},
};
</script>
<style>
.resources {
    padding: 10px;
}

.resourcesContent:active {
    background: rgb(233, 159, 0);
}

.resourcesContent {
    background: rgb(255, 217, 0);
    display: flex;
    flex-direction: row;
    width: 90vw;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
}

.ressourceLeft{
    display: flex;
    flex-direction: row;
}

.resourcesRight{
    background: rgb(233, 159, 0);
    padding: 10px;
    border-radius: 25px;
    margin-right: -15px;
}
</style>
