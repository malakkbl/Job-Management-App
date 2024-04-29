<template>
    <div>
      <h2>Détails de l'emploi</h2>
      <div v-if="job">
        <h3>{{ job.titre }}</h3>
        <p>Date de création: {{ job.date_creation }}</p>
        <p>Description: {{ job.description }}</p>
        <p>Type d'emploi: {{ job.type_emploi }}</p>
        <p>Mode de travail: {{ job.mode_travail }}</p>
        <p>Salaire: {{ job.salaire }}</p>
        <p>Années d'expérience requise: {{ job.annees_experience_requises }}</p>
      </div>
      <div v-else>
        <p>Job not found.</p>
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
  
  <style></style>
  