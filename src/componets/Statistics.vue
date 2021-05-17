<template>
    <div class="statistics">
      <div class="total">
        <h5>Total</h5>
        <p>{{statistics.totalConfirmed |stringFilter}}</p>
      </div>
      <div class="recovered">
        <h5>Recovered</h5>
        <p>{{statistics.totalRecovered|stringFilter}}</p>
      </div>
      <div class="deaths">
        <h5>Deaths</h5>
        <p>{{statistics.totalDeaths|stringFilter}}</p>
      </div>
    </div>
</template>


<script>

export default {
  computed:{
    statistics(){
      return this.$store.getters.getStatistics;
    }
  },
  filters:{
    stringFilter(value){
      return value.toLocaleString();
    }
  }
}
</script>