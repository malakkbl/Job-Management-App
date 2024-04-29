<template>
    <div>
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
        selectedType: '',
        selectedMode: ''
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filter', { type: this.selectedType, mode: this.selectedMode });
      }
    }
  };
  </script>
  
  <style></style>
  