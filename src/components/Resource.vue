<template>
  <div>
    <div class="resourcesContent">
      <div class="ressourceLeft">
        <div class="buyButton resources">Coût : {{ cost }} radis</div>
        <div class="player resources">
          <strong>Acheter {{ name }}</strong> | +{{ addToClic }} par clic
        </div>
      </div>
      <div class="resourcesRight"><span class="obtainedResource">X{{ obtained }}</span></div>
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

.allResources:active {
  -webkit-box-shadow: none;
  box-shadow: none;
  transform: translateZ(10px);
  transition: box-shadow 0.1s linear;
}

.resourcesContent:hover {
  -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.4);
  transition: 0.2s linear;
}

.allResources, .resourcesContent {
  width: 90vw;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.2);
}

.resourcesContent {
  background: rgb(0, 113, 251);
  background: linear-gradient(43deg, rgba(0, 113, 251, 1) 0%, #00A5E7 100%);
  border-radius: 5px;
  margin: auto;
  color: white;
  transition: 0.2s linear;
  align-items: center;
}

.ressourceLeft {
  display: flex;
  flex-direction: row;
}

.resourcesRight {
  background: #0071FB;
  padding: 10px;
  border-radius: 25px;
  margin-right: -15px;
  text-align: center;
  width: 20px;
  height: 20px;
}
</style>
