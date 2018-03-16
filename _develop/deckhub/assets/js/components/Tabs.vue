<template>
  <!--
	<ul class="nav nav-tabs">
	  <li v-for="tab in tabs" :class="{ 'active':tab.isActive }">
	  	<a @click.prevent="selectTab(tab.name-1)">{{ tab.name }}</a>
	  </li>
	</ul>
  -->
  <b-tabs v-model="selectedTabIndex">
    <b-tab v-for="(tab, index) in tabs" :key="tab.name" :title="tab.name" @click="selectTab(tab.name-1)"></b-tab>
  </b-tabs>
</template>


<script>
export default {
  data() {
    return {
    	tabs:[
    		{name:"1", isActive:true}
    		, {name:"2", isActive:false}
    		, {name:"3", isActive:false}
    		, {name:"4", isActive:false}
    		, {name:"5", isActive:false}
    	],
    	selectedTabIndex:0,
    }
  },
  methods: {
  	selectTab(selectedTabIndex) {
  		this.tabs.forEach(function(tab){
          tab.isActive = (Number(tab.name) === (Number(selectedTabIndex)+1));
        });
      
      this.selectedTabIndex = Number(selectedTabIndex);
    	this.$emit('CHANGE');
  	},
  }
}
</script>


<style scoped>

</style>