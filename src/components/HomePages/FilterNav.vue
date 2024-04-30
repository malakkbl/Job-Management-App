<template>
  <div class="filter-nav">
    <h3>Filtrer par :</h3>
    <div>
      <label>Type d'emploi:</label>
      <select v-model="selectedType">
        <option value="">Tous</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>
    </div>
    <div>
      <label>Mode de travail:</label>
      <select v-model="selectedMode">
        <option value="">Tous</option>
        <option value="Présentielle">Présentielle</option>
        <option value="À distance">À distance</option>
      </select>
    </div>
    <button @click="applyFilters">Appliquer</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "",
      selectedMode: "",
    };
  },
  methods: {
    applyFilters() {
      this.$emit("filter", {
        type: this.selectedType,
        mode: this.selectedMode,
      });
    },
  },
};
</script>

<style>
.filter-nav {
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.filter-nav h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.filter-nav div {
  margin-bottom: 10px;
}

.filter-nav label {
  display: block;
  margin-bottom: 5px;
}

.filter-nav select {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.filter-nav button {
  background-color: #242424;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.filter-nav button:hover {
  background-color: #242424;
}
</style>
