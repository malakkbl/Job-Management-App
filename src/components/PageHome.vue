<template>
  <div>
    <h2>Liste des emplois disponibles</h2>
    <ul>
      <li v-for="(job, index) in jobs" :key="index">
        <h3>{{ job.titre }}</h3>
        <p>{{ job.description }}</p>
        <p>{{ job.salaire }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import jsonData from '../assets/TP-Jobs-app.json';

export default {
  name: "PageHome",
  data() {
    return {
      jobs: jsonData,
    };
  },
};
</script>

<style>
</style>
