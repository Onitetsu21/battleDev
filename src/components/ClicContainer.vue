<template lang="">
    <div>
        <div @click="clic" class="clicScreen">
            <h1>Budget : {{ budget }} Radis</h1>
            <h4>radis par clic : {{ radisPerClic * multiplicator }}</h4>
            <h4>Revenus passifs : {{ income }}</h4>
            <h4>Timer : {{ timer }}</h4>
            <div  class="allResources" v-for="resource in allResources"
                :key="resource.index"
                @click="
                    buyResource(resource.cost),
                    addToMultiplicator(resource.multiplicator),
                    addResource(resource.name)"
            >
                <Resource
                    v-if="displayResource(resource.cost)"
                    :cost="resource.cost"
                    :name="resource.name"
                    :addToClic="resource.addToClick"
                    :obtained="resource.obtained"
                />
            </div>
        </div>
        <button class="btn" @click="restart">
            Sauvegarder la partie : <span v-if="storage"> Oui </span>
            <span v-else> Non </span>
        </button>
    </div>
</template>

<script>
import Resource from "../components/Resource";
export default {
    name: "ClicContainer",
    data() {
        return {
            budget: 0,
            multiplicator: 1,
            radisPerClic: 1,
            allResources: [
                {
                    name: "Joueuse",
                    cost: "10",
                    addToClick: "1",
                    multiplicator: 1,
                    obtained: 0,
                },
                {
                    name: "Equipe amatrice",
                    cost: "50",
                    addToClick: "5",
                    multiplicator: 5,
                    obtained: 0,
                },
                {
                    name: "Entraineuse",
                    cost: "100",
                    addToClick: "10",
                    multiplicator: 10,
                    obtained: 0,
                },
                {
                    name: "Terrain de foot",
                    cost: "150",
                    addToClick: "15",
                    multiplicator: 15,
                    obtained: 0,
                },
                {
                    name: "Equipe de L3",
                    cost: "200",
                    addToClick: "20",
                    multiplicator: 20,
                    obtained: 0,
                },
                {
                    name: "Manageuse",
                    cost: "250",
                    addToClick: "25",
                    multiplicator: 25,
                    obtained: 0,
                },
                {
                    name: "Tribune",
                    cost: "300",
                    addToClick: "30",
                    multiplicator: 30,
                    obtained: 0,
                },
                {
                    name: "Equipe de L2",
                    cost: "350",
                    addToClick: "35",
                    multiplicator: 35,
                    obtained: 0,
                },
                {
                    name: "Sponsor",
                    cost: "400",
                    addToClick: "40",
                    multiplicator: 40,
                    obtained: 0,
                },
                {
                    name: "Joueuse vedette",
                    cost: "450",
                    addToClick: "45",
                    multiplicator: 45,
                    obtained: 0,
                },
                {
                    name: "Stade",
                    cost: "500",
                    addToClick: "50",
                    multiplicator: 50,
                    obtained: 0,
                },
                {
                    name: "Equipe de L1",
                    cost: "550",
                    addToClick: "55",
                    multiplicator: 55,
                    obtained: 0,
                },
                {
                    name: "Equipe nationale",
                    cost: "600",
                    addToClick: "60",
                    multiplicator: 60,
                    obtained: 0,
                },
                {
                    name: "Euro 2020",
                    cost: "1000",
                    addToClick: "100",
                    multiplicator: 100,
                    obtained: 0,
                },
            ],
            resource: {},
            income: 30,
            incomeRate: 10,
            timer: 0,
            storage: false,
        };
    },
    mounted() {
        this.increaseTimer();
        if (localStorage.budget) {
            this.budget = parseInt(localStorage.budget);
            this.allResources = JSON.parse(localStorage.allResources);
            this.radisPerClic = parseInt(localStorage.radisPerClic);
            this.income = parseInt(localStorage.income);
            this.multiplicator = parseInt(localStorage.multiplicator);
            this.storage = localStorage.storage
            this.timeBonus(this.timeSinceLastConnection(localStorage.lastConnection, Date.now()))
        }
        
    },

    updated() {
        if (this.storage) {
            localStorage.setItem("budget", parseInt(this.budget));
            localStorage.setItem(
                "allResources",
                JSON.stringify(this.allResources)
            );
            localStorage.setItem("radisPerClic", parseInt(this.radisPerClic));
            localStorage.setItem("income", this.income);
            localStorage.setItem("multiplicator", this.multiplicator);
            localStorage.setItem("lastConnection", Date.now())
            localStorage.setItem("storage", this.storage)
        }
    },

    methods: {
        clic() {
            this.budget +=
                parseInt(this.radisPerClic) * parseInt(this.multiplicator);
        },

        buyResource(cost) {
            this.budget -=
                parseInt(cost) +
                parseInt(this.radisPerClic) * parseInt(this.multiplicator);
            this.income += parseInt(this.multiplicator);
        },

        displayResource(cost) {
            if (this.budget >= parseInt(cost)) {
                return true;
            } else {
                return false;
            }
        },

        addResource(name) {
            for (let resource of this.allResources) {
                if (resource.name == name) {
                    resource.obtained++;
                    console.log(resource.name);
                }
            }
        },

        addToMultiplicator(nbr) {
            this.multiplicator += nbr;
        },

        increaseTimer() {
            setInterval(() => {
                this.timer++;
                if (this.timer == this.incomeRate + 1) {
                    this.timer = 0;
                    this.budget += this.income;
                }
            }, 1000);
        },

        restart() {
            // localStorage.removeItem('budget')
            // localStorage.removeItem("allResources")
            // localStorage.removeItem("radisPerClic")
            // localStorage.removeItem("income")
            // localStorage.removeItem("multiplicator")
            console.log("avant: ", this.storage);
            if (this.storage) {
                localStorage.clear();
                this.storage = false;
            } else {
                this.storage = true;
            }
            console.log("après:", this.storage);
        },

        timeSinceLastConnection(date1, date2) {
            var diff = {}; // Initialisation du retour
            var tmp = date2 - date1;

            tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
            diff.sec = tmp % 60; // Extraction du nombre de secondes

            tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
            diff.min = tmp % 60; // Extraction du nombre de minutes

            tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
            diff.hour = tmp % 24; // Extraction du nombre d'heures

            tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
            diff.day = tmp;
            console.log(diff);
            let totalSec = diff.sec + (diff.min * 60) + (diff.hour * 3600) + (diff.day * 86400)
          
            console.log("totalSec", totalSec)
            return totalSec;
        },

        timeBonus(sec){
            let totalBonus = Math.round(sec * (this.income/this.incomeRate))
            console.log("totalBonus", totalBonus);
            this.budget += totalBonus
            window.alert("En votre absence vous avez gagné : " + totalBonus + " radis")
        }
    },

    components: {
        Resource,
    },
};
</script>

<style>
.clicScreen {
    background: rgb(177, 177, 177);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

li {
    list-style-type: none;
}

.btn {
    background: rgb(99, 72, 255);
    color: white;
    padding: 10px;
    /* border-radius: 5px;
        border: 2px white solid; */
}

.allResources{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
