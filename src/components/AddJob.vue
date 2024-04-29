<template>
  <div>
    <h2>Ajouter un nouvel emploi</h2>
    <form @submit.prevent="saveNewJob">
      <div>
        <label for="titre">Titre:</label>
        <input type="text" id="titre" v-model="newJob.titre" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="newJob.description"
          required
        ></textarea>
      </div>
      <div>
        <label for="salaire">Salaire:</label>
        <input type="text" id="salaire" v-model="newJob.salaire" required />
      </div>
      <div>
        <label for="date_creation">Date de création:</label>
        <input
          type="date"
          id="date_creation"
          v-model="newJob.date_creation"
          required
        />
      </div>
      <div>
        <label for="type_emploi">Type d'emploi:</label>
        <select id="type_emploi" v-model="newJob.type_emploi" required>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>
      <div>
        <label for="mode_travail">Mode de travail:</label>
        <select id="mode_travail" v-model="newJob.mode_travail" required>
          <option value="Présentielle">Présentielle</option>
          <option value="À distance">À distance</option>
        </select>
      </div>
      <div>
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

<style></style>
