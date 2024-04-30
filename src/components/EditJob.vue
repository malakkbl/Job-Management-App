<template>
  <div class="edit-job-form">
    <h2>Modifier les détails de l'emploi</h2>
    <form @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="titre">Titre:</label>
        <input type="text" id="titre" v-model="editedJob.titre" required>
      </div>
      <div class="form-group">
        <label for="date_creation">Date de création:</label>
        <input type="date" id="date_creation" v-model="editedJob.date_creation" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="editedJob.description" required></textarea>
      </div>
      <div class="form-group">
        <label for="type_emploi">Type d'emploi:</label>
        <select id="type_emploi" v-model="editedJob.type_emploi" required>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mode_travail">Mode de travail:</label>
        <select id="mode_travail" v-model="editedJob.mode_travail" required>
          <option value="Présentielle">Présentielle</option>
          <option value="À distance">À distance</option>
        </select>
      </div>
      <div class="form-group">
        <label for="salaire">Salaire:</label>
        <input type="text" id="salaire" v-model="editedJob.salaire" required>
      </div>
      <div class="form-group">
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
  
  <style>
.edit-job-form {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.edit-job-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="date"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-group textarea {
  height: 100px; 
}

.form-group button {
  background-color: #b57575;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.form-group button:hover {
  background-color: #b57575;
}
</style>
  