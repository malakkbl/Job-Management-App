<template>
  
<div id="app">
  <PageHeader/>
  <router-view/>
  <PageFooter/>
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter  }
}
</script>


<style>
@import './assets/styles.css'

</style>
