<template>
  <div>
    <filter-nav @filter="applyFilters"></filter-nav>

    <button @click="goToAddJob" id="add-job-button">Add Job</button>
    <h2>Liste des emplois disponibles</h2>
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
    FilterNav,
  },
  data() {
    return {
      jobs: jsonData,
      filteredJobs: jsonData,
    };
  },
  methods: {
    viewJobDetail(id) {
      this.$router.push({ name: "JobDetail", params: { id: id } });
    },
    goToAddJob() {
      this.$router.push({ name: "AddJob" });
    },
    confirmDelete(id) {
      if (confirm("Are you sure you want to delete this job?")) {
        this.deleteJob(id);
      }
    },
    deleteJob(id) {
      const index = this.jobs.findIndex((job) => job.id === id);
      if (index !== -1) {
        this.jobs.splice(index, 1);
      }
    },
    applyFilters(filters) {
      const { type, mode } = filters;
      this.filteredJobs = this.jobs.filter((job) => {
        return (
          (!type || job.type_emploi === type) &&
          (!mode || job.mode_travail === mode)
        );
      });
    },
  },
};
</script>

<style>
button#add-job-button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #020202;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h2 {
  font-size: 24px;
  margin-top: 20px;
}

.filter-bar {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

li button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

li button.view-details {
  background-color: #28a745;
  color: white;
}

li button.delete {
  background-color: #dc3545;
  color: white;
}
</style>
