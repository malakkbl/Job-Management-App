<template>
  <div>
    <h2>Liste des emplois disponibles</h2>
    <ul>
      <li v-for="job in jobs" :key="job.titre">
        <h3>{{ job.titre }}</h3>
        <button @click="viewJobDetail(job.id)">View Details</button>

      </li>
    </ul>
  </div>
</template>

<script>
import jsonData from "../assets/TP-Jobs-app.json";

export default {
  name: "PageHome",
  data() {
    return {
      jobs: jsonData,
    };
  },
  methods: {
  viewJobDetail(id) {
    this.$router.push({ name: 'jobDetail', params: { id: id } });
  }
}

};
</script>

<style></style>
