<template>
  <div id="app">
    <ToolBar></ToolBar>
    <NewsView></NewsView>
    <!-- <AskView></AskView>
    <JobsView></JobsView> -->
    
    <!-- <router-view/> -->
  </div>
</template>

<script>
import NewsView from '@/views/NewsView.vue'
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import ToolBar from '@/components/ToolBar.vue'

export default {
  components:{
    'AskView':AskView,
    'NewsView':NewsView,
    'JobsView':JobsView,
    'ToolBar':ToolBar
  }

}
</script>

<style>

</style>
