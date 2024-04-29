<template>
  
<div id="app">
  <PageHeader/>
  <PageHome/>
  <PageFooter/>
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import PageHome from '@/components/PageHome.vue'; 

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    PageHome
  }
}
</script>


<style>
@import './assets/styles.css'

</style>
