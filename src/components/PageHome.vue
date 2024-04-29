<template>
  <div>
    <filter-nav @filter="applyFilters"></filter-nav>
    <h2>Liste des emplois disponibles</h2>
    <button @click="goToAddJob">Add Job</button>
    <ul>
      <li v-for="job in filteredJobs" :key="job.id">
        <h3>{{ job.titre }}</h3>
        <button @click="viewJobDetail(job.id)">View Details</button>
        <button @click="confirmDelete(job.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import jsonData from "../assets/TP-Jobs-app.json";
import FilterNav from "@/components/HomePages/FilterNav.vue";

export default {
  name: "PageHome",
  components: {
    FilterNav
  },
  data() {
    return {
      jobs: jsonData,
      filteredJobs: jsonData
    };
  },
  methods: {
    viewJobDetail(id) {
      this.$router.push({ name: 'JobDetail', params: { id: id } });
    },
    goToAddJob() {
      this.$router.push({ name: 'AddJob' });
    },
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this job?')) {
        this.deleteJob(id);
      }
    },
    deleteJob(id) {
      const index = this.jobs.findIndex(job => job.id === id);
      if (index !== -1) {
        this.jobs.splice(index, 1);
      }
    },
    applyFilters(filters) {
      const { type, mode } = filters;
      this.filteredJobs = this.jobs.filter(job => {
        return (!type || job.type_emploi === type) && (!mode || job.mode_travail === mode);
      });
    }
  }
};
</script>

<style></style>
