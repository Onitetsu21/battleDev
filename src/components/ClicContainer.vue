<template>
    <div>
        <button class="btn" @click="restart">
            Sauvegarder la partie : <span v-if="storage"> Oui </span>
            <span v-else> Non </span>
        </button>
        <div @click="clic" class="clicScreen">
            <div class="dashboard">
                <h1 class="gradient-text">Budget : {{ budget }} Radis</h1>
                <div class="dashboard_content">
                    <h4>Radis par clic : {{ radisPerClic * multiplicator }}</h4>
                    <h4>Revenus passifs : {{ income }} radis/30sec</h4>
                    <h4 class="timer"> <img src="../assets/timer.svg" alt="timer"/> {{ timer }}</h4>
                </div>
                
            </div>
            <button class="bonusBtn" v-if="bonusQuestionDisplay" @click="displayBonusQuestion">
                Multiplier vos radis par 2 !
            </button>
            <div
                class="allResources"
                v-for="resource in allResources"
                :key="resource.index"
                @click="
                    buyResource(resource.cost),
                        addToMultiplicator(resource.multiplicator),
                        addResource(resource.name)
                "
            >
                <Resource
                    v-if="displayResource(resource.cost) && resource.displayed"
                    :cost="resource.cost"
                    :name="resource.name"
                    :addToClic="resource.addToClick"
                    :obtained="resource.obtained"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Resource from "../components/Resource";
import BonusQuestion from "../components/BonusQuestion";
import Assessment from "../components/Assessment";
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
                    displayed: true,
                },
                {
                    name: "Equipe amatrice",
                    cost: "50",
                    addToClick: "5",
                    multiplicator: 5,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Entraineuse",
                    cost: "100",
                    addToClick: "10",
                    multiplicator: 10,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Terrain de foot",
                    cost: "150",
                    addToClick: "15",
                    multiplicator: 15,
                    obtained: 0,
                    displayed: false,

                },
                {
                    name: "Equipe de L3",
                    cost: "200",
                    addToClick: "20",
                    multiplicator: 20,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Manageuse",
                    cost: "250",
                    addToClick: "25",
                    multiplicator: 25,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Tribune",
                    cost: "300",
                    addToClick: "30",
                    multiplicator: 30,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Equipe de L2",
                    cost: "350",
                    addToClick: "35",
                    multiplicator: 35,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Sponsor",
                    cost: "400",
                    addToClick: "40",
                    multiplicator: 40,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Joueuse vedette",
                    cost: "450",
                    addToClick: "45",
                    multiplicator: 45,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Stade",
                    cost: "500",
                    addToClick: "50",
                    multiplicator: 50,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Equipe de L1",
                    cost: "550",
                    addToClick: "55",
                    multiplicator: 55,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Equipe nationale",
                    cost: "600",
                    addToClick: "60",
                    multiplicator: 60,
                    obtained: 0,
                    displayed: false,
                },
                {
                    name: "Euro 2020",
                    cost: "1000",
                    addToClick: "100",
                    multiplicator: 100,
                    obtained: 0,
                    displayed: false,
                },
            ],
            resource: {},
            income: 30,
            incomeRate: 10,
            timer: 0,
            storage: false,
            allBonusQuestions: [
                {
                    title: "Vivez-vous dans...?",
                    options: [
                      "un appartement",
                      "une maison",
                      "une yourte",
                      "un camion/van",
                      "un camping-car",
                      "une cabane dans les arbres",
                      "une péniche",
                      "sans domicile fixe",
                      "autre"
                    ],
                    type: "select",
                    questionLabel: "housing",
                },
                {
                    title: "Combien de voitures avez-vous ?",
                    options: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                    ],
                    type: "select",
                    questionLabel: "numberOfVehicles",
                },
                {
                    title: "Quel est votre fournisseur d'accès à internet ?",
                    type: "input",
                    questionLabel: "internetServiceProvider",
                },
                {
                    title: "Quel est votre fournisseur de forfait mobile ?",
                    type: "input",
                    questionLabel: "mobileOperator",
                },
                {
                    title: "A quelles chaînes de sport êtes-vous abonné(e)s ?",
                    type: "input",
                    questionLabel: "subscribesToSportChannels",
                },
                {
                    title: "Quel est le nom de votre religion ?",
                    type: "input",
                    questionLabel: "religions",
                },
                {
                    title: "Combien avez-vous de frères et soeurs ?",
                    options: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                    ],
                    type: "select",
                    questionLabel: "numberOfSiblings",
                },
                {
                    title: "Quel est votre statut relationnel ?",
                    options: [
                        "célibat",
                        "union libre",
                        "pacs",
                        "mariage",
                        "polyamour",
                        "trouple",
                        "autre",
                    ],
                    type: "select",
                    questionLabel: "civilStatus",
                },
                {
                    title: "Quelle est votre orientation sexuelle ?",
                    options: [
                      "bi",
                      "hétérosexuel(le)",
                      "homosexuel(le)",
                      "asexuel(le)",
                      "pansexuel(le)"
                    ],
                    type: "select",
                    questionLabel: "sexualOrientation",
                },
                {
                    title: "Combien avez-vous d'enfants ?",
                    options: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                    ],
                    type: "select",
                    questionLabel: "numberOfChildren",
                },
                {
                    title: "Combien avez-vous d'animaux de compagnie ?",
                    options: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                    ],
                    type: "select",
                    questionLabel: "numberOfPets",
                },
                {
                    title: "Avez-vous été vacciné contre le Covid-19 ?",
                    options: ["Oui", "Non"],
                    type: "select",
                    questionLabel: "covidVaccinated",
                },
                {
                    title: "Buvez-vous de l'alcool ?",
                    options: ["oui", "non"],
                    type: "select",
                    questionLabel: "drinklAlcool",
                },
                {
                    title: "Fumez-vous du tabac ?",
                    options: ["Oui", "Non"],
                    type: "select",
                    questionLabel: "smokesTobacco",
                },
                {
                    title: "Lisez-vous des revues sportives ?",
                    options: ["Oui", "Non"],
                    type: "select",
                    questionLabel: "readsSportPress",
                },
                {
                    title: "Regardez-vous des émissions sportives ?",
                    options: ["oui", "Non"],
                    type: "select",
                    questionLabel: "watchSportShow",
                },
                {
                    title: "Faites-vous du sport ?",
                    options: ["Oui", "Non"],
                    type: "select",
                    questionLabel: "doesSport",
                },
                {
                    title: "Jouez-vous au foot ?",
                    options: ["Oui", "Non"],
                    type: "select",
                    questionLabel: "playsFootball",
                },
                {
                    title: "Allez-vous au stade regarder des matchs ?",
                    options: ["oui", "Non"],
                    type: "select",
                    questionLabel: "goesToFootballStadium",
                },
                {
                    title: "Quel est votre club de foot préféré",
                    type: "input",
                    questionLabel: "favouriteFootballClub",
                },
                {
                    title: "Quelle est votre équipe de foot préférée ?",
                    type: "input",
                    questionLabel: "favouriteFootballTeam",
                },
                {
                    title: "Vous êtes plutôt Rugby ou Foot ?",
                    options: ["Rugby", "Foot"],
                    type: "select",
                    questionLabel: "prefersFootballOverRugby",
                },
                {
                    title: "Regardez-vous des matchs sur votre TV ?",
                    options: ["oui", "Non"],
                    type: "select",
                    questionLabel: "watchesFootballOnTV",
                },
                {
                    title: "Regardez-vous des matchs sur votre mobile ?",
                    options: ["oui", "Non"],
                    type: "select",
                    questionLabel: "watchesFootballOnMobilePhone",
                },
                {
                    title: "Regardez-vous des matchs via votre navigateur internet (Chrome, Firefox, Safari, etc) ?",
                    options: ["oui", "Non"],
                    type: "select",
                    questionLabel: "watchesFootballOnline",
                },
            ],
            activeBonusQuestion: 0,
            nbrClic: 0,
            bonusQuestionDisplay: false,
            finalMessageDisplayed: false
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
            this.storage = localStorage.storage;
            this.timeBonus(
                this.timeSinceLastConnection(
                    localStorage.lastConnection,
                    Date.now()
                )
            );
        }
        localStorage.setItem("bonusActive", false);
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
            localStorage.setItem("lastConnection", Date.now());
            localStorage.setItem("storage", this.storage);
        }
        if (localStorage.getItem("bonusActive") === "true") {
            this.budget = this.budget * 2;
            localStorage.setItem("bonusActive", false);
        }


        // Display end game Modal
        //TODO condition fin de jeu pour affichage finalMessage ??
        if (this.allResources[13].obtained > 0 && this.finalMessageDisplayed === false) {
            this.openModal(Assessment, {msg: "BRAVO !!!"});
            this.finalMessageDisplayed = true;
        }

    },

    methods: {
        clic() {
            this.budget +=
                parseInt(this.radisPerClic) * parseInt(this.multiplicator);
            this.nbrClic++;
            if (this.nbrClic >= 21) {
                this.nbrClic = 0;
                this.bonusQuestionDisplay = true;
            }

            this.displayed(this.allResources[1], this.allResources[0], 11);
            this.displayed(this.allResources[2], this.allResources[1], 1);
            this.displayed(this.allResources[3], this.allResources[2], 1);
            this.displayed(this.allResources[4], this.allResources[3], 1);
            this.displayed(this.allResources[5], this.allResources[4], 1);
            this.displayed(this.allResources[6], this.allResources[5], 1);
            this.displayed(this.allResources[7], this.allResources[6], 1);
            this.displayed(this.allResources[8], this.allResources[7], 1);
            this.displayed(this.allResources[9], this.allResources[8], 1);
            this.displayed(this.allResources[10], this.allResources[9], 1);
            this.displayed(this.allResources[11], this.allResources[10], 1);
            this.displayed(this.allResources[12], this.allResources[11], 5);
            this.displayed(this.allResources[13], this.allResources[12], 1);

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
            console.log("avant: ", this.storage);
            if (this.storage) {
                localStorage.removeItem("budget");
                localStorage.removeItem("allResources");
                localStorage.removeItem("radisPerClic");
                localStorage.removeItem("income");
                localStorage.removeItem("multiplicator");
                // localStorage.clear();
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
            let totalSec =
                diff.sec + diff.min * 60 + diff.hour * 3600 + diff.day * 86400;

            console.log("totalSec", totalSec);
            return totalSec;
        },

        timeBonus(sec) {
            let totalBonus = Math.round(sec * (this.income / this.incomeRate));
            console.log("totalBonus", totalBonus);

            this.budget += totalBonus;
            window.alert(
                "En votre absence vous avez gagné : " + totalBonus + " radis"
            );
        },

        displayed(elm, elmNeeded, numNeeded) {
            if (elmNeeded.obtained >= numNeeded) {
                elm.displayed = true;
            } else {
                elm.displayed = false;
            }
        },

        displayBonusQuestion() {
            this.openModal(
                BonusQuestion,
                this.allBonusQuestions[this.activeBonusQuestion]
            );
            this.bonusQuestionDisplay = false;
            this.activeBonusQuestion++;
        },

        openModal(component, data) {
            this.$FModal.show(
                {
                    component: component,
                },
                data
            );
        },
    },

    components: {
        Resource,
        // eslint-disable-next-line vue/no-unused-components
        BonusQuestion,
        // eslint-disable-next-line vue/no-unused-components
        Assessment
    },
};
</script>

<style>
.clicScreen {
    background: rgb(177, 177, 177) cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
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

.allResources {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.bonusBtn{
    background: rgb(221,152,0);
    background: linear-gradient(357deg, rgba(221,152,0,1) 0%, rgba(255,222,0,1) 100%); 
    font-size: 20px;
}

.bonusBtn:active{
    background: rgba(221,152,0,1);
}

.dashboard_content{
    background: #00A5E7;
    color: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.2); 
    box-shadow: 5px 5px 15px -2px rgba(0,0,0,0.2);
}
.dashboard_content > h4{
    margin: auto 20px;
}

.dashboard{
    margin-bottom: 20px;
}


.timer{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.timer > img {
  width: 30px;
}

.gradient-text {
  background: white;
  color: black;
  display: inline-block;
  position: relative;
}

.gradient-text::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: -webkit-linear-gradient(left, #0071FB, #00D9FF);
  background: linear-gradient(to right, #0071FB, #00D9FF);
  content: '';
  display: block;
  mix-blend-mode: screen;
}


</style>
