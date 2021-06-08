<template lang="">
    <div>
        <div @click="clic" class="clicScreen">
            <h1>Budget : {{budget}} Radis</h1>
            <h4>radis par clic : {{radisPerClic * multiplicator}}</h4>
            <h4>Tous les investissements :</h4>
            <div  v-for="resource in allResources" :key="resource.index" @click="buyResource(resource.cost), addToMultiplicator(resource.multiplicator), addResource(resource.name)"  >
                <Resource v-if="displayResource(resource.cost)" :cost="resource.cost" :name="resource.name" :addToClic="resource.addToClick" :obtained="resource.obtained"/>
            </div>
        </div>
    </div>
</template>

<script>
import Resource from '../components/Resource'
export default {
    name:"ClicContainer",
    data() {
        return {
            budget : 0,
            multiplicator: 1,
            radisPerClic: 1,
            allResources : [
                {
                    name : "Joueuse",
                    cost : "10",
                    addToClick: "1",
                    multiplicator : 1,
                    obtained : 0
                },
                {
                    name : "Equipe amatrice",
                    cost : "50",
                    addToClick: "5",
                    multiplicator : 5,
                    obtained : 0
                },
                {
                    name : "Entraineuse",
                    cost : "100",
                    addToClick: "10",
                    multiplicator : 10,
                    obtained : 0
                },
                {
                    name : "Terrain de foot",
                    cost : "150",
                    addToClick: "15",
                    multiplicator : 15,
                    obtained : 0
                },
                {
                    name : "Equipe de L3",
                    cost : "200",
                    addToClick: "20",
                    multiplicator : 20,
                    obtained : 0
                },
                {
                    name : "Manageuse",
                    cost : "250",
                    addToClick: "25",
                    multiplicator : 25,
                    obtained : 0
                },
                {
                    name : "Tribune",
                    cost : "300",
                    addToClick: "30",
                    multiplicator : 30,
                    obtained : 0
                },
                {
                    name : "Equipe de L2",
                    cost : "350",
                    addToClick: "35",
                    multiplicator : 35,
                    obtained : 0
                },
                {
                    name : "Sponsor",
                    cost : "400",
                    addToClick: "40",
                    multiplicator : 40,
                    obtained : 0
                },
                {
                    name : "Joueuse vedette",
                    cost : "450",
                    addToClick: "45",
                    multiplicator : 45,
                    obtained : 0
                },
                {
                    name : "Stade",
                    cost : "500",
                    addToClick: "50",
                    multiplicator : 50,
                    obtained : 0
                },
                {
                    name : "Equipe de L1",
                    cost : "550",
                    addToClick: "55",
                    multiplicator : 55,
                    obtained : 0
                },
                {
                    name : "Equipe nationale",
                    cost : "600",
                    addToClick: "60",
                    multiplicator : 60,
                    obtained : 0
                },
                {
                    name : "Euro 2020",
                    cost : "1000",
                    addToClick: "100",
                    multiplicator : 100,
                    obtained : 0
                },
            ],
            resource: {},
        }
    },

    methods: {
        clic(){
            this.budget += ((parseInt(this.radisPerClic) * parseInt(this.multiplicator)))
        },

        buyResource(cost){
            this.budget -= (parseInt(cost) + (parseInt(this.radisPerClic) * parseInt(this.multiplicator)))
        },

        displayResource(cost){
            if(this.budget >= parseInt(cost)){
                return true
            }else{
                return false
            }
        },

        addResource(name){
            for(let resource of this.allResources){
                if(resource.name == name){
                    resource.obtained ++
                    console.log(resource.name)
                }
            }
        },

        addToMultiplicator(nbr){
            this.multiplicator += nbr
        },

    },

    components: {
        Resource
    }
}

</script>

<style scoped>
    .clicScreen{
        background: rgb(177, 177, 177);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .resources{
        background: rgb(255, 217, 0);
        padding: 10px;
    }
    .resourcesContent{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    li{
        list-style-type: none
    }
</style>