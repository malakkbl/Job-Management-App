<template>
    <div>
      <h2>Modifier les détails de l'emploi</h2>
      <form @submit.prevent="saveChanges">
        <div>
          <label for="titre">Titre:</label>
          <input type="text" id="titre" v-model="editedJob.titre" required>
        </div>
        <div>
          <label for="date_creation">Date de création:</label>
          <input type="date" id="date_creation" v-model="editedJob.date_creation" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="editedJob.description" required></textarea>
        </div>
        <div>
          <label for="type_emploi">Type d'emploi:</label>
          <select id="type_emploi" v-model="editedJob.type_emploi" required>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>
        <div>
          <label for="mode_travail">Mode de travail:</label>
          <select id="mode_travail" v-model="editedJob.mode_travail" required>
            <option value="Présentielle">Présentielle</option>
            <option value="À distance">À distance</option>
          </select>
        </div>
        <div>
          <label for="salaire">Salaire:</label>
          <input type="text" id="salaire" v-model="editedJob.salaire" required>
        </div>
        <div>
          <label for="annees_experience_requises">Années d'expérience requises:</label>
          <input type="number" id="annees_experience_requises" v-model="editedJob.annees_experience_requises" required>
        </div>
  
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  </template>
  
  <script>
  import jsonData from "@/assets/TP-Jobs-app.json";
  
  export default {
    name: "EditJob",
    data() {
      return {
        editedJob: null,
      };
    },
    created() {
      const jobId = this.$route.params.id;
      this.editedJob = jsonData.find((job) => job.id.toString() === jobId);
    },
    methods: {
      saveChanges() {
        const index = jsonData.findIndex((job) => job.id.toString() === this.editedJob.id);
        if (index !== -1) {
          jsonData[index] = { ...this.editedJob };
        }
        this.$router.push({ name: "JobDetail", params: { id: this.editedJob.id } });
      },
    },
  };
  </script>
  
  <style></style>
  