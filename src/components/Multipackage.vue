<template>
  <div class="multipackage-container">
    <div class="banner">
          <div class="content-wrapper">
              <h1 class="title">Multi-package Containers</h1>
              <p class="description">Combine several conda packages into one Docker container.</p> 
          </div>
      </div>
      <iframe class="lorikeet-iframe" src="http://biocontainers.pro/multi-package-containers/" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
  name: 'ContainerDetails',
  data () {
    return {
        keywords:'',
        
        resultsTableCol:[
            {
                title: 'Container',
                key: 'container'
            },
            {
                title: 'Description',
                key: 'description'
            },
            {
                title: 'Real Name',
                key: 'realname'
            },
            {
                title: 'Last Modified',
                key: 'lastmodified'
            },
            {
                title: 'Starred/Starts',
                key: 'starredstarts'
            },
            {
                title: 'Popularity',
                key: 'popularity'
            },
            {
                title: 'Registry Link',
                key: 'registrylink'
            },
        ],
        resutls:[
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            {
                container: 'John Brown',
                description: 18,
                realname: 'New York No. 1 Lake Park',
                lastmodified: '2016-10-03',
                starredstarts:'test',
                popularity:'test',
                registrylink:'test'
            },
            
        ]
    }
  },
  methods:{
    rowClick(){
        //this.$router.push({name:'ContainerDetails',params:{id:row.ID}});
    },
  	test(){
  		this.$http
            .get('/api/get')
            .then(function(res){
              console.log(res);
                console.log(123);
            },function(err){

            });
  	}
  },
  mounted(){
    console.log('receive id',this.$route.params.id);
  	//this.test();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .multipackage-container{
         width: 100%;
         height: 100%;

    }
    .lorikeet-iframe{
        width: 100%;
        height: 100%;
        border-width:0;
    }
    .banner{
      background-color: #eb8c1f;
      color: #ffffff;
      padding: 3rem 0;
    }
    .content-wrapper{
      width: 80%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-wrap: wrap;
    }
    .title{
      font-size: 4.5rem;
      font-weight: 300;
      line-height: 1.2;
    }
</style>

