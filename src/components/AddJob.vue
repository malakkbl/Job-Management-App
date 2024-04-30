<template>
  <div class="add-job-form">
    <h2>Ajouter un nouvel emploi</h2>
    <form @submit.prevent="saveNewJob">
      <div class="form-group">
        <label for="titre">Titre:</label>
        <input type="text" id="titre" v-model="newJob.titre" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="newJob.description"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="salaire">Salaire:</label>
        <input type="text" id="salaire" v-model="newJob.salaire" required />
      </div>
      <div class="form-group">
        <label for="date_creation">Date de création:</label>
        <input
          type="date"
          id="date_creation"
          v-model="newJob.date_creation"
          required
        />
      </div>
      <div class="form-group">
        <label for="type_emploi">Type d'emploi:</label>
        <select id="type_emploi" v-model="newJob.type_emploi" required>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>
      <div class="form-group">
        <label for="mode_travail">Mode de travail:</label>
        <select id="mode_travail" v-model="newJob.mode_travail" required>
          <option value="Présentielle">Présentielle</option>
          <option value="À distance">À distance</option>
        </select>
      </div>
      <div class="form-group">
        <label for="annees_experience_requises"
          >Années d'expérience requises:</label
        >
        <input
          type="number"
          id="annees_experience_requises"
          v-model="newJob.annees_experience_requises"
          required
        />
      </div>

      <button type="submit">Enregistrer</button>
    </form>
  </div>
</template>


<script>
import jsonData from "../assets/TP-Jobs-app.json";

export default {
  name: "AddJob",
  data() {
    return {
      newJob: {
        id: null,
        titre: "",
        description: "",
        salaire: "",
        date_creation: "",
        type_emploi: "",
        mode_travail: "",
        annees_experience_requises: 0,
      },
    };
  },
  methods: {
    saveNewJob() {
      const maxId = jsonData.reduce(
        (max, job) => (job.id > max ? job.id : max),
        0
      );
      this.newJob.id = maxId + 1;
      jsonData.push(this.newJob);
      this.newJob = {
        titre: "",
        description: "",
        salaire: "",
        date_creation: new Date().toISOString().slice(0, 10),
        annees_experience_requises: 0,
        type_emploi: "",
        mode_travail: "",
      };
      this.$router.push({ name: "PageHome" });
    },
  },
};
</script>

<style>
.add-job-form {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.add-job-form h2 {
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
  background-color:#b57575;
}
</style>
