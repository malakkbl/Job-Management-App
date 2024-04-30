<template>
  <div class="job-details">
    <h2>Détails de l'emploi</h2>
    <div v-if="job">
      <h3 class="job-title">{{ job.titre }}</h3>
      <p class="info"><span class="info-title">Date de création:</span> {{ job.date_creation }}</p>
      <p class="info"><span class="info-title">Description:</span> {{ job.description }}</p>
      <p class="info"><span class="info-title">Type d'emploi:</span> {{ job.type_emploi }}</p>
      <p class="info"><span class="info-title">Mode de travail:</span> {{ job.mode_travail }}</p>
      <p class="info"><span class="info-title">Salaire:</span> {{ job.salaire }}</p>
      <p class="info"><span class="info-title">Années d'expérience requise:</span> {{ job.annees_experience_requises }}</p>
      <router-link :to="{ name: 'EditJob', params: { id: job.id } }" class="edit-link">Modifier</router-link>
    </div>
  </div>
</template>

  
  <script>
  import jsonData from "@/assets/TP-Jobs-app.json";
  
  export default {
    name: "JobDetail",
    data() {
      return {
        job: null,
      };
    },
    created() {
      const jobId = this.$route.params.id;
      this.job = jsonData.find((job) => job.id.toString() === jobId);
    },
  };
  </script>
  
  <style>
.job-details .job-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.job-details .info {
  margin-bottom: 10px;
}

.job-details .info-title {
  font-weight: bold;
}

.job-details .edit-link {
  display: inline-block;
  background-color: #b57575;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

.job-details .edit-link:hover {
  background-color: #b57575;
}

</style>
  