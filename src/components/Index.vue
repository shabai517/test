<template>
  <div class="index-container">
      <div class="banner">
          <div class="content-wrapper">
              <h1 class="title">BioContainers</h1>
              <p class="description">Bioinformatics more accessible and reproducible</p> 
          </div>
      </div>
      <div class="triangle triangle-down"></div>
      <div class="content">
          <h1>Search</h1>
          <div class="search-wrapper">
            <Input v-model="keywords" icon="ios-search" placeholder="Search" style="width:100%"></Input>
          </div>
          <div class="search-options-wrapper">
              <div class="filter-wrapper">
                  <div class="filter">
                        <span class="name">Filters:</span>
                        <ButtonGroup>
                            <Button class="filter-button" v-for="(item ,index) in filters" :type="item.type" :key="index" @click="filterClick(index)">{{item.name}}</Button>
                        </ButtonGroup>
                  </div>
                  <!--
                  <div class="sort">
                        <span class="name">Sort:</span>
                        <ButtonGroup>
                            <Button v-for="(item ,index) in sorts" :type="item.type" :key="index" @click="sortClick(index)">{{item.name}}</Button>
                        </ButtonGroup>
                  </div>
                  -->
              </div>
              <div class="search-button-wrapper">
                  <Button type="primary" @click="search">Search</Button>
              </div>
          </div>
          <div class="container-wrapper">
              <div v-if="loading" class="spin-container">
                  <Spin fix></Spin>
              </div>
              <div v-else>
                    <Card v-if="dataFound" v-for="item in cardList" class="card">
                        <p slot="title"><a @click="gotoContainerDetails(item.id)">{{item.toolname}}</a></p>
                        <p slot="extra">
                          <Tooltip>
                              <!--
                              <svg class="icon" aria-hidden="true">
                                  <use xlink:href="#icon-icon_docker"></use>
                              </svg>
                              -->
                              <Icon type="logo-codepen" size="22"/>
                              <div class="tooltip-content" slot="content">
                                  {{item.content}}
                              </div>
                          </Tooltip>
                        </p>
                        <div class="card-content-wrapper">
                          <div class="left">
                              <div class="description-wrapper">
                                {{item.description}}
                              </div>
                              <!--
                              <div v-for="tag in item.tags" class="tag-wrapper">
                                  <Tag color="default">{{tag}}</Tag>
                              </div>-->
                              <div class="state-wrapper">
                                  {{item.state}}
                              </div>
                          </div>
                          <div class="right">
                              <Icon type="md-checkmark" :color="item.color"/>
                          </div>
                        </div> 
                    </Card>
                    <div v-else class="no-data-container">
                        No Data...
                    </div>
              </div>
              
          </div>
          <div class="page-wrapper">
              <Page :total="total" :current="current" :page-size="pageSize" size="small" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange"/>
          </div>
      </div>
      <!--
      <div class="results-wrapper">
          <Table stripe :columns="resultsTableCol" :data="resutls" @on-row-click="rowClick"></Table>
      </div>
      <div class="update-statistics">
          <Card style="width:100%" class="">
              <p slot="title">Containers Update Statistics</p>
          </Card>
          <Card style="width:100%" class="">
              <p slot="title">Containers Update Statistics</p>
          </Card>
      </div>
      -->
      <!--
      <div class="issue-statistics">
          <Card style="width:100%" class="issue-statistics-card">
              <p slot="title">GitHub Issues Statistics </p>
          </Card>
      </div>
      -->
  </div>
</template>

<script>
import store from "@/store/store.js"
export default {
  name: 'Index',
  data () {
    return {
        keywords:'',
        total:1000,
        current:1,
        pageSize:30,
        cardList:[],
        loading:true,
        dataFound:false,
        filter:'All',
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
        ],
        filters:[
            {
                name:'All',
                type:'primary',
            },
            {
                name:'ID',
                type:'default',
            },
            {
                name:'Name',
                type:'default',
            },
            {
                name:'Description',
                type:'default',
            },
        ],
        sorts:[
            {
                name:'sort1',
                type:'primary',
            },
            {
                name:'sort2',
                type:'default',
            },
            {
                name:'sort3',
                type:'default',
            }
        ],
    }
  },
  methods:{
    rowClick(row){
      console.log('row',row);
        this.$router.push({name:'Containerdetails',params:{id:row.ID}});
    },
    filterClick(index){
        if(index == 0){
          for(let i in this.filters){
              if(i == index){
                this.filter = this.filters[i].name;
                this.filters[i].type = 'primary';
              }
              else
                this.filters[i].type = 'default';
          }
        }
        else{
            this.filters[0].type = 'default';
            if(this.filters[index].type == 'primary')
                this.filters[index].type = 'default';
            else{ 
                this.filter = this.filters[index].name;
                this.filters[index].type = 'primary';
            } 
        }
    },
    sortClick(index){
          for(let i in this.sorts){
              if(i == index)
                this.sorts[i].type = 'primary';
              else
                this.sorts[i].type = 'default';
          }
    },
    search(){
        this.loading=true;
        this.dataFound=false;
        this.cardList=[];
        var query={};
        if(this.filter == 'Description')
         query.description = this.keywords;
        else if(this.filter == 'ID')
          query.id = this.keywords;
        else if(this.filter == 'Name')
          query.toolname = this.keywords;
        else if(this.filter == 'All')
          query={}

        this.$http
            .get(this.$store.state.baseApiURL + '/api/v2/tools',{params:query})
            .then(function(res){
              //this.total = res.body.length;
              console.log(res);
              console.log('this.cardList.length',this.cardList.length);
              this.total = 1000;
              let tempLength = res.body.length>30?30:res.body.length;
              if(tempLength > 0){
                  for(let i=0; i<tempLength; i++){
                      //console.log(res.body[i])
                      var item = {
                        id:res.body[i].id,
                        toolname:res.body[i].toolname.toUpperCase(),
                        description:res.body[i].description,
                        tags:['tag1','tag2','tag2'],
                        state:'Not yet',
                        color:res.body[i].verified ? '#19be6b': '#c5c8ce',
                      }
                      this.cardList.push(item);
                      
                  }
                  this.dataFound=true;
              }
              else{
                this.dataFound=false;
              }
              this.loading=false;
            },function(err){
                console.log('err',err);
                this.dataFound=false;
                this.loading=false;
                this.$Notice.error({
                    title: 'Server Error',
                    desc: err.body.error
                });
            });
    },
    pageChange(page){
      console.log('page',page);
    },
    pageSizeChange(pageSize){
      console.log('pageSize',pageSize);
    },
    gotoContainerDetails(id){
      console.log('ididididid',id);
      //this.$router.push({name:'dataset',params:{id:id}});
      this.$router.push({name:'ContainerDetails',params:{id:id}});
    }
  },
  mounted(){
  	this.search();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-wrapper{
      width: 100%;
      text-align: center;
      margin: 50px auto 0 auto;
    }
    .search-options-wrapper{
      margin: 20px auto 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .filter-wrapper{
      display: flex;
    }
    .filter-wrapper .sort{
      margin-left: 10px;
    }
    .filter-wrapper .name{
      font-size: 0.875rem
    }
    .results-wrapper{
      width: 80%;
      margin: 30px auto 0 auto;
    }
    .update-statistics{
      width: 80%;
      margin: 30px auto 0 auto;
    }
    .issue-statistics{
      width: 80%;
      margin: 30px auto 0 auto;
    }
    .banner{
      background-color: #eb8c1f;
      color: #ffffff;
      padding: 3rem 0;
    }
    .triangle-down:before{
     
      /*background-image:url('static/triangle.svg');*/
    }
    .triangle:before{
      background-repeat: no-repeat;
      background-size: 100% 100%;
      content: '';
      display: block;
      width: 100%;
      left: 0;
      height: 30px;
      /*background-image:url('static/triangle.svg');*/
    }
    .spin-container{
      display: inline-block;
      width: 100%;
      height: 100px;
      position: relative;
    }
    .no-data-container{
      width: 100%;
      text-align: center;
      font-size: 14px;
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
    .description{
      font-size: 1.25rem;
      font-weight: 300;
    }
    .content{
      position: relative;
      min-height: 300px;
      margin-bottom: 6rem;
      font-size: 1.1rem;
      line-height: 1.6;
      width: 80%;
      margin-right: auto;
      margin-left: auto;

    }
    .card-content-wrapper{
      display: flex;
      justify-content: space-between;
    }
    .card-content-wrapper .right{
      display: flex;
      align-items: end;
      font-size: 30px;
    }
    .content h1{
      border-bottom: 1px solid #e4973e;
      font-weight: 500;
      padding-top: 60px;
      color: #eb8c1f;
    }
    .container-wrapper{
      margin-top: 50px;
    }
    .description-wrapper{
      margin-bottom: 5px;
      white-space: normal;
    }
    .tag-wrapper{
      margin-bottom: 5px;
      display: inline-block;
    }
    .card{
      display: inline-block;
      margin: 0 15px;
      margin-bottom: 30px;
      min-height: 200px;
      overflow: hidden;
      transition: all 0.15s ease-out;
      -webkit-transition: all 0.15s ease-out;
    }
    .tooltip-content{
        white-space: normal;
        width: 200px;
    }
    .page-wrapper{
      text-align: center;
      font-size: 12px;
    }
    .filter-button{
      min-width: 70px;
    }
    @media (max-width: 840px) { 
      .card{ 
        width: calc((100% - 0px) / 1 - 3px);
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
    @media (max-width: 1015px) and (min-width: 841px){ 
      .card{ 
        width: calc((100% - 60px) / 2 - 3px);

      }
      .container-wrapper{
        margin-left: -15px;
        margin-right: -15px;
      }
    }
    @media (max-width: 1510px) and (min-width: 1016px){ 
      .card{ 
        width: calc((100% - 90px) / 3 - 4px);
      }
      .container-wrapper{
        margin-left: -15px;
        margin-right: -15px;
      }
    }
    @media (max-width: 3910px) and (min-width: 1511px){ 
      .card{ 
        width: calc((100% - 120px) / 4 - 4px);
      }
      .container-wrapper{
        margin-left: -15px;
        margin-right: -15px;
      }
    }
   
</style>

<style>
    .update-statistics .ivu-card-head{
      background-color: #d9edf7 !important;
    }
    .update-statistics .ivu-card-bordered{
      border: 1px solid #bce8f1 !important;
      border-color: #bce8f1 !important;
    }
    .issue-statistics .ivu-card-head{
      background-color: #dff0d8 !important;
    }
    .issue-statistics .ivu-card-bordered{
      border: 1px solid #d6e9c6 !important;
      border-color: #d6e9c6 !important;
    }
    /*
    table tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
    }

    table tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
    }
    */
</style>
