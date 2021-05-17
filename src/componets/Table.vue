<template>
     <div class="table-div">

       <button @click="showHideTable()" class="showTable" :class="{'button-blue':!showTable.state,'button-red':showTable.state}" >{{showTable.message}}
         <i class="fas fa-arrow-down"></i>
       </button>
       
        <table class="table  table-black" v-show="showTable.state">
          <thead>
            <tr>
              <th>Country</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Recovered</th>
            </tr>
          </thead>
          

          <tbody>
            <tr v-for="(data,index) in summaryData" :key="index">
              <th scope="row">{{data.Country}}</th>
              <td>{{data.TotalConfirmed}}</td>
              <td>{{data.TotalDeaths}}</td>
              <td>{{data.TotalRecovered}}</td>
            </tr>
          </tbody>

        </table>

    </div>
</template>

<script>



export default {
  data(){
    return{
      showTable:{
        message:"Tabloyu Göster",
        state:false,
      },
    }
  },
  methods:{
    showHideTable(){
      if(this.showTable.state==false){
        this.showTable.state=true;
        this.showTable.message="Tabloyu Gizle"
      }
      else{
        this.showTable.state=false;
        this.showTable.message="Tabloyu Göster";
      }
    }
  },

  computed:{
    summaryData(){
      return this.$store.getters.getSummaryData;
    }
  }
}
</script>


<style>
.buttonBlue{
    background: #a8d8ea;
  }

  .buttonRed{
    background: #f29191;
  }
</style>