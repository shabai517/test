<template>
  <div id="app">
  	<defaultNav/>
    <router-view/>
  </div>
</template>

<script>
import defaultNav from '@/components/Nav'
export default {
  name: 'App',
  components:{
    defaultNav,
  },

  mounted: function(){
        var redirect = sessionStorage.redirect;
        console.log('redirect',redirect);
        delete sessionStorage.redirect;
        if (redirect && redirect != location.href) {
          console.log('location.origin',location.origin);
          this.$router.replace({ path: redirect.replace(location.origin,'') });
          //history.replaceState(null, null, redirect);
        }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
